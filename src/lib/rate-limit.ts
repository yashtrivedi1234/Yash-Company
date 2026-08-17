import "server-only";
import { createHash } from "node:crypto";

/**
 * In-memory fixed-window rate limiter.
 *
 * Replaces the Upstash Redis limiter. Be clear-eyed about the trade:
 *
 *  - **State is per instance.** On a single long-running server this is
 *    accurate. On Vercel's serverless runtime each instance keeps its own
 *    counters, so a caller spread across N warm instances can get up to N×
 *    the limit. It raises the cost of spamming without making it impossible.
 *  - **State is lost on restart.** A deploy resets every window.
 *
 * For a contact form on a district business site that is a reasonable ceiling,
 * and it is paired with a honeypot field. If abuse becomes real, the fix is a
 * shared store (Redis) or edge-level protection (Vercel WAF / Cloudflare) —
 * not a bigger in-memory map.
 */

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

/** Bound the map so a flood of unique keys cannot exhaust memory. */
const MAX_KEYS = 10_000;

function sweep(now: number) {
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(key);
  }
  // Still oversized after sweeping: drop oldest-resetting entries first.
  if (buckets.size > MAX_KEYS) {
    const sorted = [...buckets.entries()].sort((a, b) => a[1].resetAt - b[1].resetAt);
    for (const [key] of sorted.slice(0, buckets.size - MAX_KEYS)) {
      buckets.delete(key);
    }
  }
}

export type RateLimitResult = {
  success: boolean;
  limit: number;
  remaining: number;
  /** Unix ms when the current window resets. */
  resetAt: number;
  /** Seconds until reset — use for the Retry-After header. */
  retryAfter: number;
};

export function rateLimit({
  key,
  limit = 5,
  windowMs = 60 * 60 * 1000,
}: {
  /** Caller identity — use `hashIp()`, never a raw IP. */
  key: string;
  limit?: number;
  windowMs?: number;
}): RateLimitResult {
  const now = Date.now();

  // Cheap probabilistic sweep rather than a timer, which would keep a
  // serverless instance alive.
  if (Math.random() < 0.01) sweep(now);

  const existing = buckets.get(key);

  if (!existing || existing.resetAt <= now) {
    const resetAt = now + windowMs;
    buckets.set(key, { count: 1, resetAt });
    return {
      success: true,
      limit,
      remaining: limit - 1,
      resetAt,
      retryAfter: Math.ceil(windowMs / 1000),
    };
  }

  existing.count += 1;
  const remaining = Math.max(0, limit - existing.count);

  return {
    success: existing.count <= limit,
    limit,
    remaining,
    resetAt: existing.resetAt,
    retryAfter: Math.ceil((existing.resetAt - now) / 1000),
  };
}

/**
 * Salted SHA-256 of the caller's IP.
 *
 * The `Lead.ipHash` column stores this rather than a raw address: it is enough
 * to recognise a repeat submitter without keeping an identifier tied to a
 * named person, which matters under the DPDP Act.
 */
export function hashIp(ip: string): string {
  const salt = process.env.NEXTAUTH_SECRET ?? "codivra";
  return createHash("sha256").update(`${salt}:${ip}`).digest("hex");
}

/**
 * Best-effort client IP.
 *
 * `x-forwarded-for` is only trustworthy behind a proxy that sets it — which
 * Vercel does. Take the first entry, since downstream proxies append.
 */
export function clientIp(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() ?? "unknown";
  return headers.get("x-real-ip")?.trim() ?? "unknown";
}

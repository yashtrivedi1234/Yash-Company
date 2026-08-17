import { z } from "zod";

/**
 * Environment validation.
 *
 * Next.js inlines `NEXT_PUBLIC_*` at build time only when they are referenced
 * as literal member expressions, so every public variable below is spelled out
 * rather than read through a loop. Server-only secrets are validated lazily via
 * `serverEnv()` so that importing this module from a client bundle cannot leak
 * them or crash the build.
 */

const optionalUrl = z.union([z.string().url(), z.literal("")]).default("");

// --- Public -----------------------------------------------------------------

const publicSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z
    .string()
    .url("NEXT_PUBLIC_SITE_URL must be an absolute URL")
    .refine((v) => !v.endsWith("/"), "NEXT_PUBLIC_SITE_URL must not end with a slash"),
  NEXT_PUBLIC_TRAINING_URL: z.string().url(),
  NEXT_PUBLIC_PHONE: z.string().regex(/^\+\d{8,15}$/, "Use E.164 format, e.g. +919793370700"),
  NEXT_PUBLIC_WHATSAPP: z.string().regex(/^\d{8,15}$/, "Digits only, no + — e.g. 919793370700"),
  NEXT_PUBLIC_EMAIL: z.string().email(),
  NEXT_PUBLIC_GA_ID: z.string().default(""),
  NEXT_PUBLIC_CLARITY_ID: z.string().default(""),
  NEXT_PUBLIC_RECAPTCHA_SITE_KEY: z.string().default(""),
  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: z.string().default(""),
  NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET: z.string().default("codivra_admin"),
  NEXT_PUBLIC_GBP_URL: optionalUrl,
});

const parsedPublic = publicSchema.safeParse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_TRAINING_URL: process.env.NEXT_PUBLIC_TRAINING_URL,
  NEXT_PUBLIC_PHONE: process.env.NEXT_PUBLIC_PHONE,
  NEXT_PUBLIC_WHATSAPP: process.env.NEXT_PUBLIC_WHATSAPP,
  NEXT_PUBLIC_EMAIL: process.env.NEXT_PUBLIC_EMAIL,
  NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  NEXT_PUBLIC_CLARITY_ID: process.env.NEXT_PUBLIC_CLARITY_ID,
  NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
  NEXT_PUBLIC_GBP_URL: process.env.NEXT_PUBLIC_GBP_URL,
});

if (!parsedPublic.success) {
  const issues = parsedPublic.error.issues
    .map((i) => `  ${i.path.join(".")}: ${i.message}`)
    .join("\n");
  throw new Error(`Invalid public environment variables:\n${issues}`);
}

export const env = parsedPublic.data;

// --- Server-only ------------------------------------------------------------

const serverSchema = z.object({
  DATABASE_URL: z.string().min(1),
  DIRECT_URL: z.string().min(1),
  NEXTAUTH_SECRET: z.string().min(16, "NEXTAUTH_SECRET must be at least 16 characters"),
  NEXTAUTH_URL: z.string().url(),
  CLOUDINARY_CLOUD_NAME: z.string().default(""),
  CLOUDINARY_API_KEY: z.string().default(""),
  CLOUDINARY_API_SECRET: z.string().default(""),
  RESEND_API_KEY: z.string().default(""),
  RESEND_FROM_EMAIL: z.string().default("Codivra Solutions <no-reply@codivrasolutions.com>"),
  SALES_NOTIFICATION_EMAIL: z.string().default("info@codivrasolutions.com"),
  UPSTASH_REDIS_REST_URL: optionalUrl,
  UPSTASH_REDIS_REST_TOKEN: z.string().default(""),
  RECAPTCHA_SECRET_KEY: z.string().default(""),
  RECAPTCHA_MIN_SCORE: z.coerce.number().min(0).max(1).default(0.5),
  GOOGLE_SITE_VERIFICATION: z.string().default(""),
  BING_SITE_VERIFICATION: z.string().default(""),
  PREVIEW_SECRET: z.string().default("preview"),
});

export type ServerEnv = z.infer<typeof serverSchema>;

let cachedServerEnv: ServerEnv | null = null;

/**
 * Validated server environment. Call only from server components, route
 * handlers, server actions or scripts.
 */
export function serverEnv(): ServerEnv {
  if (cachedServerEnv) return cachedServerEnv;

  const parsed = serverSchema.safeParse(process.env);
  if (!parsed.success) {
    const issues = parsed.error.issues
      .map((i) => `  ${i.path.join(".")}: ${i.message}`)
      .join("\n");
    throw new Error(`Invalid server environment variables:\n${issues}`);
  }

  cachedServerEnv = parsed.data;
  return cachedServerEnv;
}

export const isProduction = process.env.NODE_ENV === "production";
export const isDevelopment = process.env.NODE_ENV === "development";

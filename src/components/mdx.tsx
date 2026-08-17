import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";

/**
 * Renders the markdown bodies stored in the database.
 *
 * Server-only — MDXRemote from `/rsc` compiles during render, so none of the
 * markdown pipeline reaches the client bundle. That matters for the 180KB
 * budget: a client-side markdown renderer would be most of it on its own.
 */

const components = {
  // Internal links go through next/link for client-side navigation; external
  // ones get the security attributes they need.
  a: ({ href = "", children, ...props }: ComponentPropsWithoutRef<"a">) => {
    const isInternal = href.startsWith("/") || href.startsWith("#");
    if (isInternal) {
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  },

  // Headings get ids so the table of contents and #anchors work.
  h2: ({ children, ...props }: ComponentPropsWithoutRef<"h2">) => (
    <h2 id={slugifyHeading(children)} {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: ComponentPropsWithoutRef<"h3">) => (
    <h3 id={slugifyHeading(children)} {...props}>
      {children}
    </h3>
  ),

  // Wide tables scroll inside their own container so the page body never
  // scrolls horizontally on mobile.
  table: (props: ComponentPropsWithoutRef<"table">) => (
    <div className="table-wrap">
      <table {...props} />
    </div>
  ),
};

export function Mdx({
  source,
  className,
}: {
  source: string;
  className?: string;
}) {
  return (
    <div className={cn("prose-codivra", className)}>
      <MDXRemote
        source={source}
        components={components}
        options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
      />
    </div>
  );
}

function slugifyHeading(children: React.ReactNode): string | undefined {
  if (typeof children !== "string") return undefined;
  return children
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

/**
 * Strips markdown to plain prose. Used for reading-time estimates and for the
 * `/llms-full.txt` body, where formatting adds nothing.
 */
export function mdxToPlainText(source: string): string {
  return source
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[[^\]]*]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)]\([^)]*\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/[*_>|]/g, "")
    .replace(/^\s*[-–]\s+/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

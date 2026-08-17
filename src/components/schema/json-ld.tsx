import type { Thing, WithContext } from "schema-dts";

/**
 * Emits JSON-LD from a server component. Never render this from a client
 * component — structured data injected after hydration is unreliable for
 * crawlers that do not execute JS.
 *
 * `<` escaping prevents a `</script>` sequence inside any string field
 * from breaking out of the script tag.
 */
export function JsonLd({ data }: { data: WithContext<Thing> | object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

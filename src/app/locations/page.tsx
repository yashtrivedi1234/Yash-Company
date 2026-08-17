import { MapPin } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { AnswerBlock } from "@/components/geo/answer-block";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { CtaSection } from "@/components/sections/cta-section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { getLocations } from "@/lib/queries";
import { buildMetadata } from "@/lib/seo";

export const revalidate = 86400;

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Where We Work — Sitapur, Lucknow & Across UP",
    description:
      "Codivra Solutions works from Sitapur across Lucknow, Lakhimpur Kheri, Hardoi, Barabanki and Shahjahanpur. Free site visits, fixed quotes.",
    path: "/locations",
  });
}

export default async function LocationsPage() {
  const locations = await getLocations();

  return (
    <>
      <div className="container-site pt-8">
        <Breadcrumbs items={[{ label: "Locations", href: "/locations" }]} />
      </div>

      <header className="container-site">
        <h1 className="max-w-4xl text-4xl">Where we work</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Our office is in Sitapur. These are the districts we travel to, with
          real distances rather than a list of every city in the state.
        </p>
      </header>

      <div className="container-site mt-10">
        <AnswerBlock id="answer" label="Where does Codivra operate?">
          Codivra Solutions is based in Sitapur, Uttar Pradesh, and serves
          clients across Lucknow, Lakhimpur Kheri, Hardoi, Barabanki and
          Shahjahanpur with in-person meetings, plus clients elsewhere in India
          remotely over weekly demo calls.
        </AnswerBlock>
      </div>

      <section className="container-site mt-16" aria-label="All locations">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => (
            <Card key={location.slug} interactive className="p-6">
              <Link href={`/locations/${location.slug}`} className="block">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-lg font-semibold text-foreground">
                    {location.city}
                  </h2>
                  {location.isOffice && (
                    <Badge variant="success">
                      <MapPin className="h-3 w-3" aria-hidden="true" />
                      Office
                    </Badge>
                  )}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {location.distanceFromOffice ??
                    "Our office — visit us Monday to Saturday, 10:00 to 19:00."}
                </p>
              </Link>
            </Card>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-sm text-muted-foreground">
          We work with clients elsewhere in India too — these are simply the
          districts we can write about honestly and reach in person. We do not
          publish a page for every city in Uttar Pradesh, because a location
          page that is not genuinely about the location helps nobody.
        </p>
      </section>

      <CtaSection />
    </>
  );
}

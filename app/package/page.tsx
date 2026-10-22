import type { Metadata } from "next";
import { HowToBook } from "@/components/Closers";
import { PackageCard } from "@/components/PackageCard";
import { PageHero } from "@/components/PageHero";
import { FillTile } from "@/components/TreatmentCard";
import { packages } from "@/data/packages";
import { whatsapp } from "@/data/site";

export const metadata: Metadata = {
  title: "Bali Retreat Packages",
  description:
    "Ayurvedic, honeymoon, family and wellness retreat packages at Marni Alas Retreat in Ubud, Bali, with villa stay, treatments and transfers.",
  alternates: { canonical: "/package/" },
};

export default function PackagesPage() {
  return (
    <>
      <PageHero
        variant="plain"
        title="Bali Packages"
        text="Jungle villa stays with Ayurveda, massage, yoga and airport transfers included."
        aside={
          <ul className="flex flex-wrap gap-2">
            {["7 packages", "From USD 325", "4 to 6 days", "Airport transfer included"].map((f) => (
              <li key={f} className="chip">
                {f}
              </li>
            ))}
          </ul>
        }
      />

      <section className="section">
        <h2 className="sr-only">All packages</h2>
        <div className="container-x grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {packages.map((p) => (
            <PackageCard key={p.slug} pkg={p} className="sm:aspect-[3/4]" />
          ))}
          {packages.length % 2 === 1 && (
            <FillTile
              title="Plan a custom retreat"
              text="Tell us your dates and wishes, and we’ll put together a stay that fits."
              href={whatsapp.ch.href}
            />
          )}
        </div>
      </section>

      <HowToBook />
    </>
  );
}

import type { Metadata } from "next";
import { VisitTeaser } from "@/components/Closers";
import { Gallery } from "@/components/Gallery";
import { PageHero } from "@/components/PageHero";
import { albums } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos of the spa, treatments, Presidential Suite, Bamboo Villa and Tropical villa at Marni Alas Retreat, Ubud.",
  alternates: { canonical: "/marni-gallery/" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero variant="plain" title="Gallery" text="Our spa, our villas and life in the jungle near Ubud." />
      <section className="section">
        <div className="container-x">
          <Gallery albums={albums} />
        </div>
      </section>

      <VisitTeaser />
    </>
  );
}

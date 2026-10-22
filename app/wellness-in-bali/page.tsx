import type { Metadata } from "next";
import { PackageStrip } from "@/components/Closers";
import { PageHero } from "@/components/PageHero";
import { TreatmentMenu } from "@/components/TreatmentMenu";
import { Button } from "@/components/ui";
import { packages } from "@/data/packages";
import { treatmentMenu } from "@/data/treatments";

export const metadata: Metadata = {
  title: "Wellness, Ayurveda & Massage in Ubud",
  description:
    "Ayurveda treatments, Balinese massage and beauty treatments at Marni Alas Spa in Ubud, Bali. Prices, durations and booking via WhatsApp.",
  alternates: { canonical: "/wellness-in-bali/" },
};

const tabs = [
  {
    id: "ayurveda" as const,
    label: "Ayurveda",
    text: "Ancient Indian healing, woven into daily life in Bali.",
    image: "/images/2022/11/wellness-spa-in-ubud-bali-spa26.jpg",
  },
  {
    id: "massage" as const,
    label: "Massage",
    text: "Authentic manual therapies with pure essential oils.",
    image: "/images/2025/05/MARC0002_massage.jpg",
  },
  {
    id: "beauty" as const,
    label: "Beauty",
    text: "Facials, body care, nails, brows and lashes.",
    image: "/images/2025/05/facial.jpg",
  },
];

export default function WellnessPage() {
  return (
    <>
      <PageHero
        variant="center"
        title="Wellness & Holistic Healing"
        text="Skilled Balinese hands and pure essential oils restore balance in mind and body."
        image="/images/2022/11/wellness-spa-in-ubud-bali-spa18.jpg"
      >
        <Button href="/package/" variant="solid">
          Our packages
        </Button>
      </PageHero>

      <section className="section">
        <div className="container-x">
          <h2 className="sr-only">Treatments</h2>
          <TreatmentMenu menu={treatmentMenu} tabs={tabs} />
        </div>
      </section>

      {/* Point treatment browsers on to the retreat packages. */}
      <PackageStrip
        title="Make it a retreat"
        text="Stay in our jungle villas with daily treatments, yoga and airport transfers included."
        picks={packages.slice(0, 3)}
      />
    </>
  );
}

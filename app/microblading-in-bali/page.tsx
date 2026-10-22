import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BrowCta } from "@/components/Closers";
import { ArrowIcon, CheckIcon } from "@/components/icons";
import { FillTile, gridFor, TreatmentCard } from "@/components/TreatmentCard";
import { Button, SectionHead } from "@/components/ui";
import { microblading, treatmentMenu } from "@/data/treatments";

export const metadata: Metadata = {
  title: "Microblading & Shading in Bali",
  description:
    "Microblading, ombre powder brows and Marni’s Signature at Marni Wellness & Beauty in Ubud, Bali. Natural, long-lasting results.",
  alternates: { canonical: "/microblading-in-bali/" },
};

const others = (treatmentMenu.find((c) => c.id === "beauty")?.items ?? []).filter((t) => t.name !== "Microblading").slice(0, 8);

export default function MicrobladingPage() {
  const grid = gridFor(others.length);
  return (
    <>
      <section className="grid lg:min-h-[calc(100dvh-var(--header-h)-4rem)] lg:grid-cols-2">
        <div className="relative min-h-72 sm:min-h-96 lg:min-h-0">
          <Image
            src={microblading.image}
            alt="Brows being shaped with a fine microblading pen"
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex items-center bg-mist">
          <div className="w-full max-w-2xl px-4 py-10 sm:px-8 lg:px-12 lg:py-14">
            <h1 className="title-caps text-[clamp(1.75rem,3.2vw,2.625rem)]">Microblading &amp; Shading</h1>
            <p className="mt-4 text-ink-soft">
              Eyebrows frame the face. Shaped to your face and eyes, they give a strong expression and a fresh look, for
              women and men alike.
            </p>
            <ul className="mt-6 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {microblading.points.map((p) => (
                <li key={p} className="flex gap-3 text-[0.9375rem] leading-snug">
                  <CheckIcon className="mt-0.5 shrink-0 text-lg text-gold" />
                  {p}
                </li>
              ))}
            </ul>
            <dl className="mt-6 divide-y divide-line border-y border-line bg-white px-5">
              {microblading.prices.map((p) => (
                <div key={p.name} className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="card-title text-[0.9375rem] text-gold-ink">
                    {p.name}
                    {p.note && <span className="ml-2 text-xs font-normal normal-case tracking-normal text-mute">{p.note}</span>}
                  </dt>
                  <dd className="shrink-0 text-sm font-semibold tracking-wide">{p.price}</dd>
                </div>
              ))}
            </dl>
            <p className="label mt-3 text-mute">Treatment time 2 – 2.5 hours</p>
            <div className="mt-6">
              <Button href={microblading.book} variant="solid" whatsapp>
                Book now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHead
            title="Other Beauty Treatments"
            action={
              <Link href="/wellness-in-bali/#beauty" className="link-arrow">
                Full beauty menu <ArrowIcon className="text-base" />
              </Link>
            }
          />
          <div className={`grid gap-4 md:gap-5 ${grid.className}`}>
            {others.map((item) => (
              <TreatmentCard key={item.name} item={item} />
            ))}
            {grid.fill && <FillTile title="Not sure which to choose?" text="Ask us and we’ll suggest the right treatment." />}
          </div>
        </div>
      </section>

      <BrowCta book={microblading.book} image={microblading.detailImage} alt={microblading.detailAlt} />
    </>
  );
}

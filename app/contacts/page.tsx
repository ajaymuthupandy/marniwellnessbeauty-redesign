import type { Metadata } from "next";
import { ClockIcon, MailIcon, PinIcon } from "@/components/icons";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui";
import { locations, whatsapp } from "@/data/site";

export const metadata: Metadata = {
  title: "Contacts",
  description:
    "Contact Marni Alas Retreat in Ubud, Bali, and Kosmetikstudio im Hof in Erlenbach, Switzerland, by WhatsApp or email.",
  alternates: { canonical: "/contacts/" },
};

type Location = (typeof locations)[keyof typeof locations];

export default function ContactsPage() {
  return (
    <>
      <PageHero
        variant="split-reverse"
        title="Get in Touch"
        text="Message us on WhatsApp or email us. We reply from Bali and Switzerland."
        image="/images/2025/05/villa-in-ubud-marni-alas-villa-22.jpg"
      >
        <Button href={whatsapp.id.href} variant="solid" whatsapp>
          WhatsApp Bali
        </Button>
        <Button href={whatsapp.ch.href} whatsapp>
          WhatsApp Switzerland
        </Button>
      </PageHero>
      <section className="section">
        <div className="container-x grid gap-4 md:grid-cols-2 md:gap-5">
          <ContactCard loc={locations.bali} />
          <ContactCard loc={locations.swiss} />
        </div>
      </section>

      {/* Both maps close the page, split where the footer's Swiss column starts. */}
      <section className="section section-end bg-mist">
        <div className="section-end-grow container-x flex flex-col">
          <div className="grid flex-1 gap-4 md:grid-cols-2 md:gap-5">
            {[locations.bali, locations.swiss].map((loc) => (
              <figure key={loc.name} className="flex flex-col bg-white">
                <iframe
                  title={`Map: ${loc.name}`}
                  src={loc.map}
                  loading="lazy"
                  className="h-64 w-full border-0 bg-mist grayscale-[30%] lg:h-auto lg:min-h-48 lg:flex-1"
                />
                <figcaption className="flex gap-3 px-5 py-3.5 text-[0.9375rem] leading-snug text-ink-soft">
                  <PinIcon className="mt-0.5 shrink-0 text-gold" />
                  <span>
                    <strong className="font-semibold text-ink">{loc.name}</strong>, {loc.address.join(", ")}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({ loc }: { loc: Location }) {
  const swiss = "hours" in loc ? loc : null;
  return (
    <article className="flex flex-col gap-4 border-2 border-gold-light p-6 sm:p-8">
      <h2 className="title">{loc.name}</h2>
      <address className="space-y-2 not-italic text-ink-soft">
        <p className="flex gap-3">
          <PinIcon className="mt-1 shrink-0 text-gold" />
          {loc.address.join(", ")}
        </p>
        {swiss && (
          <p className="flex gap-3">
            <ClockIcon className="mt-1 shrink-0 text-gold" />
            {swiss.hours}
          </p>
        )}
        <a href={`mailto:${loc.email}`} className="flex gap-3 transition-colors hover:text-gold-ink">
          <MailIcon className="mt-1 shrink-0 text-gold" />
          {loc.email}
        </a>
      </address>
      <div className="mt-auto flex flex-wrap gap-3 pt-2">
        {loc.phones.map((p, i) => (
          <Button key={p.href} href={p.href} variant={i === 0 ? "solid" : "outline"} whatsapp>
            {p.label}
          </Button>
        ))}
        {swiss && <Button href={swiss.booking}>Book on Treatwell</Button>}
      </div>
    </article>
  );
}

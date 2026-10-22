import type { Metadata } from "next";
import { CheckIcon, PinIcon } from "@/components/icons";
import { PageHero } from "@/components/PageHero";
import { RoomCarousel } from "@/components/RoomCarousel";
import { Button, SectionHead, Title } from "@/components/ui";
import { resortFacilities, rooms, villaIntro } from "@/data/villas";

export const metadata: Metadata = {
  title: "Marni Alas Villa in Ubud",
  description:
    "Presidential Suite with pool, Bamboo Villa and Cozy Wooden House at Marni Alas Retreat, framed by rice terraces near Ubud, Bali.",
  alternates: { canonical: "/marni-villa-ubud/" },
};

export default function VillaPage() {
  return (
    <>
      <PageHero
        variant="banner"
        title={villaIntro.title}
        text={villaIntro.text}
        image={villaIntro.image}
        aside={
          <p className="flex gap-2 text-[0.9375rem] text-ink-soft">
            <PinIcon className="mt-1 shrink-0 text-gold" />
            {villaIntro.location}
          </p>
        }
      >
        <Button href={villaIntro.book} variant="solid" whatsapp>
          Book via WhatsApp
        </Button>
      </PageHero>

      <section className="section">
        <div className="container-x space-y-4 md:space-y-5">
          {rooms.map((room, i) => (
            <article key={room.name} className="grid grid-cols-1 gap-4 md:gap-5 lg:grid-cols-12">
              <div className={`aspect-[4/3] lg:col-span-7 lg:aspect-auto lg:min-h-[28rem] ${i % 2 ? "lg:order-2" : ""}`}>
                <RoomCarousel images={room.images} name={room.name} />
              </div>
              <div className="flex flex-col items-start justify-center gap-5 border-2 border-gold-light p-6 sm:p-8 lg:col-span-5 lg:p-10">
                <Title>{room.name}</Title>
                <p className="text-ink-soft">{room.text}</p>
                <ul className="flex flex-wrap gap-2">
                  {room.facilities.map((f) => (
                    <li key={f} className="chip">
                      <CheckIcon className="text-gold" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button href={room.book} variant="solid" whatsapp>
                  Book now
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-end bg-mist">
        <div className="container-x">
          <SectionHead
            title="Resort Facilities"
            action={
              <Button href={resortFacilities.book} whatsapp>
                Book the villa
              </Button>
            }
          />
          <ul className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-5 lg:grid-cols-4">
            {resortFacilities.items.map((f) => (
              <li key={f} className="flex items-center gap-3 bg-white px-4 py-4 text-[0.9375rem] leading-snug sm:px-5 sm:py-5">
                <CheckIcon className="shrink-0 text-xl text-gold" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

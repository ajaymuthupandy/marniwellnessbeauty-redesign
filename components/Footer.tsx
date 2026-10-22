import Image from "next/image";
import Link from "next/link";
import { locations, socials } from "@/data/site";
import { FooterHeight } from "./FooterHeight";
import { FacebookIcon, InstagramIcon, MailIcon, PinIcon, WhatsAppIcon } from "./icons";
import { SmartLink } from "./ui";

type Location = (typeof locations)[keyof typeof locations];

const socialClass =
  "grid size-9 place-items-center border border-white/20 text-white/60 transition-colors hover:border-gold-light hover:text-gold-light";

// Two even columns of four (three columns on phones), so Explore is no taller than the address blocks.
const links = [
  { label: "About", href: "/bali/" },
  { label: "Wellness", href: "/wellness-in-bali/" },
  { label: "Microblading", href: "/microblading-in-bali/" },
  { label: "Our Villa", href: "/marni-villa-ubud/" },
  { label: "Packages", href: "/package/" },
  { label: "Gallery", href: "/marni-gallery/" },
  { label: "News", href: "/news/" },
  { label: "Contacts", href: "/contacts/" },
];

export function Footer() {
  return (
    // On phones the footer fills the last screen under the header, so the page never ends on a cut-off sliver.
    <footer id="site-footer" className="flex flex-col bg-night text-white/75 max-md:min-h-[calc(100svh-var(--header-h-compact))]">
      <FooterHeight target="site-footer" />
      {/* Same 12-column grid and gutters as the sections, so the columns line up with the section above. */}
      <div className="container-x grid flex-1 content-start gap-x-4 gap-y-4 py-6 text-[0.875rem] leading-snug sm:grid-cols-2 sm:gap-y-5 sm:py-7 md:gap-x-5 lg:grid-cols-12">
        <div className="flex items-start gap-4 lg:col-span-3">
          <Link href="/" aria-label="Marni Alas Retreat Center Ubud, home" className="shrink-0">
            <Image src="/images/2025/05/Marni-Logo.png" alt="Marni Alas Retreat Center Ubud" width={500} height={500} className="-ml-1 size-16 sm:size-20" />
          </Link>
          <div>
            <p>Wellness, beauty and jungle villas in Bali and Switzerland.</p>
            <div className="mt-3 flex gap-2">
              <a href={socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={socialClass}>
                <FacebookIcon />
              </a>
              <a href={socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={socialClass}>
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>

        <FooterAddress loc={locations.bali} className="lg:col-span-3" />
        <FooterAddress loc={locations.swiss} className="lg:col-span-3" />

        <nav aria-label="Footer" className="lg:col-span-3">
          <h2 className="label mb-3 text-gold-light">Explore</h2>
          <ul className="grid grid-flow-col grid-cols-3 grid-rows-3 gap-x-4 gap-y-1 sm:grid-cols-2 sm:grid-rows-4 md:gap-x-5">
            {links.map((l) => (
              <li key={l.href}>
                {/* py-1 gives each link a taller tap target than its 20px line. */}
                <SmartLink href={l.href} className="inline-block py-1 transition-colors hover:text-gold-light">
                  {l.label}
                </SmartLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-1 py-3.5 text-center text-[0.8125rem] sm:flex-row sm:text-left">
          <p className="text-white/80">Marni © 2026. All rights reserved.</p>
          <p className="label text-white/60 max-sm:hidden">Ubud · Bali &nbsp;|&nbsp; Erlenbach · Switzerland</p>
        </div>
      </div>
    </footer>
  );
}

function FooterAddress({ loc, className = "" }: { loc: Location; className?: string }) {
  return (
    <address className={`not-italic ${className}`}>
      <h2 className="label mb-3 text-gold-light">{loc.region}</h2>
      <ul className="space-y-1">
        <li className="flex gap-2.5 pb-1">
          <PinIcon className="mt-0.5 shrink-0 text-gold-light" />
          <span>
            <strong className="font-semibold text-white">{loc.name}</strong>, {loc.address.join(", ")}
          </span>
        </li>
        <li>
          <a href={`mailto:${loc.email}`} className="flex items-center gap-2.5 py-1 transition-colors hover:text-gold-light">
            <MailIcon className="shrink-0 text-gold-light" />
            {loc.email}
          </a>
        </li>
        {/* One WhatsApp icon for both numbers, so they share a line when there is room. */}
        <li className="flex gap-2.5">
          <WhatsAppIcon className="mt-1.5 shrink-0 text-gold-light" />
          <span className="flex flex-wrap gap-x-4">
            {loc.phones.map((p) => (
              <a key={p.href} href={p.href} target="_blank" rel="noopener noreferrer" className="py-1 transition-colors hover:text-gold-light">
                {p.label}
              </a>
            ))}
          </span>
        </li>
      </ul>
    </address>
  );
}

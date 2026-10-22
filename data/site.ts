export const SITE_URL = "https://marniwellnessbeauty.com";
export const SITE_NAME = "Marni Alas Retreat";

export type NavLink = { label: string; href: string; external?: boolean };
export type NavItem = NavLink | { label: string; children: NavLink[] };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Bali",
    children: [
      { label: "About", href: "/bali/" },
      { label: "Wellness", href: "/wellness-in-bali/" },
      { label: "Beauty", href: "/wellness-in-bali/#beauty" },
      { label: "Microblading & Shading", href: "/microblading-in-bali/" },
      { label: "Our Villa", href: "/marni-villa-ubud/" },
    ],
  },
  { label: "Switzerland", href: "http://mmarni.ch/", external: true },
  { label: "Packages", href: "/package/" },
  { label: "Gallery", href: "/marni-gallery/" },
  { label: "News", href: "/news/" },
  { label: "Contacts", href: "/contacts/" },
];

export const whatsapp = {
  ch: { label: "+41 76 588 90 18", href: "https://wa.me/41765889018" },
  id: { label: "+62 821 4287 0027", href: "https://wa.me/6282142870027" },
};

export const socials = {
  facebook: "https://www.facebook.com/marniwellnessbeauty",
  instagram: "https://www.instagram.com/marniwellnessandbeauty/",
};

export const locations = {
  bali: {
    region: "Bali Address",
    name: "Marni Alas Retreat Center",
    address: ["Kenderan, Tegallalang-Ubud", "Gianyar, Bali, Indonesia"],
    email: "bali@marniwellnessbeauty.com",
    // The Indonesian number first: it's the local line for the Bali retreat.
    phones: [whatsapp.id, whatsapp.ch],
    map: "https://maps.google.com/maps?t=m&output=embed&iwloc=near&z=12&q=Marni+Alas+Retreat",
  },
  swiss: {
    region: "Swiss Address",
    name: "Kosmetikstudio im Hof",
    address: ["Bahnhofstrasse 33, 8703 Erlenbach", "Switzerland"],
    email: "m.marni@bluewin.ch",
    phones: [whatsapp.ch],
    hours: "Geöffnet wochentags, 08.00 – 20.00",
    booking: "https://www.treatwell.ch/ort/kosmetikstudio-im-hof/",
    website: "http://mmarni.ch/",
    map: "https://maps.google.com/maps?t=m&output=embed&iwloc=near&z=12&q=Kosmetikstudio+im+Hof%2C+Bahnhofstrasse%2C+Erlenbach%2C+Switzerland",
  },
};

export const specialOffer = {
  // A clean photo; the offer's details stay in the text beside it, not baked into the image.
  image: "/images/2025/05/villa-in-ubud-marni-alas-villa-49.jpg",
  imageAlt: "Guest relaxing by the stone hot tub at the Bamboo Villa",
  title: "Bamboo Villa",
  price: "IDR 9.600.000",
  note: "3 nights for 2 persons",
  includes: [
    "3 nights at the Bamboo Villa",
    "2 yoga sessions",
    "Balinese massage & flower bath",
    "Daily breakfast",
    "Ubud tour: Tegallalang, Monkey Forest & Ubud centre",
    "Kuta pick-up & return transfer",
  ],
  book: "https://wa.me/41765889018?text=Hello...%20Marni%20I%20Want%20to%20Book%20Special%20Offers%20Bamboo%20Villa",
};

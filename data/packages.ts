export type Package = {
  slug: string;
  title: string;
  duration: string;
  guests?: string;
  price: string;
  priceNote?: string;
  tagline?: string;
  cover: string;
  images: [string, string];
  includes: string[];
  book: string;
};

const wa = (text: string) => `https://wa.me/41765889018?text=${text}`;

const transfer = "Pick-up at/to the airport or Ubud, Canggu, Kuta and Denpasar area";
const trekking = "Rice field trekking to Manuaba Waterfall with our staff";

const ayurvedicStay = (villa: string) => [
  `3 nights at our ${villa}`,
  "Daily healthy breakfast, lunch and dinner",
  "Daily yoga and meditation",
  transfer,
  "Welcoming fresh flower necklace",
  "Ayurvedic doctor consultation every day at 6 pm",
  "2 Ayurvedic treatments every day, matched to your body and soul",
  "1 detox body treatment with face, head massage and herbal mask",
  trekking,
  "Fruit basket on arrival",
];

export const packages: Package[] = [
  {
    slug: "refresh-your-soul-package-4-days-3-nights-for-single",
    title: "Refresh your Soul",
    duration: "4 Days / 3 Nights",
    guests: "Single",
    price: "USD 435",
    priceNote: "per person",
    tagline: "Immerse yourself in the lush Balinese jungle and the island’s rich cultural heritage.",
    cover: "/images/2025/06/Bamboo-Villa-Marni-Alas-Retreat.jpg",
    images: ["/images/2025/06/Bamboo-Villa-Marni-Alas-Retreat.jpg", "/images/2025/05/Balinese-Massage.jpg"],
    includes: [
      "3 nights at our Jungle Bamboo Villa",
      "Daily healthy breakfast",
      transfer,
      "1 Balinese massage in our Marni Alas Spa",
      "1 private yoga session",
      "1 detox treatment with face and head massage",
      "Fresh coconut drink every day",
      trekking,
    ],
    book: wa("Hello...%20Marni%20I%20Want%20to%20Book%20Refresh%20Your%20Soul%20Package%204%20Days%203%20Nights%20for%20Single"),
  },
  {
    slug: "nature-lover-ayurvedic-experience-package-4-days-3-nights-for-couple",
    title: "Nature Lover Ayurvedic Experience",
    duration: "4 Days / 3 Nights",
    guests: "Couple",
    price: "USD 895",
    priceNote: "per person",
    tagline: "A full Ayurvedic programme in our jungle Bamboo Villa, for two.",
    cover: "/images/2025/06/Bamboo-Villa-Marni-Alas-Retreat-3.jpg",
    images: ["/images/2025/06/Bamboo-Villa-Marni-Alas-Retreat-3.jpg", "/images/2025/05/villa-in-ubud-marni-alas-villa-30.jpg"],
    includes: ayurvedicStay("Jungle Bamboo Villa"),
    book: wa("Hello...%20Marni%20I%20Want%20to%20Book%20Nature%20Lover%20Ayurvedic%20Experience%20Package%204%20Days%203%20Nights%20for%20Couple"),
  },
  {
    slug: "nature-lover-ayurvedic-experience-package-4-days-3-nights-for-single",
    title: "Nature Lover Ayurvedic Experience",
    duration: "4 Days / 3 Nights",
    guests: "Single",
    price: "USD 925",
    priceNote: "per person",
    tagline: "A full Ayurvedic programme in our jungle Bamboo Villa, just for you.",
    cover: "/images/2025/05/villa-in-ubud-marni-alas-villa-48.jpg",
    images: ["/images/2023/07/Bamboo-Villa-15.jpg", "/images/2025/05/villa-in-ubud-marni-alas-villa-30.jpg"],
    includes: ayurvedicStay("Jungle Bamboo Villa"),
    book: wa("Hello...%20Marni%20I%20Want%20to%20Book%20Nature%20Lover%20Ayurvedic%20Experience%20Package%204%20Days%203%20Nights%20for%20Single"),
  },
  {
    slug: "luxury-ayurvedic-experience-package-4-days-3-nights-4-pax",
    title: "Luxury Ayurvedic Experience",
    duration: "4 Days / 3 Nights",
    guests: "4 Pax",
    price: "USD 550",
    priceNote: "per person",
    tagline: "Our President Suite with private pool and a daily Ayurvedic programme.",
    cover: "/images/2026/08/President-Suite_cnvrt.webp",
    images: ["/images/2026/08/President-Suite_cnvrt.webp", "/images/2026/08/Spa.webp"],
    includes: ayurvedicStay("President Suite with a private pool"),
    book: wa("Hello...%20Marni%20I%20Want%20to%20Book%20Luxury%20Ayurvedic%20Experience%20Package%204%20Days%203%20Nights%204%20Pax"),
  },
  {
    slug: "luxury-ayurvedic-experience-package-4-days-3-nights-2-pax",
    title: "Luxury Ayurvedic Experience",
    duration: "4 Days / 3 Nights",
    guests: "2 Pax",
    price: "USD 825",
    priceNote: "per person",
    tagline: "Our President Suite with private pool and a daily Ayurvedic programme.",
    cover: "/images/2023/01/living-room-president-suite-villa-ubud.jpg",
    images: ["/images/2023/01/living-room-president-suite-villa-ubud.jpg", "/images/2025/05/villa-in-ubud-marni-alas-villa-30.jpg"],
    includes: ayurvedicStay("President Suite with a private pool"),
    book: wa("Hello...%20Marni%20I%20Want%20to%20Book%20Luxury%20Ayurvedic%20Experience%20Package%204%20Days%203%20Nights"),
  },
  {
    slug: "honeymooner-package-4-days-3-nights",
    title: "Honeymoon Package",
    duration: "4 Days / 3 Nights",
    guests: "Couple",
    price: "USD 325",
    priceNote: "per person",
    tagline: "The «Lovers Nest»: private, romantic accommodation in the jungle.",
    cover: "/images/2025/05/villa-in-ubud-marni-alas-villa-46.jpg",
    images: ["/images/2025/05/villa-in-ubud-marni-alas-villa-43.jpg", "/images/2025/05/villa-in-ubud-marni-alas-villa-46.jpg"],
    includes: [
      "3 nights at our Romantic Jungle Bamboo Villa",
      "Daily breakfast",
      transfer,
      "Welcoming fresh flower necklace",
      "1 Balinese couple massage in our Marni Alas Spa",
      "1 reflexology massage in our Marni Alas Spa",
      "1 private yoga session",
      trekking,
      "Romantic bed and room decoration",
      "Candle-light Balinese dinner on the villa terrace",
      "Flower bouquet",
    ],
    book: wa("Hello...%20Marni%20I%20Want%20to%20Book%20Honeymoon%20Package%203Nights"),
  },
  {
    slug: "family-package-4-people-6-days-5-nights",
    title: "Family Package",
    duration: "6 Days / 5 Nights",
    guests: "4 People",
    price: "USD 1,170",
    priceNote: "for all",
    tagline: "Five nights in our President Suite with a private pool, for the whole family.",
    cover: "/images/2025/05/villa-in-ubud-marni-alas-villa-76.jpg",
    images: ["/images/2025/05/villa-in-ubud-marni-alas-villa-80.jpg", "/images/2025/05/villa-in-ubud-marni-alas-villa-30.jpg"],
    includes: [
      "5 nights at our President Suite with a private pool",
      "Daily breakfast (floating breakfast on request)",
      transfer,
      "Welcoming fresh flower necklace",
      "1 Balinese massage per person in our Marni Alas Spa",
      trekking,
      "Fruit basket on arrival",
    ],
    book: wa("Hello...%20Marni%20I%20Want%20to%20Book%20Family%20Package%204People%205Nights"),
  },
];

/** The four packages featured on the home page, as on the original site. */
export const featuredPackages = packages.slice(0, 4);

export const getPackage = (slug: string) => packages.find((p) => p.slug === slug);

/** True when another package has the same title, so the guests are needed to tell them apart. */
export const sharesTitle = (pkg: Package) => packages.some((p) => p !== pkg && p.title === pkg.title);

/** The title as shown on cards: "Nature Lover Ayurvedic Experience (Couple)" where names repeat. */
export const cardTitle = (pkg: Package) => (sharesTitle(pkg) && pkg.guests ? `${pkg.title} (${pkg.guests})` : pkg.title);

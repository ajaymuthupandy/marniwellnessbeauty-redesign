export type Post = {
  slug: string;
  title: string;
  date: string;
  image: string;
  extraImages?: string[];
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "christmas-gift-for-kenderan-family",
    title: "Christmas Gift for Kenderan Family",
    date: "2022-12-26",
    image: "/images/2023/01/christmas-at-mahottama-villa-ubud-1.jpg",
    body: [
      "It is our way to share joy and happiness this Christmas. We shared gifts and happy moments with the neighbouring families in Kenderan Village.",
    ],
  },
  {
    slug: "first-aid-socialization-at-marnis-villa-ubud",
    title: "First Aid Socialization at Marni’s Villa Ubud",
    date: "2022-10-15",
    image: "/images/2022/10/ibu-marni.jpg",
    body: ["A first aid socialization session held with our team at Marni’s Villa Ubud."],
  },
  {
    slug: "international-wellness-tourism-conference-festival-iwtcf-2022",
    title: "International Wellness Tourism Conference & Festival (IWTCF 2022)",
    date: "2022-08-22",
    image: "/images/2022/08/wellness-beauty-ubud-iwtcf-g20-event-5.jpeg",
    extraImages: [
      "/images/2022/08/wellness-beauty-ubud-iwtcf-g20-event-2.jpeg",
      "/images/2022/08/wellness-beauty-ubud-iwtcf-g20-event-6.jpeg",
    ],
    body: [
      "IWTCF 2022 carried the mission to make Indonesia a world wellness tourism destination. Solo, 5 – 7 August 2022, at Alila Solo.",
      "We proudly joined participants from the G20 countries, ASEAN and Indonesia under the theme “Sustainability Strategy for the Recovery and Growth of World Tourism through Wellness Tourism for All”.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

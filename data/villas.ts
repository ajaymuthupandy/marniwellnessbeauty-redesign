export type Room = {
  name: string;
  text: string;
  facilities: string[];
  images: string[];
  book: string;
};

export const villaIntro = {
  title: "Marni Alas Villa",
  text: "A Presidential Suite with pool, a Bamboo Villa and a Cozy Wooden House, framed by rolling hills and rice terraces.",
  location: "5 minutes’ walk to the Manuaba Palace · 20 minutes’ drive to central Ubud",
  image: "/images/2025/05/villa-in-ubud-marni-alas-villa-94.jpg",
  book: "https://api.whatsapp.com/send?phone=41765889018&text=BOOK%20Marni%20Alas%20VillaFrom%20www.marniwellnessbeauty.com",
};

export const rooms: Room[] = [
  {
    name: "Presidential Suite with Pool",
    text: "A spacious double room with bath and shower, terrace, balcony and its own pool.",
    facilities: ["Landmark view", "Private bathroom", "Air conditioner", "Terrace", "Wifi", "Bathtub", "Pool", "Balcony"],
    images: [
      "/images/2026/09/president-room-1-scaled.jpg",
      "/images/2026/09/president-living-room.jpg",
      "/images/2026/09/president-pool.jpg",
      "/images/2026/09/president-bathroom2.jpg",
      "/images/2023/07/Pool.jpg",
      "/images/2023/07/One-Bedroom-Private-Pool-Villa-31.jpg",
      "/images/2023/07/One-Bedroom-Private-Pool-Villa-30.jpg",
    ],
    book: "https://wa.me/41765889018?text=Halo%20booking%20Marni%20Villa%20Presidential%20Suite%20Villa",
  },
  {
    name: "Bamboo Villa",
    text: "Built from natural materials and merged with the evergreen jungle around it.",
    facilities: [
      "Garden view",
      "Dedicated workspace",
      "Balcony",
      "Private BBQ grill",
      "Wifi",
      "Private hot tub",
      "Private bathroom",
      "Outdoor dining area",
    ],
    images: [
      "/images/2023/07/Bamboo-Villa-11.jpg",
      "/images/2023/07/Bamboo-Villa-2.jpg",
      "/images/2026/09/BAMBOO-ROOM.jpg",
      "/images/2023/07/Bamboo-Villa-14.jpg",
      "/images/2023/07/Bamboo-Villa-5.jpg",
      "/images/2023/07/Bamboo-Villa-13.jpg",
      "/images/2023/07/Bamboo-Villa-9.jpg",
    ],
    book: "https://wa.me/41765889018?text=Halo%20booking%20Marni%20Villa%20Bamboo%20Villa",
  },
  {
    name: "Cozy Wooden House",
    text: "A quiet house overlooking rice fields, jungle and mountains, next to two Balinese families.",
    facilities: ["Mountain view", "Air conditioner", "Balcony", "Wifi", "Private bathroom", "Private pool", "Kitchen"],
    images: [
      "/images/2026/09/TROPICAL-POOL.jpg",
      "/images/2026/09/TROPICAL-BEDROOM.jpg",
      "/images/2026/09/TROPICAL-BEDROOM1.jpg",
      "/images/2026/09/TROPICAL-KITCHEN.jpg",
      "/images/2026/09/TROPICAL-BATHROOM1.jpg",
      "/images/2025/05/villa-in-ubud-marni-alas-villa-86.jpg",
      "/images/2025/05/villa-in-ubud-marni-alas-villa-90.jpg",
    ],
    book: "https://wa.me/41765889018?text=Halo%20booking%20Marni%20Villa%20Cozy%20Wooden%20House",
  },
];

export const resortFacilities = {
  items: [
    "2-bedroom private villa",
    "Bathroom with hot water",
    "Huge private pool",
    "Kitchen",
    "Rooftop with gazebo",
    "Butler service",
    "Free wifi",
    "Rice field & jungle view",
  ],
  book: "https://wa.me/41765889018?text=Halo%20want%20to%20book%20Marni%20Villa%20in%20Bali%20marniwebsite",
};

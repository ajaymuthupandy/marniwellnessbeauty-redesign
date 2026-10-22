export type GalleryImage = { src: string; alt: string };
export type GalleryAlbum = { id: string; label: string; images: GalleryImage[] };

// One photo per line: "<path under /images> | <alt text>".
const list = (rows: string): GalleryImage[] =>
  rows
    .trim()
    .split("\n")
    .map((row) => {
      const [path, alt] = row.split("|").map((s) => s.trim());
      return { src: `/images/${path}`, alt };
    });

// A curated selection per album, in layout order (see components/Gallery.tsx);
// keep landscape photos where the layout puts its wide tiles.
// Photos used elsewhere on the site (room carousels, page headers) are left out.
export const albums: GalleryAlbum[] = [
  {
    id: "spa",
    label: "Spa & Retreat",
    images: list(`
2022/05/massage-in-ubud-bali.jpeg | Guest in a flower bath in a stone tub, open to the jungle
2022/05/marniwellness-and-beauty-massage-in-ubdu.jpeg | Balinese back massage, with a frangipani in the guest’s hair
2022/05/spa-in-ubud-bali-marni.jpg | Shoulder massage for a guest wearing a frangipani
2022/11/welcome-spa-in-ubud.jpg | Staff greeting guests with a Balinese welcome at the spa reception
2025/05/MARC0003_Yoga.jpg | Outdoor yoga session in the garden
2022/05/best-massage-in-ubud-ayurveda-massage.jpeg | Guest relaxing in a jungle flower bath
2022/11/wellness-spa-in-ubud-bali-spa26.jpg | Kati Basti: warm herbal oil poured into a dough ring on the lower back
2022/05/ayurveda-treatment-marniwellness-ubud.jpg | Guest holding incense during a Balinese blessing before a treatment
2022/05/ubud-bali-ayurveda-treatment-marniwellness.jpg | Guests in Balinese dress visiting a temple near the retreat
2022/05/spa-in-ubud-bali-marni-wellness.jpg | Guest wrapped in a towel by the water after a treatment
2023/07/mahottamavillaubud_266.jpg | Guest smiling in a copper tub full of flower petals
`),
  },
  {
    id: "wellness",
    label: "Wellness & Beauty",
    images: list(`
2023/07/Wellness-Beauty-20.jpg | Copper bathtub between two treatment beds, facing the jungle
2023/07/Wellness-Beauty-16.jpg | Facial treatment with a pink clay mask
2023/07/Wellness-Beauty-22.jpg | Herbal compress balls on a banana leaf
2023/07/Wellness-Beauty-23.jpg | Balinese offering, candle and singing bowl in a treatment room
2023/07/Wellness-Beauty-5.jpg | Treatment beds with a garden view through an arched window
2023/07/Wellness-Beauty-18.jpg | Carved wooden massage beds in a treatment room
2023/07/Wellness-Beauty-11.jpg | Facial room with a treatment chair and a jungle mural
2023/07/Wellness-Beauty-25.jpg | Flower foot bath before a treatment
2023/07/Wellness-Beauty-27.jpg | Therapist giving a back massage in the open-air treatment room
2023/07/Wellness-Beauty-2.jpg | Spa lounge with an orange sofa and wooden shelves
2026/09/MASSAGE.jpg | Foot massage for a guest in the treatment room
`),
  },
  {
    id: "presidential",
    label: "Presidential Suite",
    images: list(`
2023/07/One-Bedroom-Private-Pool-Villa-33.jpg | Presidential Suite lit up at dusk, with a flower-strewn pool
2023/07/One-Bedroom-Private-Pool-Villa-1.jpg | Canopy bed with towel swans and a jungle view
2023/07/One-Bedroom-Private-Pool-Villa-4.jpg | Stone bathtub filled with rose petals under tall windows
2023/07/One-Bedroom-Private-Pool-Villa-9.jpg | Living room with a grey sofa and garden windows
2023/07/One-Bedroom-Private-Pool-Villa-6.jpg | Open kitchen and dining area
2023/07/One-Bedroom-Private-Pool-Villa-32.jpg | Private pool edged with flowers and stepping stones
2023/07/One-Bedroom-Private-Pool-Villa-11.jpg | Breakfast with fresh juices and fruit on the terrace
2023/07/One-Bedroom-Private-Pool-Villa-26.jpg | Bathroom vanity with a view through to the bedroom
2025/05/villa-in-ubud-marni-alas-villa-51.jpg | Bamboo pavilion in the tropical garden
2025/05/villa-in-ubud-marni-alas-villa-62.jpg | Garden gazebo beside the pool walkway
2026/09/precidential-room.jpg | Presidential Suite bedroom with a canopy bed and a leaf mural
2023/07/One-Bedroom-Private-Pool-Villa-17.jpg | Canopy bed with teal cushions
`),
  },
  {
    id: "bamboo",
    label: "Bamboo Villa",
    images: list(`
2023/07/Bamboo-Villa-17.jpg | Bamboo tree house in the jungle
2023/07/Bamboo-Villa-12.jpg | Bamboo Villa terrace with a chess table and green cushions
2023/07/Bamboo-Villa-16.jpg | Open-sided bamboo lounge with white curtains
2023/07/Bamboo-Villa-18.jpg | Daybed on the Bamboo Villa deck
2023/07/Bamboo-Villa-20.jpg | Outdoor dining table under the trees
2023/07/Bamboo-Villa-15.jpg | Stone hot tub on the Bamboo Villa deck
2025/05/villa-in-ubud-marni-alas-villa-42.jpg | Bamboo Villa bedroom with a canopy bed
2025/05/villa-in-ubud-marni-alas-villa-44.jpg | Bamboo Villa bedroom with a desk and TV
2023/07/Bamboo-Villa-19.jpg | Fire pit with stone seats in the garden
`),
  },
  {
    id: "tropical",
    label: "Tropical 2BR Villa",
    images: list(`
2025/05/villa-in-ubud-marni-alas-villa-80.jpg | Private plunge pool beside the wooden house
2025/05/villa-in-ubud-marni-alas-villa-68.jpg | Stone bathtub with rose petals
2025/05/villa-in-ubud-marni-alas-villa-70.jpg | Open kitchen with white shelves
2025/05/villa-in-ubud-marni-alas-villa-76.jpg | Canopy bed opening onto the pool
2025/05/villa-in-ubud-marni-alas-villa-84.jpg | Bedroom with teal cushions and a carved headboard
2025/05/villa-in-ubud-marni-alas-villa-79.jpg | Canopy bed with the bathtub and pool behind
2025/05/villa-in-ubud-marni-alas-villa-81.jpg | Living room with a carved wooden daybed
2025/05/villa-in-ubud-marni-alas-villa-89.jpg | Guest in a robe with a drink beside the flower bath
`),
  },
];

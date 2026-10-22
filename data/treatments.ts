export type Treatment = {
  name: string;
  prices: string[];
  duration?: string;
  summary?: string;
  image: string;
  book: string;
};

export type TreatmentCategory = {
  id: "ayurveda" | "massage" | "beauty";
  label: string;
  items: Treatment[];
};

const wa = (text: string) => `https://wa.me/41765889018?text=${text}`;
const api = (text: string) => `https://api.whatsapp.com/send?phone=41765889018&text=${text}`;

export const pillars = [
  {
    title: "Ayurveda Treatments",
    text: "An ancient Indian system of healing, woven into daily life in Bali.",
    image: "/images/2025/05/MARC0001_Ayurveda.jpg",
    href: "#ayurveda",
  },
  {
    title: "Massages",
    text: "Authentic manual therapies and pure essential oils that rebalance.",
    image: "/images/2025/05/MARC0002_massage.jpg",
    href: "#massage",
  },
  {
    title: "Body & Soul Therapy",
    text: "A healing touch by skilled therapists for a balanced, fulfilled life.",
    image: "/images/2025/05/MARC0003_Yoga.jpg",
    href: "#beauty",
  },
];

export const treatmentMenu: TreatmentCategory[] = [
  {
    id: "ayurveda",
    label: "Ayurveda",
    items: [
      {
        name: "Abhyanga",
        prices: ["IDR 527.000"],
        duration: "60 min",
        summary: "Synchronised two-hand massage with warm herbal oil, from scalp to soles.",
        image: "/images/2025/05/MARC-Abhyanga.jpg",
        book: wa("Hello...%20Marni%20Wellness,%20I%20Want%20to%20Book%20Abhyanga%20Treatment"),
      },
      {
        name: "Shirodhara",
        prices: ["IDR 1.000.000"],
        duration: "60 min",
        summary: "A steady stream of warm medicated oil on the forehead to calm the mind.",
        image: "/images/2025/05/MARC-Shirodhara.jpeg",
        book: wa("Hello...%20Marni%20Wellness,%20I%20Want%20to%20Book%20Shirodhara%20Treatment"),
      },
      {
        name: "Udvartana",
        prices: ["IDR 706.000"],
        duration: "60 min",
        summary: "Herbal paste massage that tones the body and revitalises the skin.",
        image: "/images/2025/05/MARC0001_Ayurveda.jpg",
        book: wa("Hello...%20Marni%20Wellness,%20I%20Want%20to%20Book%20Udvartana%20Treatment"),
      },
      {
        name: "Shiro Abhyanga",
        prices: ["IDR 349.000"],
        duration: "45 min",
        summary: "Warm-oil head and shoulder massage for stress, fatigue and headaches.",
        image: "/images/2023/06/shiro-abhyanga.jpg",
        book: wa("Hello...%20Marni%20Wellness,%20I%20Want%20to%20Book%20SHIRO%20ABHYANGA%20Treatment"),
      },
      {
        name: "Pada Abhyanga",
        prices: ["IDR 349.000"],
        duration: "60 min",
        summary: "Warm-oil foot massage that eases tired legs and improves sleep.",
        image: "/images/2023/06/pada-abhyanga.jpg",
        book: wa("Hello...%20Marni%20Wellness,%20I%20Want%20to%20Book%20PADA%20ABHYANGA%20Treatment"),
      },
      {
        name: "Ushmasweda",
        prices: ["IDR 408.000"],
        duration: "60 min",
        summary: "Herbal steam that opens the pores, releases toxins and relaxes muscles.",
        image: "/images/2025/05/MARC-Ushmasweda.jpg",
        book: wa("Hello...%20Marni%20Wellness,%20I%20Want%20to%20Book%20Ushmasweda%20Treatment"),
      },
      {
        name: "Kati Basti",
        prices: ["IDR 563.000"],
        duration: "60 min",
        summary: "Warm medicated oil held over the lower back to relieve back pain.",
        image: "/images/2023/01/IMG_7405.jpg",
        book: wa("Hello...%20Marni%20Wellness,%20I%20Want%20to%20Book%20Kati%20Basti%20Treatment"),
      },
      {
        name: "Janu Basti",
        prices: ["IDR 563.000"],
        duration: "60 min",
        summary: "Warm medicated oil held over the knee to improve joint mobility.",
        image: "/images/2023/06/Janu-Basti.jpg",
        book: wa("Hello...%20Marni%20Wellness,%20I%20Want%20to%20Book%20Janu%20Basti%20Treatment"),
      },
      {
        name: "Greeva Basti",
        prices: ["IDR 563.000"],
        duration: "60 min",
        summary: "Warm medicated oil held over the neck to ease neck and shoulder strain.",
        image: "/images/2023/06/Greeva-basti-1.jpg",
        book: wa("Hello...%20Marni%20Wellness,%20I%20Want%20to%20Book%20Greeva%20basti%20Treatment"),
      },
      {
        name: "Avagaham",
        prices: ["IDR 587.000"],
        duration: "45 min",
        summary: "Warm herbal immersion bath for back, muscle and joint pain.",
        image: "/images/2023/06/avagaham.jpg",
        book: wa("Hello...%20Marni%20Wellness,%20I%20Want%20to%20Book%20Avagaham%20Treatment"),
      },
      {
        name: "Flower Bath",
        prices: ["IDR 350.000"],
        duration: "45 min",
        summary: "A bath of colourful petals to relax body and mind, perfect for two.",
        image: "/images/2025/05/flower-bath-with-view-2.jpg",
        book: wa("Hello...%20Marni%20Wellness,%20I%20Want%20to%20Book%20Flower%20Bath%20Treatment"),
      },
    ],
  },
  {
    id: "massage",
    label: "Massage",
    items: [
      {
        name: "Balinese Massage",
        prices: ["IDR 349.000"],
        duration: "60 min",
        summary: "Traditional Balinese strokes and essential oils to release tension.",
        image: "/images/2025/05/Balinese-Massage.jpg",
        book: wa("Hello...%20Marni%20Wellness,%20I%20Want%20to%20Book%20Balinese%20Massage%20Treatment"),
      },
      {
        name: "Balinese Massage with Boreh",
        prices: ["IDR 527.000"],
        duration: "90 min",
        summary: "Balinese massage followed by a warming Boreh spice mask for the joints.",
        image: "/images/2025/05/Balinese-Massage-With-Boreh.jpg",
        book: wa("Hello...%20Marni%20Wellness,%20I%20Want%20to%20Book%20Balinese%20Massage%20With%20Boreh%20Treatment"),
      },
      {
        name: "Cellulite Massage",
        prices: ["IDR 349.000"],
        duration: "45 min",
        summary: "Targeted techniques that boost circulation and firm the skin.",
        image: "/images/2025/05/Cellulite-Massages.jpg",
        book: wa("Hello...%20Marni%20Wellness,%20I%20Want%20to%20Book%20Cellulite%20Massage%20Treatment"),
      },
      {
        name: "Hot Stone Massage",
        prices: ["IDR 625.000"],
        duration: "90 min",
        summary: "Heated stones on key points to melt away deep muscle tension.",
        image: "/images/2025/05/Hot-Stone-Massage.jpg",
        book: wa("Hello...%20Marni%20Wellness,%20I%20Want%20to%20Book%20Hot%20Stone%20Massage%20Treatment"),
      },
      {
        name: "Foot Reflexology",
        prices: ["IDR 340.000 · 30 min", "IDR 625.000 · 60 min"],
        summary: "Pressure-point foot therapy to reduce stress and restore energy.",
        image: "/images/2025/05/Foot-Reflexology.jpg",
        book: wa("Hello...%20Marni%20Wellness,%20I%20Want%20to%20Book%20Foot%20Reflexology%20Massage%20Treatment"),
      },
      {
        name: "Sunburn Treatment",
        prices: ["IDR 350.000"],
        duration: "45 min",
        summary: "A cooling aloe vera wrap with a soothing head and face massage.",
        image: "/images/2025/05/Sunburn-Treatment.jpg",
        book: wa("Hello...%20Marni%20Wellness,%20I%20Want%20to%20Book%20Sunburn%20Treatment"),
      },
      {
        name: "Detox Treatment",
        prices: ["IDR 475.000"],
        duration: "45 min",
        summary: "A detox device session paired with a relaxing head and face massage.",
        image: "/images/2025/06/Detox-Treatment.jpg",
        book: wa("Hello...%20Marni%20Wellness,%20I%20Want%20to%20Book%20Detox%20Treatment"),
      },
      {
        name: "Aromatherapy Treatment",
        prices: ["IDR 450.000"],
        duration: "60 min",
        summary: "Soft-pressure massage with essential oils on the pulse points.",
        image: "/images/2025/06/Arometherapy-Massage.jpg",
        book: wa("Hello...%20Marni%20Wellness,%20I%20Want%20to%20Book%20Aroma%20Therapy%20Treatment"),
      },
      {
        name: "Floral Essence Spa",
        prices: ["IDR 950.000"],
        duration: "120 min",
        summary: "Gentle body peeling with herbal and head massages in one ritual.",
        image: "/images/2025/06/Floral-Essence-Spa.jpg",
        book: wa("Hello...%20Marni%20I%20Want%20to%20Book%20Floral%20Essence%20Spa%20Treatment"),
      },
    ],
  },
  {
    id: "beauty",
    label: "Beauty",
    items: [
      {
        name: "Classic Facial",
        prices: ["IDR 587.000"],
        duration: "60 min",
        summary: "Deep cleansing, exfoliation, extraction and a facial massage.",
        image: "/images/2025/05/facial.jpg",
        book: api("Hello%20I%20would%20like%20to%20book%20Classic%20Facial%20Treatment"),
      },
      {
        name: "Herbal Facial",
        prices: ["IDR 475.000"],
        duration: "60 min",
        summary: "Aloe, turmeric, honey and neem to soothe, brighten and hydrate.",
        image: "/images/2025/05/herbalfacial.jpg",
        book: api("Hello%20I%20would%20like%20to%20book%20Herbal%20Facial%20Treatment"),
      },
      {
        name: "Yoghurt Cucumber Body Mask",
        prices: ["IDR 435.000"],
        duration: "60 min",
        summary: "A cooling mask wrapped in banana leaves for sensitive skin.",
        image: "/images/2025/05/Yoghurt-CUcumber-Body-Mask.jpg",
        book: api("Hello%20I%20would%20like%20to%20book%20Yoghurt%20Cucumber%20Body%20Mask%20Treatment"),
      },
      {
        name: "Body Scrub",
        prices: ["IDR 495.000"],
        duration: "120 min",
        summary: "Moringa and aloe scrub with a 60-minute Moringa oil massage.",
        image: "/images/2025/06/Body-Scrub.jpg",
        book: api("Hello%20I%20would%20like%20to%20book%20Body%20Scrub%20Treatment"),
      },
      {
        name: "Manicure",
        prices: ["IDR 229.000"],
        summary: "Nail shaping and cuticle care for neat, healthy hands.",
        image: "/images/2025/05/manicure.jpg",
        book: api("Hello%20I%20would%20like%20to%20book%20Manicure%20Treatment"),
      },
      {
        name: "Manicure with Polish",
        prices: ["IDR 250.000"],
        summary: "Nail shaping and cuticle care, finished with a polish of your choice.",
        image: "/images/2025/05/manicurepolish.jpg",
        book: api("Hello%20I%20would%20like%20to%20book%20Manicure%20With%20Polish%20Treatment"),
      },
      {
        name: "Pedicure",
        prices: ["IDR 250.000"],
        summary: "Nail shaping and cuticle care for neat, cared-for feet.",
        image: "/images/2025/05/pedicure.jpg",
        book: api("Hello%20I%20would%20like%20to%20book%20Pedicure%20Treatment"),
      },
      {
        name: "Pedicure with Polish",
        prices: ["IDR 300.000"],
        summary: "Nail shaping and cuticle care, finished with a polish of your choice.",
        image: "/images/2025/05/pedocurepolish.jpg",
        book: api("Hello%20I%20would%20like%20to%20book%20Pedicure%20With%20Polish%20Treatment"),
      },
      {
        name: "Eyebrow Colouring",
        prices: ["IDR 100.000"],
        duration: "60 min",
        summary: "Safe dye for fuller, defined brows without daily make-up.",
        image: "/images/2025/05/eyesbrow.jpg",
        book: api("Hello%20I%20would%20like%20to%20book%20Eyebrows%20Coloring%20Treatment"),
      },
      {
        name: "Eyelash Colouring",
        prices: ["IDR 125.000"],
        duration: "60 min",
        summary: "Darker, defined lashes that last, with no mascara needed.",
        image: "/images/2025/05/EYELASH.jpg",
        book: api("Hello%20I%20would%20like%20to%20book%20Eyelash%20Coloring%20Treatment"),
      },
      {
        name: "Microblading",
        prices: ["Ombre Powder · IDR 2.999.000", "Microblading · IDR 3.999.000", "Marni’s Signature · IDR 4.299.000"],
        duration: "2 – 2.5 hours",
        summary: "Semi-permanent, hair-like strokes for natural, defined brows.",
        image: "/images/2025/05/Microblading-1.jpg",
        book: api("Hello%20I%20would%20like%20to%20book%20Microblading%20Treatment"),
      },
    ],
  },
];

export const microblading = {
  // The before/after collage reads as a result next to the booking panel, not as the hero.
  image: "/images/2025/05/eyesbrow.jpg",
  detailImage: "/images/2025/05/Microblading-1.jpg",
  detailAlt: "Brows before and after microblading",
  book: "https://wa.link/rb43ve",
  prices: [
    { name: "Ombre Powder", price: "IDR 2.999.000" },
    { name: "Microblading", price: "IDR 3.999.000" },
    { name: "Marni’s Signature", note: "Ombre Powder + Microblading", price: "IDR 4.299.000" },
  ],
  points: [
    "Brows shaped to your face and eyes",
    "Detailed diagnostics before treatment",
    "Experienced aesthetic specialists in Bali",
    "Natural, long-lasting results",
  ],
};

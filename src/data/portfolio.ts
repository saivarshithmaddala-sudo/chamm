/**
 * All editable copy and image mappings for the portfolio.
 * Swap images by changing the imported pointer, or edit any text below.
 */
import look01 from "@/assets/look-001-000.jpg.asset.json";
import look02 from "@/assets/look-002-001.jpg.asset.json";
import look03 from "@/assets/look-003-002.jpg.asset.json";
import look04 from "@/assets/look-004-003.jpg.asset.json";
import look05 from "@/assets/look-005-004.jpg.asset.json";
import look06 from "@/assets/look-006-005.jpg.asset.json";
import look07 from "@/assets/look-007-006.jpg.asset.json";
import look08 from "@/assets/look-008-007.jpg.asset.json";
import look09 from "@/assets/look-009-008.jpg.asset.json";
import look10 from "@/assets/look-010-009.jpg.asset.json";
import look11 from "@/assets/look-011-010.jpg.asset.json";
import look12 from "@/assets/look-012-011.jpg.asset.json";
import look13 from "@/assets/look-013-012.jpg.asset.json";
import look14 from "@/assets/look-014-013.jpg.asset.json";
import look15 from "@/assets/look-015-014.jpg.asset.json";
import look16 from "@/assets/look-016-015.jpg.asset.json";
import look17 from "@/assets/look-017-016.jpg.asset.json";
import look18 from "@/assets/look-018-017.jpg.asset.json";
import look19 from "@/assets/look-019-018.jpg.asset.json";
import look20 from "@/assets/look-020-019.jpg.asset.json";
import portraitAsset from "@/assets/portrait.jpg.asset.json";
import resumeAsset from "@/assets/resume.pdf.asset.json";

export type Img = { src: string; alt: string; position?: string };

export const designer = {
  name: "Chamundeshwari",
  role: "Fashion Designer",
  kicker: "Portfolio — Final Semester Collection",
  email: "Chamuk2005@gmail.com",
  phone: "+91 7638999000",
  location: "Nandyal District, Andhra Pradesh, India",
  resumeUrl: resumeAsset.url,
};

export const hero: Img = {
  src: look19.url,
  alt: "Full-length Noir look: sheer black corset with silver foil bodice, black tulle skirt with long train and a wide-brim hat with cascading chain fringe",
  position: "50% 35%",
};

export const heroSecondary: Img = {
  src: look10.url,
  alt: "Mirror-tile corset and structured skirt photographed against black",
  position: "50% 40%",
};

export const statement = {
  quote: "Where light, texture and structure become garments.",
  intro:
    "A final-semester body of work built on fabric, draping and garment detailing — creativity held to the discipline of construction. Three chapters move from icy shimmer to fragmented mirror to sheer, graphic noir.",
};

export type Collection = {
  number: string;
  title: string;
  concept: string;
  details: string[];
  images: Img[];
};

export const collections: Collection[] = [
  {
    number: "01",
    title: "Ice",
    concept: "Ethereal winter whites, shimmer, tulle and crystals.",
    details: [
      "Silver shimmer off-shoulder mini dress",
      "Sheer tulle cape sleeves",
      "Pearl hair pins",
      "Faux-fur stole with crystal rhinestone fringe",
      "Draped side panel",
    ],
    images: [
      {
        src: look04.url,
        alt: "Silver shimmer off-shoulder mini dress with sheer tulle cape sleeves in motion",
        position: "50% 30%",
      },
      {
        src: look01.url,
        alt: "Silver shimmer dress with tulle cape spread across grass",
        position: "50% 40%",
      },
      {
        src: look03.url,
        alt: "Back view of the tulle cape sleeves with pearl hair pins",
        position: "50% 30%",
      },
      {
        src: look02.url,
        alt: "Close view of the shimmer bodice and pearl-pinned hair",
        position: "50% 35%",
      },
      {
        src: look05.url,
        alt: "Faux-fur stole with crystal rhinestone fringe over the shimmer gown",
        position: "50% 40%",
      },
      {
        src: look06.url,
        alt: "Profile view of the faux-fur stole and draped skirt panel",
        position: "50% 30%",
      },
      {
        src: look07.url,
        alt: "Detail of the crystal fringe and draped side panel",
        position: "50% 45%",
      },
    ],
  },
  {
    number: "02",
    title: "Mirror",
    concept: "Fragmented reflection — the body as a disco-ball sculpture.",
    details: [
      "Hand-cut mirror-tile corset",
      "Structured mirror-tile skirt",
      "Ivory embroidered corset",
      "Mirror-tile cape",
    ],
    images: [
      {
        src: look10.url,
        alt: "Hand-cut mirror-tile corset with structured mirror skirt",
        position: "50% 35%",
      },
      {
        src: look09.url,
        alt: "Mirror-tile corset photographed in low light against black",
        position: "50% 30%",
      },
      {
        src: look08.url,
        alt: "Close-up of the hand-cut mirror tiles across the bodice",
        position: "50% 45%",
      },
      {
        src: look11.url,
        alt: "Mirror-tile corset lit in gold",
        position: "50% 45%",
      },
      {
        src: look12.url,
        alt: "Shadowed portrait with the mirror-tile bodice",
        position: "50% 40%",
      },
      {
        src: look13.url,
        alt: "Ivory embroidered corset worn with the mirror-tile cape",
        position: "50% 30%",
      },
      {
        src: look14.url,
        alt: "Mirror-tile cape falling open over the ivory corset",
        position: "50% 25%",
      },
      {
        src: look15.url,
        alt: "Back view of the mirror-tile cape",
        position: "50% 35%",
      },
      {
        src: look16.url,
        alt: "Shoulder detail of mirror tiles against the embroidered ivory bodice",
        position: "50% 45%",
      },
    ],
  },
  {
    number: "03",
    title: "Noir",
    concept: "Sheer, structural and graphic.",
    details: [
      "Sheer black corset with silver foil-collage bodice",
      "Black tulle skirt with silver foil pattern",
      "Long tulle train",
      "Wide-brim hat with gold and crystal chain fringe",
    ],
    images: [
      {
        src: look19.url,
        alt: "Full-length Noir look with wide-brim hat and long tulle train",
        position: "50% 35%",
      },
      {
        src: look17.url,
        alt: "Close view of the sheer corset and cascading chain fringe",
        position: "50% 40%",
      },
      {
        src: look18.url,
        alt: "Black tulle skirt with silver foil pattern and sheer corset",
        position: "50% 35%",
      },
      {
        src: look20.url,
        alt: "Detail of the foil-collage bodice under the chain fringe",
        position: "50% 40%",
      },
    ],
  },
];

export const craft: Img[] = [
  { src: look08.url, alt: "Hand-cut mirror tiles", position: "50% 50%" },
  { src: look07.url, alt: "Crystal fringe", position: "50% 45%" },
  { src: look16.url, alt: "Embroidered ivory bodice", position: "50% 45%" },
  { src: look20.url, alt: "Silver foil collage", position: "50% 40%" },
  { src: look02.url, alt: "Tulle texture", position: "50% 40%" },
  { src: look11.url, alt: "Gold-lit mirror facets", position: "50% 45%" },
];

export const craftCaptions = [
  "Hand-cut mirror tiles",
  "Crystal fringe",
  "Embroidery",
  "Foil collage",
  "Tulle texture",
  "Gold light study",
];

export const about = {
  portrait: {
    src: portraitAsset.url,
    alt: "Portrait of Chamundeshwari",
    position: "50% 25%",
  } as Img,
  bio: [
    "Creative, dedicated and detail-oriented, with a strong passion for fashion, styling and textile design — and an eye for aesthetics, colour coordination and garment detailing.",
    "Skilled in fabric selection, draping, styling and reading fashion trends, creating designs that are both visually appealing and practical.",
  ],
  skills: [
    "Illustration",
    "Digital Illustration",
    "Adobe Photoshop",
    "Garment Construction",
    "Draping",
    "Styling",
    "Fabric Selection",
  ],
  languages: ["Telugu", "English", "Hindi"],
};

export const timeline = [
  {
    period: "July 21 — September 5",
    title: "Internship — Tara Designer Studio",
    body: "Worked under the team leader and gained hands-on experience in workflow management, coordinating tasks and assigning work to ensure smooth, efficient operations. Areas: Designing, Illustration, Digital Illustration.",
  },
  {
    period: "Current — Final Semester",
    title: "Nitte School of Fashion Technology and Interior Design",
    body: "Bengaluru, Karnataka.",
  },
  {
    period: "Intermediate",
    title: "Sri Sudha College",
    body: "Dhone, Andhra Pradesh.",
  },
  {
    period: "Class X",
    title: "Sri Sudha School",
    body: "Dhone, Andhra Pradesh.",
  },
];

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

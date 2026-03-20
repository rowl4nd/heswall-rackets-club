export const SITE_CONFIG = {
  name: "Heswall Rackets Club",
  shortName: "HRC",
  tagline: "Squash · Racketball · Padel",
  description:
    "Community-owned sports club on the Wirral since 1974. 4 squash courts, 2 padel courts, bar & function suite.",
  address: {
    line1: "Gayton Playing Fields",
    line2: "12A Brimstage Road",
    town: "Heswall, Wirral",
    postcode: "CH60 1XG",
  },
  phone: "0151 342 2817",
  phoneNote: "Evenings only 6:30pm – 9:30pm",
  email: "heswallrackets@gmail.com",
  functionSuite: {
    contact: "Leah",
    phone: "07971 690001",
    email: "leahbarker30@gmail.com",
  },
  social: {
    facebook: "https://www.facebook.com/heswallsquash/",
    instagram: "https://www.instagram.com/heswallsquash/",
  },
  coordinates: {
    lat: 53.3278,
    lng: -3.0975,
  },
} as const;

export const NAV_LINKS = [
  { label: "Squash", href: "/squash" },
  { label: "Racketball", href: "/racketball" },
  { label: "Padel", href: "/padel" },
  { label: "Function Suite", href: "/function-suite" },
  { label: "Book a Court", href: "/book" },
  { label: "Membership", href: "/membership" },
  { label: "About", href: "/about" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
] as const;

export const SPORTS = [
  {
    name: "Squash",
    slug: "squash",
    color: "#2563eb",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    borderColor: "border-blue-200",
    courts: 4,
    description:
      "4 courts including a glass-back show court. 6 mens & 2 ladies teams in the NW Counties League, active box leagues, and coaching for all levels.",
    features: [
      "4 courts (1 glass back)",
      "NW Counties League teams",
      "Box leagues",
      "Junior coaching Fridays 6:30pm",
      "Sunday mix-in sessions",
      "England Squash qualified coaches",
    ],
  },
  {
    name: "Racketball",
    slug: "racketball",
    color: "#dc2626",
    bgColor: "bg-red-50",
    textColor: "text-red-700",
    borderColor: "border-red-200",
    courts: 4,
    description:
      "Played on squash courts with a bigger racket and bouncier ball. Perfect for beginners, those recovering from injury, or anyone wanting a more aerobic workout.",
    features: [
      "Uses all 4 squash courts",
      "Bigger racket, bouncier ball",
      "Great for all fitness levels",
      "Ladies team competitions",
      "Ideal for recovering players",
      "Coaching available",
    ],
  },
  {
    name: "Padel",
    slug: "padel",
    color: "#7c3aed",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
    borderColor: "border-purple-200",
    courts: 2,
    description:
      "Brand new padel courts open to everyone — no membership required. The fastest-growing racket sport in the world, combining elements of tennis and squash.",
    features: [
      "2 brand new courts",
      "Pay & Play — no membership needed",
      "Open to everyone",
      "Equipment hire available",
      "Beginner-friendly",
      "Book online instantly",
    ],
  },
] as const;

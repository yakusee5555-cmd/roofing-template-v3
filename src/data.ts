export const BUSINESS = {
  name: "IronPeak Roofing",
  phone: "(615) 555-0177",
  phoneHref: "tel:+16155550177",
  address: "Serving Nashville, TN",
  hours: "Mon–Fri 8am–6pm",
  emergency: "Storm damage rapid response",
  rating: "5.0",
  reviewCount: "120+",
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

/* Stacked headline words (section 2) */
export const STACK_WORDS = ["Replace.", "Repair.", "Restore.", "Inspect."];

export interface FloatCard {
  img: string;
  title: string;
  meta: string;
  rotate: string;
  offset: string;
}

export const FLOAT_CARDS: FloatCard[] = [
  {
    img: "/img/roofing/float1.jpg",
    title: "Roof replacement",
    meta: "Architectural shingles · Done in days",
    rotate: "rotate-[4deg]",
    offset: "md:translate-y-10",
  },
  {
    img: "/img/roofing/float2.jpg",
    title: "Roof repair",
    meta: "Leaks fixed fast · Same-week slots",
    rotate: "rotate-[-3deg]",
    offset: "md:-translate-y-6",
  },
  {
    img: "/img/roofing/float3.jpg",
    title: "Metal roofing",
    meta: "50-year metal · Shrugs off hail",
    rotate: "rotate-[2.5deg]",
    offset: "md:translate-y-16",
  },
];

/* Dark numbered list (section 3) */
export interface ListRow {
  img: string;
  title: string;
  desc: string;
}

export const LIST_ROWS: ListRow[] = [
  {
    img: "/img/roofing/card1.jpg",
    title: "Roof replacement",
    desc: "Architectural shingles, done in days",
  },
  {
    img: "/img/roofing/card2.jpg",
    title: "Roof repair",
    desc: "Leaks, shingles, flashing fixed fast",
  },
  {
    img: "/img/roofing/card3.jpg",
    title: "Storm damage restoration",
    desc: "Insurance paperwork handled for you",
  },
  {
    img: "/img/roofing/card4.jpg",
    title: "Metal roofing",
    desc: "50-year metal that shrugs off hail",
  },
  {
    img: "/img/roofing/card5.jpg",
    title: "Skylight installation",
    desc: "Light where you want it, no leaks",
  },
  {
    img: "/img/roofing/card6.jpg",
    title: "Inspections & maintenance",
    desc: "Catch small problems before they're big",
  },
];

/* Glass cards on full-bleed image (section 4) */
export interface GlassCard {
  title: string;
  desc: string;
  pos: string;
}

export const GLASS_CARDS: GlassCard[] = [
  {
    title: "Free inspections",
    desc: "On-roof assessment, usually same-week.",
    pos: "left-[6%] top-[16%]",
  },
  {
    title: "Licensed & insured",
    desc: "Full coverage on every single job.",
    pos: "right-[8%] top-[24%]",
  },
  {
    title: "Maintenance plans",
    desc: "Biannual inspections, zero surprises.",
    pos: "left-[10%] bottom-[20%]",
  },
  {
    title: "5.0 ★★★★★",
    desc: "120+ Google reviews from Nashville neighbors.",
    pos: "right-[10%] bottom-[14%]",
  },
];

/* Real work gallery (section 5) */
export interface WorkShot {
  img: string;
  title: string;
  location: string;
}

export const WORK_SHOTS: WorkShot[] = [
  { img: "/img/roofing/work1.jpg", title: "Full shingle install, two-day turnaround", location: "Franklin, TN" },
  { img: "/img/roofing/work2.jpg", title: "Chimney flashing rebuilt, leak gone", location: "Brentwood, TN" },
  { img: "/img/roofing/work3.jpg", title: "Architectural shingles, full replacement", location: "Murfreesboro, TN" },
  { img: "/img/roofing/work4.jpg", title: "Crew on a storm restoration job", location: "Hendersonville, TN" },
  { img: "/img/roofing/work5.jpg", title: "Ridge vent and cap detail", location: "Gallatin, TN" },
  { img: "/img/roofing/work6.jpg", title: "New roofline, ready for storm season", location: "Nolensville, TN" },
];

export interface Service {
  img: string;
  title: string;
  desc: string;
}

export const SERVICES: Service[] = [
  {
    img: "/img/roofing/card1.jpg",
    title: "Roof replacement",
    desc: "Architectural shingles installed in days, not weeks — tear-off and disposal included.",
  },
  {
    img: "/img/roofing/card2.jpg",
    title: "Roof repair",
    desc: "Leaks, missing shingles, and bad flashing fixed fast, with photo documentation.",
  },
  {
    img: "/img/roofing/card3.jpg",
    title: "Storm damage restoration",
    desc: "Hail and wind damage restored, insurance paperwork handled for you.",
  },
  {
    img: "/img/roofing/card4.jpg",
    title: "Metal roofing",
    desc: "50-year standing-seam metal that shrugs off hail and Tennessee storms.",
  },
  {
    img: "/img/roofing/card5.jpg",
    title: "Skylight installation",
    desc: "Daylight where you want it — flashed and sealed so it never leaks.",
  },
  {
    img: "/img/roofing/card6.jpg",
    title: "Inspections & maintenance",
    desc: "Biannual checkups that catch small problems before they become big ones.",
  },
];

export interface Review {
  name: string;
  town: string;
  text: string;
}

export const REVIEWS: Review[] = [
  {
    name: "Chris B.",
    town: "Franklin",
    text: "Hail took out half our shingles and they had the whole roof replaced in three days. Handled the insurance adjuster meeting too — I barely lifted a finger.",
  },
  {
    name: "Emily R.",
    town: "Brentwood",
    text: "They found a leak two other companies missed, showed me photos of exactly what was wrong, and fixed it the same week. Straight shooters.",
  },
  {
    name: "Josh T.",
    town: "Murfreesboro",
    text: "Got three quotes and IronPeak wasn't the cheapest — but the crew was clean, fast, and the 10-year workmanship warranty sold me. Zero regrets.",
  },
  {
    name: "Sara K.",
    town: "Hendersonville",
    text: "The maintenance plan already paid for itself — they caught cracked flashing on our spring inspection before it turned into a ceiling stain.",
  },
];

export const TOWNS = [
  "Nashville",
  "Franklin",
  "Brentwood",
  "Murfreesboro",
  "Hendersonville",
  "Gallatin",
  "Smyrna",
  "Spring Hill",
  "Columbia",
  "Goodlettsville",
  "Mt. Juliet",
  "Nolensville",
];

export interface ServiceCard {
  img: string;
  from: string;
  title: string;
  desc: string;
}

export const SERVICE_CARDS: ServiceCard[] = [
  {
    img: "/img/roofing/card1.jpg",
    from: "$8,999",
    title: "Roof replacement",
    desc: "Architectural shingles, done in days not weeks. Tear-off, disposal, and cleanup included.",
  },
  {
    img: "/img/roofing/card2.jpg",
    from: "$349",
    title: "Roof repair",
    desc: "Leaks, missing shingles, and flashing fixed fast — with photos of everything we touch.",
  },
  {
    img: "/img/roofing/card3.jpg",
    from: "$499",
    title: "Storm damage restoration",
    desc: "Hail and wind damage restored right, and we handle the insurance paperwork for you.",
  },
  {
    img: "/img/roofing/card4.jpg",
    from: "$12,999",
    title: "Metal roofing",
    desc: "50-year standing-seam metal that shrugs off hail and Tennessee storm seasons.",
  },
  {
    img: "/img/roofing/card5.jpg",
    from: "$1,499",
    title: "Skylight installation",
    desc: "Light where you want it — flashed, sealed, and guaranteed never to leak.",
  },
  {
    img: "/img/roofing/card6.jpg",
    from: "$149",
    title: "Inspections & maintenance",
    desc: "Catch small problems before they're big ones. Biannual plans available.",
  },
];

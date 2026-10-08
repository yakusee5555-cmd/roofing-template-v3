export interface ServiceDetail {
  slug: string;
  title: string;
  tagline: string;
  img: string;
  description: string[];
  included: string[];
  steps: { title: string; desc: string }[];
  pricingHint: string;
  faqs: { q: string; a: string }[];
  meta: string;
}

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: "roof-replacement",
    title: "Roof Replacement",
    tagline: "New roof in days, not weeks.",
    img: "/img/roofing/card1.jpg",
    description: [
      "When a roof is past patching, we replace it right: full tear-off, fresh underlayment, architectural shingles, and new flashing everywhere water likes to sneak in. Most homes are done in two to three days.",
      "You get a 10-year workmanship warranty on top of the manufacturer's warranty, and a crew that cleans up like we were never there — magnetic nail sweep included.",
    ],
    included: [
      "Full tear-off & disposal",
      "Architectural shingles",
      "Synthetic underlayment",
      "New pipe boots & flashing",
      "Ridge vent installation",
      "Magnetic nail sweep & cleanup",
    ],
    steps: [
      { title: "Inspection",
        desc: "We walk the roof, photograph everything, and give you a firm written quote.", },
      { title: "Material pick",
        desc: "Choose your shingle color and style. We order and schedule, usually within two weeks.", },
      { title: "Install day",
        desc: "Tear-off in the morning, new roof by evening. Most homes take 2–3 days.", },
      { title: "Walkthrough",
        desc: "We inspect together, sweep for nails twice, and hand you the warranty paperwork.", },
    ],
    pricingHint: "Full replacements from $8,999 depending on size and pitch. Free inspection and a firm written quote first.",
    faqs: [
      {
        q: "How much does a roof replacement cost?",
        a: "Most Nashville homes run $8,999–$18,000 depending on size, pitch, and shingle choice. We quote firm and free before any work.",
      },
      {
        q: "How long does it take?",
        a: "Two to three days for most homes. We tear off and dry-in the same day, so your home is never exposed overnight.",
      },
      {
        q: "What warranty do I get?",
        a: "10-year workmanship warranty from us plus the manufacturer's shingle warranty — usually 30 years to lifetime.",
      },
    ],
    meta: "Roof replacement in Nashville, TN. Architectural shingles, 10-year workmanship warranty. Free inspections.",
  },
  {
    slug: "roof-repair",
    title: "Roof Repair",
    tagline: "Leaks fixed fast, done right.",
    img: "/img/roofing/card2.jpg",
    description: [
      "A small leak never stays small. We find the actual entry point — not just where the stain shows up — and repair it with matching shingles, new flashing, and proper sealing.",
      "Every repair comes with photo documentation of what was wrong and what we fixed, so you see exactly what you paid for.",
    ],
    included: [
      "Leak diagnosis & tracing",
      "Shingle replacement",
      "Flashing repair & reseal",
      "Pipe boot replacement",
      "Sealant touch-ups",
      "Photo documentation",
    ],
    steps: [
      { title: "Diagnose",
        desc: "We trace the leak to its source and photograph the damage.", },
      { title: "Quote",
        desc: "Firm price on the spot for most repairs. No surprises.", },
      { title: "Repair",
        desc: "Matching shingles, new flashing, sealed right. Most repairs done same visit.", },
      { title: "Verify",
        desc: "Photos of the finished work and a water-test where it makes sense.", },
    ],
    pricingHint: "Repairs from $349 depending on damage. Leak diagnosis is free with any repair.",
    faqs: [
      {
        q: "How much does a roof repair cost?",
        a: "Most repairs run $349–$1,200. We diagnose free and quote firm before touching anything.",
      },
      {
        q: "Can you match my existing shingles?",
        a: "Usually yes. We carry the common architectural shingle lines and will get as close as the market allows.",
      },
      {
        q: "How fast can you come out?",
        a: "Same-week slots for active leaks. Call before noon and we can often be there next day.",
      },
    ],
    meta: "Roof repair in Nashville, TN. Leak diagnosis, shingle and flashing repair. Free estimates.",
  },
  {
    slug: "storm-damage-restoration",
    title: "Storm Damage Restoration",
    tagline: "We handle the insurance headache.",
    img: "/img/roofing/card3.jpg",
    description: [
      "Tennessee hail and wind do a number on roofs. We document every bit of damage the way insurance adjusters need to see it, meet the adjuster on-site, and restore the roof to better than before.",
      "You pay your deductible. We handle the paperwork, the supplements, and the back-and-forth so the claim actually covers the work.",
    ],
    included: [
      "Free storm damage inspection",
      "Adjuster meeting on-site",
      "Claim documentation & photos",
      "Supplement filing",
      "Full roof restoration",
      "Deductible-only out of pocket",
    ],
    steps: [
      { title: "Inspect",
        desc: "Free post-storm inspection with full photo documentation.", },
      { title: "File",
        desc: "We help you open the claim and meet your adjuster on the roof.", },
      { title: "Approve",
        desc: "We review the adjuster's scope and file supplements for anything missed.", },
      { title: "Restore",
        desc: "New roof installed, final walkthrough, warranty paperwork in hand.", },
    ],
    pricingHint: "Storm restorations from $499 out of pocket in most cases — typically just your deductible. Inspection free.",
    faqs: [
      {
        q: "Will my insurance cover a new roof?",
        a: "If the damage is from a covered storm event, usually yes minus your deductible. Our free inspection tells you before you file.",
      },
      {
        q: "Should I file a claim first or call you first?",
        a: "Call us first. We document damage the way adjusters need it, then you file with evidence in hand.",
      },
      {
        q: "What if the adjuster denies the claim?",
        a: "We file supplements with additional documentation. A large share of initial denials get reversed with proper evidence.",
      },
    ],
    meta: "Storm damage roof restoration in Nashville, TN. Hail & wind damage, insurance claims handled. Free inspections.",
  },
  {
    slug: "metal-roofing",
    title: "Metal Roofing",
    tagline: "The last roof you'll buy.",
    img: "/img/roofing/card4.jpg",
    description: [
      "Standing-seam metal shrugs off hail, wind, and forty Tennessee summers. It costs more up front and pays for itself in lifespan — 50 years versus 20 for shingles.",
      "We install concealed-fastener systems only: no exposed screws to back out and leak in ten years. Done right, it's the last roof the house ever needs.",
    ],
    included: [
      "Standing-seam metal panels",
      "Concealed fastener system",
      "High-temp underlayment",
      "Custom trim & flashing",
      "Snow & wind rated install",
      "50-year material warranty",
    ],
    steps: [
      { title: "Consult",
        desc: "We confirm your roof is a good metal candidate and show color options.", },
      { title: "Measure",
        desc: "Panels are cut to your roof's exact dimensions — no field guesswork.", },
      { title: "Install",
        desc: "Tear-off, underlayment, then panels seamed and locked. About a week.", },
      { title: "Certify",
        desc: "Final inspection, warranty registration, and maintenance guide.", },
    ],
    pricingHint: "Metal roofs from $12,999 depending on size and profile. Free inspection and firm quote.",
    faqs: [
      {
        q: "How much does a metal roof cost?",
        a: "Most Nashville homes run $12,999–$28,000. It lasts 2–3x longer than shingles, which is where the math wins.",
      },
      {
        q: "Is a metal roof loud in the rain?",
        a: "No. With solid decking and underlayment, it's about as loud as shingles inside the house.",
      },
      {
        q: "Does metal roofing attract lightning?",
        a: "No more than any other roof — and metal is non-combustible, so it's actually safer in a strike.",
      },
    ],
    meta: "Metal roofing in Nashville, TN. Standing-seam installs, 50-year warranty. Free inspections.",
  },
  {
    slug: "skylight-installation",
    title: "Skylight Installation",
    tagline: "Daylight, zero leaks.",
    img: "/img/roofing/card5.jpg",
    description: [
      "Skylights only leak when they're flashed wrong. We cut the opening, frame it, set a curb-mounted unit, and flash it in layers — the same way we'd want it on our own house.",
      "New installs and old leaky skylight replacements. Every one gets our no-leak guarantee in writing.",
    ],
    included: [
      "Curb-mounted skylight unit",
      "Framed & flashed opening",
      "Step & counter flashing",
      "Interior light shaft trim",
      "No-leak guarantee",
      "Old unit removal & disposal",
    ],
    steps: [
      { title: "Plan",
        desc: "We pick placement for max light and confirm rafter layout.", },
      { title: "Open",
        desc: "Roof opened, curb framed, unit set — all in one day.", },
      { title: "Flash",
        desc: "Layered flashing integrated with your shingles, sealed tight.", },
      { title: "Finish",
        desc: "Interior trim, water test, and the no-leak guarantee in writing.", },
    ],
    pricingHint: "Skylight installs from $1,499 including the unit. Replacements from $899.",
    faqs: [
      {
        q: "How much does a skylight cost installed?",
        a: "New installs run $1,499–$3,000 depending on size. Replacing an existing unit starts around $899.",
      },
      {
        q: "Will it leak?",
        a: "Not ours. Curb-mounted units with layered flashing, water-tested, and backed by a written no-leak guarantee.",
      },
      {
        q: "Can you replace my old cloudy skylight?",
        a: "Yes — we reuse the existing curb when it's sound, which keeps the cost down.",
      },
    ],
    meta: "Skylight installation in Nashville, TN. New installs & replacements, no-leak guarantee. Free estimates.",
  },
  {
    slug: "inspections-maintenance",
    title: "Inspections & Maintenance",
    tagline: "Small problems, caught early.",
    img: "/img/roofing/card6.jpg",
    description: [
      "Most roof failures start as a $200 fix nobody noticed. Our biannual inspections catch cracked flashing, lifted shingles, and clogged valleys before they become ceiling stains.",
      "Maintenance plan members get priority storm response and discounted repairs — the roof gets looked after whether you remember or not.",
    ],
    included: [
      "21-point roof inspection",
      "Photo report every visit",
      "Sealant touch-ups",
      "Debris & valley clearing",
      "Gutter & flashing check",
      "Priority storm response",
    ],
    steps: [
      { title: "Schedule",
        desc: "Spring and fall visits, booked a year out so you never think about it.", },
      { title: "Inspect",
        desc: "We walk the full roof and photograph every concern.", },
      { title: "Tune up",
        desc: "Minor sealant and fastener fixes done on the spot.", },
      { title: "Report",
        desc: "Photo report with anything to watch — and firm quotes if work is needed.", },
    ],
    pricingHint: "One-time inspections from $149. Biannual maintenance plans from $39/mo.",
    faqs: [
      {
        q: "How much is a roof inspection?",
        a: "$149 for a full 21-point inspection with photo report. Free with any repair or replacement quote.",
      },
      {
        q: "How often should my roof be inspected?",
        a: "Twice a year in Tennessee — spring after storm season, fall before winter. That's what the plan covers.",
      },
      {
        q: "What does the maintenance plan include?",
        a: "Two inspections a year, on-the-spot minor fixes, photo reports, discounted repairs, and priority scheduling after storms.",
      },
    ],
    meta: "Roof inspections & maintenance in Nashville, TN. Biannual plans from $39/mo. Free estimates.",
  },
];

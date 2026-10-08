export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  img: string;
  body: string[];
}

export const POSTS: Post[] = [
  {
    slug: "repair-or-replace-roof",
    title: "Repair or Replace? How We Make the Call",
    excerpt:
      "The honest framework our crew uses on every roof — so you never pay for a replacement you didn't need.",
    date: "September 28, 2026",
    readTime: "4 min read",
    img: "/img/roofing/extra1.jpg",
    body: [
      "The most expensive sentence in roofing is 'you need a whole new roof' — especially when you don't. Here's exactly how we decide between a repair and a replacement on every job.",
      "First: age. An architectural shingle roof in Middle Tennessee lasts 20 to 25 years. Under 12 years old with isolated damage? Almost always a repair. Over 20 with widespread wear? Replacement is usually the honest answer.",
      "Second: scope. One leak around a pipe boot is a $400 fix. But if we're finding brittle shingles, granule loss in the gutters, and soft decking in three different spots, patching becomes throwing good money after bad. We photograph everything so you see what we see.",
      "Third: math. If a repair costs more than about 25% of a replacement and the roof is past 15 years, replacement wins on value. We'll show you both numbers side by side — no pressure either way.",
      "The rule we hold ourselves to: we'd rather do a $500 repair today and earn your replacement in eight years than sell you a roof you don't need. That's how you get 120+ five-star reviews.",
    ],
  },
  {
    slug: "hail-damage-insurance-claim",
    title: "Hail Hit Your Roof? Don't File the Claim Yet",
    excerpt:
      "What to do in the 72 hours after a hailstorm — in the right order — so your claim actually covers the work.",
    date: "September 14, 2026",
    readTime: "3 min read",
    img: "/img/roofing/extra2.jpg",
    body: [
      "After every big hailstorm in Nashville, the same thing happens: homeowners file claims blind, adjusters come out alone, and half the damage gets missed. Here's the order that actually works.",
      "Step one: get a free inspection before you call your insurer. We document bruised shingles, dented vents, and cracked flashing the way adjusters need to see it — close-ups, measurements, slope-by-slope. This documentation is the difference between approval and denial.",
      "Step two: file with evidence in hand. When you can say 'here are 47 documented hail hits on the south slope,' the conversation changes completely.",
      "Step three: have us meet the adjuster on the roof. We're not there to argue — we're there to point at damage they might walk past. Adjusters see dozens of roofs a week; a second set of trained eyes helps everyone.",
      "What not to do: sign anything from a door-knocker the day after the storm. Storm chasers want your claim check, not your roof. Local crews with a real address are still here when the warranty matters.",
    ],
  },
  {
    slug: "roof-maintenance-checklist-fall",
    title: "The 15-Minute Fall Roof Check Every Homeowner Should Do",
    excerpt:
      "Five things to look at from the ground before winter — and the two that mean you should call us.",
    date: "August 30, 2026",
    readTime: "3 min read",
    img: "/img/roofing/extra3.jpg",
    body: [
      "You don't need to climb up there. From the ground with a pair of binoculars, you can spot 80% of roof problems in about fifteen minutes. Here's the checklist we give our maintenance plan customers.",
      "One: look for missing or lifted shingles, especially along ridges and edges where wind grabs first. Two: check the gutters for shingle granules — a handful is normal aging, a pile means the shingles are giving up. Three: scan flashing around chimneys and vents for gaps or rust.",
      "Four: look at the valleys where two slopes meet. Debris piled in a valley traps water and rots shingles from the inside. Five: check for dark streaks or moss — cosmetic at first, but moss lifts shingles over time.",
      "The two that mean 'call us now': any shingle actually missing (decking exposed to rain), and any water stain on a ceiling inside. Both get worse fast and both are cheap to fix early.",
      "Do this every fall and spring and your roof will last years longer. Or join the maintenance plan and we'll do it for you — biannual inspections, photo reports, and minor fixes on the spot.",
    ],
  },
];

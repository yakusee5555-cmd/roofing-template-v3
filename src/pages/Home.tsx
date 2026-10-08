import Hero from "../components/Hero";
import { Contact, Reviews } from "../components/Sections";
import { FullBleed, Pricing, Stacked, Work } from "../components/Showcase";
import { Marquee } from "../components/MotionBits";
import { RouteFX } from "../components/PageBits";

const MARQUEE_ITEMS = [
  "Roof Replacement",
  "Roof Repair",
  "Storm Restoration",
  "Metal Roofing",
  "Skylights",
  "Inspections",
  "Nashville",
  "Franklin",
  "Brentwood",
  "Murfreesboro",
  "Free Inspections",
];

export default function Home() {
  return (
    <>
      <RouteFX
        title="IronPeak Roofing | Roof Replacement & Repair in Nashville, TN"
        description="IronPeak Roofing — roof replacement, repairs & storm restoration across Nashville, TN. Free inspections. Call (615) 555-0177."
      />
      <Hero />
      <Marquee items={MARQUEE_ITEMS} />
      <Stacked />
      <FullBleed />
      <Work />
      <Pricing />
      <Reviews />
      <Contact />
    </>
  );
}

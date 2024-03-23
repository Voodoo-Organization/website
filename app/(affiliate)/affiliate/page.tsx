export const metadata = {
  title: "Affiliate Program",
  description: "Page description",
};

import AffiliateHero from "@/components/affiliate-hero";
import Link from "next/link";

export default function Pricing() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          {/* <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h1">Affiliate Program</h2>
            <h2 className="h2 !text-[#006AFF]">Coming soon</h2>
          </div> */}
          <AffiliateHero />
        </div>
      </div>
    </section>
  );
}

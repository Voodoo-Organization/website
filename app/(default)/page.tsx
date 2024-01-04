export const metadata = {
  title: "Voodoo",
  description: "Page description",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import FeaturesBlocks from "@/components/features-blocks";
import Testimonials from "@/components/testimonials";
import Newsletter from "@/components/newsletter";
import Shorts from "@/components/shorts";

export default function Home() {
  return (
    <>
      <Hero />
      <Shorts />
      <FeaturesBlocks />
      {/* <Features /> */}
      <Testimonials />
      <Newsletter />
    </>
  );
}

export const metadata = {
  title: "Voodoo",
  description:
    "Voodoo is an AI automation tool for YouTubers that automatically creates, schedules and uploads viral short clips from your long-form videos.",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import FeaturesBlocks from "@/components/features-blocks";
import Testimonials from "@/components/testimonials";
import Newsletter from "@/components/newsletter";
import Shorts from "@/components/shorts";
import Zigzag from "@/components/zigzag";

export default function Home() {
  return (
    <>
      <Hero />
      <Shorts />
      <FeaturesBlocks />
      <Zigzag />
      {/* <Features /> */}
      {/* <Testimonials /> */}
      {/* <Newsletter /> */}
    </>
  );
}

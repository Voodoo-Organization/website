import Blog from "@/components/blog";
import Link from "next/link";

export const metadata = {
  title: "Blogs",
  description:
    "Here you can find all you need to know about your YouTube channel and how to grow it.",
};

export default function Pricing() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2">Blog</h2>
          </div>
          <Blog />
        </div>
      </div>
    </section>
  );
}

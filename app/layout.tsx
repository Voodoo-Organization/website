import "./css/style.css";

import { Inter } from "next/font/google";

import Header from "@/components/ui/header";
import Banner from "@/components/banner";
import Footer from "@/components/ui/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Voodoo",
  description:
    "Voodoo is an AI automation tool for YouTubers that automatically creates, schedules and uploads viral short clips from your long-form videos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="facebook-domain-verification"
          content="gz1z89frahu7t537pjl82qpvmm1i18"
        />
      </head>
      <body
        className={`${inter.variable} font-inter antialiased bg-[#0E1015] text-gray-900 tracking-tight`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
          <Footer />
          {/* <Banner /> */}
        </div>
      </body>
    </html>
  );
}

"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Logo from "./logo";
import Dropdown from "@/components/utils/dropdown";
import MobileMenu from "./mobile-menu";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-[999] md:bg-opacity-100 transition duration-300 ease-in-out ${
        !top ? "bg-[#0E1015] backdrop-blur-sm" : "bg-[#0E1015] backdrop-blur-sm"
      }`}
    >
      <div className="max-w-[90%] mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20 py-12">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* <Logo /> */}
            <a className="flex flex-row gap-0 items-center" href="/">
              <img src="/images/v-blue.png" className="w-10" />
              <div className="font-medium text-blue-600 text-2xl ml-[-10px]">
                OODOO
              </div>
              {/* <div className="font-medium text-white text-xl">
                VOODOO
              </div> */}
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex lg:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/"
                  className="font-medium text-[#858BA0] hover:text-white px-5 py-3 flex items-center"
                >
                  Home
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/about"
                  className="font-medium text-[#858BA0] hover:text-white px-5 py-3 flex items-center"
                >
                  About
                </Link>
              </li> */}
              {/* <li>
                <Link
                  href="/blog"
                  className="font-medium text-[#858BA0] hover:text-white px-5 py-3 flex items-center"
                >
                  Blog
                </Link>
              </li> */}
              <li>
                <Link
                  href="/affiliate"
                  className="font-medium text-[#858BA0] hover:text-white px-5 py-3 flex items-center"
                >
                  Affiliate
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="font-medium text-[#858BA0] hover:text-white px-5 py-3 flex items-center"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="https://voodoo-fe.vercel.app/sign-in"
                  className="font-medium text-[#858BA0] hover:text-white px-5 py-3 flex items-center"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="https://voodoo-fe.vercel.app/sign-up"
                  target="_blank"
                  className="btn-sm px-6 py-3 text-white bg-[#006AFF] hover:bg-blue-800 ml-3"
                >
                  <span className="!text-white">Start Free Trial</span>
                  {/* <svg
                    className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg> */}
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

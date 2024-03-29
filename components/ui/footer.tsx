"use client";
import React, { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Email submitted successfully!");
        setEmail("");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Failed to submit email");
      }
    } catch (error) {
      console.error("Error submitting email:", error);
      setError("Error submitting email");
    }
  };

  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-zinc-900">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              {/* <Logo /> */}
              <a className="flex flex-row gap-0 items-center" href="/">
                <img src="/images/v-blue.png" className="w-10" />
                <div className="font-medium text-blue-600 text-2xl ml-[-10px]">
                  OODOO
                </div>
              </a>
            </div>
            <div className="text-sm text-[#858BA0]">
              <a
                href="/terms-of-service"
                className="text-[#858BA0] hover:text-[#006AFF] hover:underline"
              >
                Terms
              </a>{" "}
              ·{" "}
              <a
                href="/privacy-policy"
                className="text-[#858BA0] hover:text-[#006AFF] hover:underline"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          {/* 2nd block */}
          {/* <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-[#006AFF] font-medium mb-2">Products</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#0" className="text-[#858BA0] hover:text-[#006AFF]">
                  Web Studio
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-[#858BA0] hover:text-[#006AFF]">
                  DynamicBox Flex
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-[#858BA0] hover:text-[#006AFF]">
                  Programming Forms
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-[#858BA0] hover:text-[#006AFF]">
                  Integrations
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-[#858BA0] hover:text-[#006AFF]">
                  Command-line
                </a>
              </li>
            </ul>
          </div> */}

          {/* 3th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-[#006AFF] font-medium mb-2">Links</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="/" className="text-[#858BA0] hover:text-[#006AFF]">
                  Home
                </a>
              </li>
              {/* <li className="mb-2">
                <a href="#0" className="text-[#858BA0] hover:text-[#006AFF]">
                  About us
                </a>
              </li> */}
              <li className="mb-2">
                <a
                  href="/affiliate"
                  className="text-[#858BA0] hover:text-[#006AFF]"
                >
                  Affiliate
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/pricing"
                  className="text-[#858BA0] hover:text-[#006AFF]"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* 4rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-[#006AFF] font-medium mb-2">Resources</h6>
            <ul className="text-sm">
              {/* <li className="mb-2">
                <a href="/blog" className="text-[#858BA0] hover:text-[#006AFF]">
                  Blog
                </a>
              </li> */}
              <li className="mb-2">
                <a
                  href="/privacy-policy"
                  className="text-[#858BA0] hover:text-[#006AFF]"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/terms-of-service"
                  className="text-[#858BA0] hover:text-[#006AFF]"
                >
                  Terms of Service
                </a>
              </li>
              {/* <li className="mb-2">
                <a href="#0" className="text-[#858BA0] hover:text-[#006AFF]">
                  Support Center
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-[#858BA0] hover:text-[#006AFF]">
                  Documentation
                </a>
              </li> */}
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-[#006AFF] font-medium mb-2">Subscribe</h6>
            <p className="text-sm text-[#858BA0] mb-4">
              Be the first to know about our new features and updates.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <label className="block text-sm sr-only" htmlFor="newsletter">
                    Email
                  </label>
                  <div className="relative flex items-center max-w-xs">
                    <input
                      id="newsletter"
                      type="email"
                      className="form-input w-full text-white px-3 py-2 pr-12 text-sm bg-transparent"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button
                      type="submit"
                      className="absolute inset-0 left-auto"
                      aria-label="Subscribe"
                    >
                      <span
                        className="absolute inset-0 right-auto w-px -ml-px my-2 bg-zinc-800"
                        aria-hidden="true"
                      ></span>
                      <svg
                        className="w-3 h-3 mx-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#006AFF"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                          fillRule="nonzero"
                        />
                      </svg>
                    </button>
                  </div>
                  {message && (
                    <p className="mt-2 text-green-600 text-sm">{message}</p>
                  )}
                  {error && (
                    <p className="mt-2 text-red-600 text-sm">{error}</p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t  border-zinc-900">
          {/* Social as */}
          {/* <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a
                href="#0"
                className="flex justify-center items-center text-[#858BA0] hover:text-white bg-zinc-900 hover:bg-blue-500 rounded-full shadow"
                aria-label="Twitter"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                </svg>
              </a>
            </li>
            <li className="ml-4">
              <a
                href="#0"
                className="flex justify-center items-center text-[#858BA0] hover:text-white bg-zinc-900 hover:bg-blue-500 rounded-full shadow"
                aria-label="Github"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
              </a>
            </li>
            <li className="ml-4">
              <a
                href="#0"
                className="flex justify-center items-center text-[#858BA0] hover:text-white bg-zinc-900 hover:bg-blue-500 rounded-full shadow"
                aria-label="Facebook"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                </svg>
              </a>
            </li>
          </ul> */}

          {/* Copyrights note */}
          <div className="text-sm text-[#858BA0] mr-4">
            &copy; Voodoo.tube All rights reserved.
            <p>MAGOU INVESTMENTS LLC</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

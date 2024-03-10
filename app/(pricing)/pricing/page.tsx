"use client";
import { use, useEffect, useState } from "react";
import Tooltip from "@mui/material/Tooltip";

// export const metadata = {
//   title: "Pricing",
//   description: "Page description",
// };

import Link from "next/link";

export default function Pricing() {
  const data = [
    {
      featureName: "Processing Time",
      info: (
        <div>
          Processing time represents the duration needed to analyze your content
          using our AI model.
          <br />
          <br />
          For example, if you upload a 10-minute video, the processing time
          indicates how long it will take our AI model to handle that specific
          10-minute video, and in this case, it will be approximately 10
          minutes.
        </div>
      ),
      free: "60 minutes",
      basic: "150 minutes",
      pro: "3600 minutes",
    },
    {
      featureName: "Retention period",
      info: (
        <div>
          The retention period indicates how long your videos will be stored on
          our platform before automatic deletion.
          <br />
          <br />
          For instance, with a 7-day retention period in the free plan, your
          videos remain accessible for viewing or scheduling during this time.
          After 7 days, they are automatically removed to manage storage
          efficiently and align with your subscription level.
        </div>
      ),
      // info: (
      //   <div>
      //     The retention period is the duration during which your videos will be
      //     stored on our platform before being automatically removed.
      //     <br />
      //     <br />
      //     Let's take an example: If you're on the free plan with a 7-day
      //     retention period, it means that your videos will be accessible for
      //     viewing or scheduling for 7 days after you upload or publish them.
      //     After this 7-day period, the videos will be automatically deleted from
      //     the platform.
      //     <br />
      //     <br />
      //     This ensures that our platform efficiently manages storage space and
      //     keeps your content in line with your chosen subscription level.
      //   </div>
      // ),
      free: "7 days",
      basic: "30 days",
      pro: "90 days",
    },
    {
      featureName: "Auto AI 9:16 Cropping",
      free: "tick",
      basic: "tick",
      pro: "tick",
    },
    {
      featureName: "Auto Captioning",
      free: "tick",
      basic: "tick",
      pro: "tick",
    },
    {
      featureName: "Your Brand Colors",
      free: "tick",
      basic: "tick",
      pro: "tick",
    },
    {
      featureName: "Schedule From Existing Videos",
      free: "tick",
      basic: "tick",
      pro: "tick",
    },
    {
      featureName: "Auto Schedule",
      free: "",
      basic: "tick",
      pro: "tick",
    },
    {
      featureName: "Auto Upload",
      free: "",
      basic: "tick",
      pro: "tick",
    },
    {
      featureName: "Manual/Auto Publish Mode",
      free: "tick",
      basic: "tick",
      pro: "tick",
    },
    {
      featureName: "Remove Watermark",
      free: "",
      basic: "tick",
      pro: "tick",
    },
    {
      featureName: "Publishing Platforms",
      free: ["youtube-shorts"],
      basic: ["youtube-shorts", "tiktok", "instagram-reels", "facebook"],
      pro: ["youtube-shorts", "tiktok", "instagram-reels", "facebook"],
    },
    {
      featureName: "AI Stickers",
      free: "Coming soon",
      basic: "Coming soon",
      pro: "Coming soon",
    },
    {
      featureName: "Voice Translations",
      info: (
        <div>
          Experience authentic multilingual videos with our Voice Translation
          feature, allowing you to speak in English, Spanish, or any language
          while preserving your original voice and tone.
          <br />
          <br />
          Seamlessly transform your voice to sound as if you were speaking in
          another language, ensuring a natural and fluent experience across
          multiple languages.
        </div>
      ),
      // info: (
      //   <div>
      //     Unlock new opportunities and broaden your social presence with our
      //     Voice Translation Feature. Speak in English, Spanish, or any language,
      //     maintaining your original voice and tone. This powerful feature not
      //     only ensures authenticity but also enhances visibility, leading to
      //     more views. Expand your reach across different language channels, and
      //     tap into fresh possibilities for your content.
      //   </div>
      // ),
      free: "Coming soon",
      basic: "Coming soon",
      pro: "Coming soon",
    },
    {
      featureName: "Highlights",
      info: (
        <div>
          Automatically create captivating highlights from your long-form
          content.
          <br />
          <br />
          For example, generate a compilation of the most exciting moments, such
          as goals, from a lengthy football game into a concise and engaging
          highlight teaser.
        </div>
      ),
      free: "Coming soon",
      basic: "Coming soon",
      pro: "Coming soon",
    },
    {
      featureName: "Teasers",
      info: (
        <div>
          Automated creation & upload of highlights before you go live as a
          teaser to your audience.
          <br />
          <br />
          For example, if you are scheduled to go live on YouTube with ready
          made content at 16:00 pm, you can automatically create a teaser of the
          most exciting moments from your content and upload it to your social
          media channels at 15:00 pm to build anticipation and drive traffic to
          your live stream.
        </div>
      ),
      free: "Coming soon",
      basic: "Coming soon",
      pro: "Coming soon",
    },
  ];

  const options = [
    {
      value: 200,
      label: "200 minutes",
      price: 18,
    },
    {
      value: 400,
      label: "400 minutes",
      price: 36,
    },
    {
      value: 600,
      label: "600 minutes",
      price: 54,
    },
    {
      value: 800,
      label: "800 minutes",
      price: 72,
    },
    {
      value: 1000,
      label: "1000 minutes",
      price: 89,
    },
    {
      value: 1200,
      label: "1200 minutes",
      price: 105,
    },
    {
      value: 1400,
      label: "1400 minutes",
      price: 123,
    },
    {
      value: 1600,
      label: "1600 minutes",
      price: 140,
    },
    {
      value: 1800,
      label: "1800 minutes",
      price: 158,
    },
    {
      value: 2000,
      label: "2000 minutes",
      price: 175,
    },
    {
      value: 2200,
      label: "2200 minutes",
      price: 193,
    },
    {
      value: 2400,
      label: "2400 minutes",
      price: 210,
    },
    {
      value: 2600,
      label: "2600 minutes",
      price: 228,
    },
    {
      value: 2800,
      label: "2800 minutes",
      price: 245,
    },
    {
      value: 3000,
      label: "3000 minutes",
      price: 263,
    },
    {
      value: 3200,
      label: "3200 minutes",
      price: 280,
    },
    {
      value: 3400,
      label: "3400 minutes",
      price: 298,
    },
    {
      value: 3600,
      label: "3600 minutes",
      price: 315,
    },
  ];

  const [isYearly, setIsYearly] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [tableOffset, setTableOffset] = useState(0);

  const [starterPrice, setStarterPrice] = useState(9);

  const [proPrice, setProPrice] = useState(options[0].price);
  const [proDiscountedPrice, setProDiscountedPrice] = useState(
    Math.round((options[0].price * 10) / 12)
  );

  useEffect(() => {
    setProDiscountedPrice(Math.round((proPrice * 10) / 12));
  }, [proPrice]);

  const toggleSwitch = () => {
    setIsYearly((prevIsYearly) => !prevIsYearly);
  };

  useEffect(() => {
    document.title = "Pricing";

    const handleScroll = () => {
      const tableElement = document.getElementById("pricing-table");

      if (tableElement) {
        const rect = tableElement.getBoundingClientRect();
        const newOffset = rect.top + window.scrollY;

        setIsFixed(window.scrollY >= newOffset);
        console.log("Fixed", window.scrollY >= newOffset);
        setTableOffset(newOffset);

        console.log("tableOffset", newOffset, "window.scrollY", window.scrollY);
      }
    };

    const throttledHandleScroll = () => {
      // Throttle the scroll events using requestAnimationFrame for better performance
      window.requestAnimationFrame(handleScroll);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", throttledHandleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  const tablehHeaderStyle =
    "!text-2xl !transition-all !duration-250 !ease-in-out";
  const tablehTextStyle =
    "!text-3xl !transition-all !duration-250 !ease-in-out";
  const tablehButtonStyle =
    "!py-2 !text-sm !transition-all !duration-250 !ease-in-out";
  const tableHiddenTextStyle =
    "!hidden !transition-all !duration-250 !ease-in-out";

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h1">Pricing</h2>
            <div>
              {/* Monthly / Yearly Switch */}
              <div className="flex justify-center items-center mt-6">
                <div
                  onClick={() => setIsYearly(false)}
                  className={`monthly-text text-lg mx-3 ${
                    !isYearly ? "font-bold text-[#006AFF]" : "text-[#858BA0]"
                  }`}
                >
                  Monthly
                  {/* <div className="relative bottom-16 left-32 h-20" /> */}
                </div>
                <div
                  className="toggle relative inline-block w-auto align-middle select-none"
                  onClick={toggleSwitch}
                >
                  <input type="checkbox" checked={isYearly} readOnly />
                  <label></label>
                  {/* <div className="relative bottom-16 left-32 h-20" /> */}
                </div>
                <div
                  onClick={() => setIsYearly(true)}
                  className={`yearly-text text-lg mx-3 ${
                    isYearly ? "font-bold text-[#006AFF]" : "text-[#858BA0]"
                  }`}
                >
                  Yearly
                </div>
                <div className="hidden 2xl:block 3xl:hidden absolute top-[20%] left-[59%] w-full">
                  <img src="/images/2-months-free.png" />
                </div>
                <div className="hidden xl:block 2xl:hidden absolute top-[23%] left-[59%] w-full">
                  <img src="/images/2-months-free.png" />
                </div>
                <div className="hidden lg:block xl:hidden absolute top-[23%] left-[62%] w-full">
                  <img src="/images/2-months-free.png" />
                </div>
                <div className="hidden md:block lg:hidden absolute top-[23%] left-[64%] w-full">
                  <img src="/images/2-months-free.png" />
                </div>
                <div className="hidden sm:block md:hidden absolute top-[17%] left-[66%] w-full">
                  <img src="/images/2-months-free.png" />
                </div>
              </div>
              <div className="sm:hidden flex justify-center">
                <img src="/images/2-months-free-mobile.png" />
              </div>
              <div className="hidden 3xl:flex xl:hidden justify-center">
                <img src="/images/2-months-free-mobile.png" />
              </div>
            </div>
          </div>

          <table
            id="pricing-table"
            className={`table flex flex-row flex-no-wrap`}
          >
            <thead>
              <tr>
                <th>
                  <h1 className="text-2xl">Compare Plans</h1>
                  <p className="text-sm font-light text-[#858BA0]">
                    Choose your workspace plan according to your organisational
                    plan
                  </p>
                </th>
                {/* add hidden class if want to hide on mobile */}
                <th
                  className={`hidden sm:table-cell ${
                    isFixed ? tablehHeaderStyle : ""
                  }`}
                >
                  <h1
                    className={`${isFixed ? tablehHeaderStyle : "!text-3xl"}`}
                  >
                    Free
                  </h1>
                  <h1>
                    <div className="flex justify-center items-center">
                      <h1 className={`${isFixed ? tablehTextStyle : ""}`}>
                        $0
                      </h1>
                      <div className="text-sm font-light text-[#858BA0] ml-2">/ Lifetime</div>
                    </div>
                    <div
                      className={`text-sm font-light text-[#858BA0] py-2 ${
                        isFixed ? tableHiddenTextStyle : ""
                      }`}
                    >
                      Free forever
                    </div>
                  </h1>
                  <Link
                    href="/signup"
                    className={`btn-sm px-6 py-3 text-white bg-zinc-900 hover:bg-zinc-800 ${
                      isFixed ? tablehButtonStyle : ""
                    }`}
                  >
                    <div>Create an account</div>
                  </Link>
                  <div
                      className={`text-sm font-light text-center text-[#858BA0] py-2 ${
                        isFixed ? tableHiddenTextStyle : ""
                      }`}
                    >
                      No credit card required
                    </div>
                </th>
                <th className={`hidden sm:table-cell`}>
                  <h1
                    className={`${isFixed ? tablehHeaderStyle : "!text-3xl"}`}
                  >
                    Starter
                  </h1>
                  <h1>
                    {isYearly ? (
                      <div className="flex justify-center items-center">
                        <h1
                          className={`line-through !mx-2 !text-3xl !text-[#006AFF] ${
                            isFixed ? tablehTextStyle : ""
                          }`}
                        >
                          ${starterPrice}
                        </h1>{" "}
                        <h1 className="!text-4xl">${starterPrice} </h1>{" "}
                        <div className="text-sm font-light text-[#858BA0] ml-2">/ Month</div>
                      </div>
                    ) : (
                      <div
                        className={`flex justify-center items-center ${
                          isFixed ? tablehTextStyle : ""
                        }`}
                      >
                        <h1 className={`${isFixed ? tablehTextStyle : ""}`}>
                          ${starterPrice}
                        </h1>
                        <div className="text-sm font-light text-[#858BA0] ml-2">/ Month</div>
                      </div>
                    )}
                    <div
                      className={`text-sm font-light text-[#858BA0] py-2 ${
                        isFixed ? tableHiddenTextStyle : ""
                      }`}
                    >
                      For individual creators
                    </div>
                  </h1>
                  <Link
                    href="/signup"
                    className={`btn-sm px-6 py-3 text-white bg-[#006AFF] hover:bg-blue-800 ${
                      isFixed ? tablehButtonStyle : ""
                    }`}
                  >
                    <div>Start Free Trial</div>
                  </Link>
                </th>

                <th className={`hidden sm:table-cell`}>
                  <h1>
                    <h1
                      className={`${isFixed ? tablehHeaderStyle : "!text-3xl"}`}
                    >
                      Pro
                    </h1>
                    {isYearly ? (
                      <div className="flex justify-center items-center">
                        <h1
                          className={`line-through !mx-2 !text-3xl !text-[#006AFF] ${
                            isFixed ? tablehTextStyle : ""
                          }`}
                        >
                          ${proPrice}
                        </h1>{" "}
                        <h1 className={`${isFixed ? tablehTextStyle : ""}`}>
                          ${proDiscountedPrice}
                        </h1>{" "}
                        <div className="text-sm font-light text-[#858BA0] ml-2">/ Month</div>
                      </div>
                    ) : (
                      <div className="flex justify-center items-center">
                        <h1 className={`${isFixed ? tablehTextStyle : ""}`}>
                          ${proPrice}
                        </h1>
                        <div className="text-sm font-light text-[#858BA0] ml-2">/ Month</div>
                      </div>
                    )}
                    {/* <div className="text-sm text-[#858BA0]">/ Month</div> */}
                    <div
                      className={`text-sm font-light text-[#858BA0] py-2 ${
                        isFixed ? tableHiddenTextStyle : ""
                      }`}
                    >
                      For professional creators
                    </div>
                  </h1>

                  <select
                    className="cursor-pointer hover:bg-primary-600 hover:bg-opacity-20 bg-transparent text-white border-[1.5px] focus:ring-0 border-primary-600 w-full rounded-full mb-3 py-2"
                    defaultValue={options[0].value}
                    onChange={(e) => {
                      const value = parseInt(e.target.value);
                      const price = options.find(
                        (option) => option.value === value
                      )?.price;
                      setProPrice(price as number);
                      setProDiscountedPrice(Math.round(proPrice * 10));
                    }}
                  >
                    {options.map((option, index) => {
                      return (
                        <option key={index} value={option.value}>
                          {option.label}
                        </option>
                      );
                    })}
                  </select>

                  <Link
                    href="/signup"
                    className={`btn-sm px-6 py-3 text-white bg-[#006AFF] hover:bg-blue-800 ${
                      isFixed ? tablehButtonStyle : ""
                    }`}
                  >
                    <div>Start Free Trial</div>
                  </Link>
                </th>

                {/* Mobile version */}
                <th className=" sm:hidden">
                  <div className="flex justify-between">
                    <h1
                      style={{
                        fontSize: "2rem",
                      }}
                    >
                      Free
                      <div className="text-sm text-[#858BA0] py-2">
                        / Lifetime
                      </div>
                    </h1>
                    <h1
                      style={{
                        fontSize: "2rem",
                      }}
                    >
                      {isYearly ? <>${starterPrice}</> : <>${starterPrice}</>}
                      <div className="text-sm text-[#858BA0] py-2">/ Month</div>
                    </h1>
                    <h1
                      style={{
                        fontSize: "2rem",
                      }}
                    >
                      {isYearly ? <>${proDiscountedPrice}</> : <>${proPrice}</>}
                      <div className="text-sm text-[#858BA0] py-2">/ Month</div>
                    </h1>
                  </div>

                  <select
                    className="cursor-pointer hover:bg-primary-600 hover:bg-opacity-20 bg-transparent text-white border-[1.5px] focus:ring-0 border-primary-600 w-full rounded-full mb-3 py-2"
                    defaultValue={options[0].value}
                    onChange={(e) => {
                      const value = parseInt(e.target.value);
                      const price = options.find(
                        (option) => option.value === value
                      )?.price;
                      setProPrice(price as number);
                      setProDiscountedPrice(Math.round(proPrice * 10));
                    }}
                  >
                    {options.map((option, index) => {
                      return (
                        <option key={index} value={option.value}>
                          {option.label}
                        </option>
                      );
                    })}
                  </select>
                  <Link
                    href="/signup"
                    className="btn-sm px-6 py-2 text-white bg-[#006AFF] hover:bg-blue-800"
                  >
                    <div>Continue</div>
                  </Link>
                </th>
                {/* <th className=" sm:hidden"></th>
                <th className=" sm:hidden">
                  <h1>
                    $79{" "}
                    <div className="text-sm text-[#858BA0]">/ Monthly</div>
                  </h1>
                  <Link
                    href="/signup"
                    className="btn-sm px-6 py-3 text-white bg-[#006AFF] hover:bg-blue-800"
                  >
                    <div>Start Free Trial</div>
                  </Link>
                </th> */}
              </tr>
            </thead>
            <tbody className="flex-1 sm:flex-none">
              {data.length &&
                data.map((row, index) => {
                  return (
                    <tr key={index}>
                      <td className="bg-[#060709] text-white">
                        <div className="flex flex-row hustify-between items-center gap-2">
                          <div>{row.featureName}</div>
                          {/* check if there is info key, and if there is add (i) icon with Tooltip */}
                          {row.info && (
                            <Tooltip
                              className=" cursor-pointer"
                              enterTouchDelay={0}
                              title={
                                <div className="!text-sm p-2">{row.info}</div>
                              }
                              id={"tooltip-" + index.toString()}
                              componentsProps={{
                                tooltip: {
                                  sx: {
                                    bgcolor: "#18181b",
                                  },
                                },
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#006AFF"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-info"
                              >
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 16v-4" />
                                <path d="M12 8h.01" />
                              </svg>
                            </Tooltip>
                          )}
                        </div>
                      </td>
                      <td>
                        {row.free === "tick" ? (
                          <div className="flex justify-between sm:justify-center items-center">
                            {" "}
                            <div className="sm:hidden pr-2">Free</div>{" "}
                            <CheckIcon />{" "}
                          </div>
                        ) : row.free === "" ? (
                          <div className="flex justify-between sm:justify-center items-center">
                            {" "}
                            <div className="sm:hidden pr-2">Free</div>
                            <XIcon />{" "}
                          </div>
                        ) : Array.isArray(row.free) ? (
                          <div className="flex justify-between sm:justify-center items-center">
                            <div className="sm:hidden pr-2">Free</div>
                            {Social(row.free)}
                          </div>
                        ) : (
                          <div className="flex justify-between sm:justify-center items-center">
                            <div className="sm:hidden pr-2">Free</div>
                            {row.free}
                          </div>
                        )}
                      </td>
                      <td>
                        {row.basic === "tick" ? (
                          <div className="flex justify-between sm:justify-center items-center">
                            {" "}
                            <div className="sm:hidden pr-2">Basic</div>
                            <CheckIcon />{" "}
                          </div>
                        ) : row.basic === "" ? (
                          <div className="flex justify-between sm:justify-center items-center">
                            {" "}
                            <div className="sm:hidden pr-2">Basic</div>
                            <XIcon />{" "}
                          </div>
                        ) : Array.isArray(row.basic) ? (
                          <div className="flex justify-between sm:justify-center items-center">
                            <div className="sm:hidden pr-2">Basic</div>
                            {Social(row.basic)}
                          </div>
                        ) : (
                          <div className="flex justify-between sm:justify-center items-center">
                            <div className="sm:hidden pr-2">Basic</div>
                            {row.basic}
                          </div>
                        )}
                      </td>
                      <td>
                        {row.pro === "tick" ? (
                          <div className="flex justify-between sm:justify-center items-center">
                            {" "}
                            <div className="sm:hidden pr-2">Pro</div>
                            <CheckIcon />{" "}
                          </div>
                        ) : row.pro === "" ? (
                          <div className="flex justify-between sm:justify-center items-center">
                            {" "}
                            <div className="sm:hidden pr-2">Pro</div>
                            <XIcon />{" "}
                          </div>
                        ) : Array.isArray(row.pro) ? (
                          <div className="flex justify-between sm:justify-center items-center">
                            <div className="sm:hidden pr-2">Pro</div>
                            {Social(row.pro)}
                          </div>
                        ) : (
                          <div className="flex justify-between sm:justify-center items-center">
                            <div className="sm:hidden pr-2">Pro</div>
                            {row.pro}
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
            <tfoot className="sm:hidden">
              <tr>
                <th>
                  <h1 className="text-4xl text-center">
                    Free <div className="text-sm font-light text-[#858BA0] ml-2"> / Month</div>
                  </h1>
                  <Link
                    href="/signup"
                    className="btn-sm px-6 py-3 text-white bg-[#006AFF] hover:bg-blue-800"
                  >
                    <div>Select</div>
                  </Link>
                </th>
                <th>
                  <h1>
                    $49 <div className="text-sm font-light text-[#858BA0] ml-2">/ Month</div>
                  </h1>
                  <Link
                    href="/signup"
                    className="btn-sm px-6 py-3 text-white bg-[#006AFF] hover:bg-blue-800"
                  >
                    <div>Start Free Trial</div>
                  </Link>
                </th>
                <th>
                  <h1>
                    $79 <div className="text-sm font-light text-[#858BA0] ml-2">/ Month</div>
                  </h1>
                  <Link
                    href="/signup"
                    className="btn-sm px-6 py-3 text-white bg-[#006AFF] hover:bg-blue-800"
                  >
                    <div>Start Free Trial</div>
                  </Link>
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#006AFF"
      stroke="#0e1015"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-badge-check"
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-x"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function Social(platforms: string[]) {
  return (
    <div className="flex justify-center items-center gap-2">
      {platforms.map((platform, index) => {
        return (
          <div key={index} className="flex justify-center items-center">
            <img width={24} src={`/images/${platform}.png`} />
          </div>
        );
      })}
    </div>
  );
}

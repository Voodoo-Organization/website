"use client";
import { useState } from "react";

// export const metadata = {
//   title: "Pricing",
//   description: "Page description",
// };

import Link from "next/link";

export default function Pricing() {
  const data = [
    {
      featureName: "Processing Time",
      free: "300 minutes",
      basic: "3600 minutes",
      pro: "7200 minutes",
    },
    {
      featureName: "Feature 1",
      free: "tick",
      basic: "tick",
      pro: "tick",
    },
    {
      featureName: "Feature 1",
      free: "tick",
      basic: "tick",
      pro: "tick",
    },
    {
      featureName: "Feature 1",
      free: "tick",
      basic: "tick",
      pro: "tick",
    },
    {
      featureName: "Feature 1",
      free: "",
      basic: "tick",
      pro: "tick",
    },
    {
      featureName: "Feature 1",
      free: "",
      basic: "tick",
      pro: "tick",
    },
    {
      featureName: "Feature 1",
      free: "",
      basic: "tick",
      pro: "tick",
    },
    {
      featureName: "Feature 1",
      free: "",
      basic: "tick",
      pro: "tick",
    },
    {
      featureName: "Feature 1",
      free: "",
      basic: "tick",
      pro: "tick",
    },
    {
      featureName: "Feature 1",
      free: "",
      basic: "tick",
      pro: "tick",
    },
    {
      featureName: "Feature 1",
      free: "",
      basic: "tick",
      pro: "tick",
    },
    {
      featureName: "Feature 1",
      free: "",
      basic: "tick",
      pro: "tick",
    },
  ];

  const [isYearly, setIsYearly] = useState(false);

  const toggleSwitch = () => {
    setIsYearly((prevIsYearly) => !prevIsYearly);
  };

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
                <div className="hidden xl:block absolute top-[26%] left-[59%] w-full">
                  <img src="/images/2-months-free.png" />
                </div>
                <div className="hidden lg:block xl:hidden absolute top-[26%] left-[62%] w-full">
                  <img src="/images/2-months-free.png" />
                </div>
                <div className="hidden md:block lg:hidden absolute top-[26%] left-[64%] w-full">
                  <img src="/images/2-months-free.png" />
                </div>
                <div className="hidden sm:block md:hidden absolute top-[20%] left-[66%] w-full">
                  <img src="/images/2-months-free.png" />
                </div>
              </div>
              <div className="sm:hidden flex justify-center">
                <img src="/images/2-months-free-mobile.png" />
              </div>
            </div>
          </div>

          <table className="table flex flex-row flex-no-wrap">
            <thead>
              <tr>
                {/* <th className="mobile-header"></th> */}
                <th>
                  <h1 className="text-2xl">Compare Plans</h1>
                  <p className="text-sm text-[#858BA0]">
                    Choose your workspace plan according to your organisational
                    plan
                  </p>
                </th>
                {/* add hidden class if want to hide on mobile */}
                <th className="hidden sm:table-cell">
                  <h1 className="text-2xl">
                    Free{" "}
                    <span className="text-sm text-[#858BA0]"> / Lifetime</span>
                  </h1>
                  <Link
                    href="/signup"
                    className="btn-sm px-6 py-3 text-white bg-zinc-900 hover:bg-zinc-800"
                  >
                    <span>Create an account</span>
                  </Link>
                </th>
                <th className="hidden sm:table-cell">
                  <h1 className="text-2xl">
                    {isYearly ? "$490 " : "$49 "}
                    <span className="text-sm text-[#858BA0]">/ Monthly</span>
                  </h1>
                  <Link
                    href="/signup"
                    className="btn-sm px-6 py-3 text-white bg-[#006AFF] hover:bg-blue-800"
                  >
                    <span>Start Free Trial</span>
                  </Link>
                </th>
                <th className="hidden sm:table-cell">
                  <h1 className="text-2xl">
                    {isYearly ? "$790 " : "$79 "}
                    <span className="text-sm text-[#858BA0]">/ Monthly</span>
                  </h1>
                  <Link
                    href="/signup"
                    className="btn-sm px-6 py-3 text-white bg-[#006AFF] hover:bg-blue-800"
                  >
                    <span>Start Free Trial</span>
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
                      <span className="text-sm text-[#858BA0]">
                        <br /> / Lifetime
                      </span>
                    </h1>
                    <h1
                      style={{
                        fontSize: "2rem",
                      }}
                    >
                      {isYearly ? "$490 " : "$49 "}
                      <span className="text-sm text-[#858BA0]">
                        <br /> / Month
                      </span>
                    </h1>
                    <h1
                      style={{
                        fontSize: "2rem",
                      }}
                    >
                      {isYearly ? "$790 " : "$79 "}
                      <span className="text-sm text-[#858BA0]">
                        <br /> / Month
                      </span>
                    </h1>
                  </div>

                  <Link
                    href="/signup"
                    className="btn-sm px-6 py-2 text-white bg-[#006AFF] hover:bg-blue-800"
                  >
                    <span>Continue</span>
                  </Link>
                </th>
                {/* <th className=" sm:hidden"></th>
                <th className=" sm:hidden">
                  <h1 className="text-2xl">
                    $79{" "}
                    <span className="text-sm text-[#858BA0]">/ Monthly</span>
                  </h1>
                  <Link
                    href="/signup"
                    className="btn-sm px-6 py-3 text-white bg-[#006AFF] hover:bg-blue-800"
                  >
                    <span>Start Free Trial</span>
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
                        {row.featureName}
                      </td>
                      <td>
                        {row.free === "tick" ? (
                          <div className="flex justify-between sm:justify-center items-center">
                            {" "}
                            <span className="sm:hidden pr-2">Free</span>{" "}
                            <CheckIcon />{" "}
                          </div>
                        ) : row.free === "" ? (
                          <div className="flex justify-between sm:justify-center items-center">
                            {" "}
                            <span className="sm:hidden pr-2">Free</span>
                            <XIcon />{" "}
                          </div>
                        ) : (
                          <div className="flex justify-between sm:justify-center items-center">
                            <span className="sm:hidden pr-2">Free</span>
                            {row.free}
                          </div>
                        )}
                      </td>
                      <td>
                        {row.basic === "tick" ? (
                          <div className="flex justify-between sm:justify-center items-center">
                            {" "}
                            <span className="sm:hidden pr-2">Basic</span>
                            <CheckIcon />{" "}
                          </div>
                        ) : row.basic === "" ? (
                          <div className="flex justify-between sm:justify-center items-center">
                            {" "}
                            <span className="sm:hidden pr-2">Basic</span>
                            <XIcon />{" "}
                          </div>
                        ) : (
                          <div className="flex justify-between sm:justify-center items-center">
                            <span className="sm:hidden pr-2">Basic</span>
                            {row.basic}
                          </div>
                        )}
                      </td>
                      <td>
                        {row.pro === "tick" ? (
                          <div className="flex justify-between sm:justify-center items-center">
                            {" "}
                            <span className="sm:hidden pr-2">Pro</span>
                            <CheckIcon />{" "}
                          </div>
                        ) : row.pro === "" ? (
                          <div className="flex justify-between sm:justify-center items-center">
                            {" "}
                            <span className="sm:hidden pr-2">Pro</span>
                            <XIcon />{" "}
                          </div>
                        ) : (
                          <div className="flex justify-between sm:justify-center items-center">
                            <span className="sm:hidden pr-2">Pro</span>
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
                    Free{" "}
                    <span className="text-sm text-[#858BA0]"> / Lifetime</span>
                  </h1>
                  <Link
                    href="/signup"
                    className="btn-sm px-6 py-3 text-white bg-[#006AFF] hover:bg-blue-800"
                  >
                    <span>Select</span>
                  </Link>
                </th>
                <th>
                  <h1 className="text-2xl">
                    $49{" "}
                    <span className="text-sm text-[#858BA0]">/ Monthly</span>
                  </h1>
                  <Link
                    href="/signup"
                    className="btn-sm px-6 py-3 text-white bg-[#006AFF] hover:bg-blue-800"
                  >
                    <span>Start Free Trial</span>
                  </Link>
                </th>
                <th>
                  <h1 className="text-2xl">
                    $79{" "}
                    <span className="text-sm text-[#858BA0]">/ Monthly</span>
                  </h1>
                  <Link
                    href="/signup"
                    className="btn-sm px-6 py-3 text-white bg-[#006AFF] hover:bg-blue-800"
                  >
                    <span>Start Free Trial</span>
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

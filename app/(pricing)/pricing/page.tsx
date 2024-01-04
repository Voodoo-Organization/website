export const metadata = {
  title: "Pricing",
  description: "Page description",
};

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

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h1">Pricing</h2>
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
                <th className="hidden sm:table-cell">
                  <h1 className="text-2xl">
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
                <th className="hidden sm:table-cell">
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
                <th className="hidden sm:table-cell">
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
                            <span className="sm:hidden pr-2">Free</span>
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
                            <span className="sm:hidden pr-2">Free</span>
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

// function CheckIcon() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="18"
//       height="18"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="#006AFF"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="lucide lucide-check"
//     >
//       <path d="M20 6 9 17l-5-5" />
//     </svg>
//   );
// }

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

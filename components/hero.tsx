"use client";

export default function Hero() {
  const logos = [
    "/images/android-tv.png",
    "/images/apple-tv.png",
    "/images/apple-watch.png",
    "/images/iPhone.png",
    "/images/android.png",
  ];

  return (
    <section className="relative md:h-[100svh] md:flex md:flex-col md:justify-between md:items-center md:px-16 md:py-6">
      {/* Illustration behind hero content */}
      {/* <div
        className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1 bottom-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#ff0066" offset="0%" />
              <stop stopColor="#ff0066" offset="77.402%" />
              <stop stopColor="#ff0066" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="32" />
          </g>
        </svg>
      </div> */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="flex flex-col justify-between items-center md:pt-12">
          <div className="pt-32 md:pt-24 md:flex md:flex-row md:items-center gap-16">
            {/* Section header */}
            <div className="text-center md:text-start w-full">
              <div className="flex flex-row gap-2 items-center justify-center md:justify-start w-full mb-4">
                <h1
                  className="text-3xl md:text-4xl font-bold text-white tracking-wider"
                  data-aos="zoom-y-out"
                >
                  1 Video
                  {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                wonderful
              </span> */}
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-move-right"
                  data-aos="zoom-y-out"
                  data-aos-delay="300"
                >
                  <path d="M18 8L22 12L18 16" />
                  <path d="M2 12H22" />
                </svg>
                <h1
                  className="text-3xl md:text-4xl font-bold text-white tracking-wider"
                  data-aos="zoom-y-out"
                >
                  10 Shorts
                </h1>
              </div>
              <div className="max-w-3xl mx-auto">
                <p
                  className="text-lg text-[#858BA0] mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  Reach more people by doing less work.
                  <span className="hidden md:block">
                    Let Voodoo's AI automation process create, schedule and
                    upload viral clips for you
                  </span>
                </p>
                {/* Social Platforms */}
                <div className="flex flex-row items-center justify-center md:justify-start pb-4 gap-6">
                  <img
                    src="/images/youtube.png"
                    width={32}
                    alt="YouTube"
                    data-aos="zoom-y-out"
                    data-aos-delay="300"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-move-right"
                    data-aos="zoom-y-out"
                    data-aos-delay="300"
                  >
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
                  </svg>
                  <img
                    src="/images/youtube-shorts.png"
                    width={32}
                    alt="YouTube Shorts"
                    data-aos="zoom-y-out"
                    data-aos-delay="300"
                  />
                  <img
                    src="/images/tiktok.png"
                    width={32}
                    alt="TikTok"
                    data-aos="zoom-y-out"
                    data-aos-delay="300"
                  />
                  <img
                    src="/images/instagram-reels.png"
                    width={32}
                    alt="Instagram Reels"
                    data-aos="zoom-y-out"
                    data-aos-delay="300"
                  />
                  <img
                    src="/images/facebook.png"
                    width={32}
                    alt="Facebook"
                    data-aos="zoom-y-out"
                    data-aos-delay="300"
                  />
                </div>
                <div
                  className="max-w-xs mx-auto sm:max-w-none sm:flex justify-center md:justify-start pt-8 md:pt-4"
                  data-aos="zoom-y-out"
                  data-aos-delay="300"
                >
                  {/* <div>
                    <a
                      className="btn text-white bg-[#006AFF] hover:bg-blue-800 w-full mb-4 sm:w-auto sm:mb-0"
                      href="#0"
                    >
                      Start free trial
                    </a>
                  </div> */}

                  <form className="w-full max-w-[500px]">
                    <div className="hidden md:flex flex-wrap">
                      <div className="w-full">
                        <label
                          className="block text-sm sr-only"
                          htmlFor="newsletter"
                        >
                          Get Free Clips
                        </label>
                        <div className="input-wrapper relative flex items-center md:w-[100%] bg-[#0E1015]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#006AFF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-link ml-3"
                          >
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                          </svg>
                          <input
                            id="newsletter"
                            type="url"
                            className="form-input hero-input w-full text-white px-3 py-3 pr-12 text-sm bg-[#0E1015]"
                            placeholder="YouTube Video Link"
                            required
                          />

                          <button
                            type="submit"
                            className="hero-btn btn-text absolute inset-0 left-auto"
                            aria-label="Subscribe"
                          >
                            {/* Blue Wave Circles */}
                            <div className="blue-wave z-[-1] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                              <span className="z-[-1] absolute w-24 h-24 opacity-5 flex items-center justify-center bg-[#006AFF] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                              <span className="z-[-1] absolute w-32 h-32 opacity-5 flex items-center justify-center bg-[#006AFF] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                              <span className="z-[-1] absolute w-40 h-40 opacity-5 flex items-center justify-center bg-[#006AFF] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                              <span className="z-[-1] absolute w-48 h-48 opacity-5 flex items-center justify-center bg-[#006AFF] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                              <span className="z-[-1] absolute w-56 h-56 opacity-5 flex items-center justify-center bg-[#006AFF] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                              <span className="z-[-1] absolute w-64 h-64 opacity-5 flex items-center justify-center bg-[#006AFF] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                              <span className="z-[-1] absolute w-72 h-72 opacity-5 flex items-center justify-center bg-[#006AFF] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                            </div>

                            <div className="flex flex-row gap-2 items-center bg-[#006AFF] rounded-r-full py-3">
                              <p className="text-white px-4">Get Free Clips</p>
                            </div>
                          </button>
                        </div>
                        {/* Success message */}
                        {/* <p className="mt-2 text-green-600 text-sm">Thanks for subscribing!</p> */}
                      </div>
                    </div>
                    {/* Mobile Version */}
                    <div className="flex md:hidden flex-wrap">
                      <div className="w-full">
                        <label
                          className="block text-sm sr-only"
                          htmlFor="newsletter"
                        >
                          Get Free Clips
                        </label>
                        <div className="input-wrapper relative flex items-center md:w-96">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#006AFF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-link ml-3"
                          >
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                          </svg>
                          <input
                            id="newsletter"
                            type="url"
                            className="form-input hero-input  w-full text-white px-3 py-3 text-sm bg-transparent"
                            placeholder="YouTube Video URL"
                            required
                          />
                        </div>
                        <div className="flex flex-row gap-2 items-center justify-between mt-4">
                          <button
                            type="submit"
                            className="btn-text w-full"
                            aria-label="Subscribe"
                          >
                            <div className="flex flex-row justify-center items-center bg-[#006AFF] rounded-full py-3">
                              <p className="text-white px-4">Get Free Clips</p>
                            </div>
                          </button>
                          <button className="btn-text w-full">
                            <div className="flex flex-row justify-center items-center bg-zinc-900 rounded-full py-3">
                              <p className="text-[#006AFF] px-4">See Demos</p>
                            </div>
                          </button>
                        </div>
                        {/* Success message */}
                        {/* <p className="mt-2 text-green-600 text-sm">Thanks for subscribing!</p> */}
                      </div>
                    </div>
                  </form>

                  {/* <div>
                    <a
                      className="btn text-white bg-zinc-900 hover:bg-zinc-800 w-full sm:w-auto sm:ml-4"
                      href="#0"
                    >
                      Learn more
                    </a>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Desktop Wide */}
            <div className="desktop-wide h-full w-full">
              <p className="hidden md:flex text-gray-500 text-center">
                Here will be our promotion video (currently in progress)
              </p>

              {/* Horizontal */}
              <div
                className="bg-zinc-900 w-[650px] rounded-xl overflow-hidden"
                data-aos="zoom-y-out"
                data-aos-delay="450"
              >
                <video
                  src="/videos/promo.mp4"
                  autoPlay
                  muted
                  loop
                ></video>
              </div>
            </div>

            {/* Desktop */}
            <div className="desktop h-full w-full">
              {/* <p className="hidden md:flex text-gray-500 text-center">
                Here will be our promotion video (currently in progress)
              </p> */}

              {/* <button className="btn mute text-white">mute</button> */}
              {/* Horizontal */}
              <div
                className="bg-zinc-900 w-[550px] rounded-xl overflow-hidden"
                data-aos="zoom-y-out"
                data-aos-delay="450"
                // style={{
                //   // outter glow
                //   boxShadow:
                //     "0px 0px 0px 1px rgba(0, 106, 255, 0.5), 0px 0px 0px 2px rgba(0, 106, 255, 0.25), 0px 0px 0px 3px rgba(0, 106, 255, 0.15)",
                // }}
              >
                <video
                  id="video"
                  src="/videos/promo.mp4"
                  autoPlay
                  muted
                  loop
                ></video>
              </div>
            </div>

            {/* Mobile */}
            <div className="h-full w-full md:hidden flex justify-center mt-12">
              {/* <p className="hidden md:flex text-gray-500 text-center">
                Here will be our promotion video (currently in progress)
              </p> */}
              {/* Horizontal */}
              <div
                className="bg-zinc-900 w-[90%] rounded-xl overflow-hidden"
                data-aos="zoom-y-out"
                data-aos-delay="450"
              >
                <video
                  src="/videos/promo.mp4"
                  autoPlay
                  muted
                  loop
                ></video>
              </div>
            </div>

            {/* Hero image */}
            {/* <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          /> */}
          </div>
        </div>
      </div>

      {/* <div className="pt-24 flex flex-row gap-24 justify-center items-center z-[30] pb-12 px-6 md:px-0 overflow-x-auto md:overflow-hidden">
        {logos.map((image, index) => (
          <img src={image} alt={`Logo ${index + 1}`} width={120} />
        ))}
      </div> */}

      {/* <div className="md:hidden">
        <div className="slider-images">
          <div className="slide-track-images">
            {logos.map((image, index) => (
              <div className="slide-images" key={index}>
                <img src={image} alt={`Logo ${index + 1}`} />
              </div>
            ))}
            {logos.map((image, index) => (
              <div className="slide-images" key={index}>
                <img src={image} alt={`Logo ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </section>
  );
}

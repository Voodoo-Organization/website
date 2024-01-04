"use client";

export default function Hero() {
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

      <div className="max-w-[90%] mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="flex flex-col justify-between">
          <div className="pt-32 md:pt-24 md:flex md:flex-row md:items-center gap-24">
            {/* Section header */}
            <div className="text-center md:text-start pb-12 md:pb-16 md:min-w-[550px]">
              <h1
                className="text-3xl md:text-4xl font-bold leading-tighter tracking-tighter mb-4 text-white"
                data-aos="zoom-y-out"
              >
                1 Video = 10 Shorts{" "}
                {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                wonderful
              </span> */}
              </h1>
              <div className="max-w-3xl mx-auto">
                <p
                  className="text-lg text-[#858BA0] mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  Reach more people by doing less work.
                  <span className="hidden md:block">
                    <br /> Let Voodoo's AI automation process create, schedule
                    and upload viral clips for you
                  </span>
                </p>
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

                  <form>
                    <div className="hidden md:flex flex-wrap">
                      <div className="w-full">
                        <label
                          className="block text-sm sr-only"
                          htmlFor="newsletter"
                        >
                          Get Free Clips
                        </label>
                        <div className="relative flex items-center md:w-96">
                          <input
                            id="newsletter"
                            type="url"
                            className="form-input w-full text-white px-3 py-3 pr-12 text-sm bg-transparent"
                            placeholder="YouTube Video URL"
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
                        <div className="relative flex items-center md:w-96">
                          <input
                            id="newsletter"
                            type="url"
                            className="form-input w-full text-white px-3 py-2 text-sm bg-transparent"
                            placeholder="YouTube Video URL"
                            required
                          />
                        </div>
                        <div className="flex flex-row gap-2 items-center justify-between mt-4">
                          <button
                            type="submit"
                            className="w-full"
                            aria-label="Subscribe"
                          >
                            <div className="flex flex-row justify-center items-center bg-[#006AFF] rounded-full py-2">
                              <p className="text-white px-4">Get Free Clips</p>
                            </div>
                          </button>
                          <button className="w-full">
                            <div className="flex flex-row justify-center items-center bg-transparent border border-[#006AFF] rounded-full py-2">
                              <p className="text-white px-4">Get Free Clips</p>
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
                      className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
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
              {/* Horizontal */}
              <div
                className="bg-zinc-900 w-[600px] h-[328px] rounded-xl overflow-hidden"
                style={{
                  position: "relative",
                  zIndex: 1,
                  transform: "translate(20%, 30%)",
                }}
                data-aos="zoom-y-out"
                data-aos-delay="450"
              >
                <video src="/videos/opus.mp4" autoPlay muted loop></video>
              </div>
              {/* Vertical */}
              <div
                className="bg-zinc-900 border-2 border-zinc-800 w-[200px] h-[355px] rounded-[20px] overflow-hidden"
                style={{
                  position: "relative",
                  zIndex: 1,
                  transform: "translate(5%, -40%)",
                }}
                data-aos="zoom-y-out"
                data-aos-delay="450"
              ></div>
            </div>

            {/* Desktop */}
            <div className="desktop h-full w-full">
              {/* Horizontal */}
              <div
                className="bg-zinc-900 w-[450px] h-[250px] rounded-xl overflow-hidden"
                style={{
                  position: "relative",
                  zIndex: 1,
                  transform: "translate(25%, 35%)",
                }}
                data-aos="zoom-y-out"
                data-aos-delay="450"
              >
                <video src="/videos/opus.mp4" autoPlay muted loop></video>
              </div>
              {/* Vertical */}
              <div
                className="bg-zinc-900 border-2 border-zinc-800 w-[150px] h-[267px] rounded-[20px] overflow-hidden"
                style={{
                  position: "relative",
                  zIndex: 1,
                  transform: "translate(0%, -40%)",
                }}
                data-aos="zoom-y-out"
                data-aos-delay="450"
              ></div>
            </div>

            {/* Mobile */}
            <div className="h-full w-full md:hidden flex justify-center">
              {/* Horizontal */}
              <div
                className="bg-zinc-900 h-[155px] rounded-xl overflow-hidden"
                data-aos="zoom-y-out"
                data-aos-delay="450"
              >
                <video src="/videos/opus.mp4" autoPlay muted loop></video>
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

      <div className="pt-12 md:pt-0 flex flex-row gap-24 justify-center items-center z-[30] pb-12">
        <img
          src="/images/android-tv.png"
          width={120}
          alt="brand logo"
          data-aos="zoom-y-out"
          data-aos-delay="300"
          data-aos-offset="-1000"
        />
        <img
          src="/images/apple-tv.png"
          width={60}
          alt="brand logo"
          data-aos="zoom-y-out"
          data-aos-delay="300"
          data-aos-offset="-1000"
        />
        <img
          src="/images/apple-watch.png"
          width={95}
          alt="brand logo"
          data-aos="zoom-y-out"
          data-aos-delay="300"
          data-aos-offset="-1000"
        />
        <img
          src="/images/iPhone.png"
          width={75}
          alt="brand logo"
          data-aos="zoom-y-out"
          data-aos-delay="300"
          data-aos-offset="-1000"
        />
        <img
          src="/images/android.png"
          width={140}
          alt="brand logo"
          data-aos="zoom-y-out"
          data-aos-delay="300"
          data-aos-offset="-1000"
        />
      </div>
    </section>
  );
}

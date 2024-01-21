import React from "react";

export default function Shorts() {
  const videos = [
    "https://storage.googleapis.com/voodoo-website/alexhormozi.webm",
    "https://storage.googleapis.com/voodoo-website/biggerpockets.webm",
    "https://storage.googleapis.com/voodoo-website/buggati.webm",
    "https://storage.googleapis.com/voodoo-website/cody.webm",
    "https://storage.googleapis.com/voodoo-website/doac.webm",
    "https://storage.googleapis.com/voodoo-website/dog.webm",
    "https://storage.googleapis.com/voodoo-website/purple.webm",
    "https://storage.googleapis.com/voodoo-website/red.webm",
  ];

  return (
    <section className="relative md:flex md:items-center md:py-[60px] md:px-[25px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 overflow-hidden">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4 text-white">Helping YouTubers grow</h2>
            {/* <h2 className="h2 mb-4 text-white">
              Trusted by over 20,000 YouTubers
            </h2> */}
            <p className="text-xl text-[#858BA0]" data-aos="zoom-y-out">
              Our AI automatically creates, schedules and uploads viral clips
            </p>
          </div>
          <div className="videos max-w-none w-[100vw] px-0 mx-0">
            <div className="slider">
              {videos.map((video, index) => (
                <div className="videos-slide" key={`set1-${index}`}>
                  <div
                    className="videos-slide-video bg-zinc-900 w-[150px] h-[267px] rounded-xl overflow-hidden"
                    data-aos="zoom-y-out"
                    data-aos-delay="450"
                  >
                    <video src={video} autoPlay muted loop></video>
                  </div>
                </div>
              ))}
              {videos.map((video, index) => (
                <div className="videos-slide" key={`set2-${index}`}>
                  <div
                    className="videos-slide-video bg-zinc-900 w-[150px] h-[267px] rounded-xl overflow-hidden"
                    data-aos="zoom-y-out"
                    data-aos-delay="450"
                  >
                    <video src={video} autoPlay muted loop></video>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

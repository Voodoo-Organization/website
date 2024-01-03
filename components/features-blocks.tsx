import { HiOutlineUpload } from "react-icons/hi";
import { IoCrop } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";
import { LuBrainCircuit } from "react-icons/lu";
import { BiCaptions } from "react-icons/bi";
import { HiOutlineEmojiHappy } from "react-icons/hi";

export default function FeaturesBlocks() {
  return (
    <section className="relative md:flex md:items-center md:py-[60px] md:px-[25px]">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-4xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-white">AI Automation Magic</h2>
            <p className="text-lg text-[#858BA0]">
              You upload videos to your channel as usual <br /> We process them,
              find the best parts that can become viral and than create,
              schedule and upload tens of short vertical clips from it and all
              happens automatically
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:flex justify-center pt-12"
              data-aos="zoom-y-out"
              data-aos-delay="300"
            >
              <div>
                <a
                  className="btn text-white bg-[#006AFF] hover:bg-blue-800 w-full mb-4 sm:w-auto sm:mb-0"
                  href="#0"
                >
                  Start free trial
                </a>
              </div>
              <div>
                <a
                  className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                  href="#0"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>

          {/* Items */}
          {/* <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            <div className="relative flex flex-col items-center p-6 bg-transparent rounded">
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-white">
                Headless CMS
              </h4>
              <p className="text-[#858BA0] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="relative flex flex-col items-center p-6 bg-transparent rounded">
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-white">
                Headless CMS
              </h4>
              <p className="text-[#858BA0] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="relative flex flex-col items-center p-6 bg-transparent rounded">
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-white">
                Headless CMS
              </h4>
              <p className="text-[#858BA0] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="relative flex flex-col items-center p-6 bg-transparent rounded">
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-white">
                Headless CMS
              </h4>
              <p className="text-[#858BA0] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="relative flex flex-col items-center p-6 bg-transparent rounded">
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-white">
                Headless CMS
              </h4>
              <p className="text-[#858BA0] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="relative flex flex-col items-center p-6 bg-transparent rounded">
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-white">
                Headless CMS
              </h4>
              <p className="text-[#858BA0] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div> */}

          {/* Items Snir */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-start p-6 bg-transparent rounded">
              <div className="flex flex-row gap-2 items-center">
                <AiOutlineYoutube className="text-2xl text-[#006AFF] mb-1" />
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-white">
                  Video Detection
                </h4>
              </div>
              <p className="text-[#858BA0]">
                We detect when you upload a video to your YouTube channel, and
                the AI Magic begins
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-start p-6 bg-transparent rounded">
              <div className="flex flex-row gap-2 items-center">
                <LuBrainCircuit className="text-2xl text-[#006AFF] mb-1" />
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-white">
                  AI Processing
                </h4>
              </div>
              <p className="text-[#858BA0]">
                Our AI finds the best parts of your video with the best chances
                to go viral
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-start p-6 bg-transparent rounded">
              <div className="flex flex-row gap-2 items-center">
                <IoCrop className="text-2xl text-[#006AFF] mb-1" />
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-white">
                  Auto Crop
                </h4>
              </div>
              <p className="text-[#858BA0]">
                We crop your horizontal long video to many vertical short clips
                while maintaining the subject in focus
              </p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-start p-6 bg-transparent rounded">
              <div className="flex flex-row gap-2 items-center">
                <BiCaptions className="text-2xl text-[#006AFF] mb-1" />
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-white">
                  Attractive Captions
                </h4>
              </div>
              <p className="text-[#858BA0]">
                We automatically add attractive captions to engage your audience
              </p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-start p-6 bg-transparent rounded">
              <div className="flex flex-row gap-2 items-center">
                <HiOutlineUpload className="text-2xl text-[#006AFF] mb-1" />
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-white">
                  Schedule & Upload
                </h4>
              </div>
              <p className="text-[#858BA0]">
                We schedule each short clip to your channel's best performance
                time based on past results
              </p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-start p-6 bg-transparent rounded">
              <div className="flex flex-row gap-2 items-center">
                <HiOutlineEmojiHappy className="text-2xl text-[#006AFF] mb-1" />
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-white">
                  You
                </h4>
              </div>
              <p className="text-[#858BA0]">
                You don't do anything while watching your channel grow
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

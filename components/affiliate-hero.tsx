import { HiOutlineUpload } from "react-icons/hi";
import { IoCrop } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";
import { LuBrainCircuit } from "react-icons/lu";
import { BiCaptions } from "react-icons/bi";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { MdAttachMoney } from "react-icons/md";
import { MdOutlineCookie } from "react-icons/md";

export default function AffiliateHero() {
  return (
    <section className="relative md:flex md:items-center md:px-[25px]">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="">
          {/* Section header */}
          <div className="max-w-4xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Affiliate Program</h2>
            <p className="text-lg text-[#858BA0]">
              Earn money by referring users to Voodoo. <br /> We offer up to 50%
              monthly recurring commission for each user you refer
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex justify-center pt-12">
              <a
                className="btn text-white bg-[#006AFF] hover:bg-blue-800 w-full mb-4 sm:w-auto sm:mb-0"
                href="https://voodoo-fe.vercel.app/app/affiliate"
                target="_blank"
              >
                Get referral link
              </a>
            </div>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-start p-6 bg-transparent rounded">
              <div className="flex flex-row gap-2 items-center">
                <MdAttachMoney className="text-2xl !text-[#006AFF] mb-2 icon" />
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-white">
                  Monthly Recurring Commission
                </h4>
              </div>
              <p className="text-[#858BA0]">
                Earn up to 50% monthly recurring commission for each user you
                refer to Voodoo, no small latters or hidden fees, the money goes
                directly to your bank account
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-start p-6 bg-transparent rounded">
              <div className="flex flex-row gap-2 items-center">
                <MdOutlineCookie className="text-2xl !text-[#006AFF] mb-2 icon" />
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-white">
                  30 Days Cookie Duration
                </h4>
              </div>
              <p className="text-[#858BA0]">
                Even if the user doesn't sign up immediately, you still get a
                commission if they sign up to one of our plans within 30 days of
                clicking your link
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

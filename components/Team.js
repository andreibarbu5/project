import Image from "next/image";
import React from "react";
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import three from "../assets/3.jpg";
import four from "../assets/4.jpg";
import Mail from "../public/MailSvg";
import LinkedIn from "../public/LinkedInSvg";

const Team = () => {
  return (
    <div className=" px-5 max-w-[676px] md:max-w-[1000px] mx-auto mt-20">
      {/* Title */}
      <p className="text-[32px] font-semibold leading-[54px]">
        Wer steckt hinter q-bility?
      </p>

      {/* Team */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-2 lg:gap-5">
        {/* Card 1 */}
        <div className="h-[340px] sm:h-[380px] md:h-[400px] w-full bg-blue-400 rounded-[2rem] relative flex flex-col justify-end ">
          <Image
            src={one}
            className="absolute object-cover h-full w-full rounded-[2rem] "
          />
          <div className="absolute object-cover h-full w-full rounded-[2rem]  "></div>
          <div className="relative px-6 py-4 ">
            <div className="">
              {/* Name */}
              <p className="text-white text-[22px] md:text-[18px] leading-[28px] font-semibold lg:text-[22px]">
                Jan Röstel
              </p>
              {/* Title */}
              <p className="text-white md:text-[12px] lg:text-[17px]">
                Head of Sales & Co-Founder
              </p>
              {/* Socials */}
              <div className="flex items-center justify-center gap-12 md:gap-10 pt-4 ">
                <div className="bg-white p-2 rounded-full text-[22px] md:text-[26px]">
                  <a href="">
                    <Mail />
                  </a>
                </div>

                <div className="bg-white p-2 rounded-full text-[22px] md:text-[26px]">
                  <a href="">
                    <LinkedIn />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="h-[340px] sm:h-[380px] md:h-[400px] w-full bg-blue-400 rounded-[2rem] relative flex flex-col justify-end ">
          <Image
            src={two}
            className="absolute object-cover h-full w-full rounded-[2rem] "
          />
          <div className="absolute object-cover h-full w-full rounded-[2rem]  "></div>
          <div className="relative px-6 py-4 ">
            <div className="">
              {/* Name */}
              <p className="text-white text-[22px] md:text-[18px] leading-[28px] font-semibold lg:text-[22px] ">
                Dennis Horn
              </p>
              {/* Title */}
              <p className="text-white md:text-[12px] lg:text-[17px]">
                Head of Product & Co-Founder
              </p>
              {/* Socials */}
              <div className="flex items-center justify-center gap-12 md:gap-10 pt-4 ">
                <div className="bg-white p-2 rounded-full text-[22px] md:text-[26px]">
                  <a href="">
                    <Mail />
                  </a>
                </div>

                <div className="bg-white p-2 rounded-full text-[22px] md:text-[26px]">
                  <a href="">
                    <LinkedIn />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="h-[340px] sm:h-[380px] md:h-[400px] w-full bg-blue-400 rounded-[2rem] relative flex flex-col justify-end ">
          <Image
            src={three}
            className="absolute object-cover h-full w-full rounded-[2rem] "
          />
          <div className="absolute object-cover h-full w-full rounded-[2rem]  "></div>
          <div className="relative px-6 py-4 ">
            <div className="">
              {/* Name */}
              <p className="text-white text-[22px] md:text-[18px] lg:text-[22px] leading-[28px] font-semibold">
                Dominik Trisl
              </p>
              {/* Title */}
              <p className="text-white md:text-[12px] lg:text-[17px]">
                Managing Director & Co-Founder
              </p>
              {/* Socials */}
              <div className="flex items-center justify-center gap-12 md:gap-10 pt-4 ">
                <div className="bg-white p-2 rounded-full text-[22px] md:text-[26px]">
                  <a href="">
                    <Mail />
                  </a>
                </div>

                <div className="bg-white p-2 rounded-full text-[22px] md:text-[26px]">
                  <a href="">
                    <LinkedIn />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="h-[340px] sm:h-[380px] md:h-[400px] w-full bg-blue-400 rounded-[2rem] relative flex flex-col justify-end ">
          <Image
            src={four}
            className="absolute object-cover h-full w-full rounded-[2rem] "
          />
          <div className="absolute object-cover h-full w-full rounded-[2rem]  "></div>
          <div className="relative px-4 py-4 ">
            <div className="">
              {/* Name */}
              <p className="text-white   text-[22px] md:text-[18px] lg:text-[22px] leading-[28px] font-semibold">
                Dennis Geilus
              </p>
              {/* Title */}
              <p className="text-white md:text-[12px] lg:text-[17px]">
                Head of Operations & Co-Founder
              </p>
              {/* Socials */}
              <div className="flex items-center justify-center gap-12 md:gap-10 pt-4 ">
                <div className="bg-white p-2 rounded-full text-[22px] md:text-[26px]">
                  <a href="">
                    <Mail />
                  </a>
                </div>

                <div className="bg-white p-2 rounded-full text-[22px] md:text-[26px]">
                  <a href="">
                    <LinkedIn />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

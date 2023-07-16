import React from "react";
import Phase1 from "../assets/phase1.png";
import Phase2 from "../assets/phase2.png";
import Phase3 from "../assets/phase3.png";

const Map = () => {
  return (
    <section className="py-20 bg-violet-50 text-[#4AB24E]">
      <div className="container flex flex-col justify-center items-center">
        <h1 className="text-center text-6xl font-Jackdean leading-[81.60px] tracking-wider">
          Roadmap
        </h1>

        <div className="justify-start items-start gap-6 flex flex-col lg:flex-row mt-16">
          <div className="px-[37px] py-[58px] bg-green-500 rounded-[30px] flex-col justify-center items-center inline-flex">
            <div className="self-stretch flex-col justify-start items-center gap-7 inline-flex">
              <div className="pr-[5.15px] pt-[12.14px] rounded-[183.93px] justify-start items-center inline-flex">
                <img className="" src={Phase1} />
              </div>
              <div className="flex-col justify-start items-center gap-2 flex">
                <div className="text-center font-Jackdean text-white text-5xl font-normal leading-[57.60px] tracking-wide">
                  phase 1
                </div>
                <div className="w-[286px] text-center text-white text-[32px] font-normal leading-[38.40px] tracking-wide">
                  Contract CreationOrdinal InscriptionCommunity & SocialsFair
                  Launch
                </div>
              </div>
            </div>
          </div>
          <div className="px-[37px] py-[58px] bg-green-500 rounded-[30px] flex-col justify-center items-center inline-flex">
            <div className="self-stretch flex-col justify-start items-center gap-7 inline-flex">
              <img className="" src={Phase2} />
              <div className="flex-col justify-start items-center gap-2 flex">
                <div className="text-center font-Jackdean text-white text-5xl font-normal leading-[57.60px] tracking-wide">
                  phase 2
                </div>
                <div className="w-[286px] text-center text-white text-[32px] font-normal leading-[38.40px] tracking-wide">
                  Contract CreationOrdinal InscriptionCommunity & SocialsFair
                  Launch
                </div>
              </div>
            </div>
          </div>
          <div className="px-[37px] py-[58px] bg-green-500 rounded-[30px] flex-col justify-center items-center inline-flex">
            <div className="self-stretch flex-col justify-start items-center gap-7 inline-flex">
              <div className="pr-[5.15px] pt-[12.14px] rounded-[183.93px] justify-start items-center inline-flex">
                <img className="" src={Phase3} />
              </div>
              <div className="flex-col justify-start items-center gap-2 flex">
                <div className="text-center font-Jackdean text-white text-5xl font-normal leading-[57.60px] tracking-wide">
                  phase 3
                </div>
                <div className="w-[286px] text-center text-white text-[32px] font-normal leading-[38.40px] tracking-wide">
                  Contract CreationOrdinal InscriptionCommunity & SocialsFair
                  Launch
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;

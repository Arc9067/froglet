import React from "react";
import Tax from "../assets/tax.png";
import Buy from "../assets/buy.png";
import Supply from "../assets/supply.png";

const Mics = () => {
  return (
    <section className="py-20 bg-violet-50 text-[#4AB24E]">
      <div className="container flex flex-col justify-center items-center">
        <h1 className="text-center text-6xl font-Jackdean leading-[81.60px] tracking-wider">
          Tokenomics
        </h1>

        <div className="justify-start items-start font-Jackdean gap-6 flex flex-col lg:flex-row mt-16">
          <div className=" w-full lg:w-auto pl-[126px] pr-[125px] py-[55px] bg-[#4AB24E] rounded-[30px] justify-center items-center flex">
            <div className="self-stretch flex-col justify-start items-center gap-6 inline-flex">
              <img className="" src={Tax} />
              <div className="flex-col justify-start items-center gap-1 flex">
                <div className="text-center text-white text-5xl font-normal leading-[57.60px] tracking-wide">
                  1%
                </div>
                <div className="text-center text-white text-[32px] font-normal leading-[38.40px] tracking-wide">
                  Tax
                </div>
              </div>
            </div>
          </div>
          <div className="pl-[103.50px] w-full lg:w-auto pr-[102.50px] py-[55px] bg-[#4AB24E] rounded-[30px] justify-center items-center flex">
            <div className="self-stretch flex-col justify-start items-center gap-6 inline-flex">
              <img className="" src={Buy} />
              <div className="flex-col justify-start items-center gap-1 flex">
                <div className="text-center text-white text-5xl font-normal leading-[57.60px] tracking-wide">
                  1 Billion
                </div>
                <div className="text-center text-white text-[32px] font-normal leading-[38.40px] tracking-wide">
                  supply
                </div>
              </div>
            </div>
          </div>
          <div className="pl-[47.50px] w-full lg:w-auto pr-[46.50px] py-[55px] bg-[#4AB24E] rounded-[30px] justify-center items-center flex">
            <div className="self-stretch flex-col justify-start items-center gap-6 inline-flex">
              <img className="" src={Supply} />
              <div className="flex-col justify-start items-center gap-1 flex">
                <div className="text-center text-white text-5xl font-normal leading-[57.60px] tracking-wide">
                  2%
                </div>
                <div className="text-center text-white text-[32px] font-normal leading-[38.40px] tracking-wide">
                  Max Wallet
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mics;

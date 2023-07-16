import React from "react";
import heroLeft from "../assets/heroLeft.png";
import heroRight from "../assets/heroRight.png";

const Hero = () => {
  return (
    <section className="pt-28 pb-[200px] w-full relative" id="hero">
      <div className="container flex flex-col items-center justify-center gap-5">
        <h1 className="text-center text-[#FAFF00] text-7xl max-w-2xl font-Jackdean">
          Froglet The Baby Slayer{" "}
        </h1>
        <p className="max-w-3xl text-center text-white text-2xl font-normal">
          Being a froglet is a difficult task for one to undergo, some even say
          it’s impossible! This froglet trained everyday like it was his last
          and became the only survivor out of all his brothers and sisters. On
          this very day 7/16/23 our best friend transformed from a tadpole into
          a froglet and was known by many to be “Froglet The Baby Slayer”.
        </p>
        <a href="" className="transition hover:scale-90">
          <div className="w-[173px] h-[60px] px-8 py-4 bg-amber-500 rounded shadow justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-xl font-Jackdean leading-7 tracking-tight">
              ape now
            </div>
          </div>
        </a>
      </div>

      <img
        src={heroLeft}
        alt=""
        className="absolute bottom-0 left-0 w-[8rem] lg:w-[20rem]"
      />
      <img
        src={heroRight}
        alt=""
        className="absolute bottom-0 right-0 w-[8rem] lg:w-[20rem]"
      />
    </section>
  );
};

export default Hero;

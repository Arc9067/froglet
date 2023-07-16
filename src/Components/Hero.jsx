import React from "react";
import heroLeft from "../assets/heroLeft.png";
import heroRight from "../assets/heroRight.png";

const Hero = () => {
  return (
    <section className="pt-28 pb-[200px] w-full relative" id="hero">
      <div className="container flex flex-col items-center justify-center gap-5">
        <p className="text-center text-white text-2xl font-normal leading-[48px]">
          Pepe and Toad the memecoin Launched
        </p>
        <h1 className="text-center text-[#FAFF00] text-7xl max-w-2xl font-Jackdean">
          Don’t miss the Dev who make the Pepe Great
        </h1>
        <p className="max-w-3xl text-center text-white text-2xl font-normal">
          Pepe and Toad the memecoin Launched on the ethereum. Our mission is to
          provide a fun, community-driven investment opportunity that celebrates
          the power of{" "}
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

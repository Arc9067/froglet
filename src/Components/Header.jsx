import React from "react";

const Header = () => {
  return (
    <header className="py-4 w-full absolute top-0 z-50">
      <div className="container flex justify-between items-center">
        <a href="" className="">
          <div className="text-white text-[32px] font-Ultra capitalize">
            froglet
          </div>
        </a>
        <a
          href="https://t.me/FrogletCoin"
          className="transition hover:scale-90"
        >
          <div className="w-[173px] h-[60px] px-8 py-4 bg-amber-500 rounded shadow justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-xl font-Jackdean leading-7 tracking-tight">
              TELEGRAM
            </div>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;

import React, { useEffect } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Mics from "./Components/Mics";
import Map from "./Components/Map";
import Footer from "./Components/Footer";

const App = () => {
  useEffect(() => {
    document
      .querySelectorAll("img")
      .forEach((ele) => [ele.setAttribute("loading", "lazy")]);

    document
      .querySelectorAll("a")
      .forEach((ele) => [ele.setAttribute("target", "_blank")]);
  }, []);
  return (
    <div className="min-h-screen w-full relative bg-[#4AB24E] text-white">
      <Header />
      <Hero />
      <Mics />
      <Map />
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import Features from "./components/Features.tsx";
import Testimonials from "./components/Testimonials.tsx";
import Footer from "./components/Footer.tsx";
import "./styles.css";

export default function App() {
  return (
    <div className="flex overflow-hidden flex-col px-12 pt-5 pb-12 bg-white max-md:px-5">
      <main
        className="flex flex-col items-center w-full max-w-[1800px] mx-auto"
        role="main"
      >
        <Header />
        <div className="z-10 shrink-0 mt-10 ml-28 max-w-full h-0 border-2 border-black border-solid w-[732px]" />
        <Hero />
        <div className="z-10 shrink-0 mt-0 ml-24 w-0 border-2 border-black border-solid h-[772px] max-md:mt-0 max-md:ml-2.5" />
        <div className="z-10 shrink-0 ml-28 max-w-full h-0 border-2 border-black border-solid w-[743px]" />
        <Features />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
}

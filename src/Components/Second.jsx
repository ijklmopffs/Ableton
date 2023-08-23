import React from "react";
import one from "../../assets/photo-1.jpg";
import two from "../../assets/photo-2.jpg";
import amin from "../../assets/pexels-amin-asbaghipour-3710191.jpg";

export default function Second() {
  return (
    <>
      <section className="flex items-center justify-center mt-20">
        <div className="relative left-20 z-10  ">
          <img src={one} alt="" />
        </div>
        <div className="bg-[#fbffa7] w-96 relative p-96">
          <img src={two} alt="" className="absolute right-60 bottom-56" />
        </div>
      </section>

      <section className="m-auto mt-20 w-[40rem] text-start">
        <p className="w-[34rem] font-bold text-lg ml-0">
          Making music isn’t easy. It takes time, effort, and learning. But when
          you’re in the flow, it’s incredibly rewarding.
        </p>
        <p className="mt-5 w-[50rem] ml-0">
          We feel the same way about making Ableton products. The driving force
          behind Ableton is our passion for what we make, and the people we make
          it for.
        </p>
      </section>

      <section className="mt-20">
        <div className="w-[50rem] flex items-center justify-center m-auto mb-20">
          <img src={amin} alt="" />
        </div>
        <div className="m-auto mt-20 w-[40rem] text-start">
          <p className="w-[45rem] font-bold text-lg ml-0">
            We are more than 350 people from 30 different countries divided
            between our headquarters in Berlin and our offices in Los Angeles
            and Tokyo.
          </p>
          <p className="mt-5 w-[40rem] ml-0">
            Most of us are active musicians, producers, and DJs, and many of us
            use Live and Push every day. We come from a wide range of cultural
            and professional backgrounds. Some of us have PhDs, some are
            self-taught, and most of us are somewhere in between. What connects
            us is the shared belief that each of us has the skills and knowledge
            to contribute to something big: helping to shape the future of music
            culture.
          </p>
        </div>
      </section>
    </>
  );
}

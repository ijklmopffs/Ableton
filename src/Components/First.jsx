import mix from "../../assets/header.avif";
import React from "react";

export default function Main() {
  return (
    <>
      <section>
        <div className="flex gap-8 mt-3 font-bold">
          <p className="text-red-300">About</p>
          <p>Jobs</p>
        </div>
        <div className="m-auto mt-6 flex items-center justify-center relative">
          <img src={mix} alt="" />
          <p className="absolute text-9xl font-semibold text-red-500">
            Ableton
          </p>
        </div>
      </section>

      <section className="m-auto mt-28 w-[40rem] text-start">
        <p className="w-[34rem] font-semibold text-lg ml-0">
          We make <span className="text-[#0000ff] font-bold">Live</span>,
          <span className="text-[#0000ff] font-bold"> Push </span>
          and <span className="text-[#0000ff] font-bold">Link</span> — unique
          software and hardware for music creation and performance. With these
          products, our community of users creates amazing things.
        </p>
        <p className="mt-5 md:w-[50rem] ml-0">
          Ableton was founded in 1999 and released the first version of Live in
          2001. Our products are used by a community of dedicated musicians,
          sound designers, and artists from across the world.
        </p>
      </section>
    </>
  );
}

import React, { useState } from "react";
import logo from "../../assets/ableton-hallmark.ef5355379032.svg";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <>
      <nav className="flex items-center justify-between text-lg font-semibold">
        <div className="flex items-center gap-4">
          <div className="">
            <img src={logo} alt="" />
          </div>

          <p className="md:hidden cursor-pointer" onClick={handleClick}>
            Menu
          </p>

          <div
            className={
              nav
                ? "flex flex-col md:flex-row gap-8 items-center font-semibold absolute md:static z-10 bg-gray-200 top-16 p-10 w-full"
                : "flex flex-col md:flex-row gap-8 items-center font-semibold absolute md:static z-10 bg-gray-200 top-[-100%] p-10"
            }
          >
            <a href="/">Live</a>
            <a href="/">Push</a>
            <a href="/">Link</a>
            <a href="/">Shop</a>
            <a href="/">Packs</a>
            <a href="/">Help</a>
            <a href="/">More+</a>
          </div>
        </div>

        <div className="hidden md:flex gap-4">
          <a href="" className="font-bold text-blue-800">
            Try live for free
          </a>
          <a href="/">Account</a>
          <a href="/">Log out</a>
        </div>
      </nav>
      <hr className="mt-4" />
    </>
  );
}

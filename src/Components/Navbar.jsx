import React from "react";
import logo from "../../assets/ableton-hallmark.ef5355379032.svg";

export default function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between text-lg font-semibold">
        <div className="flex items-center gap-4">
          <div>
            <img src={logo} alt="" />
          </div>

          <div className="flex gap-8 items-center font-semibold">
            <a href="/">Live</a>
            <a href="/">Push</a>
            <a href="/">Link</a>
            <a href="/">Shop</a>
            <a href="/">Packs</a>
            <a href="/">Help</a>
            <a href="/">More+</a>
          </div>
        </div>

        <div className="flex gap-4">
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

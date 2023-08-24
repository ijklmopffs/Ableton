import logo from "../../assets/ableton-hallmark.ef5355379032.svg";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="mt-20 flex flex-col text-start gap-10">
        <div>
          <h1 className="font-bold text-5xl text-start">Ableton</h1>
        </div>
        <div className="flex flex-col items-start mt-5 md:flex-row gap-10 justify-between flex-wrap md:items-center">
          <div className="flex flex-col">
            <a href="">Register Live or Push</a>
            <a href="">About Ableton</a>
            <a href="">Jobs</a>
          </div>
          <div className="flex flex-col">
            <a href="">Education</a>
            <a href="">Offers for students and teachers</a>
            <a href="">Offers for institutions</a>
            <a href="">Push 1 trade-in initiatives</a>
          </div>
          <div>
            <p>Sign up for our newsletter</p>
            <p className="w-96">
              Enter your email address to stay up to date with our latest
              offers, tutorials, downloads and more
            </p>
            <form action="" htmlFor="email" className="flex gap-2">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="border-2 rounded-md outline-none p-1 border-solid border-gray-200"
              />
              <button className="bg-blue-900 p-1 rounded-md text-white">
                Sign up
              </button>
            </form>
          </div>
          <div className="flex flex-col">
            <a href="">Community</a>
            <a href="">Find Ableton User Groups</a>
            <a href="">Find Certified Training</a>
            <a href="">Become a Certified Trainer</a>
          </div>
          <div className="flex flex-col">
            <a href="">Distributors</a>
            <a href="">Find Distributors</a>
            <a href="">Try push in stores</a>
          </div>
        </div>
        <div className="flex flex-col justify-between md:mt-10 md:flex-row items-start md:items-center">
          <div className="flex gap-4 flex-col md:flex-row">
            <a href="">Archive</a>
            <a href="">Contact Us</a>
            <a href="">Press Resources</a>
            <a href="">Legal Info</a>
            <a href="">Privacy Policy</a>
            <a href="">Cookie Settings</a>
            <a href="">Imprint</a>
          </div>
          <div className="flex items-center gap-4 sm:mt-5 md:mt-0">
            <p className="font-bold">Made in Berlin</p>
            <img src={logo} alt="" />
          </div>
        </div>
      </footer>
    </>
  );
}

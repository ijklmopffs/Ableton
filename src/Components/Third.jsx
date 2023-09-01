import React from "react";
import three from "../../assets/photo-3.jpg";
import four from "../../assets/photo-4.jpg";
import five from "../../assets/photo-5.jpg";
import six from "../../assets/poster-meet-the-makers.avif";
import sixa from "../../assets/photo-6-a.jpg";
import seven from "../../assets/photo-7.jpg";
import last from "../../assets/photo-8.jpg";

export default function Third() {
  return (
    <>
      <section className="mt-20 flex items-center justify-center gap-8">
        <div className="flex flex-col gap-10 bg-[#b6ffc0] p-20 md:p-32">
          <div>
            <img src={three} alt="" />
          </div>
          <div>
            <img src={four} alt="" />
          </div>
        </div>
        <div className="relative right-20 md:right-32">
          <div>
            <img src={five} alt="" />
          </div>
        </div>
      </section>

      <section className="m-auto mt-20 w-[40rem] text-start">
        <p className="w-[30rem] md:w-[45rem] font-bold text-lg ml-0">
          We believe it takes focus to create truly outstanding instruments. We
          only work on a few products and we strive to make them great.
        </p>
        <p className="mt-5 w-[30rem] sm:w-[40rem] ml-0">
          Rather than having a one-size-fits-all process, we try to give our
          people what they need to work their magic and grow. We’ve learned that
          achieving the best results comes from building teams that are richly
          diverse, and thus able to explore problems from a wider set of
          perspectives. We don’t always agree with each other, but opinion and
          debate are valued and openly encouraged.
        </p>
      </section>

      <section className="mt-20">
        <div>
          <img src={six} alt="" />
        </div>
        <div className="m-auto mt-20 w-[40rem] text-start">
          <p className="w-96 font-bold text-lg ml-0">
            We’re passionate about what we do, but we’re equally passionate
            about improving who we are.
          </p>
          <p className="mt-5 w-[34rem] sm:w-[40rem] ml-0">
            We work hard to foster an environment where people can grow both
            personally and professionally, and we strive to create a wealth of
            opportunities to learn from and with each other.
          </p>
          <p className="mt-5 w-[30rem] sm:w-full">
            Alongside an internal training program, employees are actively
            supported in acquiring new knowledge and skills, and coached on
            applying these in their daily work. In addition, staff-organized
            development and music salons are a chance to discuss new
            technologies, production techniques and best practices.
          </p>
        </div>
      </section>

      <section className="flex items-center flex-col justify-center gap-8 mt-20">
        <div className="flex items-center justify-center">
          <div className="bg-[#d5b3ff] p-28 sm:p-32 md:p-40 relative left-40">
            <img src={sixa} alt="" className="relative right-48 md:right-60" />
          </div>
          <div className="relative right-20 md:right-32">
            <img src={seven} alt="" />
          </div>
        </div>

        <div className="m-auto mt-20 w-[40rem] text-start">
          <p className="w-[30rem] font-bold text-lg ml-0">
            We want our employees to love it here. Since we’re looking for
            exceptional talent from around the world, we will do everything we
            can to make your transition as easy as possible.
          </p>
          <p className="mt-5 w-[30rem] md:w-[40rem] ml-0">
            If you're joining us in Berlin, we'll help with relocation and
            paperwork. We’ll even provide you with free German or English
            lessons. Plus, working in Germany means you can expect comprehensive
            health insurance for you and your family, as well as generous
            maternity and paternity leave. Office hours are flexible, but it’s
            not all work; we have several company and team outings throughout
            the year as well as a variety of fun, informal small-group
            activities.
          </p>
        </div>
      </section>

      <section className="mt-20">
        <div className="flex flex-col md:flex-row items-center bg-[#b1c5ff] gap-10">
          <div className="">
            <img src={last} alt="" />
          </div>
          <div className="text-start p-4">
            <p className="w-96 font-bold mb-5">
              We’re really proud of the work we’ve done so far. But there’s so
              much more to come. If you’d like to be a part of it, please join
              us.
            </p>
            <a href="" className="text-blue-900 font-bold">
              See latest jobs
            </a>
          </div>
        </div>
      </section>

      <hr className="mt-10" />
    </>
  );
}

import React from "react";
import { Header } from "../componets/Header";
import { Link } from "react-router-dom";

export const Service = () => {
  return (
    <section className="w-full background">
      <Header />
      <div className="flex flex-col w-full items-center px-1">
        <h1 className="my-[50px] font-bold text-[56px]">
          Our <span className="text-[#0ef]">Service</span>
        </h1>
        <div className="w-full grid grid-cols-2 space-y-3 space-x-2">
          <div className="w-auto flex flex-1 flex-col items-center border-2 border-[#1f242d] rounded-2xl p-10 bg-[#323946] hover:border-[#0ef] hover:transform-scale(1.02)">
            <h2 className="text-[40px] font-bold mb-2">Web Development</h2>
            <p className="w-[400px] mb-6">
              I am professionally educated developer in the world. i have worked
              for many years in artificial intelligence & Ethiopian cyberspace.
            </p>
            <Link to={"/Project"}>
              <button className="btn">Read More</button>
            </Link>
          </div>
          <div className="w-full flex flex-col items-center border-2 border-[#1f242d] rounded-2xl p-6 bg-[#323946] hover:border-[#0ef] hover:transform-scale(1.02)">
            <h2 className="text-[40px] font-bold mb-2">Graphic design</h2>
            <p className="w-[400px] mb-6">
              I am professionally educated developer in the world. i have worked
              for many years in artificial intelligence & Ethiopian cyberspace.
            </p>
            <Link to={"/Todo"}>
              <button className="btn">Read More</button>
            </Link>
          </div>
          <div className="w-full flex flex-1 flex-col items-center border-2 border-[#1f242d] rounded-2xl p-6 bg-[#323946] hover:border-[#0ef] hover:transform-scale(1.02)">
            <h2 className="text-[40px] font-bold mb-2">Digital Marketing</h2>
            <p className="w-[400px] mb-6">
              I am professionally educated developer in the world. i have worked
              for many years in artificial intelligence & Ethiopian cyberspace.
            </p>
            <button className="btn">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;

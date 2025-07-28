import React from "react";
import { Header } from "../componets/Header";

export const About = () => {
  return (
    <section className="w-full min-h-screen background overflow-hidden ">
      <Header />
      <div className="h-full w-full pb-10 mt-[30px] lg:mt-[60px] lg:px-20 flex flex-col lg:flex-row justify-center items-center">
        <div className="w-full justify-center items-center">
          <img
            src="/portfolioHeroBg.png"
            className="w-[400px] h-[400px] pl-2"
            alt="Profile"
          />
        </div>
        <div className="w-full flex flex-col items-center justify-center my-1 lg:my-0 gap-3 sideRight">
          <h1 className="text-[40px] lg:text-[56px] font-bold">
            About <span className="text-blue">Me</span>
          </h1>
          <h2 className="text-[20px] lg:text-[32px] font-bold">
            Website disgner
          </h2>
          <p className="w-[90%] text-center lg:w-full mb-2 lg:mb-8">
            I am Fitsum Zerihun, I am a website developer. I have work many
            areas on information technology I have work at this area about 13
            years, 5 years at graphics designer 8 years on website developer, at
            this time I have experienced a lot of programming languages
            java,c+,c++,photon, now I am working at NASA space company
          </p>
          <button className="btn my-[10px] lg:my-[1px]">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import { Header } from "../componets/Header";

const Home = () => {
  return (
    <section className="w-screen h-[100vh] background overflow-hidden">
      <Header />
      <div className="w-full h-fit pt-16 flex flex-row mb-20 sd:flex-wrap-reverse justify-between items-center">
        <div className="w-full h-full px-10">
          <h2 className="text-[15px] lg:text-[32px] font-bold">
            Hello, it's me
          </h2>
          <h1 className="text-[15px] lg:text-[56px] font-bold">
            Fitsum zerihun
          </h1>
          <h2 className="text-[15px] lg:text-[32px] font-bold">
            And I'm a <span className="text-[#0ef]">website developer</span>
          </h2>
          <p className="lg:w-[70%] text-[10px] lg:text-[18px]">
            I am professionally educated developer in the world. i have worked
            for many years in artificial intelligence & Ethiopian cyberspace..
          </p>
          <div className="flex my-6 space-x-3">
            <div className="icon-box">
              <a href="https://github.com/codewithfitse">
                <i className="fa fa-github !text-[26px] text-black bg-white rounded-full p-2 shadow-[0_0_10px_2px_rgba(0,0,0,0.3)]"></i>
              </a>
            </div>
            <div className="icon-box">
              <a href="WWW.linkedin.com/in/fitsum-zerihun-89aab02a9">
                <i className="fa fa-linkedin !text-[26px] text-blue-600"></i>
              </a>
            </div>

            <div className="icon-box">
              <a href="https://www.instagram.com/codewithfitse?igsh=MXdlZW9lMzRpb205dQ==">
                <i className="fa fa-instagram !text-[28px] text-red-600"></i>
              </a>
            </div>
            <div className="icon-box">
              <a href="https://www.tiktok.com/@codewithfitse?_t=ZM-8x4IWJnVxp8&_r=1">
                <img src="/bxl-tiktok.svg " className="icon" alt="Git" />
              </a>
            </div>
            <div className="icon-box">
              <a href="https://x.com/lil_fitse?t=cmxfDqpAWbK_l75aeqygzg&s=09">
                <i className="fa fa-twitter !text-[26px] text-blue-600"></i>
              </a>
            </div>
          </div>
          <div className="wrapper">
            <button className="btn">Download Coures</button>
          </div>
        </div>
        <div className="w-fit h-auto items-center justify-items-center">
          <img
            src="/portfolioHeroBg.png"
            className="w-full h-full"
            alt="Profile"
          />
        </div>
      </div>
    </section>
  );
};
export default Home;

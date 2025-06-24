import React from "react";
import { Header } from "../componets/Header";

const Home = () => {
  return (
    <section className="w-full h-[100vh] background">
      <Header />
      <div className="flex flex-row sd:flex-wrap-reverse justify-between items-center w-auto h-fit px-[30px] pt-16">
        <div className="w-auto h-full px-10">
          <h2 className="text-[32px] font-bold">Hello, it's me</h2>
          <h1 className="text-[56px] font-bold">Fitsum zerihun</h1>
          <h2 className="text-[32px] font-bold">
            And I'm a <span className="text-[#0ef]">website developer</span>
          </h2>
          <p className="w-[500px] text-[18px]">
            I am professionally educated developer in the world. i have worked
            for many years in artificial intelligence & Ethiopian cyberspace..
          </p>
          <div className="flex my-6 space-x-3">
            <div className="icon-box">
              <img src="/bxl-facebook.svg" className="icon" alt="icon" />
            </div>
            <div className="icon-box">
              <a href="https://www.instagram.com/codewithfitse?igsh=MXdlZW9lMzRpb205dQ==">
                <img src="/bxl-linkedin.svg" className="icon" alt="ln" />
              </a>
            </div>
            <div className="icon-box">
              <a href="https://www.instagram.com/codewithfitse?igsh=MXdlZW9lMzRpb205dQ==">
                <img
                  src="/bxl-instagram-alt.svg"
                  className="icon"
                  alt="insta"
                />
              </a>
            </div>
            <div className="icon-box">
              <a href="https://www.instagram.com/codewithfitse?igsh=MXdlZW9lMzRpb205dQ==">
                <img src="/bxl-tiktok.svg" className="icon" alt="Git" />
              </a>
            </div>
            <div className="icon-box">
              <a href="https://www.instagram.com/codewithfitse?igsh=MXdlZW9lMzRpb205dQ==">
                <img src="/bxl-twitter.svg" className="icon" alt="X" />
              </a>
            </div>
          </div>
          <div className="wrapper">
            <button className="btn">Download Coures</button>
          </div>
        </div>
        <div className="w-auto h-auto items-center justify-items-center">
          <img
            src="/public/home.jpg"
            className="w-[300px] h-[300px]"
            alt="Profile"
          />
        </div>
      </div>
    </section>
  );
};
export default Home;

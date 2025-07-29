import React from "react";
import { Link } from "react-router-dom";
export const Project = () => {
  return (
    <>
      <div className="w-full h-[100vh] flex flex-col items-center pt-[50px] px-2 background">
        <h1 className="text-5xl font-bold">Project</h1>
        <div className="w-full grid lg:grid-cols-2 gap-5 mt-10">
          <div className="w-full h-fit flex flex-col items-center p-5 bg-HEAD border-2 border-[#1f242d] hover:border-blue hover:transform-scale(1.02) rounded-2xl">
            <img src="" alt="" />
            <h1 className="text-[30px] text-black lg:text-[40px] font-bold mb-2">
              Head & Tail
            </h1>
            <Link to={"/Head"}>
              <button className="btn">Read More</button>
            </Link>
          </div>
          <div className="w-full h-fit flex flex-col items-center p-5 bg-todo border-2 border-[#1f242d] hover:border-blue hover:transform-scale(1.02) rounded-2xl">
            <h1 className="text-[30px] lg:text-[40px] font-bold mb-2">Todos</h1>
            <Link to={"/Todo"}>
              <button className="btn">Read More</button>
            </Link>
          </div>
          <div className="w-full h-fit flex flex-col items-center p-5 bg-RPS border-2 border-[#1f242d] hover:border-blue hover:transform-scale(1.02) rounded-2xl">
            <h1 className="text-black text-[30px] lg:text-[40px] font-bold mb-2">
              Rock-Paper-scissor
            </h1>
            <Link to={"/RPS"}>
              <button className="btn">Read More</button>
            </Link>
          </div>
          <div className="w-full h-fit flex flex-col items-center p-5 bg-MOVIE border-2 border-[#1f242d] hover:border-blue hover:transform-scale(1.02) rounded-2xl">
            <h1 className="text-[30px] lg:text-[40px] font-bold mb-2">
              Movie Fetching!
            </h1>
            <Link to={"https://movies-search-web-r8ah.vercel.app/"}>
              <button className="btn">Read More</button>
            </Link>
          </div>
          <div className="w-full h-fit flex flex-col items-center p-5 bg-Expense border-2 border-[#1f242d] hover:border-blue hover:transform-scale(1.02) rounded-2xl">
            <h1 className="text-black text-[30px] lg:text-[40px] font-bold mb-2">
              Expense Tracker
            </h1>
            <Link to={"https://expense-tracker-rose-omega.vercel.app"}>
              <button className="btn">Read More</button>
            </Link>
          </div>
          <div className="w-full h-fit flex flex-col items-center p-5 bg-Weather border-2 border-[#1f242d] hover:border-blue hover:transform-scale(1.02) rounded-2xl">
            <h1 className="text-[30px] lg:text-[40px] font-bold mb-2">
              Weather Api
            </h1>
            <Link to={"https://weather-app-pied-omega-79.vercel.app"}>
              <button className="btn">Read More</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="w-full h-[70px] py-[20px] flex justify-between items-center">
      <div className="w-fit pl-10">
        <h1 className="text-[13px] lg:text-[25px] font-semibold text-white">
          Portfollo.
        </h1>
      </div>
      <nav className="flex pr-5 gap-2.5 lg:gap-8 text-[10px] lg:text-[20px]">
        <Link to={"/"}>
          <h1 className="text-[#0ef] text-[10px] lg:text-[20px] uppercase font-medium transition-all duration-500 hover:scale-150 hover:filter-none hover:opacity-100 animate-[slidetop_0.5s_ease_forwards]">
            Home
          </h1>
        </Link>
        <Link to={"/About"}>
          <h1 className="text-[#0ef] text-[10px] lg:text-[20px] uppercase font-medium transition-all duration-500 hover:scale-150 hover:filter-none hover:opacity-100 animate-[slidetop_0.5s_ease_forwards]">
            About
          </h1>
        </Link>
        <Link to={"/Service"}>
          <h1 className="text-[#0ef] text-[10px] lg:text-[20px] uppercase font-medium transition-all duration-500 hover:scale-150 hover:filter-none hover:opacity-100 animate-[slidetop_0.5s_ease_forwards]">
            Service
          </h1>
        </Link>
        <Link to={"/Contact"}>
          <h1 className="text-[#0ef] text-[10px] lg:text-[20px] uppercase font-medium transition-all duration-500 hover:scale-150 hover:filter-none hover:opacity-100 animate-[slidetop_0.5s_ease_forwards]">
            Contact
          </h1>
        </Link>
        <Link to={"/Login"}>
          <h1 className="text-[#0ef] text-[10px] lg:text-[20px] uppercase font-medium transition-all duration-500 hover:scale-150 hover:filter-none hover:opacity-100 animate-[slidetop_0.5s_ease_forwards]">
            Login
          </h1>
        </Link>
      </nav>
    </div>
  );
};

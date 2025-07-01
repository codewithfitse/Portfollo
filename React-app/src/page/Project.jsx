import React from "react";
import { Link } from "react-router-dom";
export const Project = () => {
  return (
    <>
      <div className="w-full h-[100vh] flex flex-col items-center pt-[50px] px-2">
        <h1 className="text-5xl font-bold">Project</h1>
        <div className="w-full grid grid-cols-2 gap-2">
          <div className="w-full h-fit flex flex-col items-center mt-10 p-5 bg-[#323946] border-2 border-[#1f242d] hover:border-[#0ef] hover:transform-scale(1.02) rounded-2xl">
            <h1 className="text-[40px] font-bold mb-2">Head & Tail</h1>
            <Link to={"/Head"}>
              <button className="btn">Read More</button>
            </Link>
          </div>
          <div className="w-full h-fit flex flex-col items-center mt-10 p-5 bg-[#323946] border-2 border-[#1f242d] hover:border-[#0ef] hover:transform-scale(1.02) rounded-2xl">
            <h1 className="text-[40px] font-bold mb-2">Todos</h1>
            <Link to={"/Todo"}>
              <button className="btn">Read More</button>
            </Link>
          </div>
          <div className="w-full h-fit flex flex-col items-center mt-10 p-5 bg-[#323946] border-2 border-[#1f242d] hover:border-[#0ef] hover:transform-scale(1.02) rounded-2xl">
            <h1 className="text-[40px] font-bold mb-2">Rock-Paper-scissor</h1>
            <Link to={"/RPS"}>
              <button className="btn">Read More</button>
            </Link>
          </div>
          <div className="w-full h-fit flex flex-col items-center mt-10 p-5 bg-[#323946] border-2 border-[#1f242d] hover:border-[#0ef] hover:transform-scale(1.02) rounded-2xl">
            <h1 className="text-[40px] font-bold mb-2">Movie Fetching!</h1>
            <Link to={"/Movie"}>
              <button className="btn">Read More</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

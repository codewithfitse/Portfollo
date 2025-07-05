import { Header } from "../componets/Header";
import { Link } from "react-router-dom";

export const Service = () => {
  return (
    <section className="w-full h-full overflow-hidden background">
      <Header />
      <div className="flex flex-col w-full items-center px-1">
        <h1 className="my-[50px] font-bold text-[30px] lg:text-[56px]">
          Our <span className="text-[#0ef]">Service</span>
        </h1>
        <div className="w-full grid lg:grid-cols-2 gap-2">
          <div className="w-fit lg:w-full flex flex-1 flex-col items-center border-2 border-[#1f242d] rounded-2xl p-10 bg-[#323946] hover:border-[#0ef] hover:transform-scale(1.02)">
            <h2 className="text-[20px] lg:text-[40px] font-bold mb-2">
              Web Development
            </h2>
            <p className="w-[90%] mb-6 text-center">
              I am professionally educated developer in the world. i have worked
              for many years in artificial intelligence & Ethiopian cyberspace.
            </p>
            <Link to={"/Project"}>
              <button className="btn">Read More</button>
            </Link>
          </div>
          <div className="w-full flex flex-col  items-center border-2 border-[#1f242d] rounded-2xl p-6 bg-[#323946] hover:border-[#0ef] hover:transform-scale(1.02)">
            <h2 className="text-[40px] font-bold mb-2">Graphic design</h2>
            <p className="w-[90%] mb-6 text-center">
              I am professionally educated developer in the world. i have worked
              for many years in artificial intelligence & Ethiopian cyberspace.
            </p>
            <Link to={"/Todo"}>
              <button className="btn">Read More</button>
            </Link>
          </div>
          <div className="w-full flex flex-1 flex-col items-center border-2 border-[#1f242d] rounded-2xl p-6 bg-[#323946] hover:border-[#0ef] hover:transform-scale(1.02)">
            <h2 className="text-[40px] font-bold mb-2">Digital Marketing</h2>
            <p className="w-[90%] mb-6 text-center">
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

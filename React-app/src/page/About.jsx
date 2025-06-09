import React from 'react';
import { Header } from '../componets/Header';


export const About = () => {
  return (
    <section>
    <Header />
    <div className="flex justify-around items-center w-full pt-[90px]">
    <div className="w-auto justify-around items-center">
        <img src="/About.jpg" className='w-[400px] h-[400px]' alt="Profile" />
      </div>
      <div className="sideRight">
        <h1 className='text-[56px] font-bold'>About <span className='text-[#0ef]'>Me</span></h1>
        <h2 className='text-[32px] font-bold'>Website disgner</h2>
        <p className='w-[500px] mb-8'>I am Fitsum Zerihun, I am a website developer.
          I have work many areas on information technology
          I have work at this area about 13 years, 5 years at graphics designer 8 years on website developer,
          at this time I have experienced a lot of programming languages java,c+,c++,photon, now I am working at NASA space company
        </p>
        
        <button className='btn my-[60px]'>Read More</button>
      </div>
      
    </div>
  </section>
  )
}

export default About


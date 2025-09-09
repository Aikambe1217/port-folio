import React from "react";
import { ReactTyped } from "react-typed";
import { Link } from "react-scroll";
const Hero = () => {
  return (
    <div className="text-white" id="hero">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        
        <p className="text-[#00df9a] font-bold p-2 uppercase">
          Welcome on Board
        </p>

        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Hi, I'm Aikambe
        </h1>

        <h2 className="md:text-5xl sm:text-4xl text-2xl font-bold text-gray-400">
          A Passionate Developer
        </h2>

        {/* Typed Animation */}
        <p className="md:text-xl text-lg font-light text-gray-300 py-4 px-2">
          <ReactTyped
            strings={[
              "Building modern websites",
              "Crafting responsive UIs",
              "Turning ideas into reality",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </p>

        {/* Buttons */}
        <div className="flex justify-center space-x-6">
          <Link to="projects" smooth={true} duration={500} className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 text-black hover:scale-105 duration-300 cursor-pointer">
            View Projects
          </Link>
          <Link to="contacts" smooth={true} duration={500} className="bg-transparent border border-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 text-[#00df9a] hover:bg-[#00df9a] hover:text-black duration-300 cursor-pointer">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

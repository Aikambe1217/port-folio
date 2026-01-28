import React from "react";
import { ReactTyped } from "react-typed";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-gray-50 to-gray-100 text-black overflow-hidden pt-10"
    >
      {/* Decorative blur blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#00df9a]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-black/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <p className="text-[#00df9a] font-semibold tracking-widest uppercase mb-4">
            Welcome on board
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight text-black">
            Hi, I’m{" "}
            <span className="text-[#00df9a]">Aikambe</span>
          </h1>

          <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl text-gray-700 font-medium">
            A Passionate Full-Stack Developer
          </h2>

          {/* Typed animation */}
          <div className="mt-6 text-lg sm:text-xl text-gray-600">
            <ReactTyped
              strings={[
                "Building modern web experiences",
                "Designing clean & scalable UIs",
                "Turning ideas into production-ready apps",
              ]}
              typeSpeed={45}
              backSpeed={35}
              loop
            />
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="projects"
              smooth
              duration={500}
              className="px-8 py-4 rounded-xl bg-[#00df9a] text-black font-semibold shadow-md hover:scale-105 hover:shadow-[#00df9a]/40 transition cursor-pointer text-center"
            >
              View Projects
            </Link>

            <Link
              to="contacts"
              smooth
              duration={500}
              className="px-8 py-4 rounded-xl border border-black text-black font-semibold hover:bg-black hover:text-white hover:scale-105 transition cursor-pointer text-center"
            >
              Contact Me
            </Link>
          </div>
        </div>
{/* RIGHT CREATIVE VISUAL */}
<div className="hidden md:flex justify-center relative">

  {/* Main glass panel */}
  <div className="relative w-[420px] h-[420px] rounded-3xl bg-white/60 backdrop-blur-xl border border-gray-200 shadow-2xl flex items-center justify-center">

    {/* Center text */}
    <div className="text-center">
      <h3 className="text-3xl font-bold text-black">
        Clean. Modern.
      </h3>
      <p className="mt-2 text-gray-600 text-lg">
        Production-ready code
      </p>
    </div>

    {/* Floating Card – Experience */}
    <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-lg px-6 py-4 border border-gray-100">
      <p className="text-sm text-gray-500">Experience</p>
      <p className="text-2xl font-bold text-[#00df9a]">3+ Years</p>
    </div>

    {/* Floating Card – Projects */}
    <div className="absolute bottom-6 -right-6 bg-white rounded-2xl shadow-lg px-6 py-4 border border-gray-100">
      <p className="text-sm text-gray-500">Projects</p>
      <p className="text-2xl font-bold text-black">20+</p>
    </div>

    {/* Floating Card – Stack */}
    <div className="absolute -bottom-6 left-8 bg-white rounded-2xl shadow-lg px-5 py-3 border border-gray-100 flex gap-3 text-sm font-medium text-gray-700">
      <span className="text-[#00df9a]">React</span>
      <span>Tailwind</span>
      <span>Angular</span>
      <span>Django</span>
      <span>FastAPI</span>
    </div>
  </div>
</div>


      </div>
    </section>
  );
};

export default Hero;

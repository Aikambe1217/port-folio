import React from "react";
import me from "../Assets/about1.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-white py-24 px-6 overflow-hidden"
    >
      {/* Decorative accents */}
      <div className="absolute top-32 right-0 w-72 h-72 bg-[#00df9a]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT: IMAGE CARD */}
       <div className="flex justify-center md:justify-start">
          <div className="relative">

            {/* soft glow behind image */}
            <div className="absolute inset-0 bg-[#00df9a]/20 blur-3xl rounded-full -z-10" />

            <img
              src={me}
              alt="Aikambe portrait"
              className="
                w-[580px] h-[600px]
                object-cover
                rounded-3xl
                shadow-[0_30px_60px_-15px_rgba(0,0,0,0.25)]
              "
            />
          </div>
        </div>


        {/* RIGHT: CONTENT */}
        <div className="text-center md:text-left">
          <p className="text-[#00df9a] uppercase tracking-widest font-semibold mb-3">
            About me
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
            Crafting digital experiences
            <br className="hidden sm:block" />
            with purpose.
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-xl mx-auto md:mx-0">
            Hi, I’m{" "}
            <span className="text-black font-semibold">Aikambe</span> — a
            passionate web developer focused on building modern, responsive,
            and user-friendly applications. I specialize in clean UI development
            using <span className="text-[#00df9a] font-medium">React, Angular</span> and{" "}
            <span className="text-[#00df9a] font-medium">Tailwind CSS</span>.
          </p>

          <p className="mt-4 text-lg text-gray-700 leading-relaxed max-w-xl mx-auto md:mx-0">
            I enjoy solving real-world problems with code and continuously
            improving my craft. My goal is to build products that feel intuitive,
            scalable, and enjoyable to use.
          </p>

          {/* CTA */}
          <div className="mt-8 flex justify-center md:justify-start">
            <button className="px-8 py-4 rounded-xl bg-black text-white font-semibold hover:bg-[#00df9a] hover:text-black transition-all duration-300 shadow-md hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

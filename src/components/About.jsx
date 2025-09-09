import React from "react";
import me from "../Assets/young-african-man-pointing-finger-side-blue-wall.jpg"
const About = () => {
  return (
    <div className="w-full bg-white py-16 px-4 text-white" id="about">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left: Image */}
        <div className="flex justify-center">
          <img
            src={me} // replace with your image
            alt="About me"
            className="rounded-2xl shadow-lg w-[400px] h-auto"
          />
        </div>

        {/* Right: Text */}
        <div>
          <h2 className="text-4xl font-bold text-[#00df9a] mb-4">About Me</h2>
          <p className="text-lg text-black leading-relaxed">
            Hi, I'm <span className="text-[#00df9a] font-semibold">Aikambe</span>, 
            a passionate web developer who loves creating modern, responsive, and
            user-friendly applications. I specialize in building clean UI with React 
            and Tailwind CSS, and I enjoy solving problems with code.
          </p>
          <p className="text-lg text-black leading-relaxed mt-4">
            Beyond coding, I’m constantly learning new technologies and improving
            my skills. My goal is to craft digital experiences that are not only
            functional but also delightful to use.
          </p>
          <button className="mt-6 bg-[#00df9a] text-black font-semibold px-6 py-3 rounded-lg hover:scale-105 duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

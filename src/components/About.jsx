import React, { useState } from "react";
import me from "../Assets/about1.jpeg";

const About = () => {
    const [showModal, setShowModal] = useState(false);
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
            <button
             onClick={() => setShowModal(true)}
             className="px-8 py-4 rounded-xl bg-black text-white font-semibold hover:bg-[#00df9a] hover:text-black transition-all duration-300 shadow-md hover:scale-105">
              Learn More
            </button>
          </div>
        </div>

              {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center bg-black/70 overflow-y-auto py-12 px-4">
          <div className="relative w-full max-w-3xl bg-[#111111] rounded-3xl p-8 shadow-2xl text-white">
            
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-[#00df9a] text-2xl font-bold"
            >
              &times;
            </button>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Image */}
              <div className="flex-shrink-0">
                <img
                  src={me}
                  alt="Aikambe"
                  className="w-40 h-40 object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* Details */}
              <div className="flex-1 flex flex-col gap-4">
                <h3 className="text-2xl font-bold text-[#00df9a]">Aikambe Kishe</h3>
                <p className="text-gray-300">
                  Full-Stack Developer | UI/UX Enthusiast | Problem Solver
                </p>

                {/* Background / CV sections */}
                <div className="mt-4 flex flex-col gap-3">
                  <div>
                    <h4 className="text-lg font-semibold text-[#00df9a]">Background</h4>
                    <p className="text-gray-400 text-sm">
                      Passionate about creating modern web applications with React, Node.js, and Tailwind CSS. Experienced in building responsive and scalable UIs.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#00df9a]">Experience</h4>
                    <ul className="list-disc list-inside text-gray-400 text-sm">
                      <li>Web Developer </li>
                      <li>Linux System Administrator</li>
                      <li>Web Deployment</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#00df9a]">Education</h4>
                    <p className="text-gray-400 text-sm">
                      Primary Education, Uhuru Peak/ Green Acres Primary School
                    </p>
                    <p className="text-gray-400 text-sm">
                      Certificate of Secondary Education Examination(CSEE), St. Joseph Boys' Science School
                    </p>
                    <p className="text-gray-400 text-sm">
                      Advanced Certificate of Secondary Education Examination(ACSEE), Arusha Science High School
                    </p>
                    <p className="text-gray-400 text-sm">
                      BSc in Business Information Technology, University of Dar es Salaam
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#00df9a]">Skills</h4>
                    <p className="text-gray-400 text-sm">
                      React, 
                      FastAPI, 
                      Angular, 
                      Tailwind CSS, 
                      Django, 
                      TypeScript, 
                      MariaDB
                    </p>
                  </div>

                   <div>
                    <h4 className="text-lg font-semibold text-[#00df9a]">Hobbies</h4>
                    <p className="text-gray-400 text-sm">
                      Learning new technologies, hiking, movies and gaming.
                      Learning Spanish.
                    </p>
                    <p className="text-gray-400 text-sm">
                      Learning Spanish.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}





      </div>
    </section>
  );
};

export default About;

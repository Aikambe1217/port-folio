import React from "react";
import accounts from "../Assets/accounts.jpeg";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative w-full bg-black py-24 px-6 overflow-hidden"
    >
      {/* Decorative accents */}
      <div className="absolute top-32 left-0 w-72 h-72 bg-[#00df9a]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <p className="text-[#00df9a] uppercase tracking-widest font-semibold mb-3">
          Portfolio
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-14">
          Selected Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">
          
          {/* Project Card */}
          <div className="group bg-[#0b0b0b] rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#00df9a]/10">
            
            <div className="relative w-full h-52 overflow-hidden">
              <img
                src=""
                alt="Project 1"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />
            </div>

            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold text-white mb-2">
                Project 1
              </h3>
              <p className="text-gray-400 mb-5 text-sm leading-relaxed">
                Coming soon...
              </p>
              <a
                href="#"
                className="inline-flex items-center text-[#00df9a] font-semibold text-sm group-hover:underline"
              >
                View Project →
              </a>
            </div>
          </div>

          {/* Project Card */}
          <div className="group bg-[#0b0b0b] rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#00df9a]/10">
            
            <div className="relative w-full h-52 overflow-hidden">
              <img
                src={accounts}
                alt="Vicoba Accounting Web App"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />
            </div>

            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold text-white mb-2">
                Vicoba Accounting Web App
              </h3>
              <p className="text-gray-400 mb-5 text-sm leading-relaxed line-clamp-4">
                Empowering Community Savings Groups. Track member contributions,
                manage loans, monitor investments, and grow community wealth with
                transparency and ease.
              </p>
              <a
                href="https://maonoyetu.com"
                className="inline-flex items-center text-[#00df9a] font-semibold text-sm group-hover:underline"
              >
                View Project →
              </a>
            </div>
          </div>

          {/* Project Card */}
          <div className="group bg-[#0b0b0b] rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#00df9a]/10">
            
            <div className="relative w-full h-52 overflow-hidden">
              <img
                src=""
                alt="Project 3"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />
            </div>

            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold text-white mb-2">
                Project 3
              </h3>
              <p className="text-gray-400 mb-5 text-sm leading-relaxed">
                Coming soon...
              </p>
              <a
                href="#"
                className="inline-flex items-center text-[#00df9a] font-semibold text-sm group-hover:underline"
              >
                View Project →
              </a>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-16">
          <button className="px-8 py-4 rounded-xl bg-[#00df9a] text-black font-semibold hover:scale-105 transition duration-300 shadow-md hover:shadow-[#00df9a]/40">
            View More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

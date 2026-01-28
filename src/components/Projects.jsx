import React, { useState } from "react";
import accounts from "../Assets/accounts.jpeg";
import portfolio from "../Assets/about3.jpeg";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);

  // Example additional projects
  const moreProjects = [
    {
      title: "Vicoba Accounting Web App",
      desc: "Empowering Community Savings Groups. Track member contributions, manage loans, monitor investments, and grow community wealth with transparency and ease.",
      img: accounts, //image
      link: "https://maonoyetu.com",
    },
    {
      title: "Portfolio Website",
      desc: "My personal portfolio built with React and Tailwind, showcasing projects and skills.",
      img: portfolio, //image
      link: "https://aikambe1217.github.io/port-folio/",
    },
    {
      title: "project 3",
      desc: "coming soon...",
      img: "", //image
      link: "#",
    },
  ];

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
          {/* Project 1 */}
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

          {/* Project 2 */}
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

          {/* Project 3 */}
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
          <button
            onClick={() => setShowModal(true)}
            className="px-8 py-4 rounded-xl bg-[#00df9a] text-black font-semibold hover:scale-105 transition duration-300 shadow-md hover:shadow-[#00df9a]/40"
          >
            View More Projects
          </button>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center bg-black/70 overflow-y-auto py-12 px-4">
            <div className="relative w-full max-w-3xl bg-[#0b0b0b] rounded-3xl p-6 shadow-2xl text-white">
              
              {/* Close button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-[#00df9a] text-2xl font-bold"
              >
                &times;
              </button>

              <h3 className="text-3xl font-bold text-[#00df9a] mb-6">All Projects</h3>

              <div className="flex flex-col gap-6">
                {moreProjects.map((project, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row gap-4 bg-[#111111] rounded-2xl p-4 border border-white/10 hover:bg-[#1a1a1a] transition"
                  >
                    <div className="w-full md:w-48 h-32 md:h-32 overflow-hidden rounded-xl">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                        <p className="text-gray-400 text-sm">{project.desc}</p>
                      </div>

                      {/* Right-aligned link */}
                      <div className="flex justify-end mt-2">
                        <a
                          href={project.link}
                          className="text-[#00df9a] font-semibold hover:underline text-sm inline-flex items-center"
                        >
                          View Project →
                        </a>
                      </div>
                        </div>
                      </div>

                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;

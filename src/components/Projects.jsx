import React from "react";
// import me from "../Assets/young-african-man-pointing-finger-side-blue-wall.jpg"
// import ecommerce from "../Assets/cyber-monday-shopping-sales.jpg"
const Projects = () => {
  return (
    <div className="w-full bg-black py-16 px-4 text-white" id="projects">
      <div className="max-w-[1240px] mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#00df9a] mb-12">
          My Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          
          {/* Project 1 */}
          <div className="bg-gray-900 rounded-2xl shadow-lg p-6 hover:scale-105 duration-300">
            <img
              src=""
              alt="Project 1"
              className="rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Portfolio Website</h3>
            <p className="text-gray-400 mb-4">
              A responsive personal portfolio built with React & Tailwind CSS.
            </p>
            <a
              href="q"
              className="text-[#00df9a] font-semibold hover:underline"
            >
              View Project
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-900 rounded-2xl shadow-lg p-6 hover:scale-105 duration-300">
            <img
              src=""
              alt="Project 2"
              className="rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">E-Commerce Store</h3>
            <p className="text-gray-400 mb-4">
              An online store with product filtering and a shopping cart.
            </p>
            <a
              href="s"
              className="text-[#00df9a] font-semibold hover:underline"
            >
              View Project
            </a>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-900 rounded-2xl shadow-lg p-6 hover:scale-105 duration-300">
            <img
              src="s"
              alt="Project 3"
              className="rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Blog Platform</h3>
            <p className="text-gray-400 mb-4">
              A full-stack blog platform with authentication & comments.
            </p>
            <a
              href="s"
              className="text-[#00df9a] font-semibold hover:underline"
            >
              View Project
            </a>
          </div>
        </div>

        <button className="mt-6 bg-[#00df9a] text-black font-semibold px-6 py-3 rounded-lg hover:scale-105 duration-300">
            View More of my Projects
          </button>
      </div>
    </div>
  );
};

export default Projects;

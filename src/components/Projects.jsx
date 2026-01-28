import React from "react";
// import me from "../Assets/young-african-man-pointing-finger-side-blue-wall.jpg"
// import ecommerce from "../Assets/cyber-monday-shopping-sales.jpg"
import accounts from "../Assets/accounts.jpeg"
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
          <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
           
            <div className="w-full h-48 sm:h-56 md:h-64 lg:h-48 overflow-hidden">
              <img
                src=""
                alt="project 1"
                className="w-full h-full object-cover"
              />
            </div>

          
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-white">Project 1</h3>
              <p className="text-gray-400 mb-4 text-sm md:text-base">
                coming soon...
              </p>
              <a
                href="#"
                className="text-[#00df9a] font-semibold hover:underline text-sm md:text-base"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project 2 */}
         <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
           
            <div className="w-full h-48 sm:h-56 md:h-64 lg:h-48 overflow-hidden">
              <img
                src={accounts}
                alt="Vicoba Accounting Web App"
                className="w-full h-full object-cover"
              />
            </div>

          
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-white">Vicoba Accounting Web App</h3>
              <p className="text-gray-400 mb-4 text-sm md:text-base">
                Empowering Community Savings Groups. Transform how your VICOBA manages finances with modern, 
                intuitive accounting software. Track member contributions, manage loans, monitor investments, 
                and grow your community wealth with transparency and ease.
              </p>
              <a
                href="https://maonoyetu.com"
                className="text-[#00df9a] font-semibold hover:underline text-sm md:text-base"
              >
                View Project
              </a>
            </div>
          </div>


          {/* Project 3 */}
          <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
           
            <div className="w-full h-48 sm:h-56 md:h-64 lg:h-48 overflow-hidden">
              <img
                src=""
                alt="project 3"
                className="w-full h-full object-cover"
              />
            </div>

          
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-white">Project 3</h3>
              <p className="text-gray-400 mb-4 text-sm md:text-base">
                coming soon...
              </p>
              <a
                href="#"
                className="text-[#00df9a] font-semibold hover:underline text-sm md:text-base"
              >
                View Project
              </a>
            </div>
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

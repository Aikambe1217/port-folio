import React from "react";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <footer className="w-full bg-gray-950 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Brand Section */}
        <div>
          <h1 className="text-3xl font-bold text-[#00df9a] mb-4">AIKAMBE</h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Building digital experiences that inspire, connect, and make an impact.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
            <ul className="space-y-2">
                  <li className="hover:text-[#00df9a] cursor-pointer transition duration-300">
                    <Link to="hero" smooth={true} duration={500}>Home</Link>
                  </li>
                  <li className="hover:text-[#00df9a] cursor-pointer transition duration-300">
                    <Link to="about" smooth={true} duration={500}>About</Link>
                  </li>
                  <li className="hover:text-[#00df9a] cursor-pointer transition duration-300">
                    <Link to="projects" smooth={true} duration={500}>Projects</Link>
                  </li>
                  <li className="hover:text-[#00df9a] cursor-pointer transition duration-300">
                    <Link to="contacts" smooth={true} duration={500}>Contacts</Link>
                  </li>
                </ul>
          
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Connect</h2>
          <div className="flex justify-center md:justify-start space-x-6 text-2xl">
            <a
              href="https://github.com/aikambe1217"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-[#00df9a] transition duration-300"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://instagram.com/aik._fidelis"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-[#00df9a] transition duration-300"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="mailto:aikambekishe12@gmail.com"
              aria-label="Email"
              className="hover:text-[#00df9a] transition duration-300"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} <span className="text-[#00df9a] font-semibold">Aikambe</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

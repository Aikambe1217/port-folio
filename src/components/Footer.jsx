import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-12 px-6">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center text-center space-y-8">
        
        {/* Logo / Name */}
        <h1 className="text-3xl font-bold text-[#00df9a]">AIKAMBE</h1>

        {/* Navigation Links */}
        <ul className="flex flex-col space-y-4 text-lg">
          <li className="cursor-pointer hover:text-[#00df9a] transition duration-300">Home</li>
          <li className="cursor-pointer hover:text-[#00df9a] transition duration-300">About</li>
          <li className="cursor-pointer hover:text-[#00df9a] transition duration-300">Projects</li>
          <li className="cursor-pointer hover:text-[#00df9a] transition duration-300">Contacts</li>
        </ul>

        {/* Social Links */}
        <div className="flex space-x-6 text-xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#00df9a] transition duration-300"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#00df9a] transition duration-300"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="mailto:yourname@email.com"
            className="hover:text-[#00df9a] transition duration-300"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Aikambe. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

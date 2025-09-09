import React, { useState } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">AIKAMBE</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        <li className="p-4 cursor-pointer">
          <Link to="hero" smooth={true} duration={500}>Home</Link>
        </li>
        <li className="p-4 cursor-pointer">
          <Link to="about" smooth={true} duration={500}>About</Link>
        </li>
        <li className="p-4 cursor-pointer">
          <Link to="projects" smooth={true} duration={500}>Projects</Link>
        </li>
        <li className="p-4 cursor-pointer">
          <Link to="contacts" smooth={true} duration={500}>Contacts</Link>
        </li>
      </ul>

      {/* Mobile Menu */}
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? (
          <i className="fa-solid fa-bars text-2xl cursor-pointer"></i>
        ) : (
          <i className="fa-solid fa-xmark text-2xl cursor-pointer"></i>
        )}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%] ease-in-out duration-500"
        }
      >
        <h1 className="w-full text-3xl m-4 font-bold text-[#00df9a]">AIKAMBE</h1>
        <ul className="p-4">
          <li className="p-4 border-b border-gray-600 cursor-pointer">
            <Link onClick={handleNav} to="hero" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer">
            <Link onClick={handleNav} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer">
            <Link onClick={handleNav} to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer">
            <Link onClick={handleNav} to="contacts" smooth={true} duration={500}>
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

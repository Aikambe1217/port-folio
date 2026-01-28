import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNav = () => setNav(!nav);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && nav) {
        setNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [nav]);

  // Detect scroll (DESKTOP ONLY STYLING)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
        md:sticky md:top-0 md:z-50
        transition-all duration-300 sticky top-0 z-50
        ${scrolled ? "md:bg-black bg-black" : "md:bg-white bg-white"}
      `}
    >
      <div
        className={`
          flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4
          text-white
          ${scrolled ? "md:text-white" : "md:text-black"}
        `}
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">AIKAMBE</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex">
          <li className="p-4 cursor-pointer">
            <Link to="hero" smooth duration={500}>Home</Link>
          </li>
          <li className="p-4 cursor-pointer">
            <Link to="about" smooth duration={500}>About</Link>
          </li>
          <li className="p-4 cursor-pointer">
            <Link to="projects" smooth duration={500}>Projects</Link>
          </li>
          <li className="p-4 cursor-pointer">
            <Link to="contacts" smooth duration={500}>Contacts</Link>
          </li>
        </ul>

        {/* Mobile Menu Icon (UNCHANGED) */}
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? (
          <i className={`fa-solid fa-bars text-2xl cursor-pointer ${scrolled ? "text-white" : "text-black"}`}></i>
          ) : (
            <i className={`fa-solid fa-xmark text-2xl cursor-pointer ${scrolled ? "text-white" : "text-black"}`}></i>
          )}
        </div>

        {/* Mobile Menu (UNCHANGED) */}
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
              <Link onClick={handleNav} to="hero" smooth duration={500}>
                Home
              </Link>
            </li>
            <li className="p-4 border-b border-gray-600 cursor-pointer">
              <Link onClick={handleNav} to="about" smooth duration={500}>
                About
              </Link>
            </li>
            <li className="p-4 border-b border-gray-600 cursor-pointer">
              <Link onClick={handleNav} to="projects" smooth duration={500}>
                Projects
              </Link>
            </li>
            <li className="p-4 border-b border-gray-600 cursor-pointer">
              <Link onClick={handleNav} to="contacts" smooth duration={500}>
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

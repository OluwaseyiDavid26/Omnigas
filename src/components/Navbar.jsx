import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/Asset 1@4x.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-20 bg-transparent  text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div>
        <img src={logo} alt="OmniGas Logo" className="h-18" />
      </div>

      {/* Links (Desktop) */}
      <ul className="hidden md:flex space-x-12 text-[16px] font-medium">
        <li className="cursor-pointer text-white hover:text-gray-300">Home</li>
        <li className="cursor-pointer text-white hover:text-gray-300">
          About Us
        </li>
        <li className="cursor-pointer text-white hover:text-gray-300">
          Key Benefits
        </li>
        <li className="cursor-pointer text-white hover:text-gray-300">
          Our Drive
        </li>
        <li className="cursor-pointer text-white hover:text-gray-300">
          Our Services
        </li>
      </ul>
      <button className="bg-white text-green-900 px-6 py-2 rounded-md font-semibold hover:bg-gray-100">
        CALL US NOW
      </button>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-80 text-white p-6 flex flex-col space-y-4 md:hidden">
          <a href="#">Who We Are</a>
          <a href="#">Our Portfolio</a>
          <a href="#">Investors</a>
          <a href="#">Sustainability</a>
          <a href="#">Careers</a>
          <a href="#">Owners</a>
          <a href="#">Contact Us</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

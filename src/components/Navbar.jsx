import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/Asset 1@4x.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "#hero" },
    { label: "About Us", href: "#about" },
    { label: "Key Benefits", href: "#benefits" },
    { label: "Our Drive", href: "#mission" },
    { label: "Our Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-20 bg-transparent text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div>
        <img src={logo} alt="OmniGas Logo" className="h-12" />
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-10 text-[16px] font-medium">
        {links.map((link) => (
          <li
            key={link.label}
            className="cursor-pointer hover:text-green-300 transition"
          >
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      {/* CTA (Desktop Only) */}
      <button className="hidden md:inline bg-white text-green-900 px-6 py-2 rounded-md font-semibold hover:bg-green-100 transition">
        CALL US NOW
      </button>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`absolute top-0 left-0 w-full h-screen 
        bg-gradient-to-b from-green-900 to-green-600 
        text-white flex flex-col items-center justify-center 
        space-y-8 transform transition-transform duration-500 ease-in-out md:hidden 
        ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <button
          className="absolute top-6 right-6"
          onClick={() => setIsOpen(false)}
        >
          <X size={28} />
        </button>

        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-xl font-semibold tracking-wide hover:text-green-300 transition"
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </a>
        ))}

        <button className="mt-6 bg-white text-green-900 px-8 py-3 rounded-xl font-bold hover:bg-green-100 transition shadow-md">
          CALL US NOW
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Linkedin, Instagram, MessageCircle, Music2 } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-700 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start gap-4">
          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:bg-purple-600 hover:text-white transition"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:bg-purple-600 hover:text-white transition"
            >
              <Music2 size={20} /> {/* TikTok icon substitute */}
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:bg-purple-600 hover:text-white transition"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:bg-purple-600 hover:text-white transition"
            >
              <MessageCircle size={20} /> {/* WhatsApp substitute */}
            </a>
          </div>

          {/* Company Info */}
          <p className="font-semibold text-white">Omni Gas © 2025</p>
          {/* <p className="text-sm text-gray-400">Simply Creative</p> */}
        </div>

        {/* Center Section */}
        <div className="flex flex-col items-center">
          <a
            href="mailto:info@jowisstudio.com"
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-lg font-medium shadow-md hover:scale-105 transition"
          >
            info@Omnigas.com
          </a>
          <p className="text-xs text-gray-400 mt-2">Click to copy ↗</p>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-right">
          <p className="text-sm">New York, USA</p>
          <p className="text-sm">Texas CA</p>
          <p className="text-white font-semibold mt-2">+1 234 900 673</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

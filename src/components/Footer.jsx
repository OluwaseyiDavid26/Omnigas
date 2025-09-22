import React from "react";
import {
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  Phone,
  MapPin,
  Mail,
} from "lucide-react";

function Footer() {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("info@omnigas.com");
    alert("Email copied to clipboard!");
  };

  return (
    <footer className="bg-green-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Section - Social Icons */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:bg-green-500 hover:text-white transition"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:bg-green-500 hover:text-white transition"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:bg-green-500 hover:text-white transition"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:bg-green-500 hover:text-white transition"
            >
              <Youtube size={20} />
            </a>
          </div>
          <p className="font-semibold text-white">OmniGas © 2025</p>
        </div>

        {/* Center Section - Email */}
        <div className="flex flex-col items-center">
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-lg font-medium shadow-md hover:scale-105 transition"
          >
            <Mail size={18} />
            info@omnigas.com
          </button>
        </div>

        {/* Right Section - Contact Info */}
        <div className="text-center md:text-right space-y-2">
          <p className="flex items-center justify-center md:justify-end gap-2">
            <MapPin size={16} className="text-green-400" /> New York, USA
          </p>

          <p className="flex items-center justify-center md:justify-end gap-2 font-semibold text-white">
            <Phone size={16} className="text-green-400" /> +1 234 900 673
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

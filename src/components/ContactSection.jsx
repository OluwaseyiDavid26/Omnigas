import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      className="bg-gradient-to-b from-white to-green-100 text-black py-20 px-6"
      id="contact"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Get In Touch With Us</h2>
          <p className="mb-8 text-lg text-black-200">
            Have a question or need reliable gas solutions? Reach out and let’s
            power your business with OmniGas.
          </p>
          {/* 
          <div className="space-y-4 text-gray-200">
            <p className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-green-300" />
              123 Energy Avenue, Lagos, Nigeria
            </p>
            <p className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-green-300" />
              +234 800 123 4567
            </p>
            <p className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-green-300" />
              contact@omnigas.com
            </p>
          </div> */}
        </div>

        {/* Right Side (Form) */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded-md border border-gray-300/40  text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-md border border-gray-300/40 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 rounded-md border border-gray-300/40 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 rounded-md border border-gray-300/40 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full p-3 rounded-md border border-gray-300/40 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-green-400 text-green-900 font-semibold px-6 py-3 rounded-md hover:bg-green-300 transition"
          >
            SUBMIT →
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

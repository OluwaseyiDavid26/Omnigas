import React from "react";

const ContactSection = () => {
  return (
    <section className="bg-gray-600 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-4xl font-bold mb-4">Get In Touch With Us</h2>
          <p className="mb-8"></p>

          <div className="space-y-4">
            <p className="flex items-center gap-3">
              <span className="text-lg">📞</span> 1 234 567 890
            </p>
            <p className="flex items-center gap-3">
              <span className="text-lg">📧</span> hey@boxletter.media
            </p>
          </div>
        </div>

        {/* Right Side (Form) */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-gray-700 p-8 rounded-lg shadow-lg space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded-md bg-transparent border-b border-gray-300 text-white placeholder-gray-300 focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-md bg-transparent border-b border-gray-300 text-white placeholder-gray-300 focus:outline-none"
              required
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 rounded-md bg-transparent border-b border-gray-300 text-white placeholder-gray-300 focus:outline-none"
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 rounded-md bg-transparent border-b border-gray-300 text-white placeholder-gray-300 focus:outline-none"
              required
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full p-3 rounded-md bg-transparent border-b border-gray-300 text-white placeholder-gray-300 focus:outline-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition"
          >
            SUBMIT →
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

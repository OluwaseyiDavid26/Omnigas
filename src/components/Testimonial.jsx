import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

// Example local images (replace with yours)
import client1 from "../assets/h3.jpg";
import client2 from "../assets/h2.jpg";
import client3 from "../assets/h4.jpg";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "New York, USA",
    image: client1,
    text: "We have been using OmniGas for our industrial gas needs for several years now, and their service has always been exceptional. Their products are of the highest quality, and their staff is always courteous and helpful. OmniGas is a company we trust and highly recommend",
    rating: 4,
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "London, UK",
    image: client2,
    text: "We have been using OmniGas for our industrial gas needs for several years now, and their service has always been exceptional. Their products are of the highest quality, and their staff is always courteous and helpful. OmniGas is a company we trust and highly recommend",
    rating: 5,
  },
  {
    id: 3,
    name: "Alex Johnson",
    role: "Sydney, Australia",
    image: client3,
    text: "We have been using OmniGas for our industrial gas needs for several years now, and their service has always been exceptional. Their products are of the highest quality, and their staff is always courteous and helpful. OmniGas is a company we trust and highly recommend",
    rating: 5,
  },
];

function Testimonial() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h3 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 tracking-wide">
          Testimonials
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">
          What Our Clients Say
        </h2>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 30px rgba(0,0,0,0.15)",
              }}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center border border-gray-100"
            >
              {/* Avatar */}
              <div className="relative -mt-16 w-24 h-24">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-24 h-24 rounded-full border-4 border-green-400 object-cover shadow-md"
                />
              </div>

              {/* Name & Role */}
              <h4 className="mt-6 text-lg font-semibold text-gray-900">
                {t.name}
              </h4>
              <p className="text-sm text-gray-500">{t.role}</p>

              {/* Testimonial */}
              <p className="mt-4 text-gray-600 text-sm italic">"{t.text}"</p>

              {/* Stars */}
              <div className="flex justify-center mt-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill={i < t.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;

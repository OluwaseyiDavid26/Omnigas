import { motion } from "framer-motion";
import { Target } from "lucide-react";

export default function WhatDrivesUs() {
  return (
    <section className="relative bg-gradient-to-b from-green-50 to-white py-24 px-6 md:px-20 overflow-hidden">
      {/* floating accents */}
      <div className="absolute -top-10 left-0 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute top-40 -right-20 w-96 h-96 bg-emerald-300 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Subheading */}
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium"
        >
          <Target className="w-4 h-4" />
          Mission
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug"
        >
          What Drives Us
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 text-gray-700 leading-relaxed text-lg"
        >
          Omnigas is dedicated to providing reliable, safe, and sustainable gas
          solutions to meet the diverse needs of our customers. Our commitment
          extends beyond mere provision to encompass a profound responsibility
          for safety and a focus on environmental stewardship. Through our
          mission, we aim to empower individuals and communities to thrive while
          contributing to a healthier, more sustainable planet.
        </motion.p>
      </div>
    </section>
  );
}

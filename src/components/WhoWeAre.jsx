import { motion } from "framer-motion";
import whoImg from "../assets/who-img.png";

const textVariant = {
  hidden: { opacity: 0, x: -50 },
  show: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.2, // stagger each child
    },
  }),
};

export default function WhoWeAre() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-green-100 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="space-y-6">
          <motion.h3
            custom={0}
            variants={textVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="inline-block bg-white text-green-900 text-sm font-semibold px-5 py-2 rounded-full shadow-sm"
          >
            WHO WE ARE
          </motion.h3>

          <motion.h2
            custom={1}
            variants={textVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-green-900 leading-snug"
          >
            Powering a Sustainable Future with Omnigas
          </motion.h2>

          <motion.p
            custom={2}
            variants={textVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-gray-700 leading-relaxed"
          >
            Omnigas is your trusted provider of high-quality gas solutions for
            residential, commercial, and industrial needs. With a focus on
            excellence, safety, and sustainability, we offer a comprehensive
            range of propane, natural gas, and specialty gases. Our dedicated
            team is committed to delivering reliable energy solutions that
            exceed expectations while minimizing environmental impact. Join us
            in shaping a brighter, greener future with Omnigas
          </motion.p>
        </div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={whoImg}
              alt="Omnigas plant"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating accent */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-200 rounded-full blur-2xl"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
}

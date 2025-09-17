import { motion } from "framer-motion";
import { ShieldCheck, Leaf, CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Sustainability",
    icon: Leaf,
    desc: "As stewards of the environment, Omnigas is dedicated to promoting sustainability in every facet of our business. We recognize the importance of reducing our carbon footprint and minimizing environmental impact. That's why we've implemented eco-friendly practices and initiatives throughout our operations, from sourcing and production to distribution and beyond. By prioritizing renewable energy sources, optimizing efficiency, and investing in innovative technologies, we're working towards a greener future for generations to come. When you choose Omnigas, you're not just choosing a gas supplier – you're partnering with a company that's committed to environmental responsibility and sustainable practices.",
  },
  {
    title: "Reliability",
    icon: CheckCircle2,
    desc: "As stewards of the environment, Omnigas is dedicated to promoting sustainability in every facet of our business. We recognize the importance of reducing our carbon footprint and minimizing environmental impact. That's why we've implemented eco-friendly practices and initiatives throughout our operations, from sourcing and production to distribution and beyond. By prioritizing renewable energy sources, optimizing efficiency, and investing in innovative technologies, we're working towards a greener future for generations to come. When you choose Omnigas, you're not just choosing a gas supplier – you're partnering with a company that's committed to environmental responsibility and sustainable practices.",
  },
  {
    title: "Safety",
    icon: ShieldCheck,
    desc: "As stewards of the environment, Omnigas is dedicated to promoting sustainability in every facet of our business. We recognize the importance of reducing our carbon footprint and minimizing environmental impact. That's why we've implemented eco-friendly practices and initiatives throughout our operations, from sourcing and production to distribution and beyond. By prioritizing renewable energy sources, optimizing efficiency, and investing in innovative technologies, we're working towards a greener future for generations to come. When you choose Omnigas, you're not just choosing a gas supplier – you're partnering with a company that's committed to environmental responsibility and sustainable practices.",
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.2,
      type: "spring",
      stiffness: 60,
    },
  }),
};

export default function Benefits() {
  return (
    <section className="relative bg-gradient-to-b from-white to-green-50 py-20 px-6 md:px-20 overflow-hidden">
      {/* floating background accent */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 relative z-10">
        {/* Left side (heading + text) */}
        <motion.div
          initial={{ opacity: 0, x: -80 }} // start off-screen to the left
          whileInView={{ opacity: 1, x: 0 }} // slide in to position
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="col-span-1 flex flex-col justify-top"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Key Benefits for our Customers
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Discover the values that power Omnigas and make every interaction
            with us memorable, secure, and aligned with your brand.
          </p>
        </motion.div>

        {/* Right side (benefits grid) */}
        <div className="col-span-2 grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={cardVariants}
                className="rounded-2xl shadow-lg bg-white/30 backdrop-blur-lg border border-white/20 p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

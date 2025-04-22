import React from "react";
import { motion } from "framer-motion";

const advantages = [
  "Established credentials of promoters in export markets, having sold engineering products in over 50 countries.",
  "Extensive global networking for effective product sourcing.",
  "In-house engineering team to ensure adherence to approved designs and quality parameters as per export standards.",
  "Proactive team that values time, resolves concerns quickly, and meets all committed timelines.",
  "Single-point responsibility for successful erection and commissioning of projects.",
  "Manpower support for turnkey projects with skilled professionals ensuring efficient execution and guaranteed success."
];

const BigByteAdvantages = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-14"
        >
          Big Byte{" "}
          <span className="text-orange-500 underline decoration-2 underline-offset-4 font-light">
            Advantages
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 shadow-md hover:shadow-xl transition-shadow p-6 rounded-2xl"
            >
              <p className="text-base leading-relaxed text-gray-700">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BigByteAdvantages;


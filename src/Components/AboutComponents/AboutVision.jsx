import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function AboutVision() {
  const { t } = useTranslation();
  const benefits = t("about.benefits", { returnObjects: true });
  const vision = t("about.vision.heading");

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-24 relative overflow-hidden">
      <motion.div
        className=" flex flex-col  text-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {vision}
        </motion.h2>
      </motion.div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        {/* Left side: Circular Image with animated background */}
        <div className="md:w-1/2 relative flex justify-center items-center">
          {/* Background Circle 1 */}
          <motion.div
            className="absolute hidden md:block rounded-full w-72 h-72 md:w-96 md:h-96 -left-12 -top-12 overflow-hidden z-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src="/images/IMG-20250822-WA0001.jpg"
              alt="Background 1"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Background Circle 2 */}
          <motion.div
            className="absolute hidden md:block rounded-full w-48 h-48 md:w-64 md:h-64 -right-12 -bottom-22 overflow-hidden z-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src="/images/IMG-20250822-WA0006.jpg"
              alt="Background 2"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Main Image */}
          <motion.img
            src="/images/IMG-20250817-WA0005.jpg"
            alt="Student Learning"
            className="relative z-10 w-120 h-72 md:w-80 md:h-80 object-cover md:rounded-full shadow-2xl md:border-8 md:border-gray-100"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              duration: 0.8,
              delay: 0.4,
            }}
            viewport={{ once: true, amount: 0.3 }}
          />
        </div>

        {/* Right side: Text content */}
        <motion.div
          className="md:w-1/2 flex flex-col gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-col gap-6 mt-8">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-start gap-4 border-l-4 border-yellow-400 hover:shadow-2xl hover:-translate-y-2 transition-transform duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <span className="text-yellow-400 font-bold text-3xl md:text-4xl flex-shrink-0">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 hover:text-yellow-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-2 md:mt-1">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

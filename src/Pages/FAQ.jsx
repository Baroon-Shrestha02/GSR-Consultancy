import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function FAQ() {
  const { t } = useTranslation();
  const faqItems = t("faq.items", { returnObjects: true });
  // Container animation
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  // Each FAQ item animation (slide from left or right alternately)
  const getItemVariants = (index) => ({
    hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      {/* Mini Hero Section */}
      <section className="flex flex-col justify-center items-center text-center px-6 md:px-20 lg:px-40 py-24 bg-[#002452] rounded-b-3xl shadow-md">
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-white mb-5"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t("faq.hero.heading")}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-200 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {t("faq.hero.subheading")}
        </motion.p>
      </section>

      {/* FAQ Section */}
      <section className="px-6 md:px-20 lg:px-40 py-16">
        <h2 className="text-3xl font-bold text-[#002452] mb-6">
          {t("faq.title")}
        </h2>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-yellow-400"
              variants={getItemVariants(index)}
            >
              <h3 className="font-semibold text-xl text-[#002452] mb-2">
                {item.question}
              </h3>
              <p className="text-gray-700">{item.answer}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

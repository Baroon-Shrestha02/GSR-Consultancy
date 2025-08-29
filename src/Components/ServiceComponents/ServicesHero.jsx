import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
useTranslation;
export default function ServicesHero() {
  const { t } = useTranslation();
  return (
    <section className="relative h-[80vh] flex items-end pb-16 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('WhatsApp Image 2025-08-22 at 09.26.36_e5795502.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#002452] via-[#002452]/50 to-white/0" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end w-full gap-6">
          {/* Left side: Heading & paragraph */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              {t("services.hero.title")}
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              {t("services.hero.subtitle")}
            </p>
          </motion.div>

          {/* Right side: Button */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Link to="/contact">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all">
                {t("services.hero.button")}
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HomeIntro = () => {
  const { t } = useTranslation();
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative overflow-hidden bg-white py-20">
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Media Section */}
        <motion.div
          className="relative group"
          variants={fadeUp}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="GSR.jpg"
            alt="GSR Abroad Consultancy"
            className="w-full h-auto rounded-3xl shadow-2xl object-cover transform transition-transform duration-500"
          />
          {/* Decorative circle */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-200 rounded-full blur-3xl opacity-40"></div>
        </motion.div>

        {/* Text Section */}
        <motion.div className="space-y-6" variants={fadeUp}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
            {t("home.intro.t1")}{" "}
            <span className="text-yellow-500">{t("home.hero.heading")}</span> —
            {t("home.intro.t2")}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
            {t("home.intro.p1")} <br />
            <span className="font-semibold text-gray-900">
              {t("home.intro.slo")}
            </span>
          </p>
          <Link to="/about">
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("home.intro.button")}
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Decorative gradient blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-300 rounded-full blur-3xl opacity-30"></div>
    </section>
  );
};

export default HomeIntro;

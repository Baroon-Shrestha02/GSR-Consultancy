import React from "react";
import { Link } from "react-router-dom";
import { motion, useTransform } from "framer-motion";
import {
  AcademicCapIcon,
  GlobeAltIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

// Languages offered

export default function AboutIntro() {
  const { t } = useTranslation();

  const languages = [
    { name: t("about.intro.lang.eng"), icon: GlobeAltIcon },
    { name: t("about.intro.lang.kor"), icon: AcademicCapIcon },
    { name: t("about.intro.lang.jap"), icon: BookOpenIcon },
  ];
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.15, duration: 0.6, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* Intro Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          {/* Left: Text Content */}
          <motion.div
            className="md:w-1/2 flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-3xl md:text-5xl font-bold text-[#002452] mb-4"
              variants={itemVariants}
            >
              {t("about.intro.heading")}
            </motion.h2>

            <motion.p
              className="text-gray-700 text-lg md:text-xl mb-6 leading-relaxed"
              variants={itemVariants}
            >
              {t("about.intro.p1")}
            </motion.p>

            <motion.p
              className="text-gray-700 text-lg md:text-xl leading-relaxed"
              variants={itemVariants}
            >
              {t("about.intro.p2")}
            </motion.p>

            {/* Explore Button */}

            {/* Languages Offered */}
            <motion.div
              className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4"
              variants={containerVariants}
            >
              {languages.map((lang, index) => {
                const Icon = lang.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:shadow-2xl transition"
                    variants={itemVariants}
                  >
                    <Icon className="h-12 w-12 text-blue-600 mb-2" />
                    <span className="text-blue-900 font-semibold">
                      {lang.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link
                to="/courses/study-in-japan"
                className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
              >
                {t("about.intro.button")}
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src="/aboutus.jpg"
              alt="Online Learning"
              className="w-full h-[550px] md:h-[650px] object-cover rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          {/* Left: Text */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-2xl md:text-4xl font-bold text-blue-900 mb-6">
              {t("about.founder.heading")}
            </h3>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
              {t("about.founder.p1")}{" "}
              <span className="font-bold text-blue-900">
                {t("about.founder.span1")}
              </span>
              ,{" "}
              <span className="font-bold text-blue-900">
                {t("about.founder.span2")}
              </span>
              ,{" "}
              <span className="font-bold text-blue-900">
                {t("about.founder.span3")}
              </span>{" "}
              {t("about.founder.p12")}”
            </p>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
              {t("about.founder.p2")}
            </p>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              {t("about.founder.p3")}
            </p>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src="/founder.png"
              alt="Founder"
              className="w-full h-[550px] md:h-[650px] object-cover rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          {/* Left: Image */}
          <motion.div
            className="md:w-1/2 order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src="/ceo.png"
              alt="CEO"
              className="w-full h-[550px] md:h-[650px] object-cover rounded-xl shadow-lg"
            />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            className="md:w-1/2 order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-2xl md:text-4xl font-bold text-blue-900 mb-6">
              {t("about.ceo.heading")}
            </h3>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
              {t("about.ceo.p1")}
            </p>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
              {t("about.ceo.p2")}{" "}
              <span className="font-bold text-blue-900">
                {t("about.ceo.span1")}
              </span>{" "}
              {t("about.ceo.and")}{" "}
              <span className="font-bold text-blue-900">
                {t("about.ceo.span2")}
              </span>
              . {t("about.ceo.p22")}
            </p>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              {t("about.ceo.p3")}{" "}
              <span className="font-bold text-blue-900">
                {t("about.ceo.span3")}
              </span>
              ,{" "}
              <span className="font-bold text-blue-900">
                {t("about.ceo.span4")}
              </span>
              , {t("about.ceo.and")}{" "}
              <span className="font-bold text-blue-900">
                {t("about.ceo.span5")}
              </span>
              . {t("about.ceo.p4")}
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

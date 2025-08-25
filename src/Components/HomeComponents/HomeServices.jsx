import React from "react";
import { motion } from "framer-motion";
import {
  FaUserTie,
  FaLanguage,
  FaUniversity,
  FaChalkboardTeacher,
  FaBriefcase,
  FaGlobeAsia,
  FaPassport,
  FaChartLine,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <FaUserTie color="#fff" />,
    title: "One-on-One Career Counseling",
    description:
      "Personalized guidance to help students choose the right academic or professional path based on their interests and goals.",
    points: [
      "Personal Assessment",
      "Career Planning",
      "Goal Setting",
      "95% Pass Rate",
    ],
    bgColor: "#2E86C1",
  },
  {
    icon: <FaLanguage color="#fff" />,
    title: "Japanese Language Training",
    description:
      "Certified training programs from N5 to N1 level, focused on clearing JLPT, NAT, and language exams required for Japanese institutions.",
    points: [
      "JLPT Preparation",
      "NAT Training",
      "Speaking Practice",
      "200+ Admissions",
    ],
    bgColor: "#E67E22",
  },
  {
    icon: <FaUniversity color="#fff" />,
    title: "Documentation Preparation",
    description:
      "Complete support with documentation, application forms, essays, and communication with Japanese schools and universities.",
    points: [
      "Application Prep",
      "Essay Writing",
      "School Communication",
      "85% Success Rate",
    ],
    bgColor: "#9B59B6",
  },
];

// Slide-up animation for the card
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, type: "spring", stiffness: 70 },
  }),
};

// Slide-up animation for the points
const pointVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, type: "tween" },
  }),
};

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="flex items-center justify-center flex-col">
          <motion.h2
            className="text-4xl md:text-6xl font-extrabold text-gray-900 text-center mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Discover Our Services
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl max-w-4xl font-extralight text-gray-900 text-center mb-16"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus quae
            obcaecati accusantium unde eius aliquid natus possimus sequi officia
            omnis?
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              style={{ backgroundColor: service.bgColor }}
            >
              {/* Icon */}
              <motion.div
                className="text-5xl mb-5"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {service.icon}
              </motion.div>

              {/* Title */}
              <motion.h3
                className="text-2xl font-bold mb-3 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {service.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="text-white mb-5 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {service.description}
              </motion.p>

              {/* Points */}
              <ul className="list-disc list-inside text-white space-y-1">
                {service.points.map((point, i) => (
                  <motion.li
                    key={i}
                    custom={i}
                    variants={pointVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link to="/services">
            <button className="px-6 py-2 bg-[#002452] text-white rounded-2xl shadow-xl text-2xl font-bold transitiion duration-300 ease-in-out transition-all hover:-translate-y-1 hover:scale-105">
              Explore More
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// src/Components/Documentation.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Documentation() {
  const steps = [
    {
      id: 1,
      title: "Document Preparation",
      description:
        "The first step is to gather all necessary documents, including passports, citizenship certificates, birth certificates, and police clearances. Academic transcripts, character certificates, and skill certificates must be verified and organized. Proper document preparation reduces errors, avoids delays, and ensures smooth processing. Having documents ready in advance also saves time and builds confidence when submitting forms to consultants or authorities.",
      keyPoints: [
        "Gather all necessary documents",
        "Verify academic and skill certificates",
        "Reduces errors and avoids delays",
        "Saves time and builds confidence",
      ],
      image: "/documentation.jpg",
      imgLeft: false,
    },
    {
      id: 2,
      title: "Application & Visa Processing",
      description:
        "During visa processing, accuracy and attention to detail are crucial. Each application form should be completed carefully to avoid errors in spelling, dates, and signatures. Coordination with licensed consultants ensures that financial documents, affidavits, and sponsorship papers meet all requirements. Proper verification and submission significantly increase the chances of visa approval and prevent unnecessary delays or rejections.",
      keyPoints: [
        "Accuracy and attention to detail",
        "Avoid errors in spelling, dates, and signatures",
        "Financial documents, affidavits, and sponsorship papers",
        "Increase chances of visa approval",
      ],
      image: "/Application.jpg",
      imgLeft: true,
    },
    {
      id: 3,
      title: "Final Preparation & Departure",
      description:
        "The final step ensures that students are fully prepared for departure. Pre-departure orientation covers Japanese, Korean, and English lifestyle, culture, workplace etiquette, and daily routines. Assistance with ticketing, travel preparation, and last-minute guidance helps students feel confident, safe, and ready for their journey. This step reduces anxiety, improves readiness, and ensures a smooth transition into life abroad.",
      keyPoints: [
        "Fully prepared for departure",
        "Japanese, Korean, and English lifestyle and culture",
        "Confident, safe, and ready",
        "Reduces anxiety and improves readiness",
      ],
      image: "/final.jpg",
      imgLeft: false,
    },
  ];

  // Framer Motion Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  };

  // Capitalize helper
  const capitalizeFirstLetter = (text) =>
    text.charAt(0).toUpperCase() + text.slice(1);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section with Animated Gradient */}
      <motion.div
        className="flex flex-col items-center justify-center text-center py-32 px-4 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #002452, #004080)" }}
        animate={{
          background: [
            "linear-gradient(135deg, #002452, #004080)",
            "linear-gradient(135deg, #004080, #002452)",
          ],
        }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
      >
        <motion.h1
          className="text-5xl font-bold mb-6 max-w-4xl text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Documentation & Visa Guidance
        </motion.h1>
        <motion.p
          className="text-lg leading-relaxed max-w-3xl text-white font-semibold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          We assist students at every step—from document preparation to
          pre-departure orientation—for Japanese, Korean, and English programs.
          Our team coordinates with professional consultants and licensed
          manpower agencies to ensure smooth processing.
        </motion.p>
      </motion.div>

      {/* Timeline / Process Sections */}
      <div className="max-w-7xl mx-auto py-16 px-6 space-y-24">
        {steps.map((step) => (
          <motion.div
            key={step.id}
            className={`flex flex-col md:flex-row items-center justify-between ${
              step.imgLeft ? "md:flex-row-reverse" : ""
            }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            {/* Image with Zoom-in Effect */}
            <motion.div
              className="md:w-1/2 flex justify-center mb-8 md:mb-0"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-full max-w-[500px] h-[500px] object-cover rounded-xl shadow-lg"
              />
            </motion.div>

            {/* Text Content */}
            <motion.div
              className="md:w-1/2 md:px-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Title with Animated Underline */}
              <motion.h2
                className="text-3xl font-bold mb-4 text-black relative inline-block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {step.id}. {step.title}
                <motion.span
                  className="absolute left-0 -bottom-1 h-1 bg-yellow-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </motion.h2>

              {/* Description with highlighted words */}
              <p className="text-black text-lg leading-relaxed mb-4 font-medium">
                {step.description.split(". ").map((sentence, idx) => {
                  let highlightedSentence = capitalizeFirstLetter(sentence);
                  step.keyPoints.forEach((point) => {
                    const regex = new RegExp(`(${point})`, "gi");
                    highlightedSentence = highlightedSentence.replace(
                      regex,
                      `<span class="text-yellow-500 font-bold">$1</span>`
                    );
                  });
                  return (
                    <span
                      key={idx}
                      className="block mb-2"
                      dangerouslySetInnerHTML={{
                        __html: highlightedSentence + ".",
                      }}
                    />
                  );
                })}
              </p>

              {/* Animated Key Points */}
              <ul className="list-disc list-inside space-y-2 text-black font-medium">
                {step.keyPoints.map((point, idx) => (
                  <motion.li
                    key={idx}
                    className="text-yellow-500"
                    custom={idx}
                    initial="hidden"
                    whileInView="visible"
                    variants={listVariants}
                  >
                    {capitalizeFirstLetter(point)}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

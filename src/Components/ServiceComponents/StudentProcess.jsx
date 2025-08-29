import React from "react";
import { motion } from "framer-motion";
import { Users, BookOpen, FileText, Globe } from "lucide-react";
import { BsAirplane } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const stepImages = [
  "/serv/cosuslation.jpg",
  "/serv/uni.jpg",
  "/serv/application.jpg",
  "/serv/visaapproval.jpg",
  "/serv/departure.jpg",
];
const stepIcons = [Users, BookOpen, FileText, Globe, BsAirplane];

export default function StudentProcessWithImages() {
  const { t } = useTranslation();
  const steps = t("services.process.steps", { returnObjects: true });

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center mb-12"
      >
        <h2 className="text-5xl font-bold text-blue-900 mb-4">
          {t("services.process.title")}
        </h2>
        <p className="text-gray-700 text-lg">
          {t("services.process.subtitle")}
        </p>
      </motion.div>

      <div className="space-y-20 max-w-6xl mx-auto">
        {steps.map((step, index) => {
          const isLeft = index % 2 === 0;
          const Icon = stepIcons[index];

          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2, // Stagger effect
              }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="md:w-1/2"
              >
                <img
                  src={stepImages[index]}
                  alt={step.title}
                  className="rounded-2xl shadow-lg w-full object-cover"
                />
              </motion.div>

              {/* Step Content */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                viewport={{ once: true }}
                className="md:w-1/2 p-4 text-center md:text-left"
              >
                <div className="flex items-center justify-center md:justify-start mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-md text-xl font-bold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-blue-900 ml-4">{`${step.id}. ${step.title}`}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

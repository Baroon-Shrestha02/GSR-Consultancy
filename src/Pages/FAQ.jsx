import React from "react";
import { motion } from "framer-motion";

export default function FAQ() {
  const faqItems = [
    // From Japan Student & SSW FAQs
    {
      question: "Q1. What is the difference between a Student Visa and SSW?",
      answer:
        "A Student Visa allows study in Japan, while SSW allows direct employment.",
    },
    {
      question: "Q2. Can I apply for both Student Visa and SSW?",
      answer: "You must choose one; applying for both is not allowed.",
    },
    {
      question: "Q3. How much Japanese proficiency is required?",
      answer:
        "Student Visa requires JLPT/NAT N5. SSW requires JLPT/NAT N4 and a skill test.",
    },
    {
      question: "Q4. Which exam is valid, JLPT or NAT?",
      answer: "Both JLPT and NAT exams are valid.",
    },
    {
      question: "Q5. Can I work part-time as a student?",
      answer: "Students can work up to 28 hours per week with permission.",
    },
    {
      question: "Q6. Do I need work experience for SSW?",
      answer:
        "Work experience is not always required, but passing the skill test is mandatory.",
    },
    {
      question: "Q7. Can a Student Visa be changed to SSW?",
      answer:
        "A Student Visa can be changed to SSW after passing the language and skill test.",
    },
    {
      question: "Q8. Which is better, Student Visa or SSW?",
      answer:
        "Student Visa is better for higher education and long-term careers, while SSW is better for immediate work and income.",
    },

    // From Institute FAQs
    {
      question: "Q9. Who are the teachers?",
      answer:
        "Classes are taught by experienced Nepali and Japanese instructors.",
    },
    {
      question: "Q10. Do you provide visa processing services?",
      answer:
        "Full visa processing guidance and support are provided at every step.",
    },
    {
      question: "Q11. What are the class timings?",
      answer: "Classes are available in morning, day, and evening shifts.",
    },
    {
      question: "Q12. Do you provide support after reaching Japan?",
      answer:
        " Yes ,we provide support in connecting with schools or companies after arriving in Japan.",
    },
  ];

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
          Selected FAQs
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-200 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Find answers to the most common questions about{" "}
          <span className="font-semibold text-yellow-400">
            Japan Student & SSW
          </span>
          and{" "}
          <span className="font-semibold text-yellow-400">our Institute</span>.
        </motion.p>
      </section>

      {/* FAQ Section */}
      <section className="px-6 md:px-20 lg:px-40 py-16">
        <h2 className="text-3xl font-bold text-[#002452] mb-6">
          Frequently Asked Questions
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

import { CheckCircle, BookOpen, Target, Laptop } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const ProgramCard = ({ title, description, items, bgColor, icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    className={`relative rounded-2xl p-8 shadow-xl border-0 ${bgColor} overflow-hidden group hover:shadow-2xl transition-all duration-300`}
  >
    {/* Background gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    {/* Decorative element */}
    <motion.div
      className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />

    <div className="relative z-10">
      {/* Icon and title */}
      <div className="flex items-start gap-4 mb-6">
        <motion.div
          className="p-3 rounded-xl bg-white/50 backdrop-blur-sm shadow-lg"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {icon}
        </motion.div>
        <div>
          <h3 className="text-2xl font-bold text-[#1A1A1A] group-hover:text-[#002244] transition-colors duration-300">
            {title}
          </h3>
        </div>
      </div>

      <p className="text-gray-700 text-base mb-8 leading-relaxed font-medium">
        {description}
      </p>

      <motion.ul
        className="space-y-4 text-sm text-gray-800"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {items.map((item, idx) => (
          <motion.li
            key={idx}
            className="flex items-start gap-3 group/item"
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <CheckCircle className="text-green-600 w-5 h-5 mt-0.5 flex-shrink-0 group-hover/item:text-green-700 transition-colors duration-200" />
            </motion.div>
            <span className="group-hover/item:text-gray-900 transition-colors duration-200 font-medium">
              {item}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  </motion.div>
);

export default function KoreaTrainingProgram() {
  const programs = [
    {
      title: "Korean Language Courses",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      description:
        "Comprehensive Korean language training from Basic to Advanced levels, designed for students and workers aiming for study or job opportunities in Korea.",
      items: [
        "Step-by-step training in reading, writing, listening, and speaking.",
        "Daily life conversations, grammar, and vocabulary for real use.",
        "Preparation for both academic and workplace communication.",
      ],
    },
    {
      title: "EPS-TOPIK & Skill Test Training",
      bgColor: "bg-gradient-to-br from-emerald-50 to-green-100",
      icon: <Target className="w-8 h-8 text-emerald-600" />,
      description:
        "Intensive coaching for EPS-TOPIK and job-related skill tests, ensuring readiness for Korea’s employment system.",
      items: [
        "Focused training on EPS-TOPIK exam format with mock tests.",
        "Skill Test practice covering both written and practical tasks.",
        "Guidance on discipline, workplace etiquette, and performance improvement.",
      ],
    },
    {
      title: "Computer-Based Test (CBT) & Exam Strategy",
      bgColor: "bg-gradient-to-br from-purple-50 to-indigo-100",
      icon: <Laptop className="w-8 h-8 text-indigo-600" />,
      description:
        "Specialized classes for CBT, UBT, and PBT exam formats with weekly assessments and strategy-focused preparation.",
      items: [
        "Hands-on CBT training with computer-based mock exams.",
        "Systematic practice with question banks and past papers.",
        "Weekly exams, feedback, and exam strategy sessions.",
      ],
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#002244] mb-8 leading-tight">
            Korean Training{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Programs
            </motion.span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 mb-12 max-w-4xl mx-auto text-xl leading-relaxed font-medium"
          >
            At <span className="font-semibold">[Institute Name]</span>, we
            prepare students and workers for success in Korea with complete
            Korean language courses, EPS-TOPIK & Skill Test training, and
            specialized exam strategies including CBT, UBT, and PBT formats.
          </motion.p>
        </motion.div>

        {/* Programs grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard
              key={program.title}
              title={program.title}
              bgColor={program.bgColor}
              icon={program.icon}
              description={program.description}
              items={program.items}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

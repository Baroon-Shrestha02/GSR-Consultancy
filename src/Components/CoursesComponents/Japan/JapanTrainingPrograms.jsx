import { CheckCircle, BookOpen, Users, Target, Sparkles } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const ProgramCard = ({
  title,
  description,
  items,
  bgColor,
  icon,
  delay,
  img,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    className={`relative rounded-2xl p-8 shadow-xl border-0 overflow-hidden group hover:shadow-2xl transition-all duration-300`}
  >
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={img} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-white/70 group-hover:bg-white/60 transition-all duration-300" />
    </div>

    {/* Content */}
    <div className="relative z-10">
      <div className="flex items-start gap-4 mb-6">
        <motion.div
          className="p-3 rounded-xl bg-white/50 backdrop-blur-sm shadow-lg"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-2xl font-bold text-[#1A1A1A] group-hover:text-[#002244] transition-colors duration-300">
          {title}
        </h3>
      </div>

      <p className="text-gray-700 text-base mb-8 leading-relaxed font-medium">
        {description}
      </p>

      <motion.ul
        className="space-y-4 text-sm text-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
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
            <CheckCircle className="text-green-600 w-5 h-5 mt-0.5 flex-shrink-0" />
            <span className="font-medium">{item}</span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  </motion.div>
);

const StatCard = ({ number, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg border border-white/20"
  >
    <motion.div
      className="text-4xl font-bold text-[#002244] mb-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: delay + 0.3 }}
      viewport={{ once: true }}
    >
      {number}
    </motion.div>
    <div className="text-gray-600 font-medium">{label}</div>
  </motion.div>
);

export default function JapanTrainingPrograms() {
  const programs = [
    {
      title: "Japanese Language Training",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      description:
        "From foundational language skills to workplace communication, our training covers JLPT, NAT, and JFT A2—opening multiple pathways to success in Japan.",
      img: "/About.jpg",
      items: [
        "Training for JFT A2, focused on daily life and workplace communication (for SSW program).",
        "JLPT/NAT classes for N5, N4, and N3 levels.",
        "Strong focus on speaking, listening, reading, and kanji writing.",
        "Career-oriented Japanese to support higher studies and jobs in Japan.",
        "One of the fastest and easiest pathways to qualify for working in Japan.",
      ],
    },
    {
      title: "Cultural Training",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-100",
      icon: <Users className="w-8 h-8 text-amber-600" />,
      description:
        "Living in Japan requires more than just language. Our cultural programs ensure smooth adjustment to Japanese society and workplaces.",
      img: "/culture.jpeg",
      items: [
        "Traditions, festivals, and Japanese lifestyle essentials.",
        "Food culture, dining etiquette, and social customs.",
        "Politeness, greetings, and showing respect in daily interactions.",
        "Workplace culture: teamwork, discipline, and professionalism.",
        "Helps students adapt quickly, avoid misunderstandings, and succeed in Japan.",
      ],
    },
    {
      title: "Exam Preparation Classes",
      bgColor: "bg-gradient-to-br from-emerald-50 to-green-100",
      icon: <Target className="w-8 h-8 text-emerald-600" />,
      description:
        "Targeted preparation classes to help students pass JLPT, NAT, and JFT with confidence.",
      img: "/WhatsApp Image 2025-08-17 at 08.02.35_456f52ee.jpg",
      items: [
        "Regular mock tests and practice sets.",
        "Focus on weak areas like grammar, listening, and kanji.",
        "Time management strategies for exam success.",
        "Confidence-building sessions to reduce exam stress.",
        "Proven methods to achieve higher scores.",
      ],
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#002244] mb-8 leading-tight">
            Comprehensive Training{" "}
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
            We equip students with Japanese language proficiency, cultural
            adaptability, and targeted exam preparation—ensuring they are ready
            to study, work, and thrive in Japan.
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
              img={program.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

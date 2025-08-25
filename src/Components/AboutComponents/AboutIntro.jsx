import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  GlobeAltIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

// Languages offered
const languages = [
  { name: "English", icon: GlobeAltIcon },
  { name: "Korean", icon: AcademicCapIcon },
  { name: "Japanese", icon: BookOpenIcon },
  { name: "Chinese", icon: ChatBubbleLeftRightIcon },
];

export default function AboutIntro() {
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
              What Do We Do?
            </motion.h2>

            <motion.p
              className="text-gray-700 text-lg md:text-xl mb-6 leading-relaxed"
              variants={itemVariants}
            >
              At{" "}
              <span className="font-bold text-blue-900">
                GSR Educational Academy
              </span>
              , we deliver{" "}
              <span className="font-bold text-blue-900">
                world-class education
              </span>{" "}
              that empowers learners globally. Our platform integrates{" "}
              <span className="font-bold text-blue-900">
                cutting-edge pedagogy
              </span>
              ,{" "}
              <span className="font-bold text-blue-900">
                interactive technologies
              </span>
              , and{" "}
              <span className="font-bold text-blue-900">expert guidance</span>{" "}
              to ensure every student gains{" "}
              <span className="font-bold text-blue-900">
                practical competencies
              </span>{" "}
              essential for success.
            </motion.p>

            <motion.p
              className="text-gray-700 text-lg md:text-xl mb-6 leading-relaxed"
              variants={itemVariants}
            >
              Through curated programs in languages, skill development, and
              professional training, we cultivate{" "}
              <span className="font-bold text-blue-900">
                intellectual curiosity
              </span>
              ,{" "}
              <span className="font-bold text-blue-900">
                cross-cultural understanding
              </span>
              , and{" "}
              <span className="font-bold text-blue-900">career readiness</span>.
              We transform learning into a{" "}
              <span className="font-bold text-blue-900">holistic journey</span>
              —flexible, engaging, and tailored to each student.
            </motion.p>

            {/* Explore Button */}
            <motion.div variants={itemVariants}>
              <Link
                to="/courses"
                className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
              >
                Explore Courses
              </Link>
            </motion.div>

            {/* Languages Offered */}
            <motion.div
              className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4"
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
              Message from the Founder
            </h3>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
              “When I started this institute 8 years ago, my vision was simple:
              to create a place where students could learn{" "}
              <span className="font-bold text-blue-900">
                Japanese, Korean, and English
              </span>{" "}
              not just as subjects, but as tools to unlock their dreams. Over
              the years, I have seen thousands of students walk into our
              classrooms with hope in their eyes—and walk out with{" "}
              <span className="font-bold text-blue-900">confidence</span>,{" "}
              <span className="font-bold text-blue-900">skills</span>, and{" "}
              <span className="font-bold text-blue-900">opportunities</span>{" "}
              that changed their lives.”
            </p>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
              I believe language learning is not about perfection on the first
              day; it is about{" "}
              <span className="font-bold text-blue-900">progress</span> every
              single day. Success comes step by step.
            </p>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Every letter you learn, every sentence you practice, every
              conversation you try—these are the steps that build your{" "}
              <span className="font-bold text-blue-900">success</span>. Our
              promise is to guide, motivate, and celebrate every milestone with
              you.”
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
              Message from the CEO
            </h3>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
              “Languages are{" "}
              <span className="font-bold text-blue-900">bridges</span> to
              opportunities, cultures, and dreams. Our mission is to help
              students master{" "}
              <span className="font-bold text-blue-900">
                Japanese, Korean, and English
              </span>{" "}
              with confidence, connecting with the world and creating brighter
              futures.”
            </p>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
              Success is about combining{" "}
              <span className="font-bold text-blue-900">consistency</span> and{" "}
              <span className="font-bold text-blue-900">speed</span>. Imagine
              the rabbit who never stops—focused, disciplined, and humble. No
              tortoise could win against that.
            </p>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              That is our vision for you: learn step by step with consistency,
              move forward with{" "}
              <span className="font-bold text-blue-900">energy</span>,{" "}
              <span className="font-bold text-blue-900">speed</span>, and{" "}
              <span className="font-bold text-blue-900">determination</span>.
              Each lesson is a step closer to your dream.”
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

// CountUp component
const CountUp = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      controls.start({
        color: `rgb(${255}, ${200 + Math.floor(55 * progress)}, ${
          50 + Math.floor(50 * progress)
        })`,
      });

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, controls]);

  return (
    <motion.span animate={controls} style={{ display: "inline-block" }}>
      {count}
      {suffix}
    </motion.span>
  );
};

// HeroSection component
const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.5 },
    },
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/hero1.jpg')" }}
    >
      {/* Dark overlay for text visibility */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center text-white">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-4xl flex flex-col items-center"
        >
          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
          >
            GSR Educational Academy
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl lg:text-xl text-yellow-50 mb-8 max-w-2xl px-2 sm:px-0"
          >
            We provide consistent and reliable educational opportunities for
            learners worldwide, empowering students to achieve their academic
            and professional goals with expert guidance and personalized
            support.
          </motion.p>
          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-12 w-full sm:w-auto"
          >
            <Link to="/about" className="w-full sm:w-auto">
              <motion.button
                variants={buttonVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-white text-orange-500 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-colors duration-200 hover:bg-yellow-50 shadow-md"
              >
                Learn More
              </motion.button>
            </Link>

            <a href="tel:+918700956038" className="w-full sm:w-auto">
              <motion.button
                variants={buttonVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-yellow-100 text-orange-600 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-colors duration-200 hover:bg-white shadow-md"
              >
                Call Now
              </motion.button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={statsVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 w-full max-w-3xl text-center"
          >
            <motion.div variants={itemVariants}>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white">
                <CountUp end={1000} suffix="+" />
              </div>
              <div className="text-yellow-100 font-medium border-b-2 border-white pb-1 inline-block">
                Students
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white">
                <CountUp end={20} suffix="+" />
              </div>
              <div className="text-yellow-100 font-medium border-b-2 border-white pb-1 inline-block">
                Instructors
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white">
                <CountUp end={20} suffix="%" />
              </div>
              <div className="text-yellow-100 font-medium border-b-2 border-white pb-1 inline-block">
                Courses
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;

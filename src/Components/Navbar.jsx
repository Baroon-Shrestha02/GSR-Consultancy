import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Facebook,
  Mail,
  Phone,
  ChevronDown,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { BsTiktok, BsWhatsapp } from "react-icons/bs";
import { useTranslation } from "react-i18next";

// Mock components for demo - replace with actual react-router-dom imports
const Link = ({ to, children, ...props }) => (
  <a href={to} {...props}>
    {children}
  </a>
);

const NavLink = ({ to, children, className, onClick, ...props }) => {
  const isActive = window.location.pathname === to;
  return (
    <a
      href={to}
      onClick={onClick}
      className={
        typeof className === "function" ? className({ isActive }) : className
      }
      {...props}
    >
      {typeof children === "function" ? children({ isActive }) : children}
    </a>
  );
};

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeCourse, setActiveCourse] = useState(0);

  const { t } = useTranslation();

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Phone number copied!"); // Replace with toast if you have one
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable/enable scrolling when menu opens/closes
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Determine navbar style based on scroll position
  const isTransparent = scrollY < 50 && !isMenuOpen;
  const isWhiteBackground = scrollY >= 50 || isMenuOpen;

  const linkVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const hamburgerVariants = {
    closed: {
      rotate: 0,
      transition: { duration: 0.3 },
    },
    open: {
      rotate: 180,
      transition: { duration: 0.3 },
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  // Navigation links (without contact us)
  const navLinks = [
    { to: "/about", label: t("nav.about") },
    { to: "/services", label: t("nav.services") },
    { to: "/gallery", label: t("nav.gallery") },
    { to: "/faq", label: t("nav.faq") },
    { to: "/documentation", label: t("nav.doc") },
    { to: "/admission-form", label: t("nav.form") },
  ];

  const courseLinks = [
    {
      to: "/courses/study-in-japan",
      label: t("nav.course.japan.head"),
      description: t("nav.course.japan.subhead"),
      subLinks: [
        { to: "/courses/study-in-japan/jlpt", label: "JLPT" },
        { to: "/courses/study-in-japan/NAT", label: "NAT" },
        {
          to: "/courses/study-in-japan/skill",
          label: t("nav.course.sublabels.skill"),
        },
      ],
    },
    {
      to: "/courses/study-in-korea",
      label: t("nav.course.korea.head"),
      description: t("nav.course.korea.subhead"),
      subLinks: [
        { to: "/courses/study-in-korea/topik", label: "TOPIK" },
        {
          to: "/courses/study-in-korea/language",
          label: t("nav.course.sublabels.prep"),
        },
      ],
    },
    {
      to: "/courses/english",
      label: t("nav.course.eng.head"),
      description: t("nav.course.eng.subhead"),
      subLinks: [
        { to: "/courses/english/ielts", label: "IELTS" },
        { to: "/courses/english/tofel", label: "TOEFL" },
        { to: "/courses/english/pte", label: "PTE" },
      ],
    },
  ];

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Contact Bar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-60 bg-[#002452] text-white py-2 px-4 sm:px-6"
      >
        <div className="container mx-auto flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-3 sm:gap-6">
            <a href="mailto:info@gsreducation.com">
              <div className="flex items-center gap-1 sm:gap-2">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">info@gsreducation.com</span>
                <span className="sm:hidden">Email</span>
              </div>
            </a>
            <div
              className="flex items-center gap-1 sm:gap-2"
              onClick={() => handleCopy("+9779803016479")}
            >
              <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden md:inline">+977 9803016479</span>
              <span className="md:hidden">Call</span>
            </div>
          </div>

          {/* Call-to-action */}
          <Link
            to="/contact"
            className="bg-yellow-400 text-[#002452] font-semibold px-2 sm:px-4 py-1 rounded-md hover:bg-yellow-500 transition text-xs sm:text-sm"
          >
            <span className="hidden sm:inline">{t("nav.header.consult")}</span>
            <span className="sm:hidden">Book</span>
          </Link>
        </div>
      </motion.div>

      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        className={`fixed top-8 sm:top-10 left-0 right-0 z-50 transition-all duration-300 ${
          isTransparent ? "bg-transparent" : "bg-white shadow-lg"
        }`}
      >
        <div className="container mx-auto py-2 px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <motion.img
                  src="/logo.png"
                  alt="Logo"
                  className="h-10 sm:h-12 lg:h-14 rounded-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            </div>

            {/* Centered Navigation Links - Hidden on mobile */}
            <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center gap-x-4 xl:gap-x-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.to}
                    variants={linkVariants}
                    whileHover="hover"
                    whileTap="tap"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.4 + index * 0.1,
                        duration: 0.3,
                        ease: "easeOut",
                      },
                    }}
                  >
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `relative font-medium text-base xl:text-lg transition-all duration-300 hover:scale-105 ${
                          isTransparent
                            ? isActive
                              ? "text-yellow-400"
                              : "text-white hover:text-yellow-400"
                            : isActive
                            ? "text-[#002452]"
                            : "text-[#002452] hover:text-yellow-600"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {link.label}
                          {/* Active indicator */}
                          <motion.div
                            className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                              isTransparent ? "bg-yellow-400" : "bg-[#002452]"
                            }`}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: isActive ? 1 : 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            style={{ originX: 0.5 }}
                          />
                          {/* Hover indicator */}
                          <motion.div
                            className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                              isTransparent ? "bg-yellow-400" : "bg-blue-600"
                            } opacity-50`}
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: isActive ? 0 : 1 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            style={{ originX: 0.5 }}
                          />
                        </>
                      )}
                    </NavLink>
                  </motion.div>
                ))}

                {/* Enhanced Our Courses Dropdown */}
                <motion.div
                  className="relative group"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.4 + navLinks.length * 0.1,
                      duration: 0.3,
                      ease: "easeOut",
                    },
                  }}
                >
                  <motion.button
                    variants={linkVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className={`flex items-center gap-1 font-medium text-base xl:text-lg transition-all duration-300 hover:scale-105 ${
                      isTransparent
                        ? "text-white hover:text-yellow-400"
                        : "text-[#002452] hover:text-yellow-600"
                    }`}
                  >
                    {t("nav.course.main")}
                    <motion.div
                      animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={16} className="xl:w-5 xl:h-5" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 bg-white shadow-xl rounded-2xl py-3 z-50 min-w-[500px] border border-gray-100 flex"
                      >
                        {/* Left Column (Main Links) */}
                        <div className="w-1/2 border-r border-gray-200">
                          {courseLinks.map((course, index) => (
                            <div
                              key={course.to}
                              className="px-4 py-3 hover:bg-blue-50 cursor-pointer"
                              onMouseEnter={() => setActiveCourse(index)}
                            >
                              <Link
                                to={course.to}
                                className="font-semibold text-[#002452] block"
                              >
                                {course.label}
                              </Link>
                              <span className="text-xs text-gray-500">
                                {course.description}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Right Column (Sub Links) */}
                        <div className="w-1/2 p-4">
                          {activeCourse !== null &&
                            courseLinks[activeCourse].subLinks.map((sub) => (
                              <Link
                                key={sub.to}
                                to={sub.to}
                                className="block px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-yellow-50 hover:text-[#002452]"
                              >
                                {sub.label}
                              </Link>
                            ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>

            {/* Right side - Contact Us Button (Desktop) */}
            <div className="hidden lg:flex flex-shrink-0">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: 0.6,
                    duration: 0.3,
                    ease: "easeOut",
                  },
                }}
              >
                <Link
                  to="/contact"
                  className={`font-semibold px-4 xl:px-6 py-2 xl:py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-md ${
                    isTransparent
                      ? "bg-yellow-400 text-[#002452] hover:bg-yellow-500"
                      : "bg-[#002452] text-white hover:bg-blue-900"
                  }`}
                >
                  {t("nav.contact")}
                </Link>
              </motion.div>
            </div>

            {/* Mobile Hamburger Menu Button */}
            <motion.button
              variants={hamburgerVariants}
              animate={isMenuOpen ? "open" : "closed"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center"
            >
              <motion.span
                className={`block w-6 h-0.5 mb-1 transition-all duration-300 ${
                  isTransparent && !isMenuOpen ? "bg-white" : "bg-[#002452]"
                }`}
                animate={{
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 4 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className={`block w-6 h-0.5 mb-1 transition-all duration-300 ${
                  isTransparent && !isMenuOpen ? "bg-white" : "bg-[#002452]"
                }`}
                animate={{
                  opacity: isMenuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  isTransparent && !isMenuOpen ? "bg-white" : "bg-[#002452]"
                }`}
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? -4 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        </div>

        {/* Optional: Add a subtle border when white background */}
        {isWhiteBackground && !isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 left-0 right-0 h-px bg-gray-200"
          />
        )}
      </motion.nav>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-white lg:hidden"
            style={{ top: "32px" }} // Account for contact bar
          >
            <div className="flex flex-col items-center justify-center min-h-screen px-6">
              <motion.div
                className="flex flex-col items-center space-y-6 sm:space-y-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                {/* Regular nav links */}
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.3 + index * 0.1,
                        duration: 0.4,
                        ease: "easeOut",
                      },
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <NavLink
                      to={link.to}
                      onClick={closeMobileMenu}
                      className={({ isActive }) =>
                        `text-2xl sm:text-3xl font-semibold transition-colors duration-300 ${
                          isActive
                            ? "text-[#002452]"
                            : "text-gray-700 hover:text-[#002452]"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <div className="relative">
                          {link.label}
                          {isActive && (
                            <motion.div
                              className="absolute -bottom-2 left-0 right-0 h-1 bg-[#002452] rounded-full"
                              layoutId="activeIndicator"
                              transition={{ duration: 0.3 }}
                            />
                          )}
                        </div>
                      )}
                    </NavLink>
                  </motion.div>
                ))}

                {/* Mobile Courses Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.3 + navLinks.length * 0.1,
                      duration: 0.4,
                      ease: "easeOut",
                    },
                  }}
                  className="flex flex-col items-center space-y-3 sm:space-y-4"
                >
                  {courseLinks.map((course, index) => (
                    <motion.div
                      key={course.to}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: 0.4 + navLinks.length * 0.1 + index * 0.1,
                          duration: 0.3,
                        },
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to={course.to}
                        onClick={closeMobileMenu}
                        className="text-center block px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-all duration-300"
                      >
                        <div className="text-xl sm:text-2xl font-bold text-[#002452] mb-1">
                          {course.label}
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Contact Us Button for Mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay:
                        0.5 + navLinks.length * 0.1 + courseLinks.length * 0.1,
                      duration: 0.4,
                      ease: "easeOut",
                    },
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 sm:mt-8"
                >
                  <Link
                    to="/contact"
                    onClick={closeMobileMenu}
                    className="bg-[#002452] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-lg sm:text-xl transition-all duration-300 hover:bg-blue-900 shadow-lg"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </motion.div>

              {/* Decorative element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2"
              >
                <div className="w-16 h-0.5 bg-gray-300 rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Bar */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed bottom-0 left-0 right-0 z-60 bg-[#002452] text-white py-2 sm:py-3 px-4 sm:px-6 shadow-lg"
      >
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm gap-2 sm:gap-3 md:gap-0">
          {/* Copyright */}
          <span className="text-center sm:text-left order-2 sm:order-1">
            ©️ {new Date().getFullYear()} {t("nav.footer.cpy")}
          </span>

          {/* Middle Links */}
          <div className="flex items-center gap-3 sm:gap-6 order-1 sm:order-2">
            <a href="/faq" className="hover:text-yellow-400 transition-colors">
              {t("nav.faq")}
            </a>
            <a
              href="/contact"
              className="hover:text-yellow-400 transition-colors"
            >
              {t("nav.contact")}
            </a>
            <a
              href="/contact"
              className="hover:text-yellow-400 transition-colors"
            >
              {t("nav.footer.book")}
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-x-2 sm:gap-x-3 items-center order-3">
            <a href="#" className="hover:text-yellow-400">
              <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <BsTiktok className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <BsWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="mailto:gsreduacademy@gmail.com"
              className="hover:text-yellow-400"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
}

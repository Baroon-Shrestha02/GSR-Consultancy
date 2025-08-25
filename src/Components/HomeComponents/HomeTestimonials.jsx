import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Bijaya Tamang",
    role: "Business Owner",
    image: "/BijayTamang.jpg",
    content:
      "Course materials were good, the mentoring approach was good and working with other people via the internet was good.",
    rating: 5,
  },
  {
    id: 2,
    name: "Dilkumari Dura",
    role: "Marketing Manager",
    image: "Dilkumari Dura.jpg",
    content:
      "The interactive learning experience exceeded my expectations. The platform made complex topics easy to understand.",
    rating: 5,
  },
  {
    id: 3,
    name: "Gobinda Budhair",
    role: "Software Developer",
    image: "GobindaBudhair.jpg",
    content:
      "Amazing support from instructors and fellow students. The collaborative environment really enhanced my learning journey.",
    rating: 5,
  },
];

export default function HomeTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 0%, transparent calc(20% - 1px), #FFF59D calc(20% - 1px), #FFF59D calc(20% + 1px), transparent calc(20% + 1px)),
              linear-gradient(90deg, transparent 0%, transparent calc(40% - 1px), #FFF59D calc(40% - 1px), #FFF59D calc(40% + 1px), transparent calc(40% + 1px)),
              linear-gradient(90deg, transparent 0%, transparent calc(60% - 1px), #FFF59D calc(60% - 1px), #FFF59D calc(60% + 1px), transparent calc(60% + 1px)),
              linear-gradient(90deg, transparent 0%, transparent calc(80% - 1px), #FFF59D calc(80% - 1px), #FFF59D calc(80% + 1px), transparent calc(80% + 1px))
            `,
          }}
        />
      </div>

      <motion.div
        className="relative z-10 container mx-auto px-6 py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-gray-900">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Trusted by <br />
              <span className="text-gray-900">Hundreds Students.</span>
            </h1>
            <p className="text-gray-800 text-lg mb-12 max-w-md">
              Lorem ipsum dolor sit amet consectetur adipiscing elit venenatis
              dictum nec.
            </p>
            <div className="flex items-end gap-4">
              <div className="text-7xl lg:text-8xl font-bold text-gray-900">
                90%
              </div>
              <div className="text-gray-800 pb-4">
                <div className="font-medium">Visa Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Testimonial Card */}
          <div className="relative">
            {/* Navigation Buttons */}
            <div className="flex justify-end gap-3 mb-6">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-[#EFB000] hover:bg-[#EFB000] rounded-full flex items-center justify-center text-gray-900 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-[#EFB000] hover:bg-[#EFB000] rounded-full flex items-center justify-center text-gray-900 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Testimonial Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-2xl"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden">
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p className="text-gray-700 text-center mb-6 leading-relaxed">
                  {currentTestimonial.content}
                </p>
                <div className="text-center">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-gray-500">{currentTestimonial.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const leftVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function HomeContact2() {
  const ref = useRef(null);
  const { t } = useTranslation();
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const features = t("home.why.features", { returnObjects: true });

  // Create individual refs for each feature item
  const itemRefs = Array(features.length)
    .fill(0)
    .map(() => useRef(null));

  const itemInViews = itemRefs.map((r) =>
    useInView(r, { amount: 0.5, margin: "-20% 0px -20% 0px" })
  );

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="lg:sticky lg:top-8"
          >
            <motion.div
              variants={leftVariants}
              className="flex items-center justify-center sm:p-6 lg:pt-22 lg:sticky lg:top-0"
            >
              <div className="max-w-2xl text-left space-y-4 sm:space-y-6">
                <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl leading-tight text-gray-900">
                  {t("home.why.t1")}{" "}
                  <span className="text-[#EFB000]">{t("home.why.t2")}</span>?
                </h2>

                <p className="text-base sm:text-lg text-gray-700">
                  {t("home.why.p1")}
                </p>

                <Link to="/contact">
                  <button className="px-4 sm:px-6 py-2 sm:py-3 bg-[#002452] hover:bg-blue-900 text-white font-semibold rounded-xl shadow-lg transition text-sm sm:text-base">
                    {t("home.why.button")}
                  </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Features List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-0"
          >
            {features.map((feature, index) => {
              const itemRef = itemRefs[index];
              const itemInView = itemInViews[index];
              const isFirstOrLast =
                index === 0 || index === features.length - 1;

              return (
                <motion.div
                  key={index}
                  ref={itemRef}
                  initial={{ x: index % 2 === 0 ? -50 : 50 }}
                  animate={
                    isFirstOrLast || itemInView
                      ? {
                          x: 0,
                          transition: { duration: 0.8, ease: "easeOut" },
                        }
                      : { x: index % 2 === 0 ? -30 : 30 }
                  }
                  className={`relative p-4 sm:p-6 flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Large background number */}
                  <motion.span
                    className="absolute top-30 transform -translate-y-1/2 text-6xl sm:text-8xl lg:text-[10rem] xl:text-[12rem] text-gray-100 font-bold select-none pointer-events-none"
                    animate={
                      isFirstOrLast || itemInView
                        ? {
                            scale: 1,
                            rotate: 0,
                            transition: { duration: 1, ease: "easeOut" },
                          }
                        : { scale: 0.8, rotate: index % 2 === 0 ? -10 : 10 }
                    }
                    style={{
                      left: index % 2 === 0 ? "10%" : "auto",
                      right: index % 2 === 0 ? "auto" : "10%",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </motion.span>

                  {/* Content */}
                  <motion.div
                    className="relative z-10 max-w-sm sm:max-w-md"
                    animate={
                      isFirstOrLast || itemInView
                        ? {
                            scale: 1,
                            transition: { duration: 0.6, delay: 0.2 },
                          }
                        : { scale: 0.95 }
                    }
                  >
                    <motion.div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
                      {feature.icon}
                    </motion.div>

                    <motion.h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-3 sm:mb-4">
                      {feature.title}
                    </motion.h3>

                    <motion.p className="text-gray-700 mb-3 sm:mb-4 text-base sm:text-lg leading-relaxed">
                      {feature.description}
                    </motion.p>

                    <motion.div className="mb-3 sm:mb-4">
                      <img
                        src={feature.img}
                        alt=""
                        className="w-full h-32 sm:h-40 lg:h-48 object-cover rounded-lg"
                      />
                    </motion.div>

                    <motion.div
                      className="w-12 sm:w-16 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"
                      animate={
                        isFirstOrLast || itemInView
                          ? {
                              scaleX: 1,
                              transition: { duration: 0.8, delay: 0.5 },
                            }
                          : { scaleX: 0 }
                      }
                      style={{ transformOrigin: "left" }}
                    />
                  </motion.div>

                  {/* Connecting line for visual flow */}
                  {index < features.length - 1 && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-8 sm:h-12 lg:h-16 bg-gradient-to-b from-gray-300 to-transparent"
                      animate={
                        isFirstOrLast || itemInView
                          ? {
                              scaleY: 1,
                              transition: { duration: 0.8, delay: 0.6 },
                            }
                          : { scaleY: 0.5 }
                      }
                      style={{ transformOrigin: "top" }}
                    />
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

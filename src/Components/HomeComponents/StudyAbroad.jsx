import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// Simple animation hook to replace framer motion
const useInView = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
};

export default function StudyAbroad() {
  const { t } = useTranslation();
  const [titleRef, titleVisible] = useInView();
  const [japanRef, japanVisible] = useInView();
  const [koreaRef, koreaVisible] = useInView();
  const [ctaRef, ctaVisible] = useInView();

  const japanCourses = t("home.abroad.japan", { returnObjects: true });
  const koreaCourses = t("home.abroad.korea", { returnObjects: true });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Title Section */}
      <section className="py-12">
        <div
          ref={titleRef}
          className={`container mx-auto max-w-4xl text-center transition-all duration-1000 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 text-center mb-6">
            {t("home.abroad.title")}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            {t("home.abroad.subtitle")}
          </p>
        </div>
      </section>

      {/* Section 1: Study in Japan - Image first on mobile */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div
            ref={japanRef}
            className={`flex flex-col lg:flex-row items-center gap-12 transition-all duration-1000 ${
              japanVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            {/* Image first on mobile, second on desktop */}
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Tokyo skyline with Mount Fuji"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Content second on mobile, first on desktop */}
            <div className="lg:w-1/2 space-y-8 order-2 lg:order-1">
              <div>
                <h2 className="text-4xl font-bold text-[#002452] mb-4">
                  {t("home.abroad.op.japan.title")}
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  {t("home.abroad.op.japan.subtitle")}
                </p>
              </div>

              <div className="space-y-6">
                {japanCourses.map((course, index) => (
                  <div
                    key={course.id}
                    className={`bg-white p-6 rounded-lg shadow-md border-l-4 border-[#002452] hover:shadow-lg transition-all duration-500 ${
                      japanVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-[#002452]">
                        {course.name}
                      </h3>
                      <span className="bg-blue-50 text-[#002452] px-3 py-1 rounded-full text-sm font-medium">
                        {course.levels}
                      </span>
                    </div>
                    <p className="text-gray-600">{course.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link to="/courses/study-in-japan">
                  <button className="bg-[#002452] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-900 transition-colors shadow-md hover:scale-105 transform">
                    {t("home.abroad.op.japan.button")}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Study in Korea - Image first on mobile */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div
            ref={koreaRef}
            className={`flex flex-col lg:flex-row-reverse items-center gap-12 transition-all duration-1000 ${
              koreaVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            {/* Image first on mobile, first on desktop */}
            <div className="lg:w-1/2 order-1">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1517154421773-0529f29ea451?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Seoul cityscape with modern architecture"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Content second on mobile, second on desktop */}
            <div className="lg:w-1/2 space-y-8 order-2">
              <div>
                <h2 className="text-4xl font-bold text-[#002452] mb-4">
                  {t("home.abroad.op.korea.title")}
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  {t("home.abroad.op.korea.subtitle")}
                </p>
              </div>

              <div className="space-y-6">
                {koreaCourses.map((course, index) => (
                  <div
                    key={course.id}
                    className={`bg-white p-6 rounded-lg shadow-md border-l-4 border-[#002452] hover:shadow-lg transition-all duration-500 ${
                      koreaVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-[#002452]">
                        {course.name}
                      </h3>
                      <span className="bg-blue-50 text-[#002452] px-3 py-1 rounded-full text-sm font-medium">
                        {course.levels}
                      </span>
                    </div>
                    <p className="text-gray-600">{course.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link to="/courses/study-in-korea">
                  <button className="bg-[#002452] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-900 transition-colors shadow-md hover:scale-105 transform">
                    {t("home.abroad.op.korea.button")}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: CTA - Centered */}
      <section className="py-16 px-6">
        <div className="container bg-[#FFF8F0] mx-auto max-w-4xl text-center">
          <div
            ref={ctaRef}
            className={`bg-white rounded-lg p-12 shadow-lg transition-all duration-1000 ${
              ctaVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-[#002452] mb-4">
                {t("home.abroad.op.cta.title")}
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                {t("home.abroad.op.cta.subtitle")}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-[#002452] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-900 transition-all shadow-md hover:scale-105 transform">
                {t("home.abroad.op.cta.button.all")}
              </button>
              <Link to="/contact">
                <button className="bg-white text-[#002452] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all border-2 border-[#002452] hover:scale-105 transform">
                  {t("home.abroad.op.cta.button.consult")}
                </button>
              </Link>
            </div>

            <div
              className={`flex justify-center space-x-12 text-[#002452] transition-all duration-1000 delay-300 ${
                ctaVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="text-center">
                <div className="text-2xl font-bold">8+</div>
                <div className="text-sm text-gray-600">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

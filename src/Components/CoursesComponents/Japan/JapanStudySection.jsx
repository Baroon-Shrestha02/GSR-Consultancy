import React from "react";
import { CheckCircle, GraduationCap, Clock, Briefcase } from "lucide-react";

export default function JapanStudySection() {
  const requirements = [
    {
      icon: <GraduationCap className="w-5 h-5 text-[#002452]" />,
      title: "GPA Requirement",
      description: "Minimum 2.5 GPA required",
    },
    {
      icon: <Clock className="w-5 h-5 text-[#002452]" />,
      title: "Study Gap",
      description: "Up to 2-3 years gap accepted",
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-[#002452]" />,
      title: "Language Level",
      description: "JLPT N5–N4 for basic admission (higher preferred)",
    },
    {
      icon: <Briefcase className="w-5 h-5 text-[#002452]" />,
      title: "Work Permission",
      description: "28 hours per week part-time allowed with permit",
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative">
          <img
            src="/poster.jpeg"
            alt="Study in Korea Poster"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#002452]/10 to-transparent rounded-2xl"></div>
        </div>

        {/* Content Section */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold text-[#002452] leading-tight">
              Japan Study Programs
            </h3>
            <p className="text-lg text-gray-600">
              Comprehensive vocational and academic programs designed to help
              you achieve your educational goals in Japan.
            </p>
          </div>

          {/* Requirements Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {requirements.map((req, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-sm">
                  {req.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-[#002452] text-sm mb-1">
                    {req.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{req.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-[#002452]">
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-[#002452]">Important:</span>{" "}
              COE and university admission are required for enrollment. Our team
              will guide you through the entire application process.
            </p>
          </div>

          {/* <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#002452] hover:bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-md">
              Apply for Next Intake
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}

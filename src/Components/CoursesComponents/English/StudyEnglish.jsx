import React from "react";
import {
  GraduationCap,
  Globe,
  Users,
  Lightbulb,
  CheckCircle,
} from "lucide-react";

export default function StudyEnglish() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Academic Success",
      description:
        "Strong English skills help you excel in entrance exams, coursework, and international programs.",
    },
    {
      icon: Globe,
      title: "Global Opportunities",
      description:
        "English is the key to connecting with professors, peers, and professionals across the world.",
    },
    {
      icon: Users,
      title: "Better Adaptability",
      description:
        "Easier integration in Japan and Korea, where English is widely used in universities and workplaces.",
    },
    {
      icon: Lightbulb,
      title: "Career Advantage",
      description:
        "Multinational companies in Asia prefer candidates fluent in English for higher-paying roles.",
    },
  ];

  const benefits = [
    "Boosts confidence in interviews and visa applications",
    "Enables smooth communication in academic and social settings",
    "Essential for IELTS, TOEFL, and other study-abroad exams",
    "Increases chances of scholarships and international internships",
    "Helps in adapting quickly to Korean and Japanese culture",
    "Improves long-term global career opportunities",
  ];

  return (
    <section className="py-20 px-6 m-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-orange-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-yellow-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-16">
          {/* IMAGE */}
          <div className="relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/WhatsApp Image 2025-08-17 at 08.02.35_456f52ee.jpg"
                alt="Study English Abroad"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div className="space-y-8 flex flex-col justify-center h-full">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-[#002244] leading-tight">
                Why Study English Before Going to Japan or Korea?
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                English is the foundation for academic and professional success
                in today’s global world. For students preparing to study in
                <span className="font-semibold"> Japan </span> or{" "}
                <span className="font-semibold"> Korea</span>, English
                proficiency is essential—not only for passing international
                exams, but also for adapting to multicultural environments.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you are applying for scholarships, attending lectures,
                or preparing for a global career, mastering English ensures you
                stay confident, competitive, and connected.
              </p>
            </div>

            {/* Benefits List */}
            <div>
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/50 transition-colors duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* HIGHLIGHTS SECTION */}
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/50"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500/10 mb-4">
                  <IconComponent className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="font-bold text-[#002244] mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div> */}
      </div>
    </section>
  );
}

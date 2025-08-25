import React from "react";
import { BookOpen, CheckCircle } from "lucide-react";

export default function TOPIK() {
  const levels = [
    {
      id: "Beginner",
      title: "TOPIK I – Beginner",
      desc: "Basic Korean grammar, vocabulary, and simple conversation.",
      details:
        "TOPIK I covers beginner-level Korean, including understanding simple sentences, common vocabulary, and basic grammar. It prepares learners to communicate in daily situations in Korea.",
    },
    {
      id: "Intermediate",
      title: "TOPIK II – Intermediate",
      desc: "Intermediate Korean focusing on reading, writing, and listening.",
      details:
        "TOPIK II helps learners develop comprehension of longer texts, improve listening skills, and express themselves more confidently in written and spoken Korean. It is essential for university studies or work in Korea.",
    },
    {
      id: "Advanced",
      title: "TOPIK II – Advanced",
      desc: "Advanced Korean skills for professional and academic use.",
      details:
        "This level emphasizes fluency, nuanced understanding of Korean texts, and complex conversation. It prepares learners for professional environments, higher education, and full integration into Korean society.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-indigo-400 rounded-full opacity-20 blur-xl"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 flex justify-center items-center gap-3 tracking-tight">
            <BookOpen className="w-10 h-10 text-yellow-300" />
            TOPIK – Test of Proficiency in Korean
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-blue-100">
            Prepare for the TOPIK exam (Beginner to Advanced) to study or work in Korea.
            Improve your Korean language skills step by step for academic, personal, or professional success.
          </p>
        </div>
      </section>

      {/* TOPIK Levels Section */}
      <section className="relative bg-gradient-to-b from-slate-50 to-blue-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl text-transparent bg-gradient-to-r from-blue-800 to-indigo-700 bg-clip-text mb-6 flex justify-center items-center gap-3">
            <BookOpen className="w-10 h-10 md:w-12 md:h-12 text-blue-700 drop-shadow-sm" />
            TOPIK Levels
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Learn step by step for each TOPIK level and improve your Korean language proficiency.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {levels.map((level, index) => (
            <div
              key={level.id}
              className="group relative bg-white shadow-xl rounded-3xl p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-50 group-hover:opacity-80 transition-opacity"></div>

              <h3 className="text-2xl text-blue-800 flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-emerald-500 drop-shadow-sm" />
                <span className="text-transparent bg-gradient-to-r from-blue-800 to-indigo-700 bg-clip-text">
                  {level.title}
                </span>
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed text-lg">{level.desc}</p>
              <p className="text-gray-600 leading-relaxed">{level.details}</p>

              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

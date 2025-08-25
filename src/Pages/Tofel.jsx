import React from "react";
import { BookOpen, CheckCircle } from "lucide-react";

export default function TOEFL() {
  const sections = [
    {
      id: "Reading",
      title: "TOEFL Reading",
      desc: "Improve your reading skills to understand academic texts and passages.",
      details:
        "This module focuses on understanding academic articles, identifying main ideas, and answering comprehension questions effectively. Practice exercises and tips are provided for better reading performance.",
    },
    {
      id: "Listening",
      title: "TOEFL Listening",
      desc: "Enhance your listening skills for lectures, conversations, and discussions.",
      details:
        "Develop the ability to understand spoken English in academic settings. Includes practice lectures, dialogues, and tips for identifying key information and details.",
    },
    {
      id: "Speaking",
      title: "TOEFL Speaking",
      desc: "Build confidence to speak clearly and coherently in English.",
      details:
        "Learn to express your ideas effectively in spoken English. This module includes practice tasks, pronunciation tips, and guidance for responding to typical TOEFL speaking prompts.",
    },
    {
      id: "Writing",
      title: "TOEFL Writing",
      desc: "Learn to write structured essays and responses for the TOEFL test.",
      details:
        "Focus on organizing ideas, using correct grammar, and developing arguments. Practice includes integrated writing tasks and independent essay exercises to improve writing skills.",
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
            TOEFL Preparation
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-blue-100">
            Prepare for the TOEFL exam with structured courses for Reading, Listening, Speaking, and Writing. Step by step, improve your English proficiency.
          </p>
        </div>
      </section>

      {/* TOEFL Modules Section */}
      <section className="relative bg-gradient-to-b from-slate-50 to-blue-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl text-transparent bg-gradient-to-r from-blue-800 to-indigo-700 bg-clip-text mb-6 flex justify-center items-center gap-3">
            <BookOpen className="w-10 h-10 md:w-12 md:h-12 text-blue-700 drop-shadow-sm" />
            TOEFL Modules
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Enhance your English skills in all areas for success in the TOEFL exam.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className="group relative bg-white shadow-xl rounded-3xl p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-50 group-hover:opacity-80 transition-opacity"></div>

              <h3 className="text-2xl text-blue-800 flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-emerald-500 drop-shadow-sm" />
                <span className="text-transparent bg-gradient-to-r from-blue-800 to-indigo-700 bg-clip-text">
                  {section.title}
                </span>
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed text-lg">{section.desc}</p>
              <p className="text-gray-600 leading-relaxed">{section.details}</p>

              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

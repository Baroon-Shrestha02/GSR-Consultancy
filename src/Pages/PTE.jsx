import React from "react";
import { BookOpen, CheckCircle } from "lucide-react";

export default function PTE() {
  const sections = [
    {
      id: "Reading",
      title: "PTE Reading",
      desc: "Improve your reading comprehension for academic and general contexts.",
      details:
        "Focus on understanding passages, identifying main ideas, and answering multiple-choice and re-ordering questions effectively. Practice exercises enhance speed and accuracy.",
    },
    {
      id: "Listening",
      title: "PTE Listening",
      desc: "Enhance your listening skills for lectures, conversations, and discussions.",
      details:
        "Develop the ability to understand spoken English, capture key points, and answer comprehension questions correctly. Includes practice lectures, dialogues, and tips for PTE listening tasks.",
    },
    {
      id: "Speaking",
      title: "PTE Speaking",
      desc: "Build confidence to speak clearly and fluently in English.",
      details:
        "Learn to respond to PTE speaking prompts, improve pronunciation, and organize your answers effectively. Includes practice tasks and techniques to score high in the speaking section.",
    },
    {
      id: "Writing",
      title: "PTE Writing",
      desc: "Learn to write structured responses for essays and summaries.",
      details:
        "Focus on organizing ideas, using proper grammar, and developing arguments. Practice integrated writing tasks and essay exercises to improve your PTE writing score.",
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
            PTE Preparation
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-blue-100">
            Prepare for the PTE exam with structured courses for Reading, Listening, Speaking, and Writing. Step by step, improve your English proficiency.
          </p>
        </div>
      </section>

      {/* PTE Modules Section */}
      <section className="relative bg-gradient-to-b from-slate-50 to-blue-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl text-transparent bg-gradient-to-r from-blue-800 to-indigo-700 bg-clip-text mb-6 flex justify-center items-center gap-3">
            <BookOpen className="w-10 h-10 md:w-12 md:h-12 text-blue-700 drop-shadow-sm" />
            PTE Modules
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Enhance your English skills in all areas for success in the PTE exam.
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

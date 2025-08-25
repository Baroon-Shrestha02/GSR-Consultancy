import React from "react";
import { BookOpen, CheckCircle } from "lucide-react";

export default function JLPT() {
  const levels = [
    {
      id: "N5",
      title: "JLPT N5",
      desc: "Beginner level. Covers basic grammar, simple vocabulary, and common phrases.",
      details:
        "JLPT N5 focuses on understanding basic Japanese used in everyday situations. Students learn around 100 kanji, basic sentence structures, and essential vocabulary for communication in Japan.",
    },
    {
      id: "N4",
      title: "JLPT N4",
      desc: "Elementary level. Focuses on daily conversation, kanji, and essential grammar.",
      details:
        "JLPT N4 helps students understand basic Japanese used in daily life and some reading/writing skills. It includes around 300 kanji and basic conversational practice for simple interactions.",
    },
    {
      id: "N3",
      title: "JLPT N3",
      desc: "Intermediate level. Tests understanding of everyday situations and reading skills.",
      details:
        "JLPT N3 bridges the gap between beginner and advanced levels. It emphasizes comprehension of everyday written and spoken Japanese, introduces around 650 kanji, and improves conversational fluency.",
    },
    {
      id: "N2",
      title: "JLPT N2",
      desc: "Upper-intermediate level. Requires deeper understanding of grammar, reading, and listening.",
      details:
        "JLPT N2 focuses on understanding Japanese used in various contexts, including media and business. Students learn around 1000 kanji, advanced grammar structures, and can follow complex conversations.",
    },
    {
      id: "N1",
      title: "JLPT N1",
      desc: "Advanced level. Professional fluency with complex vocabulary and grammar.",
      details:
        "JLPT N1 is the highest level and requires near-native comprehension of Japanese. It covers around 2000 kanji, sophisticated grammar, and the ability to understand nuanced conversations and academic/business texts.",
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
            Japanese Language Proficiency Test
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-blue-100">
            Prepare for the JLPT (N5 to N1) with courses designed to improve your 
            grammar, vocabulary, reading, and listening skills. Gain confidence 
            and proficiency step by step.
          </p>
        </div>
      </section>

      {/* JLPT Levels Section */}
      <section className="relative bg-gradient-to-b from-slate-50 to-blue-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl text-transparent bg-gradient-to-r from-blue-800 to-indigo-700 bg-clip-text mb-6 flex justify-center items-center gap-3">
            <BookOpen className="w-10 h-10 md:w-12 md:h-12 text-blue-700 drop-shadow-sm" />
            JLPT Levels (N5–N1)
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Take your learning step by step for each JLPT level with our structured courses 
            and resources designed to ensure steady progress.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {levels.map((level, index) => (
            <div
              key={level.id}
              className="group relative bg-white shadow-xl rounded-3xl p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              style={{
                animationDelay: `${index * 0.1}s`
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
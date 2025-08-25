import React from "react";
import { BookOpen, CheckCircle } from "lucide-react";

export default function Skill() {
  const skills = [
    {
      id: "Language",
      title: "Japanese Language",
      desc: "Basic Japanese communication for daily life and study.",
      details:
        "Learn essential Japanese phrases, greetings, and basic grammar to communicate effectively in schools, workplaces, and daily activities in Japan.",
    },
    {
      id: "Cultural",
      title: "Cultural Understanding",
      desc: "Know Japanese customs, etiquette, and social norms.",
      details:
        "Understanding cultural behavior, bowing etiquette, gift-giving, and workplace manners is crucial to fitting in and showing respect in Japanese society.",
    },
    {
      id: "Academic",
      title: "Study Skills",
      desc: "Prepare for Japanese education and exam requirements.",
      details:
        "Develop study habits, time management, and exam preparation strategies suitable for Japanese universities or language schools, including familiarity with JLPT or EJU tests.",
    },
    {
      id: "Technical",
      title: "Technical Skills",
      desc: "Skills related to your field of study or work in Japan.",
      details:
        "Depending on your major or job, acquire relevant technical knowledge or certifications that may help in internships, part-time jobs, or career opportunities in Japan.",
    },
    {
      id: "Communication",
      title: "Soft Skills",
      desc: "Adaptability, teamwork, and problem-solving.",
      details:
        "Learn to collaborate effectively, respect hierarchy, and develop problem-solving skills to thrive in Japanese academic and work environments.",
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
            Skills Needed to Study in Japan
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-blue-100">
            Prepare yourself with the essential skills to live, study, and work in Japan. 
            From language and cultural knowledge to academic and soft skills, get ready for success.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative bg-gradient-to-b from-slate-50 to-blue-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl text-transparent bg-gradient-to-r from-blue-800 to-indigo-700 bg-clip-text mb-6 flex justify-center items-center gap-3">
            <BookOpen className="w-10 h-10 md:w-12 md:h-12 text-blue-700 drop-shadow-sm" />
            Essential Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Focus on developing these skills step by step to adapt easily to life and study in Japan.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.id}
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
                  {skill.title}
                </span>
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed text-lg">{skill.desc}</p>
              <p className="text-gray-600 leading-relaxed">{skill.details}</p>

              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

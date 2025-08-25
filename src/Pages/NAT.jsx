import React from "react";
import { BookOpen, CheckCircle } from "lucide-react";

export default function NAT() {
  const levels = [
    {
      id: "Basic",
      title: "NAT Basic",
      desc: "Introduction to NAT concepts and basic operations.",
      details:
        "NAT Basic covers fundamental concepts of Network Address Translation, including types, benefits, and how NAT operates in simple network environments. Students learn about private and public IP address mapping.",
    },
    {
      id: "Intermediate",
      title: "NAT Intermediate",
      desc: "Intermediate level focusing on practical NAT implementation.",
      details:
        "NAT Intermediate emphasizes practical NAT setup, configuration, and troubleshooting. Students learn about port forwarding, dynamic NAT, and basic firewall integration with NAT for secure networking.",
    },
    {
      id: "Advanced",
      title: "NAT Advanced",
      desc: "Advanced topics including NAT for large networks and security.",
      details:
        "NAT Advanced covers complex scenarios like NAT over multiple routers, NAT for large enterprise networks, and integration with advanced security policies. Students gain proficiency in designing NAT solutions for real-world networks.",
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
            Network Address Translation (NAT) Courses
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-blue-100">
            Learn NAT step by step from basic to advanced levels. Understand how
            NAT works, implement it in networks, and manage real-world scenarios
            confidently.
          </p>
        </div>
      </section>

      {/* NAT Levels Section */}
      <section className="relative bg-gradient-to-b from-slate-50 to-blue-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl text-transparent bg-gradient-to-r from-blue-800 to-indigo-700 bg-clip-text mb-6 flex justify-center items-center gap-3">
            <BookOpen className="w-10 h-10 md:w-12 md:h-12 text-blue-700 drop-shadow-sm" />
            NAT Levels
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Master NAT at your own pace. Each level builds your knowledge and
            practical skills for network administration and security.
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

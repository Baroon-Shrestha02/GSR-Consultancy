import React, { useState } from "react";
import {
  GraduationCap,
  Globe,
  Users,
  Lightbulb,
  ArrowRight,
  Play,
  CheckCircle,
} from "lucide-react";

export default function StudyinJapan() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "World-Class Education",
      description:
        "Access to top-ranked universities and cutting-edge research facilities",
    },
    {
      icon: Globe,
      title: "Cultural Immersion",
      description:
        "Experience authentic Japanese culture, traditions, and modern lifestyle",
    },
    {
      icon: Users,
      title: "Global Network",
      description:
        "Connect with international students and build lifelong relationships",
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description:
        "Learn in one of the world's most technologically advanced countries",
    },
  ];

  const benefits = [
    "Study at prestigious Japanese universities and institutions",
    "Experience rich cultural heritage and modern technology",
    "Learn Japanese language through daily immersion",
    "Access to research opportunities and internships",
    "Build international career prospects",
    "Enjoy safe and clean living environment",
  ];

  return (
    <section className="py-20 px-6 m-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-indigo-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-16">
          {/* IMAGE WITH VIDEO OVERLAY */}
          <div className="relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/Studyinjapan.jpeg"
                alt="Study Abroad in Japan"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

              {/* Video Play Button Overlay */}
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group"
                  onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                >
                  <Play className="w-8 h-8 text-blue-600 ml-1" />
                </button>
              </div> */}

              {/* Stats Overlay */}
              {/* <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">
                        780+
                      </div>
                      <div className="text-xs text-gray-600">Universities</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">
                        95%
                      </div>
                      <div className="text-xs text-gray-600">Safety Rating</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">
                        #3
                      </div>
                      <div className="text-xs text-gray-600">
                        Global Ranking
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          {/* ENHANCED TEXT CONTENT */}
          <div className="space-y-8 flex flex-col justify-center h-full">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-[#002244] leading-tight">
                Transform Your Future with Japanese Education Excellence
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Studying in Japan offers an unparalleled opportunity to immerse
                yourself in a society that seamlessly blends ancient traditions
                with cutting-edge innovation. Experience world-renowned
                education systems while developing global perspectives.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From participating in traditional festivals to working with the
                latest technology, every day in Japan is a learning adventure
                that shapes you into a globally competitive professional.
              </p>
            </div>

            {/* Benefits List */}
            <div className="">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/50"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 mb-4">
                  <IconComponent className="w-6 h-6 text-blue-600" />
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
        </div>
      </div>
    </section>
  );
}

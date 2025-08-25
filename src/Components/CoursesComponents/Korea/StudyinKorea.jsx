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
import { Link } from "react-router-dom";

export default function StudyinKorea() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Top Universities",
      description:
        "Access prestigious institutions like Seoul National University, KAIST, and Yonsei.",
    },
    {
      icon: Globe,
      title: "Cultural Immersion",
      description:
        "Experience K-culture, traditions, and modern lifestyle while studying in Korea.",
    },
    {
      icon: Users,
      title: "Global Community",
      description:
        "Connect with international students and expand your global network.",
    },
    {
      icon: Lightbulb,
      title: "Innovation & Tech",
      description:
        "Study in a hub of cutting-edge technology, creativity, and research.",
    },
  ];

  const benefits = [
    "Learn at world-renowned Korean universities and research institutes",
    "Immerse yourself in both traditional Korean heritage and K-pop culture",
    "Develop Korean language skills through real-life interaction",
    "Access scholarship programs and government support for international students",
    "Gain career opportunities in Korea’s tech and creative industries",
    "Enjoy safe, modern, and student-friendly living environments",
  ];

  return (
    <section className="py-20 px-6 m-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-indigo-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-16">
          {/* IMAGE */}
          <div className="relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/Studyinkorea.jpeg"
                alt="Study Abroad in Korea"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* ENHANCED TEXT CONTENT */}
          <div className="space-y-8 flex flex-col justify-center h-full">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-[#002244] leading-tight">
                Unlock Your Future with Korean Education & Innovation
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Studying in Korea opens doors to a dynamic society that combines
                rich cultural traditions with one of the world’s fastest-growing
                economies. Learn from top institutions while embracing a
                globally recognized education system.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From traditional Korean heritage to the global impact of K-pop,
                K-drama, and cutting-edge technology, Korea offers a truly
                transformative experience for international students.
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
      </div>
    </section>
  );
}

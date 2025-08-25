import React, { useState } from "react";
import {
  BookOpen,
  CheckCircle,
  Clock,
  Users,
  Award,
  Globe,
  ChevronRight,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function EnglishPrograms() {
  const [activeProgram, setActiveProgram] = useState(null);

  const programs = [
    {
      title: "Basic English",
      subtitle: "Grammar, Vocabulary, Daily Conversation",
      duration: "3-4 months",
      level: "Beginner",
      description:
        "Build a strong foundation with essential grammar rules, everyday vocabulary, and practical conversation skills for daily life.",
      features: [
        "Basic grammar structures",
        "Essential vocabulary",
        "Daily conversation practice",
        "Pronunciation training",
      ],
    },
    {
      title: "Intermediate English",
      subtitle: "Comprehension, Writing, Role-play",
      duration: "4-5 months",
      level: "Intermediate",
      description:
        "Develop reading comprehension, writing skills, and interactive communication through role-play exercises.",
      features: [
        "Reading comprehension",
        "Essay writing",
        "Role-play activities",
        "Listening exercises",
      ],
    },
    {
      title: "Advanced English",
      subtitle: "Academic & Professional Communication",
      duration: "5-6 months",
      level: "Advanced",
      description:
        "Master academic writing, presentations, and professional communication for university and workplace success.",
      features: [
        "Academic writing",
        "Presentation skills",
        "Professional communication",
        "Critical thinking",
      ],
    },
    {
      title: "Speaking & Communication",
      subtitle: "Fluency & Confidence Building",
      duration: "2-3 months",
      level: "All Levels",
      description:
        "Focus on developing fluency, confidence, and natural communication skills through intensive speaking practice.",
      features: [
        "Fluency development",
        "Confidence building",
        "Public speaking",
        "Accent reduction",
      ],
    },
    {
      title: "IELTS Preparation",
      subtitle: "International English Language Testing",
      duration: "2-3 months",
      level: "Intermediate+",
      description:
        "Comprehensive IELTS preparation covering all four skills: listening, reading, writing, and speaking.",
      features: [
        "All 4 skills covered",
        "Mock tests",
        "Score improvement strategies",
        "Expert guidance",
      ],
    },
    {
      title: "TOEFL Preparation",
      subtitle: "Test of English as Foreign Language",
      duration: "2-3 months",
      level: "Intermediate+",
      description:
        "Intensive TOEFL preparation with focus on academic English and test-taking strategies.",
      features: [
        "Academic English focus",
        "Computer-based practice",
        "Time management",
        "Score optimization",
      ],
    },
    {
      title: "PTE Preparation",
      subtitle: "Pearson Test of English",
      duration: "2-3 months",
      level: "Intermediate+",
      description:
        "Specialized PTE preparation with emphasis on computer-delivered test format and scoring system.",
      features: [
        "Computer-based training",
        "AI scoring insights",
        "Integrated skills practice",
        "Performance analytics",
      ],
    },
    {
      title: "Business English",
      subtitle: "Professional Communication",
      duration: "3-4 months",
      level: "Intermediate+",
      description:
        "Master professional English for business meetings, presentations, emails, and workplace communication.",
      features: [
        "Business vocabulary",
        "Meeting skills",
        "Email writing",
        "Negotiation language",
      ],
    },
  ];

  const specialPrograms = [
    {
      title: "Interview & Personality Development",
      description:
        "Comprehensive preparation for job interviews and personal development",
      icon: <Users className="w-5 h-5" />,
    },
    {
      title: "Weekly Tests & Mock Exams",
      description:
        "Regular assessment to track progress and identify improvement areas",
      icon: <Award className="w-5 h-5" />,
    },
    {
      title: "Special Exam Preparation Classes",
      description:
        "Targeted preparation for specific entrance exams and certifications",
      icon: <BookOpen className="w-5 h-5" />,
    },
  ];

  const stats = [
    { number: "1000+", label: "Students Trained" },
    { number: "95%", label: "Success Rate" },
    { number: "8+", label: "Years Experience" },
    { number: "15+", label: "Expert Instructors" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#002452] to-[#002452] bg-clip-text text-transparent mb-6">
            English Language Programs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive English Language Courses designed for students
            applying to study abroad in{" "}
            <span className="font-semibold text-red-600">Japan</span> and{" "}
            <span className="font-semibold text-[#002452]">Korea</span>. Our
            structured courses ensure you build the right skills to succeed
            academically, professionally, and personally.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl font-bold text-[#002452] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2 ${
                activeProgram === index
                  ? "ring-4 ring-[#002452] ring-opacity-50"
                  : ""
              }`}
              onClick={() =>
                setActiveProgram(activeProgram === index ? null : index)
              }
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-[#002452] p-2 rounded-lg">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[#002452] bg-[#002452]/10 px-2 py-1 rounded-full">
                        {program.level}
                      </span>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                      activeProgram === index ? "rotate-90" : ""
                    }`}
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {program.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{program.subtitle}</p>

                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>4.8/5</span>
                  </div>
                </div>

                {activeProgram === index && (
                  <div className="mt-4 pt-4 border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <div className="space-y-2">
                      {program.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Special Programs Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Additional Support Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialPrograms.map((program, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 transition-all duration-300"
              >
                <div className="bg-[#002452] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {program.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-[#002452] rounded-2xl p-12 text-white">
          <Globe className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your English Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of students who have successfully achieved their study
            abroad dreams
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="bg-white text-[#002452] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Get Free Consultation
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

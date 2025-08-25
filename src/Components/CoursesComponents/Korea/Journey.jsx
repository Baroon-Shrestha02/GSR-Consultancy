import React from "react";
import {
  Languages,
  FileText,
  Award,
  Users,
  UserCheck,
  CreditCard,
  Plane,
} from "lucide-react";

export default function JourneySection() {
  const trainingPrograms = [
    {
      id: 1,
      icon: Languages,
      title: "Korean Language Training",
      description:
        "Structured classes from basic to advanced levels with focus on speaking, reading, writing, and listening. Build fluency for daily life, study, and work in Korea.",
    },
    {
      id: 2,
      icon: FileText,
      title: "EPS-TOPIK Exam Preparation",
      description:
        "Comprehensive coaching for the Employment Permit System test with mock exams, grammar drills, listening practice, and time management strategies.",
    },
    {
      id: 3,
      icon: Award,
      title: "Skill Test Training",
      description:
        "Hands-on guidance for Korea’s job skill test with practical demonstrations, discipline training, and mock practice for both written and practical sections.",
    },
    {
      id: 4,
      icon: Plane,
      title: "Pre-departure & Cultural Orientation",
      description:
        "Training on Korean culture, workplace etiquette, lifestyle, and adaptation strategies to ensure smooth settlement after arrival.",
    },
  ];

  const consultancyServices = [
    {
      id: 1,
      icon: UserCheck,
      title: "Personalized Counseling",
      description:
        "Career-focused guidance to match your skills with the right opportunities in Korea.",
    },
    {
      id: 2,
      icon: CreditCard,
      title: "Documentation & Visa Support",
      description:
        "End-to-end assistance with paperwork, embassy formalities, and visa processing.",
    },
    {
      id: 3,
      icon: Users,
      title: "Job Placement Assistance",
      description:
        "Direct support in connecting students with employers under EPS and other programs.",
    },
  ];

  return (
    <section className="relative py-16 px-6 m-6 md:m-12 rounded-2xl overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          alt="Korea cityscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1B365D]/80 rounded-2xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Your Pathway to <span className="text-yellow-400">Korea 🇰🇷</span>
          </h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto text-white/90 leading-relaxed">
            We provide complete training programs and consultancy services for
            students and workers who want to build their future in Korea.
            Whether it’s mastering the language, passing EPS-TOPIK, or getting
            placement support – we’ve got you covered.
          </p>
        </div>

        {/* Training Programs */}
        <div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingPrograms.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <div
                  key={program.id}
                  className="bg-[#1B365D]/60 backdrop-blur-sm py-8 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#1B365D]/80 group"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent className="w-8 h-8 text-[#1B365D]" />
                    </div>
                    <h3 className="font-bold text-lg text-white group-hover:text-yellow-400 transition-colors duration-300">
                      {program.title}
                    </h3>
                    <p className="text-white/85 leading-relaxed text-sm">
                      {program.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Consultancy Services */}
        <div>
          {/* <h3 className="text-2xl font-semibold text-yellow-400 mb-8">
            What Our Consultancy Offers
          </h3> */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {consultancyServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-[#1B365D]/60 backdrop-blur-sm py-8 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#1B365D]/80 group"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent className="w-8 h-8 text-[#1B365D]" />
                    </div>
                    <h3 className="font-bold text-lg text-white group-hover:text-yellow-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-white/85 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

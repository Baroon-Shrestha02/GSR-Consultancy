import React from "react";
import {
  UserCheck,
  Languages,
  FileText,
  CreditCard,
  Users,
  Plane,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function JourneySection() {
  const offerings = [
    {
      id: 1,
      icon: UserCheck,
      title: "Counseling Based on Student Capabilities",
      description:
        "Personalized guidance tailored to your strengths and career goals.",
    },
    {
      id: 2,
      icon: Languages,
      title: "Basic-to-Advanced Japanese Language",
      description:
        "Comprehensive language training from beginner (N5) to advanced (N1) levels.",
    },
    {
      id: 3,
      icon: FileText,
      title: "Preparation for Tests",
      description:
        "Expert coaching for JFT A2 and other required examinations.",
    },
    {
      id: 4,
      icon: CreditCard,
      title: "Documentation & Visa Preparation",
      description:
        "Complete assistance with paperwork and visa application process.",
    },
    {
      id: 5,
      icon: Users,
      title: "SSW Training Programs",
      description:
        "Specialized skill training for Specified Skilled Worker program.",
    },
    {
      id: 6,
      icon: Plane,
      title: "Pre-departure & Cultural Training",
      description:
        "Essential preparation for living and working in Japanese culture.",
    },
  ];

  return (
    <section className="relative py-16 px-6 m-6 md:m-12 rounded-2xl overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517154421773-0529f29ea451?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          alt="Japan cityscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#002452]/70 rounded-2xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            What We Offer to <span className="text-yellow-400">Students</span>
          </h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto text-white/90 leading-relaxed">
            From personalized counseling to comprehensive training programs, we
            provide complete support to help you succeed in your Japanese
            journey under the SSW program.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {offerings.map((offering, index) => {
            const IconComponent = offering.icon;
            return (
              <div
                key={offering.id}
                className="bg-[#002452]/50 backdrop-blur-sm py-8 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#002452]/60 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="w-8 h-8 text-[#002452]" />
                  </div>
                  <h3 className="font-bold text-xl text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {offering.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    {offering.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <Link to="/contact">
          <div className="mt-12">
            <button className="bg-yellow-400 text-[#002452] font-bold px-10 py-4 rounded-full hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:scale-105 transform text-lg">
              Start Your Journey Today
            </button>
          </div>
        </Link>
      </div>
    </section>
  );
}

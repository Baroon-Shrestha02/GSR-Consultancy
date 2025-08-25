import {
  CheckCircle,
  Users,
  Utensils,
  Sprout,
  Car,
  Plane,
  Hammer,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const skillIcons = {
  "Caregiver Training": Users,
  "Food Service": Utensils,
  Agriculture: Sprout,
  "Driving Skills": Car,
  "Airport Ground Handling": Plane,
  "Construction Skills": Hammer,
};

const cardBackgrounds = {
  "Caregiver Training":
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center",
  "Food Service":
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&crop=center",
  Agriculture:
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop&crop=center",
  "Driving Skills":
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop&crop=center",
  "Airport Ground Handling":
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop&crop=center",
  "Construction Skills":
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&crop=center",
};

const TrainingCard = ({ title, items, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = skillIcons[title];
  const bgImage = cardBackgrounds[title];

  return (
    <div
      className="group relative rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer bg-white border border-gray-200"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-[#002452]/70 group-hover:bg-[#002452]/60 transition-colors duration-300" />

      {/* Content */}
      <div className="relative z-10 p-8">
        {/* Icon */}
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md mb-6 mx-auto transition-transform duration-300 group-hover:scale-110">
          <Icon className="w-8 h-8 text-gray-700" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-center text-white mb-6 group-hover:text-white transition-colors duration-300">
          {title}
        </h3>

        {/* Items */}
        <ul className="space-y-4">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 transform transition-all duration-300"
              style={{
                transitionDelay: isHovered ? `${idx * 100}ms` : "0ms",
                opacity: isHovered ? 1 : 0.8,
              }}
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                <CheckCircle className="text-white w-4 h-4" />
              </div>
              <span className="text-white text-sm leading-relaxed font-medium">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function Classes() {
  const trainingData = [
    {
      title: "Caregiver Training",
      items: [
        "Skills for elderly care & nursing support",
        "Understanding Japanese caregiving practices",
        "Hands-on training with real-life scenarios",
      ],
    },
    {
      title: "Food Service",
      items: [
        "Restaurant & hospitality training",
        "Food preparation techniques",
        "Customer service skills",
      ],
    },
    {
      title: "Agriculture",
      items: [
        "Modern farming methods",
        "Greenhouse techniques",
        "Sustainable agricultural practices",
      ],
    },
    {
      title: "Driving Skills",
      items: [
        "Safe driving techniques",
        "Transportation & logistics training",
        "Understanding Japanese traffic rules",
      ],
    },
    {
      title: "Airport Ground Handling",
      items: [
        "Customer service & check-in support",
        "Baggage handling procedures",
        "Airport safety & operations",
      ],
    },
    {
      title: "Construction Skills",
      items: [
        "Building & maintenance techniques",
        "Hands-on practical construction training",
        "Workplace safety standards",
      ],
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            SSW Training <span className=" text-[#002452]">Classes</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Along with Japanese language training, we provide specialized skill
            classes to prepare students for career opportunities in Japan under
            the SSW program.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {trainingData.map((training, idx) => (
            <TrainingCard
              key={training.title}
              title={training.title}
              items={training.items}
              delay={idx * 150}
            />
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-8">
          <Link to="/contact">
            <div className="inline-flex items-center gap-3 bg-[#002452] hover:bg-blue-900 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-300 cursor-pointer group">
              Enroll For Our Programs
              <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                <span className="text-xs">→</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

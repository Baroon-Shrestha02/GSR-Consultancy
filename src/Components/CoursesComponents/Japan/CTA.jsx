import React from "react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <>
      <div className="container mx-auto mb-20 bg-[#002452] rounded-3xl p-8 text-center text-white relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join thousands of students who have transformed their lives through
            Japanese education. Let us guide you every step of the way.
          </p>
          <Link to="/contact">
            <button className="bg-white text-[#002452] px-8 py-3 rounded-full font-semibold transition-colors duration-300 shadow-lg">
              Get Free Consultation
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

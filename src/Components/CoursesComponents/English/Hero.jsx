import React, { useRef } from "react";

export default function Hero() {
  const form = useRef();

  const sendWhatsApp = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const phone = formData.get("user_phone");
    const preferredCourse = formData.get("preferred_course");
    const message = formData.get("message");

    const whatsappMessage = `Hello Omni Global,%0A%0AI am interested in studying English. Here are my details:%0A%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}%0APreferred Course: ${preferredCourse}%0AMessage: ${message}%0A%0APlease get in touch with me.`;

    const whatsappURL = `https://wa.me/9779849011240?text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank");
    form.current.reset();
  };

  return (
    <section>
      <div
        className="min-h-screen bg-cover bg-center relative"
        style={{ backgroundImage: "url('/studyinjapan.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-20">
          {/* Left Text */}
          <div className="text-white space-y-6">
            <h4 className="text-lg font-medium bg-white/20 inline-block px-3 py-1 rounded-full">
              Study English
            </h4>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white drop-shadow-lg">
              Master English for Studies, Work & Global Success
            </h1>
            <p className="text-lg md:text-xl max-w-lg text-gray-100">
              Join our expert-led English language courses – from grammar basics
              to IELTS, TOEFL, and Business English. Build confidence and excel
              worldwide with Omni Global.
            </p>
            <a
              href="#form"
              className="inline-block bg-[#FF6B00] hover:bg-[#FF8533] text-white font-semibold py-3 px-6 rounded-full transition duration-300"
            >
              Get Free Consultation
            </a>
          </div>

          {/* FORM */}
          <div id="form" className="bg-white/95 mt-20 rounded-lg p-6 shadow-xl">
            <h3 className="text-xl font-bold text-[#005B99] mb-4">
              Start Your English Learning Journey
            </h3>
            <form ref={form} onSubmit={sendWhatsApp} className="space-y-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Full Name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
              <input
                type="tel"
                name="user_phone"
                placeholder="Phone Number"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
              <select
                name="preferred_course"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              >
                <option value="">Select Preferred Course</option>
                <option>Basic English</option>
                <option>Intermediate English</option>
                <option>Advanced English</option>
                <option>IELTS Preparation</option>
                <option>TOEFL Preparation</option>
                <option>PTE Preparation</option>
                <option>Business English</option>
                <option>Speaking & Communication</option>
              </select>
              <textarea
                name="message"
                placeholder="Tell us about your English learning goals"
                rows="3"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#FF6B00] hover:bg-[#FF8533] text-white font-semibold py-3 rounded-lg"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

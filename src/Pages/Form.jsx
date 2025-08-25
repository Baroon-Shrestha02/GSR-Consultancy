// src/Components/AdmissionForm.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    guardianName: "",
    guardianContact: "",
    address: "",
    state: "",
    city: "",
    courseCategory: "",
    courses: [],
    payment: "",
  });

  const courseOptions = {
    English: [
      "IELTS Preparation",
      "PTE Preparation",
      "Basic English",
      "Business English",
      "Conversational English",
    ],
    Japanese: [
      "Basic Japanese (N5)",
      "Elementary Japanese (N4)",
      "Intermediate Japanese (N3)",
      "Upper Intermediate Japanese (N2)",
      "Advanced Japanese (N1)",
      "JLPT Preparation Course",
      "Japanese Conversation Classes",
      "Business Japanese",
      "Japanese Culture & Language",
    ],
    Korean: [
      "Basic Korean (TOPIK I Level 1)",
      "Elementary Korean (TOPIK I Level 2)",
      "Intermediate Korean (TOPIK II Level 3)",
      "Upper Intermediate Korean (TOPIK II Level 4)",
      "Advanced Korean (TOPIK II Level 5)",
      "Proficient Korean (TOPIK II Level 6)",
      "TOPIK Preparation Course",
      "Korean Conversation Classes",
      "Business Korean",
      "K-Pop & Korean Culture",
    ],
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (name === "courseCategory") {
      setFormData((prev) => ({
        ...prev,
        courseCategory: value,
        courses: [], // Clear selected courses when category changes
      }));
    } else if (type === "checkbox") {
      setFormData((prev) => {
        const courses = prev.courses.includes(value)
          ? prev.courses.filter((c) => c !== value)
          : [...prev.courses, value];
        return { ...prev, courses };
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct detailed WhatsApp message
    const message = `
*Admission Form Submission*

*Name:* ${formData.firstName} ${formData.lastName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Gender:* ${formData.gender}
*Date of Birth:* ${formData.dob}
*Guardian Name:* ${formData.guardianName || "-"}
*Guardian Contact:* ${formData.guardianContact || "-"}
*Address:* ${formData.address}, ${formData.city}, ${formData.state}
*Course Category:* ${formData.courseCategory || "-"}
*Selected Courses:* ${
      formData.courses.length > 0 ? formData.courses.join(", ") : "-"
    }
*Payment Method:* ${formData.payment || "-"}
    `;

    // Encode message
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp number to send
    const whatsappNumber = "9849011240";

    // Open WhatsApp
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col relative"
      style={{ backgroundImage: "url('/studyinjapan.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white-20/90 to-white"></div>
      {/* Hero Section */}
      <section className="bg-[#002452] z-20 text-white py-24 px-6 text-center rounded-b-3xl shadow-lg">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Admission Form
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto font-semibold text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Fill out the form below to enroll in our language courses. We offer
          English, Japanese, and Korean language programs.
        </motion.p>
      </section>

      {/* Admission Form Section */}
      <motion.form
        className="w-full z-20 max-w-4xl bg-white p-12 rounded-2xl shadow-xl mt-12 mx-auto text-black"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="input-field"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="input-field"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="input-field"
            required
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="input-field"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="input-field"
            required
          />
          <input
            type="text"
            name="guardianName"
            placeholder="Guardian Name"
            value={formData.guardianName}
            onChange={handleChange}
            className="input-field"
          />
          <input
            type="text"
            name="guardianContact"
            placeholder="Guardian Contact"
            value={formData.guardianContact}
            onChange={handleChange}
            className="input-field"
          />
          <textarea
            name="address"
            placeholder="Full Address"
            value={formData.address}
            onChange={handleChange}
            className="input-field md:col-span-2 h-24 resize-none"
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            className="input-field"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        {/* Course Category Selection */}
        <div className="mt-8">
          <label className="font-bold text-black mb-3 block text-lg">
            Select Language:
          </label>
          <div className="flex flex-wrap gap-4">
            {Object.keys(courseOptions).map((category) => (
              <label
                key={category}
                className="flex items-center gap-2 cursor-pointer text-black font-semibold"
              >
                <input
                  type="radio"
                  name="courseCategory"
                  value={category}
                  checked={formData.courseCategory === category}
                  onChange={handleChange}
                  className="accent-[#002452]"
                />
                {category}
              </label>
            ))}
          </div>
        </div>

        {/* Course Selection - Only show when category is selected */}
        {formData.courseCategory && (
          <div className="mt-8">
            <label className="font-bold text-black mb-3 block text-lg">
              Select {formData.courseCategory} Courses:
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {courseOptions[formData.courseCategory].map((course) => (
                <label
                  key={course}
                  className="flex items-center gap-2 cursor-pointer text-black font-medium hover:bg-gray-50 p-2 rounded transition-colors"
                >
                  <input
                    type="checkbox"
                    name="courses"
                    value={course}
                    checked={formData.courses.includes(course)}
                    onChange={handleChange}
                    className="accent-[#002452]"
                  />
                  {course}
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Payment */}
        <div className="mt-8">
          <label className="font-bold text-black mb-3 block text-lg">
            Payment Method:
          </label>
          <div className="flex items-center gap-6">
            {["Online", "Offline"].map((method) => (
              <label
                key={method}
                className="flex items-center gap-2 cursor-pointer text-black font-semibold"
              >
                <input
                  type="radio"
                  name="payment"
                  value={method}
                  checked={formData.payment === method}
                  onChange={handleChange}
                  className="accent-[#002452]"
                />
                {method}
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-10 w-full bg-[#002452] text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg"
        >
          Submit Application
        </button>

        {/* Input Styles */}
        <style>
          {`
            .input-field {
              border: none;
              border-bottom: 2px solid #000;
              padding: 12px 8px;
              font-size: 16px;
              font-weight: 500;
              color: #000;
              width: 100%;
              transition: all 0.3s ease;
              background-color: transparent;
            }
            .input-field:focus {
              outline: none;
              border-bottom: 2px solid #002452;
            }
            .input-field::placeholder {
              color: #555;
              font-weight: 400;
            }
            select.input-field {
              cursor: pointer;
            }
          `}
        </style>
      </motion.form>
    </div>
  );
}

// src/Components/AdmissionForm.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Form() {
  const { t } = useTranslation();
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

  const courseOptions = t("add-form.form.lang.options", {
    returnObjects: true,
  });

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
          {t("add-form.hero.heading")}
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto font-semibold text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {t("add-form.hero.subheading")}
        </motion.p>
      </section>

      {/* Admission Form Section */}
      <motion.form
        className="w-full z-20 max-w-4xl bg-white p-12 rounded-2xl shadow-xl mt-12 mb-12 mx-auto text-black"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="firstName"
            placeholder={t("add-form.form.fname")}
            value={formData.firstName}
            onChange={handleChange}
            className="input-field"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder={t("add-form.form.lname")}
            value={formData.lastName}
            onChange={handleChange}
            className="input-field"
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t("add-form.form.mail")}
            value={formData.email}
            onChange={handleChange}
            className="input-field"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder={t("add-form.form.phone")}
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
            <option value="">{t("add-form.form.gender.sel")}</option>
            <option value="Male">{t("add-form.form.gender.male")}</option>
            <option value="Female">{t("add-form.form.gender.fe")}</option>
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
            placeholder={t("add-form.form.gname")}
            value={formData.guardianName}
            onChange={handleChange}
            className="input-field"
          />
          <input
            type="text"
            name="guardianContact"
            placeholder={t("add-form.form.gcontact")}
            value={formData.guardianContact}
            onChange={handleChange}
            className="input-field"
          />
          <textarea
            name="address"
            placeholder={t("add-form.form.add")}
            value={formData.address}
            onChange={handleChange}
            className="input-field md:col-span-2 h-24 resize-none"
          />
        </div>
        <div className="mt-8">
          <label className="font-bold text-black mb-3 block text-lg">
            {t("add-form.form.lang.title")}
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
        {/* Course Selection */}
        {formData.courseCategory && (
          <div className="mt-8">
            <label className="font-bold text-black mb-3 block text-lg">
              {t("add-form.form.lang.title")} - {formData.courseCategory}:
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
        {/* Submit Button */}
        <button
          type="submit"
          className="mt-10 w-full bg-[#002452] text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg"
        >
          {t("add-form.form.button")}
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

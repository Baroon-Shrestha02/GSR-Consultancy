import React from "react";
import { Link } from "react-router-dom";
import { Facebook } from "lucide-react";
import { BsWhatsapp, BsTiktok } from "react-icons/bs";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const phoneNumber = "+977 9803016479";
  const email = "info@gsreducation.com";
  const location = "Kathmandu, near Shiva Mandir, Ring Road";

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        alert(`Phone number ${phoneNumber} copied to clipboard!`);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <footer
      className="relative my-22 md:my-10 text-white"
      style={{ backgroundColor: "#002452" }}
    >
      {/* Top Banner */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[80vw] md:w-[70vw] rounded-4xl bg-yellow-400 py-2 px-4 flex flex-col md:flex-row justify-between items-center shadow-md">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="font-semibold text-gray-900 text-lg">
            {t("footer.top.heading")}
          </div>
          <Link
            to="/contact"
            className="bg-gray-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition flex items-center gap-2"
          >
            {t("footer.top.start")}
          </Link>
        </div>
        <div className="font-semibold text-gray-900 mt-2 md:mt-0">
          📞 {phoneNumber}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto pt-40 md:pt-20 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1">
            <img src="/logo4.png" alt="GSR Logo" className="rounded-2xl mb-4" />
            <p className="text-gray-300 mb-4">{t("footer.p1")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-yellow-400">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  {t("nav.course.main")}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Need Help */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              {t("footer.help.need")}
            </h3>
            <div className="space-y-4">
              <div>
                <span className="text-gray-400 text-sm">
                  {t("footer.help.call")}
                </span>
                <button
                  onClick={copyToClipboard}
                  className="block text-white font-semibold hover:text-yellow-400 transition-colors"
                >
                  {phoneNumber}
                </button>
              </div>
              <div>
                <span className="text-gray-400 text-sm">
                  {t("footer.help.supp")}
                </span>
                <a
                  href={`mailto:${email}`}
                  className="block text-white font-semibold hover:text-yellow-400"
                >
                  {email}
                </a>
              </div>
              <div>
                <span className="text-gray-400 text-sm">
                  {t("footer.help.ser")}
                </span>
                <div className="text-white font-semibold">Kathmandu, Nepal</div>
              </div>
            </div>
          </div>

          {/* Location & Social */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <div className="text-gray-400 text-sm mb-1">
                📍 {t("footer.help.loc")}
              </div>
              <div className="text-white font-semibold">{location}</div>
            </div>

            {/* Google Map */}
            <div className="mb-4 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2679.6785073910905!2d85.3113542463692!3d27.73381244853153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1942544a706d%3A0x6bc2e4a7198713cc!2sGSR%20Educational%20Academy!5e0!3m2!1sen!2snp!4v1756352526815!5m2!1sen!2snp"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Gongabu Location"
              ></iframe>
            </div>
            <h3 className="pb-4">{t("footer.help.fol")}:</h3>
            <div className="flex gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/people/GSR-Educational-Academy/100068068845476/?rdid=YIaCDQH9c2GyuNux&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BHSS7mw47%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-yellow-400/20 rounded flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition-transform transform hover:scale-110"
              >
                <Facebook />
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${phoneNumber.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-yellow-400/20 rounded flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition-transform transform hover:scale-110"
              >
                <BsWhatsapp />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@gsreduacademy?_t=ZS-8z8LhjDqTqi&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-yellow-400/20 rounded flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition-transform transform hover:scale-110"
              >
                <BsTiktok />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 pb-4">
            <div>© 2025 {t("footer.cpy")}.</div>
            <div className="flex items-center gap-4">
              <Link to="#">
                <div>{t("footer.privacy")}</div>
              </Link>
              <Link to="#">
                <div>{t("footer.term")}</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

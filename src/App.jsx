import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import ServicesPage from "./Pages/ServicesPage";
import CoursesPage from "./Pages/CoursesPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/HelperComponents/ScrollToTop";
import Gallery from "./Pages/Gallery"; // Import the Gallery component
import StudyinJapan from "./Pages/StudyinJapan";
import FAQ from "./Pages/FAQ";
import StudyKorea from "./Pages/StudyinKorea";
import WhatsAppButton from "./Components/HelperComponents/WhatsAppButton";
import English from "./Pages/English";
import Documentation from "./Pages/Documentation";
import Form from "./Pages/Form";
import JLPT from "./Pages/JLPT";
import NAT from "./Pages/NAT";
import TOPIK from "./Pages/TOPIK";
import KoreanLang from "./Pages/KoreanLang";
import SKill from "./Pages/SKill";
import Ietls from "./Pages/Ietls";
import PTE from "./Pages/PTE";
import Tofel from "./Pages/Tofel";

export default function App() {
  return (
    <>
      <WhatsAppButton />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<CoursesPage />} path="/courses" />
        <Route element={<ServicesPage />} path="/services" />
        <Route element={<ContactPage />} path="/contact" />
        <Route element={<Gallery />} path="/gallery" />
        <Route element={<StudyinJapan />} path="/courses/study-in-japan" />
        <Route element={<English />} path="/courses/english" />
        <Route element={<FAQ />} path="/faq" />
        <Route element={<StudyKorea />} path="/courses/study-in-korea" />
        <Route element={<Documentation />} path="/documentation" />
        <Route element={<Form />} path="/admission-form" />
        <Route element={<JLPT/>} path="/courses/study-in-japan/jlpt" />

        <Route element={<NAT />} path="/courses/study-in-japan/NAT" />
        <Route element={<SKill />} path="/courses/study-in-japan/skill" />
        <Route element={<TOPIK />} path="/courses/study-in-korea/topik" />
        <Route element={<KoreanLang />} path="/courses/study-in-korea/language" />

        <Route element={<Ietls />} path="/courses/english/ielts" />
        <Route element={<PTE />} path="/courses/english/pte" />
        <Route element={<Tofel />} path="/courses/english/tofel" />

        

      </Routes>
      <Footer />
    </>
  );
}


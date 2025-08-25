import JourneySection from "../Components/CoursesComponents/Korea/Journey";
import KoreaStudySection from "../Components/CoursesComponents/Korea/KoreaStudySection";
import StudyinKorea from "../Components/CoursesComponents/Korea/StudyinKorea";
import Hero from "../Components/CoursesComponents/Korea/Hero";
import Classes from "../Components/CoursesComponents/Korea/Classes";
import CTA from "../Components/CoursesComponents/Korea/CTA";
import KoreaTraningProgram from "../Components/CoursesComponents/Korea/KoreaTraningProgram";

export default function StudyKorea() {
  return (
    <>
      <Hero />
      <StudyinKorea />
      <KoreaStudySection />
      <KoreaTraningProgram />
      <JourneySection />
      {/* <Classes /> */}
      <CTA />
    </>
  );
}

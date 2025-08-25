import JapanStudySection from "../Components/CoursesComponents/Japan/JapanStudySection";
import JourneySection from "../Components/CoursesComponents/Japan/Journey";
import Classes from "../Components/CoursesComponents/Japan/Classes";
import StudyinJapan from "../Components/CoursesComponents/Japan/StudyinJapan";
import Hero from "../Components/CoursesComponents/Japan/Hero";
import CTA from "../Components/CoursesComponents/Japan/CTA";
import JapanTrainingPrograms from "../Components/CoursesComponents/Japan/JapanTrainingPrograms";
export default function StudyJapan() {
  return (
    <>
      <Hero />
      <StudyinJapan />
      <JapanStudySection />
      <JapanTrainingPrograms />
      <JourneySection />
      <Classes />
      <CTA />
    </>
  );
}

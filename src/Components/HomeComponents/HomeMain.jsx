import React from "react";
import HomeHero from "./HomeHero";
import HomeIntro from "./HomeIntro";
import HomeServices from "./HomeServices";
import HomeWhy from "./HomeWhy";
import HomeContact from "./HomeContact";
import HomeTestimonials from "./HomeTestimonials";
import HomeContact2 from "./HomeContact2";
import StudyAbroad from "./StudyAbroad";

export default function HomeMain() {
  return (
    <div>
      <HomeHero />
      <HomeIntro />
      <HomeServices />
      <HomeContact2 />
      <StudyAbroad />
      {/* <HomeWhy /> */}
      <HomeTestimonials />
      <HomeContact />
    </div>
  );
}

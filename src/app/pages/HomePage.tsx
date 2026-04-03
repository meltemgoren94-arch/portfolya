import { useEffect } from "react";
import { useLocation } from "react-router";
import { HeroSection } from "../components/HeroSection";
import { CaseStudySection } from "../components/CaseStudySection";
import { BiographySection } from "../components/BiographySection";
import { Footer } from "../components/Footer";
import { caseStudies } from "../data/caseStudies";

export function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location.state]);
  return (
    <div className="bg-black">
      <HeroSection />
      
      {caseStudies.map((caseStudy, index) => (
        <CaseStudySection
          key={caseStudy.id}
          caseStudy={caseStudy}
          index={index}
        />
      ))}
      
      <BiographySection />
      <Footer />
    </div>
  );
}

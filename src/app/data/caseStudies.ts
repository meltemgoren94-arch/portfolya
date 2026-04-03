import { CaseStudy } from "../components/CaseStudySection";
import icon1Image from "../components/img/3dicon1.png";
import icon3Image from "../components/img/3dicon3.png";
import icon4Image from "../components/img/3dicon4.png";
import isbankLogo from "../../Isbank-case/isbank-logo.png";
import retailLogo from "../../retail-case/retail-logo.png";
import airportLogo from "../../airport-case/airport-logo.png";

export const caseStudies: CaseStudy[] = [
  {
    id: "isbank-case",
    title: "Banking and Beyond: Digital Experiences",
    description:
      "Designing customer-centric communication journeys and leading redesign projects. Tracking success through metrics while training coworkers on UX best practices.",
    category: "UX Consultant",
    image: icon1Image,
    imageAlt: "Banking app 3D concept visualization",
    logo: isbankLogo,
    logoAlt: "İşbank logo",
  },

  {
    id: "ecommerce-platform",
    title: "Retail Operations & Employee Experiences",
    description:
      "Designing omnichannel sales platforms and comprehensive product management applications, including planning and production workflows.",
    category: "Sr Product Designer",
    image: icon3Image,
    imageAlt: "Retail operations and employee experiences interface",
    logo: retailLogo,
    logoAlt: "Retail brand logo",
  },
  {
    id: "airport-experience",
    title: "Airport Digital Experience",
    description:
      "Designing the end-to-end digital journey for a major international airport — from pre-flight wayfinding to lounge check-in, departure board interfaces, and gate-side self-service kiosks.",
    category: "Service Design",
    image: icon4Image,
    imageAlt: "Airport digital experience 3D concept",
    logo: airportLogo,
    logoAlt: "Airport digital experience logo",
  },
];

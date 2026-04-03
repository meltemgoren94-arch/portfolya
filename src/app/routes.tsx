import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { CaseStudyDetailPage } from "./pages/CaseStudyDetailPage";
import { AirportDetailPage } from "./pages/AirportDetailPage";
import { IsbankDetailPage } from "./pages/IsbankDetailPage";
import { RetailDetailPage } from "./pages/RetailDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/case-study/airport-experience",
    Component: AirportDetailPage,
  },
  {
    path: "/case-study/isbank-case",
    Component: IsbankDetailPage,
  },
  {
    path: "/case-study/ecommerce-platform",
    Component: RetailDetailPage,
  },
  {
    path: "/case-study/:id",
    Component: CaseStudyDetailPage,
  },
]);

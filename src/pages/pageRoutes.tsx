import { Page, PageRoute } from "../types/pages.d";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import PortfolioPage from "./PortfolioPage";

export const PageRoutes: PageRoute[] = [
  {
    pageName: Page.Home,
    path: "/",
    element: <HomePage />
  },
  {
    pageName: Page.About,
    path: "/about",
    element: <AboutPage />
  },
  {
    pageName: Page.Portfolio,
    path: "/portfolio",
    element: <PortfolioPage />
  },
]
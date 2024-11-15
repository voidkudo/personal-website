import { ReactNode } from "react";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import PortfolioPage from "./PortfolioPage";

export const enum Page {
  Home = "Home",
  About = "About",
  Portfolio = "Portfolio",
}

export type PageRoute = {
  pageName: Page,
  path: string,
  element: ReactNode,
}

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
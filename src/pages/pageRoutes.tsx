import { ReactNode } from "react";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import ResumePage from "./ResumePage";

export const enum Page {
  Home = "Home",
  About = "About",
  Resume = "Resume",
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
    pageName: Page.Resume,
    path: "/resume",
    element: <ResumePage />
  },
]
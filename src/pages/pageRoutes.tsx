import { ReactNode } from "react";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import ResumePage from "./ResumePage";
import ProjectPage from "./ProjectPage";

export const enum Page {
  Home = "Home",
  About = "About",
  Project = "Project",
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
    path: "/personal-website/",
    element: <HomePage />
  },
  {
    pageName: Page.About,
    path: "/personal-website/about",
    element: <AboutPage />
  },
  {
    pageName: Page.Project,
    path: "/personal-website/project",
    element: <ProjectPage />
  },
  {
    pageName: Page.Resume,
    path: "/personal-website/resume",
    element: <ResumePage />
  },
]
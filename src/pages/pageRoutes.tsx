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
    path: "/",
    element: <HomePage />
  },
  {
    pageName: Page.About,
    path: "/about",
    element: <AboutPage />
  },
  {
    pageName: Page.Project,
    path: "/project",
    element: <ProjectPage />
  },
  {
    pageName: Page.Resume,
    path: "/resume",
    element: <ResumePage />
  },
]
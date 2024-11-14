import { ReactNode } from "react"

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
import { Metadata } from "next";
import ProjcetsPage from "./projects.page";

export const metadata: Metadata = {
  title: "Ananthu Krishnan | Projects Portfolio",
  description:
    "Check out the portfolio of Ananthu Krishnan, showcasing cutting-edge projects built using React.js, Next.js, TypeScript, and more. Explore real-world applications and solutions.",
  keywords: [
    "Ananthu Krishnan Projects",
    "React.js Projects",
    "Next.js Projects",
    "Web Development Projects",
    "JavaScript Projects",
    "Frontend Development Portfolio",
    "TypeScript Projects",
    "Full-Stack Projects",
    "Project Showcase",
  ],
  openGraph: {
    title: "Ananthu Krishnan | Projects Portfolio",
    description:
      "Explore the real-world projects created by Ananthu Krishnan using React.js, Next.js, TypeScript, and modern web development technologies.",
    url: "https://your-portfolio.com/projects",
    type: "website",
    images: [
      {
        url: "https://your-portfolio.com/images/projects-og.jpg",
        width: 1200,
        height: 630,
        alt: "Ananthu Krishnan - Projects Portfolio",
      },
    ],
  },
};

const Projects = () => {
  return <ProjcetsPage />;
};

export default Projects;

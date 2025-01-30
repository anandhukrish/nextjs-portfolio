import { Metadata } from "next";
import SkillsPage from "./skills.page";

export const metadata: Metadata = {
  title: "Ananthu Krishnan | Skills & Expertise",
  description:
    "Discover the technical skills and expertise of Ananthu Krishnan, including proficiency in React.js, Node.js, TypeScript, and other modern web technologies.",
  keywords: [
    "Ananthu Krishnan Skills",
    "React.js Skills",
    "Node.js Skills",
    "Frontend Development Skills",
    "Full-Stack Developer Skills",
    "JavaScript Skills",
    "TypeScript Skills",
    "UI/UX Design Skills",
    "Web Development Skills",
  ],
  openGraph: {
    title: "Ananthu Krishnan | Skills & Expertise",
    description:
      "Explore the skills and technical expertise of Ananthu Krishnan in frontend and full-stack development using modern web technologies like React.js, Node.js, and TypeScript.",
    url: "https://your-portfolio.com/skills",
    type: "website",
    images: [
      {
        url: "https://your-portfolio.com/images/skills-og.jpg",
        width: 1200,
        height: 630,
        alt: "Ananthu Krishnan - Skills & Expertise",
      },
    ],
  },
};

const Skills = () => {
  return <SkillsPage />;
};

export default Skills;

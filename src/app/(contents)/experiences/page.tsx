import { Metadata } from "next";
import ExperiencesPage from "./experiences.page";

export const metadata: Metadata = {
  title: "Ananthu Krishnan | Professional Experience",
  description:
    "Explore the professional experience of Ananthu Krishnan, a skilled frontend developer with expertise in React.js, Node.js, and modern web technologies.",
  keywords: [
    "Ananthu Krishnan Experience",
    "Frontend Developer Experience",
    "React.js Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "Professional Web Developer",
    "Software Engineer Experience",
    "Full-Stack Developer Experience",
  ],
  openGraph: {
    title: "Ananthu Krishnan | Professional Experience",
    description:
      "Discover the professional journey of Ananthu Krishnan, a frontend developer with experience in React.js, Next.js, Node.js, and modern web development.",
    url: "https://your-portfolio.com/experience",
    type: "website",
    images: [
      {
        url: "https://your-portfolio.com/images/experience-og.jpg",
        width: 1200,
        height: 630,
        alt: "Ananthu Krishnan - Professional Experience",
      },
    ],
  },
};

const Experiences = () => {
  return <ExperiencesPage />;
};

export default Experiences;

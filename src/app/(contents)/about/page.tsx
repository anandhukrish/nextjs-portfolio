import { Metadata } from "next";
import AboutPage from "./about.page";

export const metadata: Metadata = {
  title: "About Ananthu Krishnan | Frontend Developer & React Expert",
  description:
    "Learn more about Ananthu Krishnan, a skilled Frontend Developer specializing in React, Next.js, TypeScript, and modern web technologies. Passionate about building scalable and high-performance applications.",
  keywords: [
    "About Ananthu Krishnan",
    "Frontend Developer",
    "React.js Developer",
    "Next.js Developer",
    "JavaScript Engineer",
    "TypeScript Expert",
    "Web Developer Portfolio",
    "UI/UX Engineer",
    "Software Engineer",
    "Full-Stack Developer",
  ],
  openGraph: {
    title: "About Ananthu Krishnan | Frontend Developer & React Expert",
    description:
      "Discover Ananthu Krishnan’s journey as a Frontend Developer specializing in React, Next.js, and UI/UX design. Passionate about creating innovative digital experiences.",
    url: "https://your-portfolio.com/about",
    type: "profile",
    images: [
      {
        url: "https://your-portfolio.com/images/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Ananthu Krishnan - Frontend Developer",
      },
    ],
  },
};

const About = () => {
  return <AboutPage />;
};

export default About;

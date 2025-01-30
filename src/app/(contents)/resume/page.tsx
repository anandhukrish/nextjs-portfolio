import { Metadata } from "next";
import ResumePage from "./resume.page";

export const metadata: Metadata = {
  title: "Ananthu Krishnan | Resume & Career Overview",
  description:
    "View the comprehensive resume of Ananthu Krishnan, showcasing skills, experience, and education for a career in frontend and full-stack development.",
  keywords: [
    "Ananthu Krishnan Resume",
    "Frontend Developer Resume",
    "Full-Stack Developer Resume",
    "Web Development Resume",
    "Software Engineer Resume",
    "React.js Developer Resume",
    "Resume of Ananthu Krishnan",
  ],
  openGraph: {
    title: "Ananthu Krishnan | Resume & Career Overview",
    description:
      "View the professional resume of Ananthu Krishnan, showcasing key skills and career achievements in frontend and full-stack development.",
    url: "https://your-portfolio.com/resume",
    type: "website",
    images: [
      {
        url: "https://your-portfolio.com/images/resume-og.jpg",
        width: 1200,
        height: 630,
        alt: "Ananthu Krishnan - Resume",
      },
    ],
  },
};

const Resume = () => {
  return <ResumePage />;
};

export default Resume;

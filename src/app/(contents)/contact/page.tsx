import { Metadata } from "next";
import ContactPage from "./contact.page";

export const metadata: Metadata = {
  title: "Contact Ananthu Krishnan | Frontend Developer & React Expert",
  description:
    "Get in touch with Ananthu Krishnan, a skilled Frontend Developer specializing in React, Next.js, and modern web technologies. Let's collaborate on your next project!",
  keywords: [
    "Contact Ananthu Krishnan",
    "Frontend Developer Contact",
    "React.js Developer",
    "Next.js Expert",
    "Hire a Web Developer",
    "JavaScript Engineer",
    "TypeScript Developer",
    "Software Engineer Contact",
    "Freelance Web Developer",
    "UI/UX Developer",
  ],
  openGraph: {
    title: "Contact Ananthu Krishnan | Frontend Developer & React Expert",
    description:
      "Reach out to Ananthu Krishnan, a React.js and Next.js developer, for collaboration and project inquiries. Let's build something amazing together!",
    url: "https://your-portfolio.com/contact",
    type: "website",
    images: [
      {
        url: "https://your-portfolio.com/images/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Ananthu Krishnan - Frontend Developer",
      },
    ],
  },
};

const Contact = () => {
  return <ContactPage />;
};

export default Contact;

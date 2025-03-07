import {
  Code,
  Database,
  FileText,
  GitBranch,
  Monitor,
  Rocket,
  Server,
  Shield,
} from "lucide-react";

export enum SKILLS_COLORS {
  GREEN = "green",
  BLUE = "blue",
  PURPLE = "purple",
  ORANGE = "orange",
  GRAY = "gray",
  INDIGO = "indigo",
  RED = "red",
}

export const aboutData = [
  {
    name: "Frontend",
    icon: Code,
    description: "Expert in modern frontend frameworks and responsive design",
    classes: "text-blue-500",
  },
  {
    name: "Backend",
    icon: Server,
    description: "Building robust and scalable server-side applications",
    classes: "text-emerald-500",
  },
  {
    name: "Performance",
    icon: Rocket,
    description: "Optimizing applications for maximum speed and efficiency",
    classes: "text-red-500",
  },
] as const;

export const skillsData = [
  {
    title: "Frontend",
    icon: Code,
    skills: [
      "React & Next.js",
      "Vue",
      "TypeScript",
      "Tailwind CSS",
      "Redux & React Query",
      "HTML5 & CSS3",
      "JavaScript ES6+",
      "Sass",
    ],
    color: SKILLS_COLORS.BLUE,
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js & Express", "Python"],
    color: SKILLS_COLORS.GREEN,
  },
  {
    title: "Database & DevOps",
    icon: Database,
    skills: ["PostgreSQL & MongoDB", "MySQL"],
    color: SKILLS_COLORS.PURPLE,
  },
  {
    title: "Version Control",
    icon: GitBranch,
    skills: [
      "Git & GitHub",
      "GitLab & Bitbucket",
      "Version Control Best Practices",
    ],
    color: SKILLS_COLORS.ORANGE,
  },
  {
    title: "Security",
    icon: Shield,
    skills: [
      "OWASP Security Standards",
      "OAuth 2.0 & OpenID Connect",
      "JWT Implementation",
      "SSL/TLS & HTTPS",
      "Security Auditing",
      "Data Encryption",
    ],
    color: SKILLS_COLORS.RED,
  },
  {
    title: "Testing & QA",
    icon: Monitor,
    skills: [
      "Jest & React Testing Library",
      "Cypress E2E Testing",
      "Test-Driven Development",
      "Performance Testing",
    ],
    color: SKILLS_COLORS.INDIGO,
  },
  {
    title: "Documentation",
    icon: FileText,
    skills: [
      "API Documentation (OpenAPI)",
      "Technical Documentation",
      "Code Documentation",
      "User Guides & Manuals",
      "Project Documentation",
      "Knowledge Base Management",
    ],
    color: SKILLS_COLORS.GRAY,
  },
];

export const experiences = [
  {
    role: "Software Developer",
    company: "Panapps Inc",
    duration: "06/2022 - 03/2024",
    bgColor: "bg-gradient-to-r from-blue-500/20 to-blue-600/20",
    responsibilities: [
      "Contributed to the development of a data portal under the World Bank initiative to collect and visualize health data from partner countries.",
      "Enhanced data filtering capabilities, significantly improving query efficiency for indicators and sub-indicators.",
      "Developed key features, including managing indicators, sub-indicators, and reform mappings.",
      " Created a dashboard for the Scorecard module, enabling users to track country-specific progress and responses effectively.",
      "Designed high-impact data visualizations using Highcharts for actionable insights.",
      "Collaborated with the Drupal team to build robust APIs supporting seamless data injection.",
    ],
  },
  {
    role: "Assosiate Developer",
    company: "Torc Info Tech",
    duration: "08/2021 - 02/2022",
    bgColor: "bg-gradient-to-r from-green-500/20 to-green-600/20",
    responsibilities: [
      " Medilife Healthcare Services LLC provides a responsive website UI for on-site sample collection at your premises, home, location, etc.",
      "As an Associate Software Developer, I completed my role in this project and finished the UI components on time per the client's requirement using react JS.",
      "Optimized application performance by reducing unnecessary renders.",
      "Integrated REST APIs  for dynamic content.",
    ],
  },
];

export const skills = [
  { name: "React/Next.js" },
  { name: "TypeScript" },
  { name: "Node.js" },
  { name: "Python" },
  { name: "MYSQL" },
  { name: "Docker" },
  { name: "Git" },
  { name: "REST APIs" },
  { name: "Testing" },
];

export const projects = [
  {
    title: "Lorem",
    image: "/next.svg",
    description:
      "ASP.NET, C# (.NET Framework), Database, HTML/CSS, JavaScript, MVC, AJAX, Bootstrap, jQuery, Knockout.js, Metro UI, Web Apps",
    technologies: ["ASP.NET", "C#", "JavaScript"],
    link: "lorem",
  },
];

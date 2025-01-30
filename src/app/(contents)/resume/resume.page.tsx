"use client";
import React from "react";
import { motion } from "framer-motion";
import { experiences, skills } from "@/app/data/constants";
import Title from "@/components/title.component";

const ResumePage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Title
        mainHeading=" My Professional Journey"
        subHeading="Resume"
        containerClass="text-5xl text-center mb-14"
      />
      <div>
        <motion.div
          initial={{
            y: "50px",
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
            },
          }}
        >
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-award w-6 h-6 text-blue-400 mr-2"
              >
                <circle cx="12" cy="8" r="6"></circle>
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
              </svg>
              <h2 className="text-2xl font-semibold text-white">Overview</h2>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <p className="text-gray-300 leading-relaxed">
                I’m a passionate Front-End Developer specializing in React.js,
                Next.js, and TypeScript, with a strong focus on building
                scalable, high-performance web applications. I thrive on
                creating seamless user experiences through responsive design,
                state management, and performance optimization. With expertise
                in Redux, React Query, and modern UI frameworks, I enjoy solving
                complex problems and continuously learning new technologies. My
                experience spans interactive dashboards, real-time applications,
                and optimizing front-end architectures.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                  Frontend Development
                </span>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm">
                  Team Leadership
                </span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                  Performance Optimization
                </span>
                <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">
                  Mentoring
                </span>
              </div>
            </div>
          </section>
        </motion.div>
        <motion.div
          initial={{
            y: "50px",
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
            },
          }}
        >
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-briefcase w-6 h-6 text-blue-400 mr-2"
              >
                <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              <h2 className="text-2xl font-semibold text-white">
                Professional Experience
              </h2>
            </div>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div
                  className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
                  key={exp.role}
                >
                  <h3 className="text-xl font-semibold text-white">
                    {exp.role}
                  </h3>
                  <p className="text-blue-400">{exp.company}</p>
                  <p className="text-gray-400 text-sm mb-3">{exp.duration}</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {exp.responsibilities.map((res) => (
                      <li key={res}>{res}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </motion.div>
        <motion.div
          initial={{
            y: "50px",
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
            },
          }}
        >
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-code w-6 h-6 text-blue-400 mr-2"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              <h2 className="text-2xl font-semibold text-white">
                Technical Skills
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((sk) => (
                <div
                  className="bg-gray-800/50 p-3 rounded-lg border border-gray-700 text-center text-gray-300"
                  key={sk.name}
                >
                  {sk.name}
                </div>
              ))}
            </div>
          </section>
        </motion.div>
        <motion.div
          initial={{
            y: "50px",
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
            },
          }}
        >
          <section>
            <div className="flex items-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-graduation-cap w-6 h-6 text-blue-400 mr-2"
              >
                <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                <path d="M22 10v6"></path>
                <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
              </svg>
              <h2 className="text-2xl font-semibold text-white">Education</h2>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white">
                Bachelor of Computer Science
              </h3>
              <p className="text-blue-400"> Mahaguru Institute Of Technology</p>
              <p className="text-gray-400 text-sm mb-3">2016-2020</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default ResumePage;

"use client";
import React from "react";
import { motion } from "framer-motion";
import { experiences, skills } from "@/app/data/constants";
import Title from "@/components/title.component";
import { Award, Briefcase, Code, GraduationCap } from "lucide-react";

const ResumePage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Title
        mainHeading=" My Professional Journey"
        subHeading="Resume"
        containerClass="text-4xl md:text-5xl text-center mb-14"
        mainClass="text-4xl md:text-5xl"
        subClass="text-xs"
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
              <Award className="w-6 h-6 text-blue-400 mr-2" />

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
              <Briefcase className=" w-6 h-6 text-blue-400 mr-2" />
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
              <Code className="w-6 h-6 text-blue-400 mr-2" />

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
              <GraduationCap className="w-6 h-6 text-blue-400 mr-2" />

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

"use client";
import Title from "@/components/title.component";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import { experiences } from "@/app/data/constants";

const ExperiencesPage = () => {
  return (
    <>
      <Title
        mainHeading="Experience"
        subHeading="Career Journey"
        containerClass="text-5xl text-center mb-14"
      />
      <div className="max-w-5xl mx-auto space-y-8">
        {experiences.map((exp, i) => (
          <motion.div
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden"
            key={exp.company}
            initial={{
              y: "50px",
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.6,
                delay: i * 0.08,
              },
            }}
          >
            <div className={cn("bg-gradient-to-r  p-8", exp.bgColor)}>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
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
                      className="lucide lucide-briefcase w-5 h-5 text-blue-400"
                    >
                      <rect
                        width="20"
                        height="14"
                        x="2"
                        y="7"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                    <h3 className="text-2xl font-semibold text-white">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="text-lg text-gray-300">{exp.company}</div>
                </div>
                <div className="flex items-center gap-2 mt-2 md:mt-0">
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
                    className="lucide lucide-calendar w-4 h-4 text-gray-400"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  <span className="text-gray-400">{exp.duration}</span>
                </div>
              </div>
              <div className="space-y-3">
                {exp.responsibilities.map((res) => (
                  <div className="flex items-start gap-2" key={res.slice(0, 5)}>
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
                      className="lucide lucide-chevron-right w-5 h-5 mt-1 text-blue-400 flex-shrink-0"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                    <p className="text-gray-300">{res}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default ExperiencesPage;

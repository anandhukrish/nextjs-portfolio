"use client";
import Title from "@/components/title.component";
import React from "react";
import { motion } from "framer-motion";
import { aboutData } from "@/app/data/constants";

const About = () => {
  return (
    <div>
      <Title
        mainHeading="About Me"
        subHeading="Get to know me"
        containerClass="text-5xl text-center mb-14"
      />
      <motion.div
        initial={{ y: "100px", opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.2,
          },
        }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 mb-12 shadow-xl ">
          <p className="text-gray-300 leading-relaxed mb-6 text-lg">
            I’m a passionate Front-End Developer specializing in React.js,
            Next.js, and TypeScript, with a strong focus on building scalable,
            high-performance web applications. I thrive on creating seamless
            user experiences through responsive design, state management, and
            performance optimization. With expertise in Redux, React Query, and
            modern UI frameworks, I enjoy solving complex problems and
            continuously learning new technologies. My experience spans
            interactive dashboards, real-time applications, and optimizing
            front-end architectures.
          </p>
          <div className="flex items-center gap-4 text-gray-400">
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
              className="lucide lucide-heart w-5 h-5 text-red-400"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
            <span>Passionate about clean code and modern technologies</span>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {
            opacity: 0,
          },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.5,
              delayChildren: 0.2,
            },
          },
        }}
      >
        {aboutData.map((about, i) => (
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {
                opacity: 0,
                y: "20px",
              },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.2,
                  delay: 0.2 * i,
                },
              },
            }}
            className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-[1px] rounded-2xl"
            key={about.name}
          >
            <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-2xl h-full">
              <div className="bg-gray-700/50 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                <about.icon />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">
                {about.name}
              </h4>
              <p className="text-gray-400">{about.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{ y: "100px", opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.3,
          },
        }}
        className="mt-16 max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
      >
        <div className="flex items-center gap-4 mb-6">
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
            className="lucide lucide-coffee w-6 h-6 text-yellow-400"
          >
            <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
            <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path>
            <line x1="6" x2="6" y1="2" y2="4"></line>
            <line x1="10" x2="10" y1="2" y2="4"></line>
            <line x1="14" x2="14" y1="2" y2="4"></line>
          </svg>
          <h3 className="text-2xl font-semibold text-white">
            Personal Interests
          </h3>
        </div>
        <p className="text-gray-300 leading-relaxed">
          In my free time, I enjoy hiking, photography, and contributing to
          open-source projects. I believe in continuous learning and often
          explore new frameworks and languages to stay at the forefront of
          technology.
        </p>
      </motion.div>
    </div>
  );
};

export default About;

"use client";
import Title from "@/components/title.component";
import React from "react";
import { motion } from "framer-motion";
import { aboutData } from "@/app/data/constants";
import { cn } from "@/lib/utils";
import { Coffee, Heart } from "lucide-react";

const AboutPage = () => {
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
            <Heart className="w-5 h-5 text-red-400" />

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
                <about.icon className={cn("w-8 h-8 ", about.classes)} />
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
          <Coffee className=" w-6 h-6 text-yellow-400" />

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

export default AboutPage;

"use client";
import Title from "@/components/title.component";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/app/data/constants";
import { Code, Globe } from "lucide-react";

const ProjcetsPage = () => {
  return (
    <div>
      <Title
        mainHeading="Featured Projects"
        subHeading="My Work"
        containerClass="text-4xl md:text-5xl text-center mb-14"
        mainClass="text-4xl md:text-5xl"
        subClass="text-xs"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl p-[1px] backdrop-blur-sm"
            key={project.title}
            initial={{
              y: "50px",
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.4,
                delay: i * 0.05,
              },
            }}
          >
            <div className="bg-gray-800/90 rounded-2xl h-full">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"></div>

                <Image
                  src={project.image}
                  alt="OMS for Award-Winning Embroidery Shop"
                  className="h-56 w-full object-cover rounded-t-2xl"
                  height={0}
                  width={0}
                />

                <div className="absolute inset-0 flex items-center justify-center flex-col-reverse gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-white/20 transition-colors"
                    tabIndex={0}
                  >
                    <Globe className="w-5 h-5" />
                    View Project
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-white/20 transition-colors"
                    tabIndex={0}
                  >
                    <Code className=" w-5 h-5" />
                    View Code
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tec) => (
                    <span
                      className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      key={tec}
                    >
                      {tec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjcetsPage;

"use client";
import Title from "@/components/title.component";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import { experiences } from "@/app/data/constants";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

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
                    <Briefcase className="w-5 h-5 text-blue-400" />

                    <h3 className="text-2xl font-semibold text-white">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="text-lg text-gray-300">{exp.company}</div>
                </div>
                <div className="flex items-center gap-2 mt-2 md:mt-0">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400">{exp.duration}</span>
                </div>
              </div>
              <div className="space-y-3">
                {exp.responsibilities.map((res) => (
                  <div className="flex items-start gap-2" key={res.slice(0, 5)}>
                    <ChevronRight className="w-5 h-5 mt-1 text-blue-400 flex-shrink-0" />
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

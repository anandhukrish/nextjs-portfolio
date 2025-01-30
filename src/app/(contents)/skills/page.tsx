"use client";

import Title from "@/components/title.component";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import { SKILLS_COLORS, skillsData } from "@/app/data/constants";
import { LightingIcon } from "@/components/icons";

const Skills = () => {
  function getColorClasses(color: SKILLS_COLORS) {
    const colorClasses = {
      [SKILLS_COLORS.BLUE]: {
        border: "border-blue-500/20",
        text: "text-blue-400",
      },
      [SKILLS_COLORS.GREEN]: {
        border: "border-green-500/20",
        text: "text-green-400",
      },
      [SKILLS_COLORS.PURPLE]: {
        border: "border-purple-500/20",
        text: "text-purple-400",
      },
      [SKILLS_COLORS.ORANGE]: {
        border: "border-orange-500/20",
        text: "text-orange-400",
      },
      [SKILLS_COLORS.GRAY]: {
        border: "border-gray-500/20",
        text: "text-gray-400",
      },
      [SKILLS_COLORS.RED]: {
        border: "border-red-500/20",
        text: "text-red-400",
      },
      [SKILLS_COLORS.INDIGO]: {
        border: "border-indigo-500/20",
        text: "text-indigo-400",
      },
    };
    return colorClasses[color] || colorClasses[SKILLS_COLORS.BLUE];
  }
  return (
    <div className="flex flex-col">
      <Title
        mainHeading="Technical Skills"
        subHeading="What I Know"
        containerClass="text-center mb-16"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {skillsData.map((skill, i) => (
          <motion.div
            className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl p-[1px]"
            key={`${skill.title}-${i}`}
            initial="hidden"
            animate="show"
            variants={{
              hidden: {
                opacity: 0,
              },
              show: {
                opacity: 1,
                transition: {
                  duration: 0.4,
                  delay: i * 0.1,
                },
              },
            }}
          >
            <div
              className={cn(
                "bg-gray-800/90 backdrop-blur-sm p-6 rounded-2xl h-full border",
                getColorClasses(skill.color).border
              )}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gray-700/50 flex items-center justify-center text-blue-400">
                  <skill.icon />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {skill.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {skill.skills.map((sk, index) => (
                  <motion.li
                    className="flex items-center gap-2"
                    key={`${sk}-${i}`}
                    initial="hidden"
                    animate="show"
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: "-10px",
                      },
                      show: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 0.4,
                          delay: index * 0.08,
                        },
                      },
                    }}
                  >
                    <LightingIcon
                      className={getColorClasses(skill.color).text}
                    />
                    <span className="text-gray-300">{sk}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

"use client";
import Title from "@/components/title.component";
import Image from "next/image";
import { motion } from "framer-motion";
import CopyInfo from "@/components/copy.info.component";

export default function Home() {
  return (
    <>
      <div className="md:w-1/2 flex  justify-center flex-col">
        <Title
          subHeading="Welcome to my portfolio"
          mainHeading="Ananthu Krishnan"
          animateTitle
          mainClass="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
          containerClass="text-center md:text-left"
          subClass="text-xs"
        />
        <motion.p
          initial={{ y: "-30px", opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.3,
              duration: 0.4,
            },
          }}
          className="text-center px-3 sm:px-0 sm:text-left text-lg md:text-lg lg:text-2xl text-gray-300 block mb-6 lg:mb-8 font-light"
        >
          Frontend Developer ( React JS | Vue JS )
        </motion.p>
        <motion.div
          initial={{
            x: "-50px",
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              damping: 8,
              duration: 0.6,
            },
          }}
          className="flex flex-col items-start md:items-start gap-4 bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50"
        >
          <CopyInfo label="Phone number" displayText="+91 9744938806" />
          <CopyInfo displayText="anandhukrish" label="Github ID" />
          <CopyInfo displayText="ananthukrish.k@gmail.com" label="Email" />
        </motion.div>
      </div>
      <div className="w-full sm:w-1/2  flex justify-center sm:justify-end ml-3 md:ml-5 lg:ml-0 my-12 md:my-6">
        <div className="w-[400px] h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[550px] xl:w-[550px] xl:h-[600px]">
          <motion.div
            initial={{
              scale: 0.5,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                damping: 8,
                duration: 0.6,
              },
            }}
            className="overflow-hidden group rounded-[60px] size-full border border-gray-700/70"
          >
            <Image
              src="/assets/main.png"
              alt="main-image"
              className="size-full  group-hover:scale-110 transition-transform duration-700 object-cover"
              width={150}
              height={150}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}

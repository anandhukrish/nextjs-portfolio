"use client";
import Title from "@/components/title.component";
import CopyIcon from "@/components/icons/copy.icon";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className="md:w-1/2 flex  justify-center flex-col">
        <Title
          subHeading="Welcome to my portfolio"
          mainHeading="Ananthu Krishnan"
          animateTitle
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
          className="text-2xl text-gray-300 block mb-8 font-light"
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
          <div className="flex items-center justify-between w-full group cursor-pointer relative bg-gray-700/30 px-4 py-2 rounded-lg hover:bg-gray-700/50 transition-all duration-300">
            <div className="flex flex-col">
              <span className="text-sm text-gray-400">Phone number</span>
              <span className="text-gray-200">+91 9744938806</span>
            </div>
            <CopyIcon />
          </div>
          <div className="flex items-center justify-between w-full group cursor-pointer relative bg-gray-700/30 px-4 py-2 rounded-lg hover:bg-gray-700/50 transition-all duration-300">
            <div className="flex flex-col">
              <span className="text-sm text-gray-400">Github ID</span>
              <span className="text-gray-200">anandhukrish</span>
            </div>
            <CopyIcon />
          </div>
          {/* <div className="flex items-center justify-between w-full group cursor-pointer relative bg-gray-700/30 px-4 py-2 rounded-lg hover:bg-gray-700/50 transition-all duration-300">
            <div className="flex flex-col">
              <span className="text-sm text-gray-400">Discord ID</span>
              <span className="text-gray-200">soundsilo</span>
            </div>
            <CopyIcon />
          </div> */}
          <div className="flex items-center justify-between w-full group cursor-pointer relative bg-gray-700/30 px-4 py-2 rounded-lg hover:bg-gray-700/50 transition-all duration-300">
            <div className="flex flex-col">
              <span className="text-sm text-gray-400">Email</span>
              <span className="text-gray-200">ananthukrish.k@gmail.com</span>
            </div>
            <CopyIcon />
          </div>
        </motion.div>
      </div>
      <div className="md:w-1/2  flex justify-center mt-12 md:mt-0">
        <div className="w-[550px] h-[600px]">
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
              className="size-full  group-hover:scale-110 transition-transform duration-700"
              width={150}
              height={150}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}

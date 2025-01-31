"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const navData = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/about",
    title: "About",
  },
  {
    to: "/skills",
    title: "Skills",
  },
  {
    to: "/projects",
    title: "Projects",
  },
  {
    to: "/experiences",
    title: "Experience",
  },
  {
    to: "/resume",
    title: "Resume",
  },
  {
    to: "/contact",
    title: "Contact",
  },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState("");
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();

  const media = useMediaQuery("(max-width: 1025px)");

  useEffect(() => {
    setActiveSection(pathname);
  }, [pathname]);

  function handleActiveSection(link: string) {
    setActiveSection(link);
    setToggle(false);
  }
  return (
    <header>
      <motion.nav
        initial={{
          y: "-10px",
        }}
        animate={{
          y: 0,
          transition: { duration: 0.1 },
        }}
        className="relative lg:fixed top-0 left-0 right-0 bg-gradient-to-b from-gray-900/95 to-gray-900/75 backdrop-blur-sm z-50 border-b border-gray-700/50 "
      >
        <div className="container  mx-auto  px-3 lg:px-0">
          <div className="flex items-center justify-between h-16 ">
            <div className="size-10 rounded-full overflow-hidden">
              <Image
                src="/assets/logo.png"
                alt="logo"
                height={24}
                width={24}
                className="rounded-full size-10"
              />
            </div>
            <div
              className={cn(
                "hidden lg:block  lg:relative  lg:w-auto  lg:bg-transparent  lg:inset-auto lg:h-auto ",
                toggle &&
                  " block absolute  w-full bg-gray-700 inset-0 min-h-screen"
              )}
            >
              <ul className="flex items-center gap-5 pt-10  lg:pt-0 flex-col lg:flex-row">
                {navData.map((link) => (
                  <li
                    className=" py-1 px-2  relative w-1/2 text-center uppercase lg:capitalize tracking-wider lg:tracking-normal lg:w-auto text-xl lg:text-sm"
                    key={link.title}
                  >
                    <Link
                      href={link.to}
                      onClick={() => handleActiveSection(link.to)}
                    >
                      {link.title}
                    </Link>
                    {activeSection === link.to && (
                      <motion.span
                        layoutId={media ? undefined : "activeSection"}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                        className=" size-full absolute inset-0 z-10 lg:-z-10  rounded-lg bg-gradient-to-r from-blue-600/20 to-emerald-600/20"
                      ></motion.span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className=" h-6  w-8 relative cursor-pointer  block lg:hidden"
              onClick={() => setToggle((prev) => !prev)}
            >
              <span
                className={cn(
                  "absolute block h-[1px] w-full bg-white top-0 ",
                  toggle &&
                    "rotate-45  translate-y-[2px] top-[10px] transition-transform duration-500"
                )}
              ></span>
              <span
                className={cn(
                  "absolute block  h-[1px] w-full bg-white top-1/2 -translate-y-1/2 ",
                  toggle && "hidden transition-transform duration-500"
                )}
              ></span>
              <span
                className={cn(
                  "absolute block  h-[1px] w-full bg-white bottom-0 ",
                  toggle &&
                    "-rotate-45 -translate-y-[22px] -bottom-[10px] transition-transform duration-500"
                )}
              ></span>
            </div>
          </div>
        </div>
      </motion.nav>
    </header>
  );
};

export default Header;

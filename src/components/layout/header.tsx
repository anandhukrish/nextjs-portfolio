"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  useEffect(() => {
    setActiveSection(pathname);
  }, [pathname]);
  function handleActiveSection(link: string) {
    setActiveSection(link);
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
        className="fixed top-0 left-0 right-0 bg-gradient-to-b from-gray-900/95 to-gray-900/75 backdrop-blur-sm z-50 border-b border-gray-700/50"
      >
        <div className="container  mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="size-10 rounded-full overflow-hidden">
              <Image
                src="/assets/logo.png"
                alt="logo"
                height={24}
                width={24}
                className="rounded-full size-10"
              />
            </div>
            <div>
              <ul className="flex items-center gap-5">
                {navData.map((link) => (
                  <li className=" py-1 px-2  relative text-sm" key={link.title}>
                    <Link
                      href={link.to}
                      onClick={() => handleActiveSection(link.to)}
                    >
                      {link.title}
                    </Link>
                    {activeSection === link.to && (
                      <motion.span
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                        className=" size-full absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-blue-600/20 to-emerald-600/20"
                      ></motion.span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.nav>
    </header>
  );
};

export default Header;

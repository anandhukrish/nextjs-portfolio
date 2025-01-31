"use client";
import Title from "@/components/title.component";
import React from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/contact.form.component";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";

const ContactPage = () => {
  return (
    <>
      <Title
        mainHeading="Get in Touch"
        subHeading="Contact"
        containerClass=" text-center mb-14"
        subClass="text-xs"
      />
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          className="space-y-8"
          initial={{
            x: "-50px",
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.6,
            },
          }}
        >
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              {` Let's Connect`}
            </h3>
            <p className="text-gray-300 mb-8">
              {`I'm always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say hi,
              I'll try my best to get back to you!`}
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Phone className="size-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-white">+91 9744938806</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Mail className=" w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white">ananthukrish.k@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white">Kollam, Kerala</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{
            x: "50px",
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.4,
            },
          }}
        >
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-blue-400" />
              Send a Message
            </h3>
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ContactPage;

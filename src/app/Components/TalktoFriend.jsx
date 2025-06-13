"use client";
import React from "react";
import { motion } from "framer-motion";

const TalktoFriend = () => {

  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
  };
   
  const waveVariant = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse", // This creates the pulsing effect
      },
    },
  };
  
  return (
    <div className="h-full relative">
     <div className="h-full flex flex-col-reverse md:flex-row gap-5 items-center justify-center  py-10 sm:px-20 md:px-20 lg:px-28">
  {/* Left Side Image (Image Below Text on Mobile) */}
  <div className="relative flex justify-center px-4 sm:px-0 lg:pl-8 md:w-1/2 w-full">
  {/* Wave layers */}
  <motion.div
    className="absolute w-full h-full rounded-full border-[3px] border-slate-400"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    variants={waveVariant}
    style={{ zIndex: 0 }} // Behind the image
  />
  <motion.div
    className="absolute w-4/5 h-4/5 rounded-full border-[3px] border-gray-300"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    variants={waveVariant}
    style={{ zIndex: 0, animationDelay: "0.5s" }} // Smaller wave with delay
  />
  <motion.div
    className="absolute w-3/5 h-3/5 rounded-full border-[3px] border-blue-200"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    variants={waveVariant}
    style={{ zIndex: 0, animationDelay: "1s" }} // Smallest wave with more delay
  />

  {/* Image */}
  <motion.div
    className="relative z-10" // Keeps the image on top
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    variants={imageVariant} // Your existing image animation
  >
    <img
      src="/phone.png"
      alt="Driverse AI"
      className="rounded-full object-contain block w-full md:w-2/3 lg:w-[467px] lg:h-[467px]" // Adjust dimensions to be circular
    />
  </motion.div>
</div>

  {/* Right Side Content (Text First on Mobile) */}
  <motion.div
    className="lg:px-20 md:px-12 sm:px-10 px-7 mb-6 md:mb-0 flex flex-col justify-start items-start text-right md:w-1/2 w-full"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    variants={textVariant}
  >
    <h1 className="text-left font-sans text-3xl text-black md:text-4xl font-extrabold mb-4">
      Talk To Friend
    </h1>
    <p className="text-sm mb-6 leading-6 text-left text-slate-700 ">
     Our "Talk to Friend" module offers a unique earning opportunity for agents. In this feature, agents can connect with drivers through voice calls, providing support, guidance, or simply a friendly conversation. Drivers top up their accounts to access this service, and agents earn money for each call they attend. It’s a simple, rewarding way to earn by engaging with our growing driver community.
    </p>
<button className="bg-gradient-to-r from-gray-500 to-gray-700 text-white px-4 py-2 rounded-md transition duration-300 hover:from-gray-600 hover:to-gray-800">
  Register Here
</button>

  </motion.div>
</div>

    </div>
  );
};

export default TalktoFriend;

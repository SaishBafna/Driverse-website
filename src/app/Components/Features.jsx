"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

const Features = () => {
  const router = useRouter();
  return (
    <motion.div
      id="whyChooseus"
      className="h-full relative py-20 about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
     

      <div className="h-full flex flex-col md:flex-row items-center justify-between  py-10 sm:px-20 md:px-20 lg:px-28">
        {/* Left Side Content */}
        <motion.div
          className="flex-1 text-left mb-8 lg:mb-0 lg:pr-8 lg:px-20 md:px-12 sm:px-10 px-7"
          variants={fadeInRight}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="font-sans text-3xl font-extrabold mb-4 text-white">
            Why Choose Driverse?
          </h1>
          <p className="text-lg mb-6 text-slate-200">
            At Driverse.Ai&lsquo; we are dedicated to transforming the transportation
            industry through our innovative app designed to connect tow trucking
            companies&lsquo; mechanics, carriers&lsquo; and drivers. Here&apos;s why Driverse.Ai
            stands out from the competition.
          </p>
          <motion.button
            className="px-6 py-2 bg-gray-200 text-black rounded-md hover:bg-slate-100 hover:text-black transition-colors duration-300"
            onClick={() => router.push("/dashboard/chosse-us")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Know More
          </motion.button>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          className=" flex h-1/2 w-1/2 sm:w-auto sm:h-auto px-4 justify-center lg:pl-8 mb-4 lg:mb-0"
          variants={fadeInLeft}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.img
            src="/que.png"
            alt="Driverse AI"
            className="rounded-2xl object-contain custom-bounce w-full md:w-2/3 lg:w-[467px] lg:h-[356px] mx-auto"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </div>

      <div className="custom-shape-divider-bottom-1724417828">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill"
          />
        </svg>
      </div>
    </motion.div>
  );
};

export default Features;

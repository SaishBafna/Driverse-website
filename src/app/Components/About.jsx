"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const About = () => {
  const router = useRouter();

  return (
    <div className="h-full  relative py-10 about">
      <div className="custom-shape-divider-top-1724418158">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="shape-fill" />
        </svg>
      </div>

      <div className="h-full py-20 grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center  sm:px-20 md:px-20 lg:px-28">
        {/* Left Side Content */}
        <motion.div
          className="lg:px-20 md:px-12 sm:px-10 px-7 mb-6 md:mb-0 flex flex-col justify-start items-start text-right"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-left font-sans text-3xl text-white md:text-4xl font-extrabold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-lg mb-6 leading-6 text-left text-slate-200"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            At Driverse.Ai, we are revolutionizing the way tow trucking
            companies, mechanics, and carriers find and collaborate with each
            other. Our innovative app is designed to bridge the gap between
            these essential players in the transportation industry, ensuring
            seamless connections and enhanced productivity for all..
          </motion.p>
          <motion.button
            className="px-6 py-2 bg-gray-200 text-black rounded-md hover:bg-slate-100 hover:text-black transition-colors duration-300"
            onClick={() => router.push("/dashboard/About")}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            Know More
          </motion.button>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          className="flex justify-center lg:pl-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          <img
            src="/about.gif"
            alt="Driverse AI"
            className="rounded-2xl object-contain block w-full md:w-2/3 lg:w-[467px] lg:h-[356px]"
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
    </div>
  );
};

export default About;

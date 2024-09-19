"use client";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="flex h-full bg-white  flex-col overflow-hidden mt-3">
      {/* Video Section */}
      <motion.div
        className="relative w-full h-[30vh] sm:h-[45vh] md:h-[55vh] lg:h-[70vh] xl:h-[75vh] px-4 sm:px-10 md:px-20 lg:px-28  rounded-2xl overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
        viewport={{ once: true }}
      >
        <video
          className="w-full h-full object-cover rounded-2xl"
          playsInline
          autoPlay
          muted
          loop
          controls={false}
          preload="auto"
        >
          <source src="/assets/mechanic_working.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* Mission Section */}
      <div className="py-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center  py-10 sm:px-20 md:px-20 lg:px-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={textVariant}
        >
          {/* Left Side Content */}
          <motion.div
            className="lg:px-20 md:px-12 sm:px-10 px-7 mb-6 md:mb-0 flex flex-col justify-start items-start text-right"
            variants={textVariant}
          >
            <h1 className="text-left font-sans text-3xl text-black md:text-4xl font-extrabold mb-4">
              Driverse Mission
            </h1>
            <p className="text-lg mb-6 leading-6 text-left text-slate-800">
              Our mission is to create a dynamic platform that simplifies the
              search for work and services within the towing and transportation
              sectors. We aim to empower tow trucking companies and mechanics by
              providing them with a steady stream of opportunities, while also
              helping carriers efficiently locate the support they need.
            </p>
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            className="flex justify-center lg:pl-8 px-4"
            variants={imageVariant}
          >
            <img
              src="/assets/9.png"
              alt="Driverse AI"
              className="rounded-2xl block w-full md:w-2/3 lg:w-[467px] lg:h-[356px]"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* What We Do Section */}
      <div className="py-20 about">
        <div className="custom-shape-divider-top-1724418158">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 0L0 0 892.25 114.72 1200 0z"
              className="shape-fill"
            />
          </svg>
        </div>
        <motion.div
          className="h-full flex flex-col-reverse md:flex-row items-center justify-between  py-10 sm:px-20 md:px-20 lg:px-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Left Side Image (Image Below Text on Mobile) */}
          <motion.div
            className="flex-1 flex justify-center lg:pl-8 mb-4 md:mb-0 px-4"
            variants={imageVariant}
          >
            <img
              src="/assets/8.png"
              alt="Driverse AI"
              className="rounded-2xl block w-full md:w-2/3 lg:w-[467px] lg:h-[356px] mx-auto"
            />
          </motion.div>

          {/* Right Side Content (Text First on Mobile) */}
          <motion.div
            className="flex-1 text-left mb-6 lg:mb-0 lg:pr-8 lg:px-20 md:px-12 sm:px-10 px-7"
            variants={textVariant}
          >
            <h1 className="font-sans text-3xl font-extrabold mb-4 text-white">
              Driverse Vision
            </h1>
            <p className="text-lg mb-6 text-slate-200">
              We envision a transportation industry where connections are
              effortless, and opportunities are abundant. By leveraging
              cutting-edge technology, we strive to make Driverse.Ai the go-to
              platform for all towing, mechanical, and carrier needs, fostering
              a community of collaboration and mutual support.
            </p>
          </motion.div>
        </motion.div>

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
    </div>
  );
};

export default page;

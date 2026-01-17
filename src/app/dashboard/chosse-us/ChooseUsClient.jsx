"use client";
import React from "react";
import { motion } from "framer-motion";

// Animation variants
const fadeInRight = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

const ChooseUsClient = () => {
  return (
    <motion.div
      className="flex h-full bg-white flex-col overflow-hidden mt-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* === HERO VIDEO SECTION === */}
      <div className="relative w-full h-[30vh] sm:h-[45vh] md:h-[55vh] lg:h-[70vh] xl:h-[75vh] px-4 sm:px-10 md:px-20 lg:px-28 rounded-2xl overflow-hidden">
        <video
          className="w-full h-full object-cover rounded-2xl"
          playsInline
          autoPlay
          muted
          loop
          controls={false}
          preload="auto"
        >
          <source src="/assets/video_title_2.mp4" type="video/mp4" />
        </video>
      </div>

      {/* === SECTION 1 === */}
      <motion.div className="py-10">
        <motion.div
          className="flex flex-col-reverse md:flex-row items-center justify-between py-10 sm:px-20 md:px-20 lg:px-28"
          variants={fadeInRight}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex-1 lg:px-20 md:px-12 sm:px-10 px-7 mb-6 md:mb-0 text-left">
            <div className="font-sans text-3xl text-black md:text-4xl font-extrabold mb-4">
              Comprehensive Connectivity
            </div>
            <p className="text-lg leading-6 text-slate-800">
              Our platform bridges the gap between all key players in the
              transportation industry. Whether you&apos;re a towing company,
              mechanic, carrier, or driver, Driverse.Ai provides a seamless
              connection ensuring that your needs are met quickly and efficiently.
            </p>
          </div>

          <motion.div
            className="flex-1 flex justify-center lg:pl-8 mb-4 md:mb-0"
            variants={fadeInLeft}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img
              src="/assets/10.png"
              alt="Driverse AI"
              className="rounded-2xl block w-full md:w-2/3 lg:w-[467px] lg:h-[356px] px-4"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* === SECTION 2 === */}
      <motion.div className="py-20 about">
        <div className="custom-shape-divider-top-1724418158">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="shape-fill" />
          </svg>
        </div>

        <div className="h-full flex flex-col md:flex-row items-center justify-between py-10 sm:px-20 md:px-20 lg:px-28">
          <motion.div
            className="flex-1 flex justify-center lg:pl-8 mb-4 lg:mb-0"
            variants={fadeInRight}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img
              src="/assets/user-frnd.jpg"
              alt="Driverse AI"
              className="rounded-2xl block w-full md:w-2/3 lg:w-[467px] lg:h-[356px] mx-auto px-4"
            />
          </motion.div>

          <motion.div
            className="flex-1 text-left mb-6 lg:mb-0 lg:pr-8 lg:px-20 md:px-12 sm:px-10 px-7"
            variants={fadeInLeft}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="font-sans text-3xl font-extrabold mb-4 text-white">
              User-Friendly Interface
            </div>
            <p className="text-lg mb-6 text-slate-200">
              Designed with simplicity and ease of use in mind, our app offers an intuitive
              interface that makes navigation and service requests straightforward for users
              of all technical backgrounds.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* === SECTION 3 === */}
      <motion.div className="py-10">
        <motion.div
          className="flex flex-col-reverse md:flex-row items-center justify-between py-10 sm:px-20 md:px-20 lg:px-28"
          variants={fadeInRight}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex-1 lg:px-20 md:px-12 sm:px-10 px-7 mb-6 md:mb-0 text-left">
            <div className="font-sans text-3xl text-black md:text-4xl font-extrabold mb-4">
              Real-Time Availability
            </div>
            <p className="text-lg leading-6 text-slate-800">
              With real-time updates, towing companies and mechanics can post their availability
              and see job listings instantly. This ensures services are provided promptly,
              minimizing downtime and maximizing efficiency.
            </p>
          </div>

          <motion.div
            className="flex-1 flex justify-center lg:pl-8 mb-4 md:mb-0 px-4"
            variants={fadeInLeft}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img
              src="/assets/2.png"
              alt="Driverse AI"
              className="rounded-2xl block w-full md:w-2/3 lg:w-[467px] lg:h-[356px]"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* === SECTION 4 === */}
      <motion.div className="py-20 about">
        <div className="h-full flex flex-col md:flex-row items-center justify-between py-10 sm:px-20 md:px-20 lg:px-28">
          <motion.div
            className="flex-1 flex justify-center lg:pl-8 mb-4 lg:mb-0"
            variants={fadeInRight}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img
              src="/assets/4.png"
              alt="Driverse AI"
              className="rounded-2xl block w-full md:w-2/3 lg:w-[467px] lg:h-[356px] mx-auto px-4"
            />
          </motion.div>

          <motion.div
            className="flex-1 text-left mb-6 lg:mb-0 lg:pr-8 lg:px-20 md:px-12 sm:px-10 px-7"
            variants={fadeInLeft}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="font-sans text-3xl font-extrabold mb-4 text-white">
              Enhanced Driver Engagement
            </div>
            <p className="text-lg mb-6 text-slate-200">
              Our unique &quot;Talk to a Friend&quot; feature keeps drivers engaged during
              downtime, allowing them to connect and communicate — making long hauls more enjoyable
              and mentally refreshing.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* ========================================================
        NEW SECTION 5 — Secure & Reliable Platform
      ======================================================== */}
      <motion.div className="py-10">
        <motion.div
          className="flex flex-col-reverse md:flex-row items-center justify-between py-10 sm:px-20 md:px-20 lg:px-28"
          variants={fadeInRight}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex-1 lg:px-20 md:px-12 sm:px-10 px-7 mb-6 md:mb-0 text-left">
            <div className="font-sans text-3xl text-black md:text-4xl font-extrabold mb-4">
              Secure & Reliable Platform
            </div>
            <p className="text-lg leading-6 text-slate-800">
              Security is our top priority. Driverse uses encrypted communication, protected
              authentication, and verified user access to keep interactions safe and trustworthy.
            </p>
          </div>

          <motion.div
            className="flex-1 flex justify-center lg:pl-8 mb-4 md:mb-0 px-4"
            variants={fadeInLeft}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img
              src="/assets/security.jpg"
              alt="Driverse Security"
              className="rounded-2xl block w-full md:w-2/3 lg:w-[467px] lg:h-[356px]"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ========================================================
        NEW SECTION 6 — Advanced Tools
      ======================================================== */}
      <motion.div className="py-20 about">
        <div className="h-full flex flex-col md:flex-row items-center justify-between py-10 sm:px-20 md:px-20 lg:px-28">
          <motion.div
            className="flex-1 flex justify-center lg:pl-8 mb-4 lg:mb-0"
            variants={fadeInRight}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img
              src="/assets/dashboard.png"
              alt="Driverse Dashboard"
              className="rounded-2xl block w-full md:w-2/3 lg:w-[467px] lg:h-[356px] mx-auto px-4"
            />
          </motion.div>

          <motion.div
            className="flex-1 text-left mb-6 lg:mb-0 lg:pr-8 lg:px-20 md:px-12 sm:px-10 px-7"
            variants={fadeInLeft}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="font-sans text-3xl font-extrabold mb-4 text-white">
              Advanced Tools for Companies
            </div>
            <p className="text-lg mb-6 text-slate-200">
              Fleet owners and service companies get access to modern dashboards, job management,
              performance analytics, and instant service matching — empowering every part of their
              operational workflow.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* ========================================================
        NEW SECTION 7 — Community
      ======================================================== */}
      <motion.div className="py-10">
        <motion.div
          className="flex flex-col-reverse md:flex-row items-center justify-between py-10 sm:px-20 md:px-20 lg:px-28"
          variants={fadeInRight}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex-1 lg:px-20 md:px-12 sm:px-10 px-7 mb-6 md:mb-0 text-left">
            <div className="font-sans text-3xl text-black md:text-4xl font-extrabold mb-4">
              Growing Community & Support
            </div>
            <p className="text-lg leading-6 text-slate-800">
              Driverse isn’t just a service platform — it’s a community. Drivers, companies,
              mechanics, and towing providers support each other and grow together with shared
              opportunities and real connections.
            </p>
          </div>

          <motion.div
            className="flex-1 flex justify-center lg:pl-8 mb-4 md:mb-0 px-4"
            variants={fadeInLeft}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img
              src="/assets/community.jpg"
              alt="Driverse Community"
              className="rounded-2xl block w-full md:w-2/3 lg:w-[467px] lg:h-[356px]"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ChooseUsClient;

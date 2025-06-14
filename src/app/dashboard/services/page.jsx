"use client";
import React from "react";
import { useRouter } from "next/navigation";
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

const Services = () => {
  const router = useRouter();
  return (
    <motion.div
      className="w-full flex flex-col"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="w-full h-auto md:h-auto lg:h-auto xl:min-h-[90vh] px-4 md:px-20 lg:px-24 py-4 mb-6">
        <div className="grid grid-cols-1 about lg:grid-cols-2 gap-8 items-center px-6 py-5 md:px-8 md:py-10 lg:px-10 rounded-2xl ">
          {/* Left Side: Text Content */}
          <div className="text-white">
            <h1 className="font-sans text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 text-center lg:text-left text-balance ">
              Connecting Tow Trucking Companies, Mechanics, Carriers, and
              Drivers Seamlessly.
            </h1>
            <p className="text-slate-200 text-base md:text-lg lg:text-xl xl:text-2xl font-sans text-center lg:text-left">
              At Driverse.Ai, we offer a comprehensive platform designed to
              bridge the gap between various key players in the transportation
              industry. Our app caters to four primary user groups: towing
              companies, mechanics, carriers, and drivers. Here&apos;s how each group
              benefits from our services.
            </p>
          </div>
          {/* Right Side: GIF */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/Serv.gif"
              alt="GIF"
              className="w-full h-auto max-w-sm lg:max-w-md xl:max-w-lg"
            />
          </div>
        </div>
      </div>

      {/* 1 */}
      <motion.div id="driver" className=" py-5">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center py-5  sm:px-20 md:px-20 lg:px-28"
          variants={fadeInRight}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Left Side Content */}
          <div className="lg:px-20 md:px-12 sm:px-10 px-7 mb-6 md:mb-0 flex flex-col justify-start items-start text-right">
            <h1 className="text-left font-sans  text-3xl text-black md:text-4xl font-extrabold mb-4">
              For Driver:
            </h1>
            <p className="text-lg mb-6 leading-6 text-left text-slate-800">
              <span className="font-bold">1.Service Requests:</span> Quickly
              find and request towing or mechanical services when needed,
              minimizing downtime. <br />
              <span  className="font-bold">2.Talk to a Friend:</span> Our unique
              feature allows drivers to engage in conversations with friends,
              strangers, or random people on various topics, from casual chats
              to more spirited discussions. This helps drivers stay entertained
              and connected during their free time.
            </p>
            <button
              className="px-6 py-2  bg-gray-900 text-white rounded-md hover:bg-slate-800 hover:text-slate-300 transition-colors duration-300"
              onClick={() => router.push("/dashboard/Driver")}
            >
              Register Now
            </button>
          </div>

          {/* Right Side Image */}
          <motion.div
            className="flex justify-center lg:pl-8 px-4"
            variants={fadeInLeft}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img
              src="/Driver.png"
              alt="Driverse AI"
              className="rounded-2xl block w-full md:w-2/3 lg:w-[467px] lg:h-[356px]"
            />
          </motion.div>
        </motion.div>
      </motion.div>
      {/* 2  */}
      <motion.div
        id="mechanic"
        className=" py-20 about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
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
        <div className=" h-full flex flex-col md:flex-row items-center justify-between  py-10 sm:px-20 md:px-20 lg:px-28">
          {/* Left Side Content */}
          <motion.div
            className="flex-1 flex justify-center lg:pl-8 mb-4 lg:mb-0 rounded-lg px-4"
            variants={fadeInRight}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img
              src="/Mech.jpg"
              alt="Driverse AI"
              className="rounded-2xl object-contain block w-full md:w-2/3 lg:w-[467px] lg:h-[356px] mx-auto"
            />
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            id="mechanic"
            className="flex-1 text-left mb-6 lg:mb-0 lg:pr-8 lg:px-20 md:px-12 sm:px-10 px-7  "
            variants={fadeInLeft}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h1 className="font-sans text-3xl font-extrabold mb-4 text-white ">
              For Mechanics:
            </h1>
            <p className="text-lg mb-6 text-slate-200">
              <span className="font-bold">1.Advertise Services:</span> Mechanics
              can post their services in designated areas, reaching a broader
              audience of potential clients. <br />
              <span className="font-bold">2.Find Work:</span> Browse and apply
              for job postings in your area from carriers, drivers, or tow
              companies, keeping your business thriving.
            </p>
            <button
              className="px-6 py-2 bg-gray-200 text-black rounded-md hover:bg-slate-100 hover:text-black transition-colors duration-300"
              onClick={() => router.push("/dashboard/Mechanic")}
            >
              Register Now
            </button>
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

      {/* 3 */}
      <motion.div id="carriers" className="py-10">
  <motion.div
    className="flex flex-col-reverse md:flex-row items-center justify-between  py-10 sm:px-20 md:px-20 lg:px-28"
    variants={fadeInRight}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    {/* Left Side Content (Text First on Mobile) */}
    <div className="flex-1 lg:px-20 md:px-12 sm:px-10 px-7 mb-6 md:mb-0 flex flex-col justify-start items-start text-right">
      <h1 className="text-left font-sans text-3xl text-black md:text-4xl font-extrabold mb-4">
        For Carriers:
      </h1>
      <p className="text-lg mb-6 leading-6 text-left text-slate-800">
        <span className="font-bold">1. Request Services:</span> Easily request towing and mechanical services from reputable providers, ensuring your operations run smoothly.
        <br />
        <span className="font-bold">2. Connect with Providers:</span> Access a network of towing companies and mechanics ready to assist with your needs.
      </p>
      <button
        className="px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-slate-800 hover:text-slate-300 transition-colors duration-300"
        onClick={() => router.push("/dashboard/Carriers")}
      >
        Register Now
      </button>
    </div>

    {/* Right Side Image (Image Below Text on Mobile) */}
    <motion.div
      className="flex-1 flex justify-center lg:pl-8 mb-4 md:mb-0 px-4"
      variants={fadeInLeft}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <img
        src="/assets/carrier_real.png"
        alt="Driverse AI"
        className="rounded-2xl block w-full md:w-2/3 lg:w-[467px] lg:h-[356px]"
      />
    </motion.div>
  </motion.div>
</motion.div>

      {/* 4 */}
      <motion.div
        id="towing"
        className=" py-20 about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
       
        <div className=" h-full flex flex-col md:flex-row items-center justify-between  py-10 sm:px-20 md:px-20 lg:px-28">
          {/* Left Side Content */}
          <motion.div
            className="flex-1 flex justify-center lg:pl-8 mb-4 lg:mb-0 px-4"
            variants={fadeInRight}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img
              src="/Towing.png"
              alt="Driverse AI"
              className="rounded-2xl object-cover block w-full md:w-2/3 lg:w-[467px] lg:h-[356px] mx-auto"
            />
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            className="flex-1 text-left mb-6 lg:mb-0 lg:pr-8 lg:px-20 md:px-12 sm:px-10 px-7  "
            variants={fadeInLeft}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h1 className="font-sans text-3xl font-extrabold mb-4 text-white ">
              For Tow Trucking companies:
            </h1>
            <p className="text-lg mb-6 text-slate-200">
              <span className="font-bold">1.Post Availability:</span> Towing
              companies can list their available tow trucks in specific areas,
              making it easy for those in need to find them. <br />
              <span className="font-bold">2.Access Job Listings:</span> View and
              respond to job postings in your area created by carriers, drivers,
              or mechanics, ensuring your services are always in demand.
            </p>
            <button
              className="px-6 py-2  bg-gray-200 text-black rounded-md hover:bg-slate-100 hover:text-black transition-colors duration-300"
              onClick={() => router.push("/dashboard/Towing")}
            >
              Register Now
            </button>
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


    </motion.div>




    
  );
};

export default Services;

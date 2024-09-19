"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 5); // Cycle through 5 slides
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full w-full mb-10 py-5">
      <div className="h-full w-full px-4 md:px-16 lg:px-[6rem] inner">
        <div className="relative h-32 sm:h-60 w-full bg-gradient-to-r from-gray-900 to-gray-500 rounded-2xl overflow-visible">
          <AnimatePresence>
             {currentIndex === 0 && (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center p-0 sm:p-4 "
              >
                <div className="w-[70%] text-left pl-4 sm:pl-5 md:pl-6 lg:pl-10">
                  <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-7xl font-serif  font-bold text-white">
                    Driver
                  </h1>
                  <p className="text-white text-sm sm:text-base mt-1 sm:mt-2 md:mt-3 lg:mt-3.5">
                    Access services easily with our user-friendly app.
                  </p>
                </div>

                <div className="relative h-full w-20 flex-1 flex items-end justify-end">
                  <img
                    src="/assets/drivermodal.png"
                    alt="Driver"
                    className="w-28 sm:w-60 h-auto absolute top-12 right-0 sm:top-16 md:top-6 md:right-0 "
                  />
                </div>
              </motion.div>
            )} 

             {currentIndex === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center p-0 sm:p-4"
              >
                <div className="w-[70%] text-left pl-4 sm:pl-5 md:pl-6 lg:pl-10 ">
                  <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-7xl font-serif  font-bold text-white">
                    Mechanic
                  </h1>
                  <p className="text-white text-sm sm:text-base mt-1 sm:mt-2 md:mt-3 lg:mt-3.5">
                    Reach a wider audience of clients who need your expertise.
                  </p>
                </div>

                <div className="relative h-full flex-1 flex items-end justify-end">
                  <img
                    src="/assets/bg.png"
                    alt="Mechanic"
                    className=" sm:w-60 h-auto absolute top-10 right-0  drop-shadow-2xl"
                  />
                </div>
              </motion.div>
            )} 
            {currentIndex === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center p-0 sm:p-4"
              >
                <div className="w-[70%] text-left pl-4 sm:pl-5 md:pl-6 lg:pl-10 ">
                  <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-7xl font-serif  font-bold text-white">
                    Carriers
                  </h1>
                  <p className="text-white text-sm sm:text-base mt-1 sm:mt-2 md:mt-3 lg:mt-3.5">
                    Minimize vehicle downtime and keep operations running
                    smoothly.
                  </p>
                </div>

                <div className="relative h-full flex-1 flex items-end justify-end">
                  <img
                    src="/assets/truckModal.png"
                    alt="Carriers"
                    className="w-60 h-auto absolute top-14 right-0 "
                  />
                </div>
              </motion.div>
            )} 

            {currentIndex === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center p-0 sm:p-4"
              >
                <div className="w-[70%] text-left pl-4 sm:pl-5 md:pl-6 lg:pl-10 ">
                  <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-serif  font-bold text-white">
                    Towing Company
                  </h1>
                  <p className="text-white text-sm sm:text-base mt-1 sm:mt-2 md:mt-3 lg:mt-3.5">
                    Boost your earnings with more consistent job opportunities.
                  </p>
                </div>

                <div className="relative h-full flex-1 flex items-end justify-end">
                  <img
                    src="/assets/towing.png"
                    alt="Towing Company"
                    className=" w-60 h-auto absolute top-16 right-0 "
                  />
                </div>
              </motion.div>
            )}
 
            {currentIndex === 4 && (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center p-0 sm:p-4"
              >
                <div className="w-[70%] text-left pl-4 sm:pl-5 md:pl-6 lg:pl-10">
                  <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-7xl font-serif  font-bold text-white">
                    Talk To Friend
                  </h1>
                  <p className="text-white text-sm sm:text-base mt-1 sm:mt-2 md:mt-3 lg:mt-3.5">
                    Engage with our platform to connect with a trusted friend or
                    advisor.
                  </p>
                </div>

                <div className="relative h-full flex-1 flex items-end justify-end z-10">
                  <img
                    src="/assets/call.png"
                    alt="Talk To Friend"
                    className="w-60 h-32 sm:h-40 md:h-60 md:top-0 absolute top-0 sm:top-20 right-0 "
                  />
                </div>
              </motion.div>
            )} 
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Slider;

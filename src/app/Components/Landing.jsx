"use client";
import React from "react";

const Landing = () => {
  return (
    <div className="flex h-full bg-white  flex-col overflow-hidden mt-3">
      <div className="relative w-full h-[30vh] sm:h-[45vh] md:h-[55vh] lg:h-[70vh] xl:h-[78vh] px-4 sm:px-10 md:px-16 lg:px-[6rem]  rounded-2xl overflow-hidden">
        <video
          className="w-full h-full object-fill rounded-2xl"
          playsInline
          autoPlay
          muted
          loop
          controls={false}
          preload="auto"
        >
          <source src="/assets/landing_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Landing;

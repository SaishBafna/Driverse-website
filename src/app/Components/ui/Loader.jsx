"use client";
import React from "react";
import { motion } from "framer-motion";

const Loader = ({ heightClass }) => {
  return (
    <div className={`relative w-full ${heightClass} rounded-2xl overflow-hidden`}>
      <motion.div
        className="absolute inset-0 bg-black rounded-2xl"
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <motion.div
          className="w-full h-full bg-slate-400 rounded-2xl"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
};

export default Loader;

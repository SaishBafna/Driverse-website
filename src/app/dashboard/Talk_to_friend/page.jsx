// import React from 'react';


// const Talk_to_friend = () => {
//   return (
//    <>

//    </>
//   );
// };

// export default Talk_to_friend;
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const TalkToFriend = () => {
  const router = useRouter();

  return (
    <motion.div
      className="relative z-10 min-h-screen w-full bg-white text-black pt-10"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.6 }}
    >
      {/* Top SVG Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-[-1]">
        <svg
          className="relative block w-[200%] h-[100px] text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 0L0 0 892.25 114.72 1200 0z" fill="#ffffff" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8">
          💬 Earn with Driver – Talk to Friend
        </h1>

        <p className="text-lg md:text-xl text-center text-gray-700 mb-12">
          <span className="font-semibold">Turn Conversations into Earnings!</span><br />
          At <strong>Earforyou</strong>, we believe every conversation matters — and now, every conversation can also help you earn!
        </p>

        {/* Info Sections */}
        <div className="space-y-10">
          {/* What is Talk to Friend */}
          <div className="bg-gray-100 rounded-2xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold mb-3">🤝 What is Talk to Friend?</h2>
            <p className="text-gray-800 text-lg">
              "Talk to Friend" is a voice-based support feature that connects drivers with friendly agents like you.
              Whether drivers need someone to talk to, ask questions, or simply hear a comforting voice during long rides, you're there to help.
              And as you talk, <strong>you earn</strong> — it’s that simple!
            </p>
          </div>

          {/* How it works */}
          <div className="bg-gray-100 rounded-2xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold mb-3">💸 How Does It Work?</h2>
            <ul className="list-disc list-inside text-gray-800 text-lg space-y-2">
              <li>Drivers top up their accounts to access this feature.</li>
              <li>They connect with available agents via voice call.</li>
              <li>You earn money for every minute you spend talking with them.</li>
              <li>It’s a win-win: Drivers feel supported, and you get rewarded for being a great listener.</li>
            </ul>
          </div>

          {/* Why Join */}
          <div className="bg-gray-100 rounded-2xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold mb-3">🎧 Why Join as an Agent?</h2>
            <ul className="list-disc list-inside text-gray-800 text-lg space-y-2">
              <li>Flexible timing — take calls when you're free</li>
              <li>Earn money from the comfort of your home</li>
              <li>Make a real impact on someone’s day</li>
              <li>Be part of a growing and supportive community</li>
            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button
            className="bg-black text-white font-semibold px-8 py-3 rounded-md hover:bg-gray-800 transition duration-300 shadow-md"
            onClick={() => router.push("/dashboard/Agent")}
          >
            Join as an Agent Now
          </button>
        </div>
      </div>

      {/* Bottom SVG Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-[-1]">
        <svg
          className="relative block w-[200%] h-[100px] text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill="#ffffff" />
        </svg>
      </div>
    </motion.div>
  );
};

export default TalkToFriend;

"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Modal from "react-modal";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AgentTraining = () => {
  const router = useRouter();
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  const trainingModule = {
    title: "Communication Protocol",
    description: "Understand the proper way to communicate with clients and other service providers.",
    duration: "25 min",
    icon: "💬",
  };

  const languageVideos = {
    english: "https://videos.pexels.com/video-files/7859858/uhd_25fps.mp4",
    hindi: "https://videos.pexels.com/video-files/7859858/uhd_25fps.mp4",
    punjabi: "https://videos.pexels.com/video-files/7859858/uhd_25fps.mp4"
  };

  const handleStartTraining = () => {
    setIsLanguageModalOpen(true);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsLanguageModalOpen(false);
    setIsVideoPlaying(true);
  };

  const handleVideoComplete = () => {
    setIsVideoPlaying(false);
    router.push("/dashboard/AgentQuiz");
  };

  const closeVideoPlayer = () => {
    setIsVideoPlaying(false);
    setSelectedLanguage(null);
  };

  return (
    <motion.div
      className="w-full min-h-screen bg-gray-50"
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-gray-900 to-gray-700 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          variants={fadeInUp}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Agent Communication Training
          </h1>
          <p className="text-slate-200 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            Complete your communication training to effectively interact with clients.
          </p>
        </motion.div>
      </div>

      {/* Training Module */}
      <motion.div 
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16"
        variants={fadeInUp}
      >
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-6 text-center">
            Your Training Module
          </h2>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-4 sm:p-6 md:p-8">
              <div className="flex flex-col sm:flex-row items-start">
                <span className="text-4xl mb-4 sm:mb-0 sm:mr-6">{trainingModule.icon}</span>
                <div className="w-full">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                    {trainingModule.title}
                  </h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg">{trainingModule.description}</p>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <span className="text-gray-500 text-sm sm:text-base">{trainingModule.duration}</span>
                    <button 
                      className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-300 text-sm sm:text-base"
                      onClick={handleStartTraining}
                    >
                      Start Training
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Support Section */}
      <motion.div 
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 md:pb-12 lg:pb-16"
        variants={fadeInUp}
      >
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 md:mb-6 text-center">
            Need Help With Your Training?
          </h2>
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
              Contact Support
            </h3>
            <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
              Our team is available to answer any questions about the training.
            </p>
            <button
              className="px-4 py-2 sm:px-6 sm:py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-300 text-sm sm:text-base text-center w-full sm:w-auto"
              onClick={() => router.push("/dashboard/contact")}
            >
              Contact Us
            </button>
          </div>
        </div>
      </motion.div>

      {/* Language Selection Modal */}
      <Modal
        isOpen={isLanguageModalOpen}
        onRequestClose={() => setIsLanguageModalOpen(false)}
        contentLabel="Select Language"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="bg-white p-6 md:p-8 rounded-lg max-w-md mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 text-center">
            Select Training Language
          </h2>
          <div className="space-y-3 md:space-y-4">
            <button
              className="w-full px-4 py-2 md:px-6 md:py-3 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 transition-colors duration-300 text-sm md:text-base"
              onClick={() => handleLanguageSelect("english")}
            >
              English
            </button>
            <button
              className="w-full px-4 py-2 md:px-6 md:py-3 bg-green-100 text-green-800 rounded-md hover:bg-green-200 transition-colors duration-300 text-sm md:text-base"
              onClick={() => handleLanguageSelect("hindi")}
            >
              Hindi
            </button>
            <button
              className="w-full px-4 py-2 md:px-6 md:py-3 bg-yellow-100 text-yellow-800 rounded-md hover:bg-yellow-200 transition-colors duration-300 text-sm md:text-base"
              onClick={() => handleLanguageSelect("punjabi")}
            >
              Punjabi
            </button>
          </div>
          <button
            className="mt-4 md:mt-6 px-3 py-1 md:px-4 md:py-2 text-gray-600 hover:text-gray-800 text-sm md:text-base"
            onClick={() => setIsLanguageModalOpen(false)}
          >
            Cancel
          </button>
        </div>
      </Modal>

      {/* Video Player Modal */}
      <Modal
        isOpen={isVideoPlaying}
        onRequestClose={closeVideoPlayer}
        contentLabel="Training Video"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="bg-white p-2 sm:p-4 rounded-lg max-w-4xl mx-auto w-full">
          <div className="flex justify-between items-center mb-2 sm:mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">
              {trainingModule.title} - {selectedLanguage?.toUpperCase()}
            </h2>
            <button
              onClick={closeVideoPlayer}
              className="text-gray-500 hover:text-gray-700 text-lg"
            >
              ✕
            </button>
          </div>
          
          <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
            <video
              controls
              autoPlay
              onEnded={handleVideoComplete}
              className="w-full h-full"
            >
              <source 
                src={
                  selectedLanguage === "english" ? languageVideos.english :
                  selectedLanguage === "hindi" ? languageVideos.hindi :
                  languageVideos.punjabi
                } 
                type="video/mp4" 
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </Modal>

      {/* Modal Styles */}
      <style jsx global>{`
        .modal {
          position: fixed;
          top: 50%;
          left: 50%;
          right: auto;
          bottom: auto;
          margin-right: -50%;
          transform: translate(-50%, -50%);
          background: white;
          padding: 1rem;
          border-radius: 0.5rem;
          outline: none;
          width: 90%;
          max-width: 500px;
          max-height: 90vh;
          overflow-y: auto;
        }
        
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1000;
        }
        
        @media (max-width: 640px) {
          .modal {
            width: 95%;
            padding: 0.75rem;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default AgentTraining;
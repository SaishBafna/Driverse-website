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

// Set app element for accessibility (should be set to your app's root element)
// if (typeof window !== 'undefined') {
//   Modal.setAppElement('#__next');
// }

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

  // Video URLs for different languages (replace with your actual video URLs)
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
    // Navigate to quiz page after video completes
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
      <div className="w-full bg-gradient-to-r from-gray-900 to-gray-700 py-16 px-4 md:px-20 lg:px-24">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          variants={fadeInUp}
        >
          <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Agent Communication Training
          </h1>
          <p className="text-slate-200 text-lg md:text-xl lg:text-2xl font-sans max-w-3xl mx-auto">
            Complete your communication training to effectively interact with clients.
          </p>
        </motion.div>
      </div>

      {/* Training Module */}
      <motion.div 
        className="max-w-4xl mx-auto px-4 md:px-8 lg:px-10 py-16"
        variants={fadeInUp}
      >
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="font-sans text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            Your Training Module
          </h2>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <div className="flex items-start">
                <span className="text-4xl mr-6">{trainingModule.icon}</span>
                <div>
                  <h3 className="font-sans text-2xl font-bold text-gray-800 mb-4">
                    {trainingModule.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">{trainingModule.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">{trainingModule.duration}</span>
                    <button 
                      className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-300"
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
        className="max-w-4xl mx-auto px-4 md:px-8 lg:px-10 pb-16"
        variants={fadeInUp}
      >
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="font-sans text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
            Need Help With Your Training?
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-sans text-xl font-bold text-gray-800 mb-4">
              Contact Support
            </h3>
            <p className="text-gray-700 mb-4">
              Our team is available to answer any questions about the training.
            </p>
            <button
              className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-300"
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
        <div className="bg-white p-8 rounded-lg max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Select Training Language
          </h2>
          <div className="space-y-4">
            <button
              className="w-full px-6 py-3 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 transition-colors duration-300"
              onClick={() => handleLanguageSelect("english")}
            >
              English
            </button>
            <button
              className="w-full px-6 py-3 bg-green-100 text-green-800 rounded-md hover:bg-green-200 transition-colors duration-300"
              onClick={() => handleLanguageSelect("hindi")}
            >
              Hindi
            </button>
            <button
              className="w-full px-6 py-3 bg-yellow-100 text-yellow-800 rounded-md hover:bg-yellow-200 transition-colors duration-300"
              onClick={() => handleLanguageSelect("punjabi")}
            >
              Punjabi
            </button>
          </div>
          <button
            className="mt-6 px-4 py-2 text-gray-600 hover:text-gray-800"
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
        <div className="bg-white p-4 rounded-lg max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">
              {trainingModule.title} - {selectedLanguage?.toUpperCase()}
            </h2>
            <button
              onClick={closeVideoPlayer}
              className="text-gray-500 hover:text-gray-700"
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
          
          {/* <div className="mt-4 text-right">
            <button
              onClick={handleVideoComplete}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
            >
              Skip to Quiz
            </button>
          </div> */}
        </div>
      </Modal>

      {/* Add some styles for the modal */}
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
          padding: 20px;
          border-radius: 8px;
          outline: none;
          width: 90%;
          max-width: 500px;
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
        
        @media (max-width: 768px) {
          .modal {
            width: 95%;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default AgentTraining;
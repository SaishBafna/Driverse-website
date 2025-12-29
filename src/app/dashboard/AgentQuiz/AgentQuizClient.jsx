"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import axios from "axios";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AgentQuizClient = () => {
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);
  const [emailLoading, setEmailLoading] = useState(false);
  const [quizLoading, setQuizLoading] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "What is the main purpose of the “Talk to a Friend” feature?",
      options: [
        { id: "A", text: "To help drivers book towing services" },
        {
          id: "B",
          text: "To provide drivers with emotional support through friendly conversations",
        },
        { id: "C", text: "To offer driving instructions to new truckers" },
        { id: "D", text: "To report road conditions to dispatch" },
      ],
      correctAnswer: "B",
    },
    {
      id: 2,
      question: "Which of the following is acceptable during conversations?",
      options: [
        {
          id: "A",
          text: "Sharing your personal phone number if the driver insists",
        },
        { id: "B", text: "Discussing deep personal trauma in detail" },
        { id: "C", text: "Light hearted and entertaining conversations." },
        { id: "D", text: "Debating religion and politics actively" },
      ],
      correctAnswer: "C",
    },
    {
      id: 3,
      question:
        "What should an agent do if a conversation turns negative or inappropriate?",
      options: [
        { id: "A", text: "Ignore it and let it continue" },
        { id: "B", text: "Hang up without explanation" },
        { id: "C", text: "Engage more to see where it goes" },
        { id: "D", text: "Redirect the conversation to a lighter topic" },
      ],
      correctAnswer: "D",
    },
    {
      id: 4,
      question: "What kind of topics should agents focus on during calls?",
      options: [
        { id: "A", text: "Food, travel, and hobbies" },
        { id: "B", text: "Music and current events" },
        { id: "C", text: "Lighthearted, general conversations" },
        { id: "D", text: "All of the above" },
      ],
      correctAnswer: "D",
    },
    {
      id: 5,
      question: "Which of the following is NOT allowed as an agent?",
      options: [
        { id: "A", text: "Asking about the driver’s day and hobbies" },
        { id: "B", text: "Speaking in a calm and polite tone" },
        {
          id: "C",
          text: "Sharing your personal information such as your address or phone number",
        },
        { id: "D", text: "Keeping the conversation friendly and respectful" },
      ],
      correctAnswer: "C",
    },
  ];

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setEmailLoading(true);

    try {
      const response = await fetch("/api/checkEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      console.log("Email check response:", data);

      if (response.ok) {
        setEmailSubmitted(true);
      } else {
        console.error(data.error);
        toast.error(data.error || data.message || "Email not found");
      }
    } catch (error) {
      console.error("Error checking email:", error);
      toast.error("Failed to verify email");
    } finally {
      setEmailLoading(false);
    }
  };

  const handleAnswerSelect = (questionId, optionId) => {
    if (!submitted) {
      setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
    }
  };

  const calculateScore = async () => {
    setQuizLoading(true);
    let correct = 0;
    quizQuestions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    const percentage = Math.round((correct / quizQuestions.length) * 100);
    setScore(percentage);
    setSubmitted(true);

    if (percentage >= 80) {
      try {
        const email_data = { email: email };

        const response = await axios.post("/api/submitQuiz", email_data, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        console.log("Quiz submission response:", response);
        if (!response.data.success) {
          console.error(response.data.message);
          toast.error(response.data.message || "Failed to submit quiz results");
        } else {
          toast.success("Quiz submitted successfully!");
        }
      } catch (error) {
        console.error("Error submitting quiz:", error);
        toast.error("Failed to submit quiz results");
      }
    }
    setQuizLoading(false);
  };

  const resetQuiz = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(null);
  };

  const getOptionClass = (question, optionId) => {
    if (!submitted) {
      return answers[question.id] === optionId
        ? "border-blue-500 bg-blue-50"
        : "border-gray-200 hover:bg-gray-50";
    }

    if (optionId === question.correctAnswer) {
      return "border-green-500 bg-green-50";
    } else if (
      optionId === answers[question.id] &&
      optionId !== question.correctAnswer
    ) {
      return "border-red-500 bg-red-50";
    }
    return "border-gray-200";
  };

  const getRadioClass = (question, optionId) => {
    if (!submitted) {
      return answers[question.id] === optionId
        ? "border-blue-500 bg-blue-500"
        : "border-gray-400";
    }

    if (optionId === question.correctAnswer) {
      return "border-green-500 bg-green-500";
    } else if (
      optionId === answers[question.id] &&
      optionId !== question.correctAnswer
    ) {
      return "border-red-500 bg-red-500";
    }
    return "border-gray-400";
  };

  if (!emailSubmitted) {
    return (
      <motion.div
        className="w-full min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6"
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="max-w-md w-full bg-white rounded-xl shadow-lg p-6 sm:p-8"
          variants={fadeInUp}
        >
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
            Agent Verification
          </h1>
          <form onSubmit={handleEmailSubmit}>
            <div className="mb-4 sm:mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 mb-2 text-sm sm:text-base"
              >
                Please enter your registered email address:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                placeholder="Enter your registered email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm sm:text-base"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 sm:px-6 sm:py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium flex items-center justify-center text-sm sm:text-base"
              disabled={emailLoading}
            >
              {emailLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Verifying...
                </>
              ) : (
                "Verify Email"
              )}
            </button>
          </form>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="w-full min-h-screen bg-gray-50 py-6 sm:py-8 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8"
        variants={fadeInUp}
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
            Agent Communication Quiz
          </h1>
          <div className="text-xs sm:text-sm text-gray-600 break-all">
            Registered as: {email}
          </div>
        </div>

        <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
          Complete this quiz with at least 80% correct answers to pass.
        </p>

        <div className="space-y-6 sm:space-y-8">
          {quizQuestions.map((question) => (
            <motion.div
              key={question.id}
              className="border-b border-gray-200 pb-4 sm:pb-6 last:border-0"
              variants={fadeInUp}
            >
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
                {question.id}. {question.question}
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {question.options.map((option) => (
                  <label
                    key={option.id}
                    className={`flex items-start p-3 sm:p-4 border rounded-lg cursor-pointer transition-colors ${getOptionClass(
                      question,
                      option.id
                    )}`}
                  >
                    <div className="flex items-center h-5 mt-0.5 mr-3">
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        checked={answers[question.id] === option.id}
                        onChange={() =>
                          handleAnswerSelect(question.id, option.id)
                        }
                        className="sr-only"
                        disabled={submitted}
                      />
                      <div
                        className={`h-4 w-4 rounded-full border-2 flex items-center justify-center ${getRadioClass(
                          question,
                          option.id
                        )}`}
                        aria-hidden="true"
                      >
                        {answers[question.id] === option.id && (
                          <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                        )}
                      </div>
                    </div>
                    <span className="text-gray-800 text-sm sm:text-base">
                      {option.id}. {option.text}
                    </span>
                  </label>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {!submitted ? (
          <motion.div className="mt-8 sm:mt-10 text-center" variants={fadeInUp}>
            <button
              className="px-6 py-2 sm:px-8 sm:py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium flex items-center justify-center mx-auto text-sm sm:text-base"
              onClick={calculateScore}
              disabled={
                Object.keys(answers).length !== quizQuestions.length ||
                quizLoading
              }
            >
              {quizLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                "Submit Answers"
              )}
            </button>
            <p className="text-gray-500 mt-3 sm:mt-4 text-xs sm:text-sm">
              {Object.keys(answers).length}/{quizQuestions.length} questions
              answered
            </p>
          </motion.div>
        ) : (
          <motion.div className="mt-8 sm:mt-10 text-center" variants={fadeInUp}>
            <div
              className={`p-4 sm:p-6 rounded-lg mb-4 sm:mb-6 ${
                score >= 80
                  ? "bg-green-50 text-green-800"
                  : "bg-red-50 text-red-800"
              }`}
            >
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                {score >= 80 ? "Congratulations!" : "Try Again"}
              </h3>
              <p className="text-sm sm:text-base">
                You scored {score}% -{" "}
                {score >= 80
                  ? "You've passed the quiz! Please check your email, we’ve sent you a verification link."
                  : "You need at least 80% to pass."}
              </p>
            </div>
            {score < 80 && (
              <button
                className="px-6 py-2 sm:px-8 sm:py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium text-sm sm:text-base"
                onClick={resetQuiz}
              >
                Retake Quiz
              </button>
            )}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default AgentQuizClient;

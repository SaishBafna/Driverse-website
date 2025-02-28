"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "sonner";
import axios from "axios";
import FloatingLabelInput from "@/app/Components/FloatingInput";

const Driver = () => {
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [formState, setFormState] = useState({
    serviceType: "Driver",
    username: "",
    email: "",
    phone: "",
    companyAddress: "",
    password: "",
    confirmPassword: "",
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;  // Basic phone validation for 10 digits

    if (!formState.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formState.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formState.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formState.phone)) {
      newErrors.phone = "Invalid phone number (10 digits required)";
    }

    if (!formState.companyAddress.trim()) {
      newErrors.companyAddress = "Company address is required";
    }

    if (!formState.password) {
      newErrors.password = "Password is required";
    } else if (formState.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    if (!formState.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formState.password !== formState.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    setSubmitting(false);

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  // Moved to top to prevent default form submission
    if (submitting) return;  // Prevent multiple submissions
    
    if (!validateForm()) {
      return;
    }

    setSubmitting(true);

    try {
      const response = await axios.post("/api/registerUser", formState);
      
      if (response.status === 201) {
        toast.success("Verify Your Email !");
        setFormState({
          serviceType: "Driver",
          username: "",
          email: "",
          phone: "",
          companyAddress: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        toast.error("Unable to Register. Please try again later.");
        
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error(error.response?.data?.message || "Registration failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full relative h-full overflow-hidden about">
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center text-white mt-5 sm:mt-0">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans font-bold mb-2 mx-4">
            Registration Form
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-bold text-white flex items-center justify-center gap-x-3">
            For Driver
          </p>
        </div>

        <form onSubmit={handleSubmit} className="relative w-max grid grid-cols-1 mt-5 sm:mt-10 md:pt-4 mb-20 px-4 sm:px-8 md:px-12 lg:px-36">
          <div className="relative h-max mb-5 md:mb-0 pt-5 flex flex-col space-y-6 bg-white p-6 rounded-lg shadow-lg border-slate-300 border-[0.5px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:px-2">
              <div>
                <FloatingLabelInput
                  name="username"
                  value={formState.username}
                  onChange={handleChange}
                  label="User Name"
                  required
                />
                {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
              </div>

              <div>
                <FloatingLabelInput
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  label="Email"
                  required
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <FloatingLabelInput
                  type="tel"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  label="Phone"
                  required
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <FloatingLabelInput
                  type="text"
                  name="companyAddress"
                  value={formState.companyAddress}
                  onChange={handleChange}
                  label="Company Address"
                  required
                />
                {errors.companyAddress && <p className="text-red-500 text-sm mt-1">{errors.companyAddress}</p>}
              </div>

              <div className="relative">
                <FloatingLabelInput
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formState.password}
                  onChange={handleChange}
                  label="Password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-3.5 right-0 pr-3 flex items-center"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>

              <div className="relative">
                <FloatingLabelInput
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formState.confirmPassword}
                  onChange={handleChange}
                  label="Confirm Password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute top-3.5 right-0 pr-3 flex items-center"
                  aria-label="Toggle confirm password visibility"
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
                {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
              </div>
            </div>

            <div className="flex w-full justify-center items-center">
              <button
                type="submit"
                className="bg-black text-white py-2 px-16 rounded-md hover:bg-slate-900 transition-all duration-300 w-max disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Register"}
              </button>
            </div>
          </div>
        </form>
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
  );
};

export default Driver;

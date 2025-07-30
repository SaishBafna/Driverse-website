"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "sonner";
import axios from "axios";
import FloatingLabelInput from "@/app/Components/FloatingInput";

const Towing = () => {
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [formState, setFormState] = useState({
    serviceType: "Tower",
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
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;

    if (!formState.username.trim()) errors.username = "Username is required";
    if (!emailRegex.test(formState.email))
      errors.email = "Invalid email address";
    if (!phoneRegex.test(formState.phone))
      errors.phone = "Enter valid phone number with country code (e.g., +1234567890)";
    if (!formState.companyAddress.trim())
      errors.companyAddress = "Company address is required";
    if (formState.password.length < 8)
      errors.password = "Password must be at least 8 characters long";
    if (formState.password !== formState.confirmPassword)
      errors.confirmPassword = "Passwords do not match";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    if (!validateForm()) {
      setSubmitting(false);
      return;
    }

    try {
      const response = await axios.post("/api/registerUser", formState);
      if (response.status === 201) {
        toast.success("Verify Your Email!");
        setFormState({
          serviceType: "Tower",
          username: "",
          email: "",
          phone: "",
          companyAddress: "",
          password: "",
          confirmPassword: "",
        });
        setErrors({});
      } else {
        toast.error("Unable to register. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.error ||
          error.response?.data?.message ||
          "Registration failed. Please try again."
      );
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
          <p className="text-lg md:text-xl lg:text-2xl font-bold text-white">
            For Towing
          </p>
        </div>
        <div className="relative w-max mt-5 sm:mt-10">
          <div className="flex flex-col space-y-6 bg-white p-6 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FloatingLabelInput
                name="username"
                value={formState.username}
                onChange={handleChange}
                label="User Name"
              />
              {errors.username && (
                <p className="text-red-500">{errors.username}</p>
              )}
              <FloatingLabelInput
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                label="Email"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
              <FloatingLabelInput
                type="tel"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                label="Phone"
              />
              {errors.phone && <p className="text-red-500">{errors.phone}</p>}
              <FloatingLabelInput
                name="companyAddress"
                value={formState.companyAddress}
                onChange={handleChange}
                label="Company Address"
              />
              {errors.companyAddress && (
                <p className="text-red-500">{errors.companyAddress}</p>
              )}
              <div className="relative">
                <FloatingLabelInput
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formState.password}
                  onChange={handleChange}
                  label="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-3.5 right-0 pr-3"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500">{errors.password}</p>
              )}
              <div className="relative">
                <FloatingLabelInput
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formState.confirmPassword}
                  onChange={handleChange}
                  label="Confirm Password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute top-3.5 right-0 pr-3"
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500">{errors.confirmPassword}</p>
              )}
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleSubmit}
                className="bg-black text-white py-2 px-16 rounded-md hover:bg-gray-900"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Register"}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Towing;

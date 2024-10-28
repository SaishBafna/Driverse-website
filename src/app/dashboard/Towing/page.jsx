"use client";
import React, { useEffect, useState } from "react";
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
    username:"",
    email: "",
    phone: "",
    companyAddress:"",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showconfirmPassword, setconfirmShowPassword] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!validateForm()) return;

    const data = formState;
    console.log(data);

    try {
      const response = await axios.post("/api/registerUser", data);
      if (response.status === 201) {
        toast.success("Registered successfully.");
        setFormState({
          serviceType: "Tower",
          username:"",
          email: "",
          phone: "",
          companyAddress:"",
          password: "",
          confirmPassword: "",
        });
      } else {
        toast.error("Unable to register. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formState.email)) {
      errors.email = "Invalid email address";
    }
    if (formState.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }
    if (formState.password !== formState.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    setSubmitting(false);
    setErrors(errors);
    return Object.keys(errors).length === 0;
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
          <h1 className=" text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans font-bold mb-2 mx-4">
            Registration Form
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-bold text-white flex items-center justify-center gap-x-3">
            For Towers
          </p>
        </div>

        <div className="relative w-max grid grid-cols-1 mt-5 sm:mt-10  md:pt-4  mb-20  px-4 sm:px-8 md:px-12 lg:px-36  ">
          <div className="relative h-max mb-5 md:mb-0 pt-5 flex flex-col space-y-6   bg-white p-6 rounded-lg shadow-lg border-slate-300 border-[0.5px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:px-2">
              <FloatingLabelInput
                name="username"
                value={formState.username}
                onChange={handleChange}
                label="User Name"
              />
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
              <FloatingLabelInput
                type="text"
                name="companyAddress"
                value={formState.companyAddress}
                onChange={handleChange}
                label="Company Address"
              />
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
                  className="absolute top-3.5 right-0 pr-3 flex items-center"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500">{errors.password}</p>
              )}
              <div className="relative">
                <FloatingLabelInput
                  type={showconfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formState.confirmPassword}
                  onChange={handleChange}
                  label="Confirm Password"
                />
                <button
                  type="button"
                  onClick={() => setconfirmShowPassword(!showconfirmPassword)}
                  className="absolute top-3.5 right-0 pr-3 flex items-center"
                  aria-label="Toggle confirm password visibility"
                >
                  {showconfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500">{errors.confirmPassword}</p>
              )}
            </div>
            <div className="flex w-full justify-center items-center">
              <button
                onClick={handleSubmit}
                className="bg-black text-white py-2 px-16 rounded-md hover:bg-slate-900 transition-all duration-300 w-max"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Register"}
              </button>
            </div>
          </div>
        </div>
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

export default Towing;

"use client";
import React from "react";
import {
  FaMapMarkerAlt,
  FaTwitter,
  FaYoutube,
  FaTiktok,
  FaFacebook,
  FaLinkedin,
  FaApple,
} from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import { IoLogoAndroid } from "react-icons/io5";
import Driverselogo from "./ui/Driverselogo";

const Footer = () => {
  return (
    <>
      <footer className="bg-white text-black px-10 py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left ">
          <div className="col-span-1 hidden sm:block   ">
            <ul className="space-y-5 ">
              <li className="bg-black flex justify-center gap-x-3 items-center h-max w-max px-3 py-3 rounded-lg mx-auto md:ml-[-25px] ">
                <FaApple className="text-white h-10 w-10" />
                <div className="text-xs font-extralight text-white">
                  <h4>Download on the</h4>
                  <h1>App Store</h1>
                </div>
              </li>
              <li className="bg-black flex justify-center gap-x-3 items-center h-max w-max px-3 py-3 rounded-lg mx-auto md:ml-[-25px]">
                <BiLogoPlayStore className="text-white h-10 w-10" />
                <div className="text-xs font-extralight text-white">
                  <h4>Download on the</h4>
                  <h1>Google Play</h1>
                </div>
              </li>
              
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-black">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="/dashboard/services#driver" className="hover:text-gray-400">
                  Driver
                </a>
              </li>
              <li>
                <a href="/dashboard/services#carriers" className="hover:text-gray-400">
                  Carriers
                </a>
              </li>
              <li>
                <a href="/dashboard/services#towing" className="hover:text-gray-400">
                  Towing Companies
                </a>
              </li>
              <li>
                <a href="/dashboard/services#mechanic" className="hover:text-gray-400">
                  Mechanic
                </a>
              </li>
               {/* <li>
                <a href="/dashboard/AgentQuiz" className="hover:text-gray-200">
                  Quiz
                </a>
              </li>
              <li>
                <a href="/dashboard/AgentTraining" className="hover:text-gray-200">
                  Training
                </a>
              </li> */}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-black">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/#whyChooseus" className="hover:text-gray-400">
                why Choose Us
                </a>
              </li>
              <li>
                <a href="/dashboard/contact" className="hover:text-gray-400">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/dashboard/PrivacyPolicy" className="hover:text-gray-400">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-black">About Us</h3>
            <div className="flex justify center items-center h-[0.5rem] w-24 mb-4 ml-[6.5rem] sm:ml-0"><Driverselogo/></div>
            <p>
              Connecting Tow Trucking Companies, Mechanics, Carriers, and
              Drivers Seamlessly.
            </p>
            <a
              href="#"
              className="btn-arrow id-color hover-light text-black mt-4 inline-block"
            >
              <span className="line"></span>
              <span className="url">View Details</span>
            </a>
          </div>
        </div>
      </footer>

      <div className="flex flex-col sm:flex-row justify-between items-center text-black py-5 px-10 text-center sm:text-left bg-white">
        <div>
          <span className="text-sm">&copy; Copyright {new Date().getFullYear()}{" "}</span>
          <span className="text-black  font-sans">Driverse</span>
        </div>
        <div className="mt-4 sm:mt-0">
          <ul className="flex gap-4">
            <li>
              <a
                href="https://maps.app.goo.gl/gmt8wBXr4MQ9ZhZX7?g_st=com.google.maps.preview.copy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapMarkerAlt size={20} className="text-black" />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/driverseai?s=21"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={20} className="text-black" />
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/@driverseai?si=QdHNMyYki5Yui28b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={20} className="text-black" />
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@driverse.ai?_t=8oFdHFKimMo&_r=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok size={20} className="text-black" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61561441182839&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={20} className="text-black" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/driverse-inc-0a712631b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={20} className="text-black" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;

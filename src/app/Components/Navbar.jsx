"use client";
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes, FaGripLines } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from "next/navigation";
import Driverselogo from './ui/Driverselogo';

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    open: {
      opacity: 1,
      height: "100vh",
      transition: {
        duration: 0.5,
      }
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
      }
    }
  };

  return (
    <>
      <nav className={`sticky top-0 z-50 w-full md:px-20 lg:px-28 h-16 flex items-center justify-between p-4 bg-white text-white transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="left w-1/5">
        <Driverselogo className="h-7 w-8"/>
        </div>
        <div className="right hidden md:flex w-3/5 justify-end space-x-10">
          <ul className='flex gap-x-10 font-semibold'>
            <li onClick={() => { router.push("/") }} className={pathname === "/" ? "text-black pb-1 border-black border-b-4 h-full font-semibold" :"cursor-pointer hover:text-slate-700 text-slate-900 font-semibold"}>Home</li>
            <li onClick={() => { router.push("/dashboard/services") }} className={pathname === "/dashboard/services" ? "text-black pb-1 border-black border-b-4 font-semibold" :"cursor-pointer hover:text-slate-700 text-slate-900 font-semibold"}>Services</li>
            <li onClick={() => { router.push("/dashboard/contact") }} className={pathname === "/dashboard/contact" ? "text-black pb-1 border-black border-b-4 font-semibold"  :"cursor-pointer hover:text-slate-700 text-slate-900 font-semibold"}>Contact</li>
          </ul>
        </div>

        <div className="md:hidden flex items-center">
          <button className='block bg-black text-white font-semibold text-base px-2 py-2 rounded-lg mr-6'>Download App</button>
          <button onClick={toggleMenu} className="text-2xl text-black">
            {isOpen ? <FaTimes /> : <FaGripLines />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
  {isOpen && (
    <motion.div
      className="md:hidden bg-black text-white w-full fixed top-0 left-0 z-40 overflow-x-hidden"
      initial="closed"
      animate="open"
      exit="closed"
      variants={menuVariants}
      style={{ maxWidth: '100vw', overflowX: 'hidden' }}
    >
      <ul className='flex flex-col items-center justify-center h-full gap-6 font-bold text-lg'>
        <li onClick={() => { router.push("/"); toggleMenu(); }} className={pathname === "/" ? "text-white pb-1 border-white border-b-2" : "cursor-pointer hover:text-slate-200"}>Home</li>
        <li onClick={() => { router.push("/dashboard/services"); toggleMenu(); }} className={pathname === "/dashboard/services" ? "text-white pb-1 border-white border-b-2" : "cursor-pointer hover:text-slate-200"}>Services</li>
        <li onClick={() => { router.push("/dashboard/contact"); toggleMenu(); }} className={pathname === "/dashboard/contact" ? "text-white pb-1 border-white border-b-2" : "cursor-pointer hover:text-slate-200"}>Contact</li>
      </ul>
    </motion.div>
  )}
</AnimatePresence>

    </>
  );
}

export default Navbar;

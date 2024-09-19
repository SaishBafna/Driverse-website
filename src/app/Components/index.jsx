"use client"
import React from "react";
import Navbar from "./Navbar";
import Landing from "./Landing";
import Forms from "./Forms";
import About from "./About";
import Footer from "./Footer";
import Features from "./Features";
import Slider from "./Slider";
import TalktoFriend from "./TalktoFriend";

const Index = () => {
  return (
    <div className=" h-full ">
      <Navbar />
      <Landing />
      <Forms />
      <Slider/>
      <About />
      <TalktoFriend/>
      <Features />
      <Footer />
    </div>
  );
};

export default Index;

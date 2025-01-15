"use client";

import dynamic from 'next/dynamic';
import Image from "next/image";

import bgImg from "/public/images/image 10.png";

const Navbar = dynamic(() => import('./components/(homepage)/Navbar'), {
    ssr: false
});

import Hero from "./components/(homepage)/Hero";
import About from "./components/(homepage)/About";
import Skills from "./components/(homepage)/Skills";
import Work from "./components/(homepage)/Work";
import Contact from "./components/(homepage)/Contact";
import Footer from "./components/(homepage)/Footer";


export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Image 
          src={bgImg}
          alt="background abstract img"
          fill
          sizes="100vw"
          className="object-cover"
          style={{zIndex: "-100"}}
      />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

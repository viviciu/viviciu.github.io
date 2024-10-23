"use client"
import Navbar from './_components/Navbar.jsx';
import Footer from './_components/Footer';
import HorizontalScrollCarousel from './_components/HorizontalScrollCarousel';
import App from './_components/monitors/src/App.js'
import dynamic from "next/dynamic"
import { React, useState, useEffect } from "react"

// const Scene = dynamic(() => import("./_components/_unusedComponents/Scene.jsx"), { ssr: false })


export default function Home() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [osInfo, setOsInfo] = useState({ name: "", version: "" });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    let osName = "Unknown OS";
    let osVersion = "";

    if (userAgent.includes("Mac OS X")) {
      const macOSMatch = userAgent.match(/Mac OS X (\d+[\._]\d+[\._]?\d*)/);
      if (macOSMatch) {
        osName = "macOS";
        osVersion = macOSMatch[1].replace(/_/g, ".");
      }
    } else if (userAgent.includes("Windows NT")) {
      const windowsMatch = userAgent.match(/Windows NT (\d+\.\d+)/);
      if (windowsMatch) {
        osName = "Windows";
        osVersion = windowsMatch[1];
      }
    }

    setOsInfo({ name: osName, version: osVersion });
  }, []);

  return (
    <main className="relative h-screen">
      {/* <Navbar className='z-10' /> */}
      {/* <Scene /> */}
      <App />
      <div className="absolute top-40 left-40 p-4 text-offBlack text-cap font-SuisseWorks">
        x {mouseX}, y {mouseY}
      </div>
      <div className="absolute top-60 left-40 p-4 text-offBlack text-cap font-SuisseWorks">
        {osInfo.name} {osInfo.version}
      </div>
      <Footer />
    </main>
  );
}


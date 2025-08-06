"use client";
import Image from "next/image";
import Link from "next/link";
import { React, useState, useEffect } from "react";

const HomeData = () => {
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
    // do w-full to make grid work.
    <div className="absolute bottom-[10rem] left-0 w-full">
      <div className="grid grid-cols-5">
        <div className=" lg:col-start-2 col-start-2 p-0 m-0 text-offBlack text-cap font-SuisseWorks">
          {/* x {mouseX}, y {mouseY} */}
        </div>
        {/* prev absolute top-60 left-40 */}
        {/* font-MonumentGroteskSemiMono */}
        <div className="lg:col-start-2 col-start-2 col-span-1 text-offBlack text-[12px]  leading-[1.2rem]  ">
          {/* {osInfo.name} {osInfo.version} */}
          <br />
          {/* Multidisciplinary designer exploring motion, generative visual
          systems, and multimodal identities. */}
        </div>
      </div>
    </div>
  );
};

export default HomeData;

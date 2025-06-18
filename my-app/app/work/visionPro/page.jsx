"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Title from "../../_components/Title";
import Context from "../../_components/Context";
import Context2 from "../../_components/Context2";
import CoverYAMLVideo from "../../_components/CoverYAMLVideo";
import YAMLBar from "../../_components/YAMLBar";
import DividerLine from "../../_components/DividerLine";
import New3 from "../../_components/New3";
import { MdOutlineArrowOutward } from "react-icons/md";
import Header from "../../_components/Header";
import New3Grid from "../../_components/New3Grid";
import New3VideoCloudinaryAutoplay from "@/app/_components/New3VideoAWS";

export default function TypographyAnimation() {
  const members = ["Megan Chai", "Upasna Sharma", "Jasmine Kim"];
  const tools = ["After Effects, Davinci Resolve, Figma"];
  const myRole = "Motion Design | UX | UI";

  // A realm where the very essence of self and time finds itself in flux.
  return (
    <main className=" block px-4">
      <Title
        text1={
          <div>
            Book Focus, <br /> Neurodivergent minds empowered through spaital computing.
          </div>
        }
      />
      <YAMLBar
        client="Advanced Interaction Design"
        year="2025"
        role="Motion Design | UX | UI"
      />
      <div className="w-full h-[60vh] lg:h-[100vh] ">
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/1094245534?h=00b86bcad8"
          className="w-full h-full"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>

      <Context2
        context={
          <div>
            
            It can be hard for anyone to know where to begin when entering a
            library. For neurodivergent users, this usually means needing to
            find a librarian for most tasks.
            <br />
            <br />
            With our concept VisionOS app, Book Focus, we aimed to return
            autonomy to individuals on the spectrum so they can experience the
            best part of libraries: Discovering titles you never knew you’d
            love. Powered by AI and local librarian input, Book Focus uses
            library card history and real-time user behavior to deliver one
            tailored recommendation at a time, reducing cognitive load. It also
            provides quick facts—like Goodreads ratings, summaries, and viewing
            history—to simplify comparisons.
          </div>
        }
        myRole={myRole}
        timeline="3 Months"
        members={members}
        tools={tools}
      />

      
        
        
      
    </main>
  );
}

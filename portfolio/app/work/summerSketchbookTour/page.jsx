"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Title from "../../_components/Title";
import Context from "../../_components/Context";
import Context2 from "../../_components/Context2";
import CoverYAMLVideo from "../../_components/CoverYAMLVideo";
import YAMLBar from "../../_components/YAMLBar";
import DividerLine from "../../_components/DividerLine";
import { MdOutlineArrowOutward } from "react-icons/md";


export default function Liminal() {
  const members = [
    
  ];
  const tools = ["my hands"];
  const myRole = "Sketching";

  

 
  // A realm where the very essence of self and time finds itself in flux.
  return (
    <main className=" block px-4">
      <Title
        text1={
          <div>
            Sketchbook sessions, <br /> a peek at my brain.
          </div>
        }
      />
      <YAMLBar client="Personal" year="2024" role="Sketchbook" />
      <CoverYAMLVideo url="https://www.youtube.com/watch?v=E1XWWuYkrhs&t=1484s" />
      <Context2
        context={
          <div>
            Sketches from the summer after freshman year. My
            process, lessons learned, and inspirations.
          </div>
        }
        
      />
      {/* <DividerLine text="Project Brief" /> */}
      
    </main>
  );
}

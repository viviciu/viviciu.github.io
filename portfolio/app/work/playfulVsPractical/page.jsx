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
  const tools = ["Rapid Prototyping", "Desktop Modelmaking"];
  const myRole = "Timeline";

  const [activeIndex, setActiveIndex] = useState(0);
  const componentRefs = [useRef(null), useRef(null), useRef(null)];

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    componentRefs.forEach((ref, index) => {
      if (ref.current) {
        const { offsetTop, offsetHeight } = ref.current;
        console.log(index);
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveIndex(index);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // A realm where the very essence of self and time finds itself in flux.
  return (
    <main className=" block px-4">
      <Title
        text1={
          <div>
            Playful vs. Practical, <br /> a synergy of language, form, and
            context.
          </div>
        }
      />
      <YAMLBar client="Products Studio I" year="2024" role="Product Design" />
      <CoverYAMLVideo url="https://www.youtube.com/watch?v=aewhf6EUHoQ&t=132s" />
      <Context2
        context={
          <div>
            Products Studio I: Form and Context.
            <br />
            <br />
            Process to be added.
            <br />
            Last update:{" "}
            <span className="font-Suisse font-semibold"> 26 October 2024 </span>
          </div>
        }
        myRole={myRole}
        timeline="Aug — Oct 2024"
        members={members}
        tools={tools}
      />
      {/* <DividerLine text="Project Brief" /> */}
    </main>
  );
}

"use client";
import React, { useState, useEffect, useRef } from "react";
import Video from 'next-video'
import sample from "/videos/get-started.mp4";
import C0469 from "/videos/C0469.mp4";
import C0475 from "/videos/C0475.mp4";
import Link from "next/link";
import Image from "next/image";
import Title from "../../_components/Title";
import Context from "../../_components/Context";
import Context2 from "../../_components/Context2";
import CoverYAMLVideo from "../../_components/CoverYAMLVideo";
import YAMLBar from "../../_components/YAMLBar";
import DividerLine from "../../_components/DividerLine";
import { MdOutlineArrowOutward } from "react-icons/md";
import New3Video from "../../_components/New3Video"


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
      <YAMLBar
        client="Products Studio I: Form and Context"
        year="2024"
        role="Industrial Design"
      />
      <CoverYAMLVideo url="https://www.youtube.com/watch?v=aewhf6EUHoQ&t=132s" />
      <Context2
        context={
          <div>
            Process under development.
            <br />
            Last update:{" "}
            <span className="font-Suisse font-semibold"> 10 January 2025 </span>
            <br />
            <br />
            Playful vs. Practical, a synergy of movement and material, foreign
            and familiar. 2024.
            <br />
            <br />
            Inspired by a lamp post on campus and the familiar gestures we
            conjure from hearing music, this study reflects a playful yet
            precise object. It is one that incites methodical exploration over
            immediate understanding.
            <br />
            <br />
            An object that isn’t quick to understand is something I used to
            think was a poor design. This piece taught me that objects can act
            as a violins: only through exploration, play, and some teaching one
            is able to handle it with grace. Not everything is or should be
            intuitive. This piece traces the evolution of a relationship through
            the initial spark of curiosity, the uncertainty of trial and error,
            and ultimate delight of learning something foreign.
            <br />
            <br />
          </div>
        }
        myRole={myRole}
        timeline="Aug — Oct 2024"
        members={members}
        tools={tools}
      />
      <DividerLine text="Process" />
      <div className="mt-10 mb-32 lg:grid grid-cols-3 gap-[0.6rem] flex flex-col">
        <div>
          <Video src={C0469} />
          <p className="mt-1">Tabletop exploration A</p>
        </div>
        <div>
          <Video src={C0475} />
          <p className="mt-1">Tabletop exploration B</p>
        </div>
        <div>
          <img src="https://image.mux.com/TKWj6nwkH0082l008G96sOHKN3X6PklbfOzrN8oaJ62hw/animated.gif?width=500" />
          <p className="mt-1">"Isn't a flip just a 'long' spin?"</p>
        </div>
      </div>

      {/* <New3Video classname="pt-10" text1={"hi"} caption={"caption"} src={C0469} /> */}
    </main>
  );
}

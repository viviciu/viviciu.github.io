"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Title from "../../_components/Title";
import Context from "../../_components/Context";
import Context2 from "../../_components/Context2";
import CoverYAMLVideo from "../../_components/CoverYAMLVideo";
import YAMLBar from "../../_components/YAMLBar";
import DividerLine from "../../_components/DividerLine";
import New3 from "../../_components/New3";
import { MdOutlineArrowOutward } from "react-icons/md";


export default function TypographyAnimation() {
  const members = [
    
  ];
  const tools = ["After Effects"];
  const myRole = "Motion Designer";

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
            Kinetic Type Animation, <br /> a study in time and motion to narrate
            the story of a typeface.
          </div>
        }
      />
      <YAMLBar
        client="Communications Studio I"
        year="2024"
        role="Motion Design"
      />
      <CoverYAMLVideo url="https://www.youtube.com/watch?v=7d-jYvQeNq4" />
      <Context2
        context={
          <div>
            Full process on{" "}
            <Link
              href={
                "https://medium.com/@vivianastaicu05/project-iii-animation-98899753a872"
              }
              className="relative group underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Medium
              <MdOutlineArrowOutward
                className="inline-block ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-00 leading-p3
        lg:text-p
        text
        font-SuisseWorks
        font-regular
    "
              />
            </Link>
            <br />
            <br />
            Brief: Design a 60-second video that highlights the unique
            characteristics and personality of your typeface in the context of
            its use and in relation to its larger type family, if that exists.
            Take advantage of time and motion in visually describing and
            comparing the various forms and attributes of your typeface.
            <br />
            <br />
            Process incomplete. Last update:{" "}
            <span className="font-Suisse font-semibold"> 29 Dec 2024 </span>
          </div>
        }
        myRole={myRole}
        timeline="Nov 2024"
        members={members}
        tools={tools}
      />
      {/* <DividerLine text="Project Brief" /> */}
      <DividerLine text="Process" />
      {/* <Header text={"See the medium post here."} /> */}
      <New3 />
      <div className="lg:pt-[3rem]">
        {" "}
        <New3
          img1={"/imgs/typographyAnimation/FINALSPREAD.jpeg"}
          text1={
            <div>
              Final magazine spread for my typeface, <i>Athelas</i>.
              <br />
              Spread process on{" "}
              <Link
                href="https://medium.com/@vivianastaicu05/project-1-0d94c96c3675"
                className="relative group underline"
              >
                Medium.
                <MdOutlineArrowOutward
                  className="inline-block ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-00 leading-p3
        lg:text-p
        text
        font-SuisseWorks
        font-regular
    "
                />
              </Link>
            </div>
          }
        />
      </div>
    </main>
  );
}

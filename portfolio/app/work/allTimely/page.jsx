"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Title from "../../_components/Title";
import Context from "../../_components/Context";
import Context2 from "../../_components/Context2";
import CoverYAML from "../../_components/CoverYAML";
import CoverYAMLVideo from "../../_components/CoverYAMLVideo";
import Challenges from "../../_components/Challenges";
import Callout from "../../_components/Callout";
import Solution from "../../_components/Solution";
import ImageGrid1 from "../../_components/ImageGrid1";
import ImageGridTest from "../../_components/ImageGridTest";
import ImageGrid2 from "../../_components/ImageGrid2";
import ImageGrid3 from "../../_components/ImageGrid3";
import ImageGrid4 from "../../_components/ImageGrid4";
import ImageGrid5 from "../../_components/ImageGrid5";
import CircleSect from "../../_components/CircleSect";
import YAMLBar from "../../_components/YAMLBar";
import DividerLine from "../../_components/DividerLine";
import { MdOutlineArrowOutward } from "react-icons/md";

import "../../_components/greyBGLines.css";
import Footer from "../../_components/Footer";

export default function Liminal() {
  const members = [
    
  ];
  const tools = ["Python", "CMU Graphics Library"];
  const myRole = "Digital Design & Development";

  
  // A realm where the very essence of self and time finds itself in flux.
  return (
    <main className=" block px-4">
      <Title
        text1={
          <div>
            Golden Contact, <br /> a prototyping tool crafted to the golden
            ratio.
          </div>
        }
      />

      {/* Role: Interaction Design, 3D Web Development, UI/UX Immersive Experiences" ? */}
      <YAMLBar
        client="15-112"
        year="2024"
        role="Development, Interaction Design"
      />
      <CoverYAML />
      <Context2
        context={
          <div>
            
            <a
              className="hover:text-mwsGrey"
              href="/assets/AllTimely_Deck.pdf"
              alt="alt text"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deck
            </a>
            <br />
            <br />
            Process to be added.
            <br />
            Last update:{" "}
            <span className="font-Suisse font-semibold">
              {" "}
              17 November 2024{" "}
            </span>
          </div>
        }
        myRole={myRole}
        members={members}
        tools={tools}
      />
      {/* <DividerLine text="Project Brief" /> */}
      {/* <Context
        text1="Link"
        text2={
          <div>
            <Link
              href="https://www.cs.cmu.edu/~112-n24/notes/tp-assignment.html#Project%20Options"
              className="relative group underline"
            >
              link
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
      /> */}
    </main>
  );
}

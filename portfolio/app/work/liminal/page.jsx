"use client"
import React, { useState, useEffect, useRef } from "react";
import Title from "../../_components/Title"
import Context from "../../_components/Context";
import Context2 from "../../_components/Context2";
import Context4 from "../../_components/Context4";
import CoverYAML from "../../_components/CoverYAML";
import Challenges from "../../_components/Challenges";
import Header from "../../_components/Header";
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
import New from "../../_components/New";
import Image from "next/image";
import UnderDevelopment from "../../_components/UnderDevelopment"

import "../../_components/greyBGLines.css";
import Footer from "../../_components/Footer";
import Head from "next/head";

export default function Liminal() {
  const members = [
    "Yon Maor",
    "Stacy Chen",
    "Chris Song",
    "Ayden Xu",
    "Ervin Song",
    "Eric Lin",
    "Minsung Kang",
  ];
  const tools = [
    "Three.js",
    "React Three Fiber",
    "Figma",
    "Blender"
  ]
  const myRole = "Creative Direction, Digital Design & Development";


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
            LIMINAL, <br /> A realm where the very essence of self and time
            finds itself in flux.
          </div>
        }
      />

      {/* Role: Interaction Design, 3D Web Development, UI/UX Immersive Experiences" ? */}
      <YAMLBar
        client="Lunar Gala"
        year="2024"
        role="Interaction Design, 3D Web Development, Creative Direction"
      />
      <CoverYAML />
      <Context2
        context={
          <div>
            Lunar Gala (LG) is Pittsburgh’s largest annual fashion show. The
            entirely student-run show harnesses the diverse creative talents of
            CMU—including designers, models, photographers, animators, and
            dancers. <br /> <br /> I worked amongst 7 others both designing and
            developing the show’s website on the creative web team. It documents
            the lines, members, ticketing all in line with the year&apos;s
            visual identity: <i>Liminality</i>
          </div>
        }
        myRole={myRole}
        members={members}
        tools={tools}
      />
      <DividerLine text="Defining the Problem" />
      <Context
        text1="Problem Space"
        text2={
          <div className="">
            Before ideating, we had to establish constraints. How does LG{" "}
            <i className=" text-offBlack">interpret</i> the concept of
            Liminality? How does that{" "}
            <i className="font-SuisseWorks text-offBlack">
              translate to digital interactions?
            </i>
            <br />
            <br />
            <div className="text-offBlack">
              We define Liminality as &quot;neither here nor there,&quot; a
              place that is temporary—fleeting even. It is a transitional stage…
              Liminality is the space between spaces. We chose to employ
              feelings of{" "}
              <i className="font-SuisseWorks text-offBlack">
                “the space between spaces”
              </i>{" "}
              , where time cannot be measured. A sense of infinite space is
              created in each “room.” The Backrooms, one primal cultural example
              of liminality, was one of a few of our early influences.
            </div>
            <br />
            <div className="text-offBlack">
              Our challenge was to achieve Liminality through the form,
              function, and interaction of the website.
            </div>
          </div>
        }
      />
      

      {/* <DividerLine text={"CHALLENGES"} />  */}

      <Header text={"What form language creates a liminal space?"} />

      <New
        img1={"/imgs/homeGif.gif"}
        text1={
          "The home page is a transitory white void hosting each space: Time moves in an infinite loop, and when the user wants to enter a page, they enter the “space between spaces” — neither here nor there, they are “in-between” time, and can reside in that page as long as they hold the mouse. This forced interaction was integral to evoking the feeling of temporality established in our initial definition."
        }
      />
      <New
        img1={"/imgs/peoplePage.png"}
        text1={
          "The people page creates a sort of “infinity scroll” of cards representing each LG member. This emphasizes liminality and at the same time emphasizes the great mass of talents a part of making the show possible."
        }
      />
      <New
        img1={"/imgs/linesPage.png"}
        text1={
          "The lines page translates the physicality of the liminality within spaces by emulating an infinitely long fashion runway in 3D. Instead of flipping magazine-like pages, we transformed the interaction by creating depth a user must walk through using mouse position. The endless nature of the runway is innately liminal."
        }
      />

      <Header text={"A transitory site architecture."} />
      <New
        img1={"/imgs/lg-site-diagram-offwhite.png"}
        text1={
          "The visual language and interaction design would suffer if the entire site’s mapping wasn’t transitory. This required us to establish new terms to avoid miscommunication when discussing such abstract ideas during team meetings: “Capital-L Liminal” and “liminal“liminal”—zone C—is liminality in its form—its visual language. Visual cues such as endless tunnels, negative space, and the like. “Capital-L Liminal”—zone B—is literally a liminal space—it does not exist and its only purpose is to transport the user to another space. The home page serves this purpose—it is a navigation hub as discussed earlier where time is an infinite loop. However, it is also “liminal” visually."
        }
      />
      <UnderDevelopment
        text={
          <p>
            process under dev.
            <br /> last update 14 Nov 2024.
          </p>
        }
      />
    </main>
  );
}

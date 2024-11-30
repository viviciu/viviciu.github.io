"use client";
import React, { useState, useEffect, useRef } from "react";
import Title from "../../_components/Title";
import Context from "../../_components/Context";
import Context2 from "../../_components/Context2";
import Context4 from "../../_components/Context4";
import CoverYAML from "../../_components/CoverYAML";
import Header from "../../_components/Header";
import YAMLBar from "../../_components/YAMLBar";
import DividerLine from "../../_components/DividerLine";
import New from "../../_components/New";
import New2 from "../../_components/New2";
import New3 from "../../_components/New3";
import New4 from "../../_components/New4";
import Image from "next/image";
import Link from "next/link"
import UnderDevelopment from "../../_components/UnderDevelopment";
import { MdOutlineArrowOutward } from "react-icons/md";
import Head from "next/head";

export default function Liminal() {
  const members = [];
  const tools = ["InDesign", "Photoshop", "Illustrator"];
  const myRole = "Graphic Design";
  const timeline = "4 weeks";

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
            Visual Hierarchy Flyer, <br /> an exercise in typographic variables
            that can be used to define hierarchy.
          </div>
        }
      />

      {/* Role: Interaction Design, 3D Web Development, UI/UX Immersive Experiences" ? */}
      <YAMLBar
        client="Communications Mini"
        year="2024"
        role="Graphic Design, Type Design, Branding"
      />
      <CoverYAML img={"/imgs/cminiPoster/horizontal_gradientShowcase.jpg"} />
      <Context2
        context={
          <div>
            Brief: Through a set of specific and systematic exercises, we will
            explore typographic variables in clarifying a message based on the
            content’s hierarchy. Take your time in exploring each of these
            variables, so you fully appreciate what they can do. Take the time
            to look, analyze the results, and respond.
          </div>
        }
        myRole={myRole}
        members={members}
        tools={tools}
        timeline={timeline}
      />
      <DividerLine text="Process" />
      {/* <Header text={"See the medium post here."} /> */}
      <New3 />
      <div className="lg:pt-[3rem]">
        {" "}
        <New3
          img1={"/imgs/cminiPoster/Staicu_Viviana_finalDirtyDozen.jpg"}
          text1={
            <div>
              Full process blog on{" "}
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
              <br />
              Final poster.
            </div>
          }
        />
      </div>

      {/* text1={
          "Creating hierarchy through only proximity (L) and alignment (R)."
        } */}
      <New3 img1={"/imgs/cminiPoster/sidebyside.png"} />
      {/* text1={
          "Establishing point size relationships using the golden section."
        } */}
      <New3 img1={"/imgs/cminiPoster/goldenRatio_fittingGridModules.png"} />
      {/* text1={"Scale and color explorations."} */}
      <New3
        img1={
          "/imgs/cminiPoster/102824_hierarchy_scale&color_explorations-larger.png"
        }
      />
      <New3 img1={"/imgs/cminiPoster/103124_hierarchy-3imagesSpread.jpg"} />
      <New3 img1={"/imgs/cminiPoster/photo_9_spread.jpg"} />
      <New3 img1={"/imgs/cminiPoster/goldenRatio_spread.jpg"} />

      <DividerLine text="Reflection" />

      {/* Embraced Critical Feedback: Stepped out of my comfort zone by actively seeking and applying critique, leading to significant personal and project breakthroughs.
Design Fundamentals Mastery: Deepened understanding of hierarchy principles—scale, proximity, alignment, color, and contrast—emphasizing intentional, minimal use for effective design.
User-Centric Research: Conducted sensory observations and audience interviews to align project goals with user needs, emphasizing the importance of audience understanding.
Structured Process: Leveraged a structured workflow (Familiarize, Develop, Refine) to maintain clarity and momentum throughout the project.
Image and Grid Dynamics: Explored the interaction of image and grid in composition, focusing on preventing conflicts with typographic hierarchy and ensuring visual harmony. */}

      <Header text={"New learnings"} />
      <div className="lg:grid lg:grid-cols-4 gap-[4rem] lg:pb-[14rem] pb-[5rem]">
        <New4
          text1={
            <div>
              <div>
                <strong className="text-black">
                  Embracing Critical Feedback:{" "}
                </strong>
                I stepped out of my comfort zone by actively seeking and
                applying critique, I&apos;ve consistently found it&apos;s the
                one on one moments where I have the biggest breakthroughs.
              </div>
            </div>
          }
        />
        <New4
          text1={
            <div>
              <strong className="text-black">
                Understanding hierarchy principles:
              </strong>{" "}
              I learned that the fundamentals of hierarchy—scale, proximity,
              alignment, color, contrast, stroke weight, enter/exit—are
              incredibly powerful, and should be used in moderation and with
              careful intention. Less is more.
            </div>
          }
        />
        <New4
          text1={
            <div>
              <strong className="text-black">User-Centric Research:</strong>{" "}
              Writing out what my five senses detected during my event helped me
              understand the visceral emotions encapsulating the race. Along
              with interviewing spectators and racers, you cannot skip
              understanding your audience and what you aim to communicate to
              them to meet a specific goal.
            </div>
          }
        />
        <New4
          text1={
            <div>
              <strong className="text-black">Developed my process:</strong>{" "}
              Having structure to this project with the Familiarize, Develop,
              Refine was incredibly helpful for me to find security in my
              process and not go backwards.
            </div>
          }
        />
      </div>

      {/* <div>
            I found myself enjoying this project more than I’d expected. I got
            out of my comfort zone this project (and year overall) by asking for
            as much critical feedback as I could. It made the work harder
            because all its shortcomings became apparent, but I’ve consistently
            found it’s the 1-1 moments where I have the biggest breakthroughs.
            Not asking for help and crit means staying ignorant—one of the most
            beautiful things about design school is crit. It’s a privilege you
            can’t have that anywhere else.
            <br />
            <br />
            Apart from personal development, I learned that the fundamentals of
            hierarchy—scale, proximity, alignment, color, contrast, stroke
            weight, enter/exit—are incredibly powerful, and should be used in
            moderation and with careful intention. Less is more.
            <br />
            <br />
            Writing out what my five senses detected during my event helped me
            understand the visceral emotions encapsulating the race. Along with
            interviewing spectators and racers, (“What brought you here? How did
            you find out?”), you cannot skip understanding your audience and
            what you aim to communicate to them (appeal of climbing 13 hills) to
            meet a specific goal (attracting participants). We understand this
            as the “Familiarization” phase. Having structure to this project
            with the Familiarize, Develop, Refine and the medium prompts was
            incredibly helpful for me to find security in my process and not go
            backwards.
            <br />
            <br />I also learned that the way image and grid influences a
            composition is a form of hierarchy in itself. An image can combat
            communication or type in two ways: 1. It sends the wrong
            connotations, or 2. It’s composition influences the enter/exit or
            read of a page in a direction that fights the typographic hierarchy.
            Choosing an image first and evaluating what it speaks to your
            intended audience cannot be overlooked. I learned that if you’re
            image-making, considering how a graphic will fit with information in
            tandem is very important to avoid conflicting contrasts or flow is
            key. That information should be already has established which
            content goes with what, and in which order.
          </div> */}

      {/* insert context4 here to begin. */}
    </main>
  );
}

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
import Link from "next/link";
import UnderDevelopment from "../../_components/UnderDevelopment";
import { MdOutlineArrowOutward } from "react-icons/md";
import Head from "next/head";

export default function Liminal() {
  const members = [];
  const tools = ["Touchdesigner"];
  const myRole = "Procedural Animation";
  const timeline = "2 weeks";




  // A realm where the very essence of self and time finds itself in flux.
  return (
    <main className=" block px-4">
      <Title
        text1={
          <div>
            TouchDesigner Experiments, <br /> my explorations into procedural
            animation.
          </div>
        }
      />

      {/* Role: Interaction Design, 3D Web Development, UI/UX Immersive Experiences" ? */}
      <YAMLBar client="Self" year="2024" role="Procedural Animation" />
      <CoverYAML img={"/imgs/play/BannanaVHS-optimize.gif"} />
      <Context2
        context={<div>Started exploring late Novemeber 2024.</div>}
        myRole={myRole}
        members={members}
        tools={tools}
        timeline={timeline}
      />


      <New3 />
      <div className="lg:pt-[3rem]">
        {" "}
        <New3
          img1={"/imgs/play/111524_firstTouchdesignerTourus.gif"}
          caption={"Using noise as data to displace geometry."}
        />
      </div>
      <New3
        img1={"/imgs/play/BannanaVHS-optimize.gif"}
        caption={"Displacing geometry via time as data."}
      />
      <New3 img1={"/imgs/touchDesigner/process_bannana.png"} />
      <New3 img1={"/imgs/touchDesigner/process_bannana_02.png"} />


      {/* <DividerLine text="Reflection" />
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
      </div> */}

    
    </main>
  );
}

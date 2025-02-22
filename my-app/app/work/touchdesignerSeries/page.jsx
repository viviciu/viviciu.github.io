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
import New3Video from "../../_components/New3Video";
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
  const timeline = "";


// test

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
      <CoverYAML
        img={
          "https://image.mux.com/EWeOGWvhBZ79DwTqSLKtR02F19MmWBk1xQZEN01hTLny00/animated.gif?width=600"
        }
      />
      {/* "/imgs/play/BannanaVHS-optimize.gif" */}
      
    </main>
  );
}

"use client";
import React, { useState, useEffect, useRef } from "react";
import Title from "../../_components/Title";
import New3VideoCoudinary from "../../_components/New3VideoCloudinary"
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

      <YAMLBar client="Self" year="2024" role="Procedural Animation" />
      {/* "https://image.mux.com/EWeOGWvhBZ79DwTqSLKtR02F19MmWBk1xQZEN01hTLny00/animated.gif?width=600" */}

      {/* COVER YAML EXPANDED */}
      <main className=" pb-[5.06rem]">
        <div className="h-fit w-full">
          <video className="w-full h-auto" autoPlay loop muted playsInline>
            <source
              src={
                "https://res.cloudinary.com/ddjxpkewq/video/upload/f_mp4,q_auto/v1/touchdesigner/tn1qnhqpbextyksfdpvk"
              }
              type="video/mp4"
            />
          </video>
        </div>
      </main>

      <Context2
        context={
          <div>
            Explorations into procedural animation since Novemeber 2024.
          </div>
        }
        myRole={myRole}
        members={members}
        tools={tools}
        timeline={timeline}
      />

      <New3VideoCoudinary
        src={
          "https://res.cloudinary.com/ddjxpkewq/video/upload/f_mp4,q_auto/v1/touchdesigner/tn1qnhqpbextyksfdpvk"
        }
        text1={
          <div>
            Experiments with mapping audio waveform normals onto geometry in
            touchdesigner, being my first time giving generative design a shot,
            I feel like half creator half viewer in the process. it&apos;s this
            odd give to the computer take from the computer I can&apos;t really
            compare to anything else.
            <br />
            .
            <br />
            Audio: A Time of Quiet Between Storms, Hans Zimmer
            <br />
            <br />
            January, 2025.
          </div>
        }
      />

      <p>BELOW: video under f_mp4 codec </p>
      <video controls>
        <source
          src={
            "https://res.cloudinary.com/ddjxpkewq/video/upload/f_mp4,q_auto/v1/pmini/ebwqu7ijxeh3vm6qklkr"
          }
          type="video/mp4"
        />
      </video>
      <p>BELOW: video under f_mpeg </p>
      <video controls>
        <source
          src={
            "https://res.cloudinary.com/ddjxpkewq/video/upload/f_mov,q_auto/v1/pmini/ebwqu7ijxeh3vm6qklkr"
          }
          type="video/mp4"
        />
      </video>
      <p>BELOW: video under f_mpeg LOOPED</p>
      <video autoPlay loop muted playsInline>
        <source
          src={
            "https://res.cloudinary.com/ddjxpkewq/video/upload/f_mov,q_auto/v1/pmini/ebwqu7ijxeh3vm6qklkr"
          }
          type="video/mp4"
        />
      </video>

      <p>BELOW: video under f_mp4 codec, autoPlay loop muted playsInLine </p>
      <video autoPlay loop muted playsInline>
        <source
          src={
            "https://res.cloudinary.com/ddjxpkewq/video/upload/f_mp4,q_auto/v1/pmini/ebwqu7ijxeh3vm6qklkr"
          }
          type="video/mp4"
        />
      </video>
    </main>
  );
}

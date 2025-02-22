"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import Title from "../../_components/Title";
import Context from "../../_components/Context";
import Context2 from "../../_components/Context2";
import CoverYAMLVideo from "../../_components/CoverYAMLVideo";
import YAMLBar from "../../_components/YAMLBar";
import DividerLine from "../../_components/DividerLine";
import New3 from "../../_components/New3";
import { MdOutlineArrowOutward } from "react-icons/md";
import Header from "../../_components/Header";
import New3Grid from "../../_components/New3Grid";


export default function TypographyAnimation() {
  const members = [
    
  ];
  const tools = ["After Effects"];
  const myRole = "Motion Designer";

  // A realm where the very essence of self and time finds itself in flux.
  return (
    <main className=" block px-4">
      {/* <New3Grid
        img1={
          "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/cmini/newtonPhysicsProcess_spedup-ezgif.com-video-to-gif-converter.gif"
        }
      />
      <New3Grid
        img1={
          "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/cmini/BannanaVHS-17MB.gif"
        }
      /> */}
      {/* <New3Grid
        img1={
          "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/cmini/DSC03294.JPG"
        }
      />
      <CldImage
        width="500"
        height="500"
        src="https://res.cloudinary.com/ddjxpkewq/image/upload/v1740195093/mp9gfodkqr95ibp8kxzd.jpg"
        alt="Description of my image"
      /> */}
      {/* <video autoPlay loop muted playsInLine>
        <source src="/my-animation.webm" type="video/webm" />
        <source src="/my-animation.mp4" type="video/mp4" />
      </video>
      <Image
        src="/imgs/play/BannanaVHS-optimize.gif"
        alt="home page image"
        layout="responsive"
        width={500}
        height={500}
      />
      <video autoPlay loop muted playsInline>
        <source src="/C0336-toss-cyllinder-in-air.webm" type="video/webm" />
      </video> */}
      <video autoPlay loop muted playsInline>
        <source
          src="https://res.cloudinary.com/ddjxpkewq/video/upload/f_auto:video,q_auto/hj5ubpdzifbo5fqed9hw"
          type="video/webm"
        />
      </video>
      {/* NOTE: IF WEBM IS STORED LOCALLY, IT FAILS. IF IT IS A WEBM RENDERED BY CLOUDINARY, IT WORKS. */}
      <video autoPlay loop muted playsInline>
        <source
          src="/my-animation.webm"
          type="video/webm"
        />
      </video>
    </main>
  );
}

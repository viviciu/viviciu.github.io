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
      <New3Grid
        img1={
          "https://res.cloudinary.com/ddjxpkewq/image/upload/f_auto,q_auto/mp9gfodkqr95ibp8kxzd"
        }
      />
      <video autoPlay loop muted playsInLine>
        <source
          src="https://res.cloudinary.com/ddjxpkewq/video/upload/f_auto:video,q_auto/xij1gucxemxw0iofndvz"
          type="video/webm"
        />
      </video> */}
      {/* <video autoPlay loop muted controls>
        <source
          src="https://res.cloudinary.com/ddjxpkewq/video/upload/f_auto:video,q_auto/xij1gucxemxw0iofndvz"
          type="video/webm"
        />
      </video>
      <video autoPlay loop muted controls>
        <source
          src="https://res.cloudinary.com/ddjxpkewq/video/upload/q_50/f_webm,q_auto/zrdmocuo5carvjutowxl"
          type="video/webm"
        />
      </video> */}
      {/* <div className="w-1/2">
        <video autoPlay muted controls>
          <source
            src="https://res.cloudinary.com/ddjxpkewq/video/upload/q_50/f_webm/tbhvrfzlvqzu7olhwbrq"
            type="video/webm"
          />
        </video>
        <video autoPlay muted controls>
          <source
            src="https://res.cloudinary.com/ddjxpkewq/video/upload/q_20/f_webm/tbhvrfzlvqzu7olhwbrq"
            type="video/webm"
          />
        </video>
        <video autoPlay muted controls>
          <source
            src="https://res.cloudinary.com/ddjxpkewq/video/upload/c_scale,h_500/f_webm,q_auto/rpr5acf37fpxqurcxm5l"
            type="video/webm"
          />
        </video> */}
      {/* 8MB JPEG */}
      <p className="mt-16">8MB JPEG</p>
      <img
        src="https://res.cloudinary.com/ddjxpkewq/image/upload/f_webp,q_auto/ccimstmukagcltzhzgzb"
        alt="home page image"
        layout="responsive"
        width={500}
        height={500}
      />
      {/* 750KB WEBP */}
      <p>750KB WEBP</p>
      <img
        src="https://res.cloudinary.com/ddjxpkewq/image/upload/f_webp,q_auto/xwfcgcf0kwaufm2dscsc"
        alt="home page image"
        layout="responsive"
        width={500}
        height={500}
      />
      <p>LOCAL 750KB WEB</p>
      {/* LOCAL 750KB WEBP */}
      <img src="/compressed_edit-03512-3.webp" />

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
      {/* <video autoPlay loop muted playsInline>
        <source
          src="https://res.cloudinary.com/ddjxpkewq/video/upload/f_auto:video,q_auto/hj5ubpdzifbo5fqed9hw"
          type="video/webm"
        />
      </video> */}
      {/* NOTE: IF WEBM IS STORED LOCALLY, IT FAILS. IF IT IS A WEBM RENDERED BY CLOUDINARY, IT WORKS. */}
      <img
        src="https://res.cloudinary.com/ddjxpkewq/image/upload/f_auto,q_auto/v1/play/fyiw6cyrqbriysugmqgc"
        alt="home page image"
        layout="responsive"
        width={500}
        height={500}
      />
      <video autoPlay loop muted playsInline>
        <source
          src="https://res.cloudinary.com/ddjxpkewq/video/upload/f_auto:video,q_auto/v1/play/gla0hqfer8yzhpquznw2"
          type="video/mp4"
        />
      </video>

      {/* TESTS FROM TOUCHDESIGNER PAGE ON 022225 */}
      <p>BELOW: video under f_mp4 codec </p>
      <video controls>
        <source
          src={
            "https://res.cloudinary.com/ddjxpkewq/video/upload/f_mp4,q_auto/v1/pmini/ebwqu7ijxeh3vm6qklkr"
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

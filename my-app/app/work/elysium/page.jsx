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
import New2 from "../../_components/New2";
import New3 from "../../_components/New3";
import Image from "next/image";
import UnderDevelopment from "../../_components/UnderDevelopment"
import "../../_components/greyBGLines.css";
import Footer from "../../_components/Footer";
import Head from "next/head";
import New3VideoCloudinaryAutoplayLoop from "@/app/_components/New3VideoCloudinaryAutoplayLoop";
import New3VideoAWS from "@/app/_components/New3VideoAWS";

import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";

export default function Liminal() {
  const members = [
    "Suyeon Cha",
    "Suanna Zhong",
    "Margaret He",
    "Xiao Yuan",
    "Serena Cai",
    "Kaitlyn Ng",
    "Lucy Wang",
  ];
  const tools = ["Three.js", "GLSL", "Touchdesigner", "After Effects","UX | UI", "Figma"];
  const myRole = "Co-head, Creative Technologist";
  const timeline = "6 months"


  
  // A realm where the very essence of self and time finds itself in flux.
  return (
    <>
      <main className="block px-4">
        <section>
          <Title
            text1={
              <div>
                ELYSIUM, <br /> Paradise is not a place, it is the act of
                becoming.
              </div>
            }
          />
          <YAMLBar
            client="Lunar Gala"
            year="2025"
            role="Co-head of Web, Creative Technologist"
          />
          {/* COVER YAML EXPANDED */}
          <main className=" pb-[5.06rem]">
            <div className="h-fit w-full">
              <video className="w-full h-auto" autoPlay loop muted playsInline>
                <source
                  src={
                    "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/elysium/compressed_Elysium_cover_portfolio-trim.mov.webm"
                  }
                  type="video/webm"
                />
              </video>
            </div>
          </main>
          <Context2
            context={
              <div>
                <Link
                  href="https://2025.lunargala.org"
                  className="relative group underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit site
                  <MdOutlineArrowOutward
                    className="inline-block ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-00 leading-p3
        lg:text-p
        text
        font-SuisseWorks
        font-regular
    "
                  />
                </Link>
                <br /> <br />
                Lunar Gala (LG) is Pittsburgh&apos;s largest annual fashion
                show. It&apos;s website features the model lines, members, and
                ticketing all in line with this year&apos;s visual identity:{" "}
                <i>Elysium</i>
                .
                <br /> <br /> I creatively directed and facilitated
                cross-functional collaboration in a team of 4 designers and 5
                devs. Lead concept design, interaction, and UI | UX for
                Pittsburgh&apos;s largest fashion show&apos;s website.
                <br /> <br />I designed and developed the site&apos;s home page
                GLSL particles to create a library of different particle
                behaviors to fit with this year&apos;s identity, and the UI
                motion.
                {/* TODO include blurb about archive */}
              </div>
            }
            myRole={myRole}
            members={members}
            tools={tools}
            timeline={timeline}
          />
        </section>

        {/* NEW SECTION */}
        <section>
          <DividerLine text={"HOME: GLSL Particle system"} />
          <Header text={"How can particle motion encapsulate each act?"} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <div className="">
              <video autoPlay loop muted playsInline className="pt-2 w-[800px]">
                <source
                  src={
                    "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/elysium/030425/act-emergence.mov.webm"
                  }
                  type="video/webm"
                />
              </video>
              <p className="pt-2 m:pt-4">
                <span className="font-bold">Act I: Emergence</span>
                <br /> <br />
                The dawn of your journey, brimming with hope, passion, and
                light. Untouched by the world’s challenges, yet poised to
                embrace it all.
              </p>
            </div>
            <div className="">
              <video autoPlay loop muted playsInline className="pt-2">
                {/* OLD "https://res.cloudinary.com/ddjxpkewq/video/upload/f_auto:video,q_auto/v1/elysium/peypqarqejx6fezrlawh" */}
                <source
                  src={
                    "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/elysium/030425/act-blossom.mov.webm"
                  }
                  type="video/webm"
                />
              </video>
              <p className="pt-2 m:pt-4">
                <span className="font-bold">Act II: Blossom</span> <br /> <br />
                In the early steps of your journey, you flourish and grow. You
                conquer the new horizons, and you can see yourself blooming into
                the person you have always wanted to be.
              </p>
            </div>
            <div className="">
              <video autoPlay loop muted playsInline className="pt-2">
                <source
                  src={
                    "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/elysium/030425/act-embrace-900.webm"
                  }
                  type="video/webm"
                />
              </video>
              <p className="pt-2 m:pt-4">
                <span className="font-bold">Act IV: Embrace</span> <br /> <br />
                You have walked far, encountering all the pitfalls and flaws of
                the world, therefore exposing the flaws of you. You have come to
                realize there is never an end to your journey, but you have come
                to embrace it.
              </p>
            </div>
          </div>
        </section>

        {/* NEW SECTION - SHOWCASE */}
        <section>
          <div className="h-[10rem]"></div>
          <DividerLine text={"assets"} />
          <div className="h-[3.33rem]"></div>
          <section className="w-full flex flex-wrap gap-[0.5rem]">
            <div className="w-full gap-[0.5rem] flex justify-end">
              <div className="w-[33%] h-auto">
                <video className="" controls autoplay playsInline>
                  <source
                    src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/elysium/comp_webLaunchReel-v3-wordmark.mp4.webm"
                    type="video/webm"
                  />
                </video>
                <p className="flex justify-center text-offBlack3">
                  Site launch promo reel
                </p>
              </div>
              <div className="w-[66%] h-auto">
                {/* CLOUDINARY */}
                <video className="w-full" controls autoplay playsInline muted>
                  <source
                    src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/elysium/compressed_xiao-preloader-4_1_2-800px.mp4.webm"
                    type="video/webm"
                  />
                </video>
                <p className="flex justify-center text-offBlack3">
                  Site preloader — Touchdesigner
                </p>
              </div>
            </div>
            <div className="w-full gap-[0.5rem] flex justify-start">
              <div className="w-[66%] h-auto">
                {/* CLOUDINARY */}
                <video className="" controls autoplay playsInline muted>
                  <source
                    src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/elysium/compressed_archive_preloader.mov.webm"
                    type="video/webm"
                  />
                </video>
                <p className="flex justify-center text-offBlack3">
                  Conceptual archive preloader
                </p>
              </div>
              <div className="w-[33%] h-auto">
                <video autoPlay loop muted playsInline className="w-full">
                  <source
                    src={
                      "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/elysium/anim01-modelline.webm"
                    }
                    type="video/webm"
                  />
                </video>
              </div>
            </div>
            <div className="w-full gap-[0.5rem] flex justify-start">
              <video autoPlay loop muted playsInline className="w-full">
                <source
                  src={
                    "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/elysium/compressed_anim02-acts.mov.webm"
                  }
                  type="video/webm"
                />
              </video>
            </div>
            <div className="w-full gap-[0.5rem] flex justify-start">
              <div className="w-full h-auto">
                <Image
                  src={
                    "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/elysium/020725_navIterations.png"
                  }
                  layout="responsive"
                  height={500}
                  width={500}
                />
              </div>
            </div>
          </section>
        </section>

        <section>
          <div className="h-[10rem]"></div>
          <DividerLine text={"PROCESS"} />
          <div className="h-[3.33rem]"></div>
          {/* NEW SECTION -  GRID */}
          <div
            className="w-full mx-auto lg:columns-3 sm:columns-2 lg:gap-[0.5rem] space-y-[0.5rem] gap-3 place-content-center
          "
          >
            <Image
              src={
                "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/elysium/particles-V5-crop.png"
              }
              height={500}
              width={500}
            />
            <Image
              src={
                "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/elysium/compressed_HomeIterations-1.png.webp"
              }
              height={500}
              width={500}
            />
            <Image
              src={
                "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/elysium/compressed_HomeIterations-4.png.webp"
              }
              height={500}
              width={500}
            />
            <Image
              src={
                "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/elysium/compressed_HomeIterations-5.png.webp"
              }
              height={500}
              width={500}
            />
            <Image
              src={
                "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/elysium/actChangeAnimationSequence.png"
              }
              height={500}
              width={500}
            />
            <Image
              src={
                "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/elysium/particles-v3-crop.png"
              }
              height={500}
              width={500}
            />
            <video autoPlay loop muted playsInline>
              <source
                src={
                  "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/elysium/compressed_particlesZoomedIn-interaction-experiment-trim.mov.webm"
                }
                type="video/webm"
              />
            </video>
            <video autoPlay loop muted playsInline>
              <source
                src={
                  "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/elysium/compressed_glsl-experiments-1.mov.webm"
                }
                type="video/webm"
              />
            </video>
            <video autoPlay loop muted playsInline>
              <source
                src={
                  "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/elysium/compressed_glsl-experiments-2.mov.webm"
                }
                type="video/webm"
              />
            </video>
            <video autoPlay loop muted playsInline>
              <source
                src={
                  "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/elysium/compressed_glsl-experiments-3.mov.webm"
                }
                type="video/webm"
              />
            </video>
          </div>
        </section>
      </main>
    </>
  );
}

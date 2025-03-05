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
  const tools = ["Three.js", "GLSL", "Touchdesigner", "UX | UI", "Figma"];
  const myRole = "Co-head, Creative Technologist";
  const timeline = "6 months"


  
  // A realm where the very essence of self and time finds itself in flux.
  return (
    <>
      <main className=" block px-4">
        <Title
          text1={
            <div>
              ELYSIUM, <br /> Paradise is not a place, it is the act of
              becoming.
            </div>
          }
        />

        {/* Role: Interaction Design, 3D Web Development, UI/UX Immersive Experiences" ? */}
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
                  "https://res.cloudinary.com/ddjxpkewq/video/upload/f_auto:video,q_auto/v1/elysium/lx2pjp7hndviaxq2pjwv"
                }
                type="video/mp4"
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
              Lunar Gala (LG) is Pittsburgh&apos;s largest annual fashion show.
              It&apos;s website features the model lines, members, and ticketing
              all in line with this year&apos;s visual identity: <i>Elysium</i>
              .
              <br /> <br /> I creatively directed and facilitated
              cross-functional collaboration in a team of 4 designers and 5
              devs. Lead concept design, interaction, and UI | UX for
              Pittsburgh&apos;s largest fashion show&apos;s website.
              <br /> <br />I designed and developed the site&apos;s home page
              GLSL particles to create a library of different particle behaviors
              to fit with this year&apos;s identity, and the UI motion.
              {/* TODO include blurb about archive */}
            </div>
          }
          myRole={myRole}
          members={members}
          tools={tools}
          timeline={timeline}
        />

        <DividerLine text={"HOME: GLSL Particle system"} />

        <Header text={"How can particle motion encapsulate each act?"} />

        {/* PROJ CONTENT 01 */}
        {/* <div>
          <New3VideoCloudinaryAutoplayLoop
            src={
              "https://res.cloudinary.com/ddjxpkewq/video/upload/f_auto:video,q_auto/v1/elysium/b3wfxabgpgpm7z9gsw6w"
              // https://res.cloudinary.com/ddjxpkewq/video/upload/f_auto:video,q_auto/v1/elysium/ygpilt8rzxvf4kqj3nyp
              //
            }
            caption={""}
            text1={
              <div>
                Act I: Emergence <br /> <br />
                The dawn of your journey, brimming with hope, passion, and
                light. Untouched by the world’s challenges, yet poised to
                embrace it all.
              </div>
            }
          />
          <New3VideoCloudinaryAutoplayLoop
            src={
              "https://res.cloudinary.com/ddjxpkewq/video/upload/f_auto:video,q_auto/v1/elysium/peypqarqejx6fezrlawh"
            }
            caption={""}
            text1={
              <div>
                Act II: Blossom <br /> <br />
                In the early steps of your journey, you flourish and grow. You
                conquer the new horizons, and you can see yourself blooming into
                the person you have always wanted to be.
              </div>
            }
          />
          <New3VideoCloudinaryAutoplayLoop
            src={
              "https://res.cloudinary.com/ddjxpkewq/video/upload/f_auto:video,q_auto/v1/elysium/d05qjnyo3ahj9quokazr"
              // https://res.cloudinary.com/ddjxpkewq/video/upload/f_auto:video,q_auto/v1/elysium/ygpilt8rzxvf4kqj3nyp
              //
            }
            caption={""}
            text1={
              <div>
                Act IV: Embrace <br /> <br />
                You have walked far, encountering all the pitfalls and flaws of
                the world, therefore exposing the flaws of you. You have come to
                realize there is never an end to your journey, but you have come
                to embrace it.
              </div>
            }
          />
        </div> */}
        {/* PROJ CONTENT 02 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <div className="">
            <video autoPlay loop muted playsInline className="pt-2 w-[800px]">
              {/* "https://res.cloudinary.com/ddjxpkewq/video/upload/f_auto:video,q_auto/v1/elysium/b3wfxabgpgpm7z9gsw6w" */}
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
              The dawn of your journey, brimming with hope, passion, and light.
              Untouched by the world’s challenges, yet poised to embrace it all.
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
              {/* OLD "https://res.cloudinary.com/ddjxpkewq/video/upload/f_auto:video,q_auto/v1/elysium/d05qjnyo3ahj9quokazr" */}
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

        <Header text={"Preloader"} />
        <New3VideoCloudinaryAutoplayLoop
          src={
            "https://res.cloudinary.com/ddjxpkewq/video/upload/f_auto:video,q_auto/v1/lg/uelohmn4ldqfkuldngoo"
          }
          caption={""}
          text1={""}
        />
        <Header text={"Archive — Under Development"} />
        <New3VideoAWS
          src={
            "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/elysium/compressed_archive_preloader.mov.webm"
          }
          caption={""}
          text1={""}
        />
        <Header text={"Process"} />
        {/* GRID */}

        <div
          className="w-full mx-auto lg:columns-3 sm:columns-2 lg:gap-[0.6rem] gap-3 place-content-center
          "
        >
          <video autoPlay loop muted playsInline className="pt-2">
            <source
              src={
                "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/elysium/anim01-modelline.webm"
              }
              type="video/webm"
            />
          </video>
          <video autoPlay loop muted playsInline className="pt-2">
            <source
              src={
                "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/elysium/compressed_anim02-acts.mov.webm"
              }
              type="video/webm"
            />
          </video>
          <Image
            className="pt-2"
            src={
              "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/elysium/compressed_HomeIterations-1.png.webp"
            }
            height={500}
            width={500}
          />
          <Image
            className="pt-2"
            src={
              "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/elysium/compressed_HomeIterations-2.png.webp"
            }
            height={500}
            width={500}
          />
          <Image
            className="pt-2"
            src={
              "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/elysium/compressed_HomeIterations-4.png.webp"
            }
            height={500}
            width={500}
          />
          <Image
            className="pt-2"
            src={
              "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/elysium/compressed_HomeIterations-5.png.webp"
            }
            height={500}
            width={500}
          />
          <Image
            className="pt-2"
            src={
              "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/elysium/actChangeAnimationSequence.png"
            }
            height={500}
            width={500}
          />
          <Image
            className="pt-2"
            src={
              "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/elysium/020725_navIterations.png"
            }
            height={500}
            width={500}
          />

          <video autoPlay loop muted playsInline className="pt-2">
            <source
              src={
                "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/elysium/compressed_glsl-experiments-1.mov.webm"
              }
              type="video/webm"
            />
          </video>
          <video autoPlay loop muted playsInline className="pt-2">
            <source
              src={
                "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/elysium/compressed_glsl-experiments-2.mov.webm"
              }
              type="video/webm"
            />
          </video>
          <video autoPlay loop muted playsInline className="pt-2">
            <source
              src={
                "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/elysium/compressed_glsl-experiments-3.mov.webm"
              }
              type="video/webm"
            />
          </video>

          <div>
            <video autoPlay loop muted playsInline className="pt-2">
              <source src={""} type="video/webm" />
            </video>
            <p>CAPTION.</p>
          </div>
        </div>
      </main>
    </>
  );
}

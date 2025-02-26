"use client"
import React, { useState, useEffect, useRef } from "react";
import Title from "../../_components/Title"
import Context2 from "../../_components/Context2";
import Header from "../../_components/Header";
import YAMLBar from "../../_components/YAMLBar";
import DividerLine from "../../_components/DividerLine";
import CalloutSmall from "@/app/_components/CalloutSmall";
import New3 from "../../_components/New3";
import Image from "next/image";
import UnderDevelopment from "../../_components/UnderDevelopment"
import "../../_components/greyBGLines.css";
import New3VideoCloudinaryAutoplayLoop from "@/app/_components/New3VideoCloudinaryAutoplayLoop";

import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";

export default function Liminal() {
  const members = [
    
  ];
  const tools = ["Figma", "Keynote", "User research"];
  const myRole = "UX/UI";
  const timeline = "4 weeks"


  
  // A realm where the very essence of self and time finds itself in flux.
  return (
    <>
      <main className=" block px-4">
        <Title
          text1={
            <div>
              Bumble Sessions, <br /> Location-based spontaneous dates to help
              users find meaningful matches.
            </div>
          }
        />

        {/* Role: Interaction Design, 3D Web Development, UI/UX Immersive Experiences" ? */}
        <YAMLBar client="Bumble — Conceptual" year="2025" role="UX/UI" />
        {/* COVER YAML EXPANDED */}
        <main className=" pb-[5.06rem]">
          <div className="h-fit w-full">
            <Image
              className="pt-2 w-full"
              src={
                "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/bumble/bubmlesessions-cover.png"
              }
              height={500}
              width={500}
            />
            {/* <video className="w-full h-auto" autoPlay loop muted playsInline>
              <source
                src={
                  "https://res.cloudinary.com/ddjxpkewq/video/upload/f_auto:video,q_auto/v1/elysium/lx2pjp7hndviaxq2pjwv"
                }
                type="video/mp4"
              />
            </video> */}
            {/* https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/bumble/bubmlesessions-cover.png */}
          </div>
        </main>

        <Context2
          context={
            <div>
              Bumble is a dating and social networking app where women make the
              first move in heterosexual matches, promoting a more respectful
              and empowering dynamic. My Advanced IXD course gave me the
              opportunity to reframe a conceptual design breif: It proposed to
              leverage mobile precision location services to increase conversion
              rates of non-paying users by informing them of nearby matches in
              real time.
              <br /> <br /> Through secondary research and provided data on X
              and Y, I identified genuine user pain points and reframed the
              problem to be human-centered while meeting the needs of all
              stakeholders.
              <br /> <br />
              Process under development.{" "}
              <span className="font-bold">Last updated 02.26.2025</span>
              {/* TODO finish writing this */}
              {/* <br /> <br />Leveraging precision location services, and existing technologies like Live Activity and the Dynamic Island components of iOS ---------LEAD TO SUCCESS------- */}
            </div>
          }
          myRole={myRole}
          members={members}
          tools={tools}
          timeline={timeline}
        />

        <DividerLine text={"Current state of Bumble"} />

        <Header text={"Pain Points"} />
        {/* PROJ CONTENT 02 */}
        <div className="grid grid-cols-1 gap-[2rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            <div className="flex justify-center items-center">
              <Image
                className="pt-2 w-1/4"
                src={
                  "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/bumble/likedYou-transparent.png"
                }
                height={500}
                width={500}
              />
            </div>
            <div className="flex justify-center items-center">
              <i className="text-[1.5rem] leading-tight w-1/2">
                “Exactly! Sometimes they even unmatch before I can even send
                them a message. Like why not be more selective.” –Reddit user
              </i>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex justify-center items-center">
              <div className="w-1/2">
                <strong className="text-p">Decision Fatigue</strong>
                <br />
                <br />
                Many male users engage in mass swiping to maximize match
                potential, often ignoring connections that do not meet their
                perceived standards.
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-1/2">
                <strong className="text-p">Meaningless matches</strong>
                <br />
                <br />
                As a result, even when women initiate conversations, they
                frequently experience disengagement or ghosting before
                meaningful interactions can develop.
              </div>
            </div>
          </div>
        </div>

        {/* <New3
          img1={
            "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/bumble/reddit-many-transparent.png"
          }
          text1={<div>text here</div>}
        /> */}
        <DividerLine text={"Proposed Solution"} />
        <CalloutSmall
          text1={
            <div>
              Help women find meaningful matches, <i>fast</i>.
            </div>
          }
          text2="Bumble's 'session' mode reduces decision fatigue and encourages
              authentic connections by enabling users in high-density areas to
              spontaneously meet at partnered local businesses."
        />

        {/* PROJ CONTENT 01 */}

        <Header text={"Preloader"} />
        <New3VideoCloudinaryAutoplayLoop
          src={
            "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/bumble/bumbleWalkthrough.mov"
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

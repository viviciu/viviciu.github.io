"use client"
import React, { useState, useEffect, useRef } from "react";
import Title from "../../_components/Title"
import Context2 from "../../_components/Context2";
import Header from "../../_components/Header";
import YAMLBar from "../../_components/YAMLBar";
import DividerLine from "../../_components/DividerLine";
import New from "../../_components/New";
import New2 from "../../_components/New2";
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
              className="pt-2"
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
              Bumble is a dating and social networking app where women make the
              first move in heterosexual matches, promoting a more respectful
              and empowering dynamic. The conceptual breif proposed to leverage
              mobile precision location services to increase conversion rates of
              non-paying users by informing them of nearby matches in real time.
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

        <Header text={"Problem Space"} />

        {/* PROJ CONTENT 01 */}

        {/* PROJ CONTENT 02 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <div className="">
            <video autoPlay loop muted playsInline className="pt-2 w-[800px]">
              <source
                src={
                  "https://res.cloudinary.com/ddjxpkewq/video/upload/f_auto:video,q_auto/v1/elysium/b3wfxabgpgpm7z9gsw6w"
                }
                type="video/mp4"
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
              <source
                src={
                  "https://res.cloudinary.com/ddjxpkewq/video/upload/f_auto:video,q_auto/v1/elysium/peypqarqejx6fezrlawh"
                }
                type="video/mp4"
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
                  "https://res.cloudinary.com/ddjxpkewq/video/upload/f_auto:video,q_auto/v1/elysium/d05qjnyo3ahj9quokazr"
                }
                type="video/mp4"
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

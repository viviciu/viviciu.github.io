"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
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
import New3VideoCloudinaryAutoplay from "@/app/_components/New3VideoAWS";

export default function TypographyAnimation() {
  const members = [];
  const tools = ["After Effects"];
  const myRole = "Motion Designer";

  // A realm where the very essence of self and time finds itself in flux.
  return (
    <main className=" block px-4">
      <Title
        text1={
          <div>
            Kinetic Type Animation, <br /> a study in time and motion to narrate
            the story of a typeface.
          </div>
        }
      />
      <YAMLBar
        client="Communications Studio I"
        year="2024"
        role="Motion Design"
      />
      <CoverYAMLVideo url="https://www.youtube.com/watch?v=7d-jYvQeNq4" />
      <Context2
        context={
          <div>
            Full process on{" "}
            <Link
              href={
                "https://medium.com/@vivianastaicu05/project-iii-animation-98899753a872"
              }
              className="relative group underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Medium
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
            <br />A 60-second video highlighting the typeface Athelas in the
            context of its use: Making literature readable on the screen. An
            exercise of time and motion in visually describing and comparing the
            various forms and attributes of the typeface.
          </div>
        }
        myRole={myRole}
        timeline="Nov 2024"
        members={members}
        tools={tools}
      />

      <div className="lg:pt-[3rem]">
        {" "}
        <DividerLine text={"Process"} />
      </div>
      {/* columns */}
      <div className="mt-[0.6rem] mb-32 lg:columns-3 sm:columns-2 w-full place-content-center gap-[0.6rem]">
        {/* COL 1 */}
        <div className="h-fit">
          <Image
            className=""
            src="https://res.cloudinary.com/ddjxpkewq/image/upload/f_auto,q_auto/v1/c-animation/s3k9v38udigxjapryyxa"
            height={500}
            width={500}
            layout="responsive"
          />
        </div>
        {/* col 2 */}
        <div>
          {/* https://res.cloudinary.com/ddjxpkewq/image/upload/f_auto,q_auto/v1/c-animation/wtooh4uhn4vb0jvpbuhk */}
          <Image
            src="https://res.cloudinary.com/ddjxpkewq/image/upload/f_auto,q_auto/v1/c-animation/laeouzxfdkirerznklsh"
            height={500}
            width={500}
            layout="responsive"
          />
          <Image
            src="https://res.cloudinary.com/ddjxpkewq/image/upload/f_auto,q_auto/v1/c-animation/fu04253vv0ky5vmnexam"
            height={500}
            width={500}
            layout="responsive"
          />

          <Image
            className="mt-[0.6rem]"
            src="https://res.cloudinary.com/ddjxpkewq/image/upload/f_auto,q_auto/v1/c-animation/dsmxcrxddfumriwed9w5"
            height={500}
            width={500}
            layout="responsive"
          />
        </div>

        {/* col 3 */}
        <div>
          <Image
            src="https://res.cloudinary.com/ddjxpkewq/image/upload/f_auto,q_auto/v1/c-animation/drwwf607eyddzzw457w7"
            height={500}
            width={500}
            layout="responsive"
          />
          <Image
            src="https://res.cloudinary.com/ddjxpkewq/image/upload/f_auto,q_auto/v1/c-animation/wtooh4uhn4vb0jvpbuhk"
            height={500}
            width={500}
            layout="responsive"
          />
        </div>
        {/* <Image
                className="mt-[0.6rem]"
                src={
                  "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/4x5-instaFrame-suanna-aphi.jpg"
                }
                height={500}
                width={500}
                layout="responsive"
              /> */}
      </div>
      <DividerLine text={"Highlights"} />
      {/* LARGE PLAYABLE THUMBNAILS */}
      <New3VideoCloudinaryAutoplay
        src={
          "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/cmini/comp_beginning_rgb.mov.webm"
        }
      />
      <New3VideoCloudinaryAutoplay
        src={
          "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/cmini/comp_text-jumble-audio.mov.webm"
        }
      />
      <New3VideoCloudinaryAutoplay
        src={
          "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/cmini/comp_e-to-ligatures.mov.webm"
        }
      />
      <New3VideoCloudinaryAutoplay
        src={
          "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/cmini/comp_ending-audio.mov.webm"
        }
      />

      <DividerLine text={"Magazine spread on the history of Athelas"} />
      <New3
        img1={"/imgs/typographyAnimation/FINALSPREAD.jpeg"}
        text1={
          <div>
            <br />
            Spread process on{" "}
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
          </div>
        }
      />
    </main>
  );
}

"use client";
import React, { useState, useEffect, useRef } from "react";
import Title from "../../_components/Title";
import Context2 from "../../_components/Context2";
import Header from "../../_components/Header";
import YAMLBar from "../../_components/YAMLBar";
import DividerLine from "../../_components/DividerLine";
import Image from "next/image";
import New3 from "@/app/_components/New3";
import UnderDevelopment from "../../_components/UnderDevelopment";
import New3VideoCloudinaryAutoplayLoop from "@/app/_components/New3VideoCloudinaryAutoplayLoop";

import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";

export default function Liminal() {
  const members = [];
  const tools = ["Solidwords", "Rapid Prototyping"];
  const myRole = "Solo";
  const timeline = "4 weeks";

  // A realm where the very essence of self and time finds itself in flux.
  return (
    <>
      <main className=" block px-4">
        <Title
          text1={
            <div>
              Spatula, <br /> Desc.
            </div>
          }
        />

        {/* Role: Interaction Design, 3D Web Development, UI/UX Immersive Experiences" ? */}
        <YAMLBar client="Products Studio II" year="2025" role="Designer" />
        {/* COVER YAML EXPANDED */}
        <main className=" pb-[5.06rem]">
          <div className="h-fit w-full">
            <video className="w-full h-auto" autoPlay loop muted playsInline>
              <source
                src={
                  "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/compressed_compressed_C0039-trim-handHold.mov.webm"
                }
                type="video/webm"
              />
            </video>
          </div>
        </main>

        <Context2
          context={
            <div>
              {/* TLDR blurb vicki said, check old notebook  */}
              Inspired by the harmonious, integrated flow of muscles, I aimed to
              establish a direct 1:1 relationship between the user’s grip and
              the spatula’s working edge.
              <br /> <br />
              Like the geometry of the human body, this tension-form emerged
              solely from fair curves. The seamless twist follows the planes of
              the palm-arm bridge,{" "}
              <span className="font-bold">
                transforming the spatula into a natural extension of the arm,
                uniting them as one.
              </span>
              <br />
              <br />
              <Link
                href="https://docs.google.com/presentation/d/1mjYN5Ele80n-BdIcCPfrU_GkfO86X-lorzGYpoGJitw/edit?usp=sharing"
                className="relative group underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Full process deck
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
          myRole={myRole}
          members={members}
          tools={tools}
          timeline={timeline}
        />

        <DividerLine text={"Process"} />

        <Header text={"Grey foam prototypes"} />

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
            <Image
              className="pt-2"
              src={
                "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/compressed_edit-06971.jpg.webp"
              }
              height={500}
              width={500}
            />
            {/* <video autoPlay loop muted playsInline className="pt-2 w-[800px]">
              <source
                src={
                  "s3://vstaicu-portfolio-assets/spatula/compressed_edit-06970.jpg.webp"
                }
                type="video/mp"
              />
            </video> */}
          </div>
          <div className="">
            <Image
              className="pt-2"
              src={
                "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/compressed_edit-06972.jpg.webp"
              }
              height={500}
              width={500}
            />
            <Image
              className="pt-2"
              src={
                "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/compressed_edit-06989.jpg.webp"
              }
              height={500}
              width={500}
            />
          </div>
          <div className="">
            <Image
              className="pt-2"
              src={
                "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/compressed_edit-06973.jpg.webp"
              }
              height={500}
              width={500}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <p className="pt-2 m:pt-4">
            <span className="font-bold">I</span>
            <br /> <br />.
          </p>
          <p className="pt-2 m:pt-4">
            <span className="font-bold">II</span> <br /> <br />.
          </p>
          <p className="pt-2 m:pt-4">
            <span className="font-bold">IV</span> <br /> <br />.
          </p>
        </div>

        <Header text={"Revealing form through painting"} />
        <New3
          img1={
            "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/compressed_edit-07012.jpg.webp"
          }
          caption={""}
          text1={""}
        />

        {/* https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/compressed_edit-07072.jpg.webp */}

        {/* GRID */}

        <div
          className="w-full mx-auto lg:columns-3 sm:columns-2 lg:gap-[0.6rem] gap-3 place-content-center
          "
        >
          <Image
            className="pt-2"
            src={
              "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/compressed_edit-07072.jpg.webp"
            }
            height={500}
            width={500}
          />
          <Image
            className="pt-2"
            src={
              "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/compressed_edit-07027.jpg.webp"
            }
            height={500}
            width={500}
          />
          <Image
            className="pt-2"
            src={
              "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/compressed_edit-07029.jpg.webp"
            }
            height={500}
            width={500}
          />
          <Image
            className="pt-2"
            src={
              "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/compressed_edit-07059.jpg.webp"
            }
            height={500}
            width={500}
          />
          <Image
            className="pt-2"
            src={
              "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/compressed_edit-07060.jpg.webp"
            }
            height={500}
            width={500}
          />
          <Image
            className="pt-2"
            src={
              "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/compressed_edit-07068.jpg.webp"
            }
            height={500}
            width={500}
          />
          <Image
            className="pt-2"
            src={
              "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/compressed_edit-07070.jpg.webp"
            }
            height={500}
            width={500}
          />

          {/* <div>
            <video autoPlay loop muted playsInline className="pt-2">
              <source src={""} type="video/webm" />
            </video>
            <p>CAPTION.</p>
          </div> */}
        </div>
      </main>
    </>
  );
}

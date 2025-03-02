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
              {/* Women struggle to find authentic matches due to overwhelming
              counts of male users engaging in mass swiping to maximize their
              match potential. These males often later ignore connections that
              do not meet their perceived standards, leading to decision fatigue
              and feelings of hopelessness in female users.
              <br /> */}
              Women struggle to find genuine matches as many men mass-swipe for
              quantity, later ignoring matches they find unattractive, causing
              decision fatigue and hopelessness in female users.
              {/* Women struggle to find genuine matches as many male users mass-swipe to maximize match potential, leading to an overwhelming feed of meaningless matches. */}
              <br />
              <br />
              My Adv Interaction Design course gave me the opportunity to
              reframe a conceptual design breif from Bumble, proposing the
              integration of mobile precision location services to increase
              conversion rates of non-paying users by informing them of nearby
              matches in real time.
              <br />
              <br />
              Through user testimonials, I identified genuine pain points and
              reframed the problem to be human-centered while meeting the needs
              of all stakeholders, including a{" "}
              <span className="font-bold">
                This mutually beneficial model drives new customers to
                businesses while increasing Bumble&apos;s premium subscriptions.
              </span>
              <br />
              <br />
              Process under development.{" "}
              <span className="font-bold">Last updated 02.28.2025</span>
              {/* TODO finish writing this */}
              {/* <br /> <br />Leveraging precision location services, and existing technologies like Live Activity and the Dynamic Island components of iOS ---------LEAD TO SUCCESS------- */}
            </div>
          }
          myRole={myRole}
          members={members}
          tools={tools}
          timeline={timeline}
        />

        <DividerLine text={"Problem statement & User research insights"} />
        <CalloutSmall
          text1={
            <div>Women face decision fatigue from mass-swiping male users.</div>
          }
        />

        {/* PROJ CONTENT 02 */}
        <div className="grid grid-cols-1 gap-[1rem] md:gap-[2rem]">
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-5">
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
              <i className="text-[1rem] md:text-[1.5rem] leading-tight w-1/2">
                “Exactly! Sometimes they even unmatch before I can even send
                them a message. Like why not be more selective.” –Reddit user
              </i>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex justify-center items-center">
              <div className="w-3/4 md:w-1/2">
                <strong className="text-p">Decision Fatigue</strong>
                <br />
                <br />
                Many male users engage in mass swiping to maximize match
                potential, often ignoring connections that do not meet their
                perceived standards. This was a screenshot of my actual Bumble
                account, which included only 1 photo of half of my face visible
                used to audit the platform.
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-3/4 md:w-1/2">
                <strong className="text-p">Meaningless matches</strong>
                <br />
                <br />
                As a result of mass swiping, even when women initiate
                conversations, they frequently experience disengagement or
                ghosting before meaningful interactions can develop.
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
        {/* OLD VERSIONS OF SOLUTION CALLOUT
        A location & time-sensitive "Session" mode to help women find
              meaningful matches, <i>fast</i>.
              <br />A location & time-sensitive "Session" mode that enables
              spontaneous dates to help women find meaningful matches,{" "}
              <i>fast</i>. */}
        <CalloutSmall
          text1={
            <div>
              Bumble Sessions: Spontaneous, meaningful dates—<i>fast</i>.
            </div>
          }
          text2="Bumble's 'session' mode reduces decision fatigue and encourages
              authentic connections by enabling users in high-density areas to
              spontaneously meet at partnered local businesses."
        />

        {/* PROJ CONTENT 01 */}

        {/* <Header
          text={
            "Entering a Bumble Session reveals local users available for a spontaneous date."
          }
        /> */}
        <main>
          <div
            className=" 
          lg:grid lg:grid-cols-3
          gap-[5rem] 
          w-full h-fit 
          items-center
          pt-[0.5rem]" // important padding top here
          >
            <div
              className="
            leading-[1.5rem]
            lg:text-[1rem]
            tracking-[0.005em]
            text
            font-Suisse
            font-regular
            text-offBlack2"
            >
              <span className="font-bold text-p">
                Entering a Bumble Session reveals local users available for a
                spontaneous date.
              </span>
              <br />
              <br />
              In a session, only users in a 1.5MI radius also in a session can
              be seen. These users are not visible on the typical feed, which
              brings exclusivity through users&apos; temporary nature—users have
              to act fast before they leave the Session.
              <br />
              <br />
            </div>

            <div className="lg:pt-0 pt-8  lg:pb-0 pb-16 ">
              <div className=" flex justify-center ">
                {/* CLOUDINARY */}
                <video autoPlay loop muted playsInline className="h-[700px]">
                  <source
                    src={
                      "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/bumble/bumbleWalkthrough.mov"
                    }
                    type="video/mp4"
                  />
                </video>
              </div>

              {/* <div className="font-Suisse pt-2 lg:text-[1rem] text-[0.75rem]">
caption
              </div> */}
            </div>
            <div className="">
              <span className="font-bold text-p">
                Glowing Ring signals Presence and Availability
              </span>
              <br />
              <br />
              Constant motion indicates feelings of activity, in motion, and
              "fleeting" on an emotional level. As if your "radar" has turned on
              and gives a nod to the 1.5MI radius pool of users you&apos;re
              restricted to. Functionally, it indicates a state change: Your
              Session has begun.
            </div>
          </div>
        </main>

        {/* WIDE ONBOARDING */}

        <div className="pt-[5rem]"></div>
        <Header text={""} />
        <main className="w-full">
          <Image
            className="pt-2 w-full"
            src={
              "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/bumble/compressed_onboarding-frame-2.png.webp"
            }
            layout="responsive"
            height={1000}
            width={1000}
          />
          {/* CAPTION */}
          <div className="flex justify-center pt-2 text-offBlack3">
            Session matching User Flow
          </div>
        </main>

        {/* WIDE ONBOARDING */}

        <div className="pt-[10rem]"></div>
        {/* <Header
          text={
            "Live Activities and Dynamic Island integration encourage engagement with matches."
          }
        /> */}
        <div className="w-full md:flex">
          {/* HEADER EXPANDED */}
          <div
            className="
        md:w-1/2 h-fit 
        items-start"
          >
            <h1 className="font-SFProDisplay  text-3xl md:text-[3rem] leading-tight md:leading-[3rem] tracking-tight">
              Live Activities and Dynamic Island integration encourage
              engagement with matches.
            </h1>
          </div>

          <video autoPlay loop muted playsInline className="pt-2 h-[700px]">
            <source
              src={
                "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/bumble/timer-liveActivity.mov"
              }
              type="video/mp4"
            />
          </video>
        </div>

        {/* details */}
        <div className="pt-[5rem]"></div>
        {/* HEADER EXPANDED */}
        <div
          className="
        md:w-1/2 h-fit 
        items-start"
        >
          <h1 className="font-SFProDisplay  text-3xl md:text-[3rem] leading-tight md:leading-[3rem] tracking-tight">
            Time sensitivity increases engagement for more meetups.
          </h1>
        </div>
        <main className="pt-[3rem]">
          <div className="flex items-center w-full justify-center">
            <div className="md:w-2/3">
              <Image
                className="pt-2"
                src={
                  "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/bumble/livedissected-2.png"
                }
                layout="responsive"
                height={500}
                width={500}
              />
            </div>
          </div>
          <div className="md:w-2/3 pt-[5rem]">
            <div className="grid grid-cols-3 pt-[3rem] gap-y-[5rem]">
              <div className="font-p col-start-1">
                Applied Social Psychology
              </div>
              <div className="col-start-2 col-span-2">
                Studies have shown that humans are{" "}
                <span className="font-bold">loss averse</span>—meaning, they
                would rather not <i>lose</i> something than gain something new.
                <br />
                <br />
                <span className="font-bold">
                  Elimination By Aspects (EBA)
                </span>{" "}
                is a decision making strategy that helps people eliminate
                options that don&apos;t meet a set criterion, reducing the
                cognitive load to make complex decisions.
                <br />
                <br />
              </div>

              <div className="font-p">Value to Users</div>
              <div className="col-span-2">
                <span className="font-bold">Loss Aversion</span> — Endless
                dwelling or comparing options causes means more decisions and
                more stress. The potential to lose a match causes users to take
                immediate action and be closer to their goal of meeting someone
                genuine.
                <br />
                <br />
                <span className="font-bold">EBA</span> — Potential matches may
                suggest a local business to meet at, helping the sender
                differentiate themselves, and help the users eliminate matches
                suggesting places they do not enjoy.
              </div>
            </div>
          </div>
        </main>

        <div className="pt-[15rem]"></div>
      </main>
    </>
  );
}

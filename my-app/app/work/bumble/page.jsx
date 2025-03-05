"use client";
import React, { useState, useRef } from "react";
import Title from "../../_components/Title";
import Context2 from "../../_components/Context2";
import Header from "../../_components/Header";
import YAMLBar from "../../_components/YAMLBar";
import DividerLine from "../../_components/DividerLine";
import CalloutSmall from "@/app/_components/CalloutSmall";
import New3 from "../../_components/New3";
import Image from "next/image";
import UnderDevelopment from "../../_components/UnderDevelopment";
import "../../_components/greyBGLines.css";
import New3VideoCloudinaryAutoplayLoop from "@/app/_components/New3VideoCloudinaryAutoplayLoop";

import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";

export default function Liminal() {
  const members = [];
  const tools = ["Figma", "Keynote", "User research"];
  const myRole = "UX/UI";
  const timeline = "4 weeks";

  // MODAL
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");

  const handleImageClick = (src) => {
    setModalImageSrc(src);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImageSrc("");
  };

  // Refs for sections
  const problemStatementRef = useRef(null);
  const proposedSolutionRef = useRef(null);
  const userFlowRef = useRef(null);
  const stakeholderValueRef = useRef(null);
  const dataDrivenInsightsRef = useRef(null);
  const KPIsRef = useRef(null);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="flex">
        {/* Side Navbar */}
        <nav className="fixed top-10 left-0 h-full p-4">
          <ul className="space-y-2">
            <li>
              <button
                className="hover:text-mwsGrey transition-colors duration-200"
                onClick={() => scrollToRef(problemStatementRef)}
              >
                Problem
              </button>
            </li>
            <li>
              <button
                className="hover:text-mwsGrey transition-colors duration-200"
                onClick={() => scrollToRef(proposedSolutionRef)}
              >
                Proposed Solution
              </button>
            </li>
            <li>
              <button
                className="hover:text-mwsGrey transition-colors duration-200"
                onClick={() => scrollToRef(stakeholderValueRef)}
              >
                Stakeholder Value
              </button>
            </li>
            <li>
              <button
                className="hover:text-mwsGrey transition-colors duration-200"
                onClick={() => scrollToRef(userFlowRef)}
              >
                User Flow
              </button>
            </li>
            <li>
              <button
                className="hover:text-mwsGrey transition-colors duration-200"
                onClick={() => scrollToRef(userFlowRef)}
              >
                Data Driven Insights
              </button>
            </li>
            <li>
              <button
                className="hover:text-mwsGrey transition-colors duration-200"
                onClick={() => scrollToRef(userFlowRef)}
              >
                KPIs
              </button>
            </li>
          </ul>
        </nav>

        <main className="block px-4 ml-48">
          <Title
            text1={
              <div>
                Bumble Sessions, <br /> Location-based spontaneous dates to help
                users find meaningful matches.
              </div>
            }
          />

          <YAMLBar client="Bumble — Conceptual" year="2025" role="UX/UI" />

          <main className="pb-[5.06rem]">
            <div className="h-fit w-full">
              <Image
                className="pt-2 w-full"
                src={
                  "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/bumble/bubmlesessions-cover.png"
                }
                height={500}
                width={500}
              />
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
                  <MdOutlineArrowOutward className="inline-block ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-p3 lg:text-p text font-SuisseWorks font-regular" />
                </Link>
                <br /> <br />
                Bumble is a dating and social networking app where women make
                the first move in heterosexual matches, promoting a more
                respectful and empowering dynamic. My Advanced IXD course gave
                me the opportunity to reframe a conceptual design breif: It
                proposed to leverage mobile precision location services to
                increase conversion rates of non-paying users by informing them
                of nearby matches in real time.
                <br /> <br /> Through secondary research and provided data on X
                and Y, I identified genuine user pain points and reframed the
                problem to be human-centered while meeting the needs of all
                stakeholders.
                {/* <br /> <br />
                Process under development.{" "}
                <span className="font-bold">Last updated 02.26.2025</span> */}
              </div>
            }
            myRole={myRole}
            members={members}
            tools={tools}
            timeline={timeline}
          />

          <div ref={problemStatementRef}>
            <DividerLine text={"Problem statement & User research insights"} />
            <CalloutSmall
              text1={
                <div>
                  Women face decision fatigue from mass-swiping male users.
                </div>
              }
            />
          </div>

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
                  account, which included only 1 photo of half of my face
                  visible used to audit the platform.
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

          <DividerLine text={"Proposed Solution"} />
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

          <main ref={proposedSolutionRef}>
            <div
              className=" 
            lg:grid lg:grid-cols-3
            gap-[5rem] 
            w-full h-fit 
            items-center
            pt-[0.5rem]"
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
                brings exclusivity through users&apos; temporary nature—users
                have to act fast before they leave the Session.
                <br />
                <br />
              </div>

              <div className="lg:pt-0 pt-8  lg:pb-0 pb-16 ">
                <div className=" flex justify-center ">
                  <video autoPlay loop muted playsInline className="h-[700px]">
                    <source
                      src={
                        "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/bumble/bumbleWalkthrough.mov"
                      }
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
              <div className="">
                <span className="font-bold text-p">
                  Glowing Ring signals Presence and Availability
                </span>
                <br />
                <br />
                Constant motion indicates feelings of activity, in motion, and
                "fleeting" on an emotional level. As if your "radar" has turned
                on and gives a nod to the 1.5MI radius pool of users you&apos;re
                restricted to. Functionally, it indicates a state change: Your
                Session has begun.
              </div>
            </div>
          </main>

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

            <div className="flex justify-center pt-2 text-offBlack3">
              Session matching User Flow
            </div>
          </main>

          <div className="pt-[10rem]"></div>
          <div className="md:pt-[5rem]"></div>
          <div
            className="
          md:w-2/3 h-fit 
          items-start"
          >
            <h1 className="font-SFProDisplay  text-3xl md:text-[3rem] leading-tight md:leading-[3rem] tracking-tight">
              Time sensitivity enhances engagement, leading to more meetups.
            </h1>
          </div>
          <main className="pt-[2rem] md:pt-[5rem]">
            <div className="md:flex items-center w-full  gap-[4rem]">
              <video autoPlay loop muted playsInline className="pt-2 h-[700px]">
                <source
                  src={
                    "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/bumble/timer-liveActivity.mov"
                  }
                  type="video/mp4"
                />
              </video>
              <div className="md:w-[50%]">
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
                <div className="col-start-1 text-p">
                  Applied Social Psychology
                </div>
                <div className="col-start-2 col-span-2">
                  Studies have shown that humans are{" "}
                  <span className="font-bold">loss averse</span>—meaning, they
                  would rather not <i>lose</i> something than gain something
                  new.
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

                <div className="text-p">Value to Users</div>
                <div className="col-span-2">
                  <span className="font-bold">Loss Aversion</span> — Endless
                  dwelling or comparing options causes means more decisions and
                  more stress. The potential to lose a match causes users to
                  take immediate action and be closer to their goal of meeting
                  someone genuine.
                  <br />
                  <br />
                  <span className="font-bold">EBA</span> — Potential matches may
                  suggest a local business to meet at, helping the sender
                  differentiate themselves, and help the users eliminate matches
                  suggesting places they do not enjoy.
                </div>
              </div>
            </div>

            <div className="pt-[10rem]" ref={stakeholderValueRef}>
              <DividerLine text={"Revenue Touchpoints & Stakeholder value"} />

              <CalloutSmall
                text1={<div>A Systems Thinking Approach to Revenue Growth</div>}
                text2={
                  <div>
                    With{" "}
                    <strong className="text-offBlack2">Bumble Coupons</strong>,
                    local businesses benefit from more customers, users gain
                    additional perks, and Bumble monetizes both in-person
                    bussiness visits and premium subscriptions—ensuring
                    sustainable growth for the platform.
                  </div>
                }
              />
            </div>

            <div className="-mx-4">
              <Image
                className="pt-2 w-full"
                src={
                  "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/bumble/bumble-BusinessModel-large.png"
                }
                layout="responsive"
                height={1000}
                width={1000}
              />
            </div>
            <div className="w-[60%] pt-[2rem] md:pt-[3rem]">
              Originally, Bumble's problem statement focused on increasing the
              number of premium users.{" "}
              <strong>
                Let's reframe this: What Bumble truly needs is increased
                revenue.
              </strong>{" "}
              While the proposed solution is user-centered and research-driven,
              ultimately Bumble is still our primary stakeholder.
              <br />
              <br />
              Bumble Coupons provide a unique perk:{" "}
              <strong>
                Just like offering your date a drink at the bar, Premium+
                subscribers can treat their date to exclusive Bumble Coupons
              </strong>
              . These rewards grant the recipient a significant discount at a
              sponsored location where both parties choose to meet.
              <br />
              <br />
              Additionally,{" "}
              <strong>
                every time a user enters a partner business, Bumble earns $0.05
                per visit.
              </strong>{" "}
              In turn, businesses see increased foot traffic and sales, creating
              a strong incentive to become Bumble partners. This strategy is
              similar to Pokemon Go&apos;s use of sponsored locations, which
              contributed to its success.
              <br />
              <br />
              Ultimately, this creates a{" "}
              <strong>circular revenue stream</strong>: businesses benefit from
              more customers, users gain additional perks, and Bumble monetizes
              both in-person visits and premium subscriptions—ensuring
              sustainable growth for the platform.
            </div>

            <div
              ref={userFlowRef}
              className="
          md:w-2/3 h-fit 
          items-start pt-[5rem]"
            >
              <h1 className="font-SFProDisplay  text-3xl md:text-[3rem] leading-tight md:leading-[3rem] tracking-tight">
                User Flow & Revenue Touchpoints
              </h1>
            </div>
            <div className="pt-[1rem] -mx-4 cursor-pointer">
              <Image
                className="pt-2 w-full"
                src={
                  "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/bumble/bumble-Userflow.png"
                }
                layout="responsive"
                height={1000}
                width={1000}
                onClick={() =>
                  handleImageClick(
                    "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/bumble/bumble-Userflow.png"
                  )
                }
              />
            </div>
            {/* DATA DRIVEN */}
            <div className="mt-[10rem] "></div>
            <div>
              <DividerLine text={"Data Driven Insights"} />
              <div ref={dataDrivenInsightsRef}></div>
              <CalloutSmall
                text1={
                  <div>Our target users live in walkable, dense cities.</div>
                }
                text2={
                  <div>
                    Since location-based notifications were primarily adopted by
                    users in walkable, high-density cities like New York, this
                    intervention—Bumble Sessions and Bumble Coupons—is designed
                    for a young audience accustomed to spontaneous travel and
                    activities.
                  </div>
                }
              />
            </div>
            <div className="flex justify-center">
              <div className="lg:w-1/2">
                <Image
                  src={
                    "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/bumble/bumble-data.png"
                  }
                  layout="responsive"
                  height={1000}
                  width={1000}
                />
              </div>
            </div>
            {/* https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/bumble/bumble-kpis.png */}
            {/* KPI INDICATORS */}
            <div className="pt-[10rem] h-fit" ref={KPIsRef}>
              <DividerLine
                text={"measuring success: key performance indicators"}
              />
            </div>
            <div className="pt-[1rem] -mx-4">
              <Image
                className="pt-2 w-full"
                src={
                  "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/bumble/bumble-kpis.png"
                }
                layout="responsive"
                height={1000}
                width={1000}
              />
            </div>
          </main>

          <div className="pt-[15rem]"></div>

          {isModalOpen && (
            <div
              className="fixed inset-0 bg-white bg-opacity-85 flex justify-start items-start z-50"
              onClick={handleCloseModal}
            >
              <div
                className="relative m-[0.6rem]"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={modalImageSrc}
                  alt="Modal Image"
                  className="max-h-[84vh] cursor-crosshair"
                />
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
}

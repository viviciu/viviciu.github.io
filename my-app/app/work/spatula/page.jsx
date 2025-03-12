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
import { prototype } from "postcss/lib/at-rule";

export default function Spatula() {
  const members = [];
  const tools = ["Solidwords", "Rapid Prototyping"];
  const myRole = "Solo";
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
  const intentRef = useRef(null);
  const processRef = useRef(null);
  const inspoRef = useRef(null);
  const constraintsRef = useRef(null);
  const ergonomicsRef = useRef(null);
  const prototypingRef = useRef(null);
  const finalRef = useRef(null);
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
        <nav className="fixed top-20 left-0 h-full p-4">
          <ul className="space-y-2">
            <li>
              <button
                className="hover:text-mwsGrey transition-colors duration-200 cursor-pointer"
                onClick={() => scrollToRef(intentRef)}
              >
                Showcase & Intent
              </button>
            </li>
            <li>
              <button
                className="hover:text-mwsGrey transition-colors duration-200 cursor-pointer"
                onClick={() => scrollToRef(processRef)}
              >
                Process
              </button>
            </li>
            <li>
              <button
                className="hover:text-mwsGrey transition-colors duration-200 cursor-pointer"
                onClick={() => scrollToRef(inspoRef)}
              >
                Inspiration
              </button>
            </li>
            <li>
              <button
                className="hover:text-mwsGrey transition-colors duration-200 cursor-pointer"
                onClick={() => scrollToRef(ergonomicsRef)}
              >
                Ergonomics
              </button>
            </li>
            <li>
              <button
                className="hover:text-mwsGrey transition-colors duration-200 cursor-pointer"
                onClick={() => scrollToRef(constraintsRef)}
              >
                Setting constraints
              </button>
            </li>

            <li>
              <button
                className="hover:text-mwsGrey transition-colors duration-200"
                onClick={() => scrollToRef(prototypingRef)}
              >
                Prototyping & CAD
              </button>
            </li>
            <li>
              <button
                className="hover:text-mwsGrey transition-colors duration-200 cursor-pointer"
                onClick={() => scrollToRef(finalRef)}
              >
                Final
              </button>
            </li>
          </ul>
        </nav>

        {/* CASE STUDY BEGINS HERE */}
        <main className="block px-4 ml-48">
          <Title
            text1={
              <div>
                unsichtbar, <br /> Inspired by how muscles flow into one
                another, this spatula serves as a tooling extension of
                one&apos;s body.
              </div>
            }
          />
          <YAMLBar client="Products Studio II" year="2025" role="Designer" />
          {/* COVER YAML EXPANDED */}
          {/* GREY FOAM CLIP: "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/compressed_compressed_C0039-trim-handHold.mov.webm" */}
          <main className=" pb-[5.06rem]">
            <div className="h-fit w-full">
              <video className="w-full h-auto" autoPlay loop muted playsInline>
                <source
                  src={
                    "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/compressed_C0053-trim-cover.MP4.webm"
                  }
                  type="video/webm"
                />
              </video>
            </div>
          </main>

          <Context2
            context={
              <div>
                {/* TLDR blurb vicki said, check notebook from november, at the beginning of the notebook. (impact)  */}
                {/* Inspired by the harmonious, integrated flow of muscles, I aimed
                to establish a direct 1:1 relationship between the user’s grip
                and the spatula’s working edge.
                <br /> <br />
                Like the geometry of the human body, this tension-form emerged
                solely from fair curves. The seamless twist follows the planes
                of the palm-arm bridge,{" "} */}
                Inspired by the harmonious, integrated flux of muscles and
                tendons, this spatula acts as a seamless extension of the hand,
                translating human intent into precise control through a direct
                1:1 relationship between the thumb and the working edge.
                <br />
                <br />
                Like the geometry of our body, this tension-form emerged solely
                from fair curves. The seamless twist follows the planes of the
                palm-arm bridge,{" "}
                <span className="font-bold">
                  transforming the spatula into a natural extension of the arm,
                  uniting them as one.
                </span>
              </div>
            }
            myRole={myRole}
            members={members}
            tools={tools}
            timeline={timeline}
          />
          <div id="FINAL FORM" ref={intentRef}>
            <DividerLine
              text={"showcase with wood, greyfoam, and flashlight"}
            />
            <div className="w-full">
              <Image
                src={
                  "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/comp_big.png.webp"
                }
                height={500}
                width={500}
                layout="responsive"
              />
            </div>
            {/* COLUMNS SHOWCASE */}
            {/* <div className="columns-3 gap-[0.5rem]  mt-[5rem]">
              <Image
                src={
                  "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/comp_edit-07111.jpg.webp"
                }
                height={500}
                width={500}
                layout="responsive"
              />
              <Image
                src={
                  "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/comp_edit-07153.jpg.webp"
                }
                height={500}
                width={500}
                layout="responsive"
              />
              <Image
                src={
                  "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/comp_edit-C0049.jpg.webp"
                }
                height={500}
                width={500}
                layout="responsive"
              />


              <Image
                src={
                  "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/comp_edit-07161.jpg.webp"
                }
                height={500}
                width={500}
                layout="responsive"
              />
              <Image
                src={
                  "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/comp_edit-07129.jpg.webp"
                }
                height={500}
                width={500}
                layout="responsive"
              />

              <Image
                src={
                  "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/comp_edit-2-2.jpg.webp"
                }
                height={500}
                width={500}
                layout="responsive"
              />

              <Image
                src={
                  "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/comp_edit-07086.jpg.webp"
                }
                height={500}
                width={500}
                layout="responsive"
              />
              <Image
                src={
                  "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/comp_edit-07469.jpg.webp"
                }
                height={500}
                width={500}
                layout="responsive"
              />
              <Image
                src={
                  "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/comp_edit-07453.jpg.webp"
                }
                height={500}
                width={500}
                layout="responsive"
              />
              <Image
                src={
                  "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/comp_edit-07467.jpg.webp"
                }
                height={500}
                width={500}
                layout="responsive"
              />
              <Image
                src={
                  "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/comp_edit-07456.jpg.webp"
                }
                height={500}
                width={500}
                layout="responsive"
              />
              <Image
                src={
                  "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/comp_edit-07472.jpg.webp"
                }
                height={500}
                width={500}
                layout="responsive"
              />
            </div> */}

            <DividerLine text={"Intended use case: laterial swiping"} />
            {/* VIDEO SHOWCASE */}
            <div className="mt-[5rem]"></div>
            <div className="md:flex md:h-[66.65vh] w-full gap-[0.5rem]">
              <video className="" controls autoPlay loop muted playsInline>
                <source
                  src={
                    "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/compressed_C0056-trim.MP4.webm"
                  }
                  type="video/webm"
                />
              </video>
              <video className="" controls autoPlay loop muted playsInline>
                <source
                  src={
                    "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/compressed_C0054-trim.MP4.webm"
                  }
                  type="video/webm"
                />
              </video>
            </div>

            {/* FEATURES */}
            <div className="pt-[5rem]"></div>
            <DividerLine text={"features"} />
            {/* GROUP OF 3 */}
            <div className="grid grid-cols-3 gap-[0.5rem] mt-[5rem]">
              <div className="flex flex-col justify-center items-center">
                <Image
                  src={
                    "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/edit-1-4-final.jpg"
                  }
                  height={500}
                  width={500}
                  layout="responsive"
                />
                <p className="text-offBlack3">Thumb aligns to working edge</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src={
                    "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/edit-4-5-final.jpg"
                  }
                  height={500}
                  width={500}
                  layout="responsive"
                />
                <p className="text-offBlack3">1:1 Relationship</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src={
                    "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/edit-3-5-final.jpg"
                  }
                  height={500}
                  width={500}
                  layout="responsive"
                />
                <p className="text-offBlack3">Ample grip area allowance</p>
              </div>
            </div>

            {/* DIVIDER */}
            <div className="h-[5rem] md:h-[10rem]"></div>
            {/* CLEAR LINE OF ACTION */}
            <New3
              img1="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/comp_edit-C0049.jpg.webp"
              text1={
                <div>
                  The direct 1:1 relationship between the thumb and the working
                  edge follows the user's intent precisely, ensuring that the
                  spatula feels instinctive,{" "}
                  <strong>
                    as if it were an extension of the body itself.
                  </strong>
                </div>
              }
              caption="There is a clear line of action starting at the arm, down to the wrist, thumb, and finally, blade edge."
            />

            {/* THENAR EMINENCE IMG */}
            {/* NEW 3 EXPANDED FOR 2 IMGS */}
            <main>
              <div
                className=" 
      lg:grid lg:grid-cols-6
      gap-[5.06rem] 
      w-full h-fit 
      items-start
      pt-[5rem]"
              >
                {/* <div
                  className="
        col-span-2
        leading-[1.5rem]
        lg:text-[1rem]
        tracking-[0.005em]
        text
        font-Suisse
        font-regular
        text-offBlack2"
                >
                  text
                </div> */}
                <div className="lg:pt-0 pt-8  lg:pb-0 pb-16 col-start-3 col-span-4">
                  <div className="flex w-full gap-[0.5rem]">
                    <div>
                      <Image
                        src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/comp_twistThenarEminence-edit-1.jpg.webp"
                        alt="home page image"
                        layout="responsive"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div>
                      <Image
                        src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/comp_twistThenarEminence-edit-2.jpg.webp"
                        alt="home page image"
                        layout="responsive"
                        width={500}
                        height={500}
                      />
                    </div>
                  </div>

                  <p className="font-Suisse pt-2 lg:text-[1rem] text-[0.75rem] text-offBlack3 flex justify-center">
                    The twist natrually fits the thenar eminence of the palm
                    perfectly, offering grip support and control.
                  </p>
                </div>
              </div>
            </main>
            {/* USING LIGHT TO REVEAL IMPERFECTIONS */}
            <main>
              <div
                className=" 
      lg:grid lg:grid-cols-6
      gap-[5.06rem] 
      w-full h-fit 
      items-start
      pt-[5rem]"
              >
                {/* <div
                  className="
        col-span-2
        leading-[1.5rem]
        lg:text-[1rem]
        tracking-[0.005em]
        text
        font-Suisse
        font-regular
        text-offBlack2"
                >
                  text
                </div> */}
                <div className="lg:pt-0 pt-8  lg:pb-0 pb-16 col-start-3 col-span-4">
                  <div className="flex w-full gap-[0.5rem]">
                    <div>
                      <Image
                        src={
                          "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/comp_edit-07083.jpg.webp"
                        }
                        height={500}
                        width={500}
                        layout="responsive"
                      />
                    </div>
                    <div>
                      <Image
                        src={
                          "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/comp_edit-07082.jpg.webp"
                        }
                        height={500}
                        width={500}
                        layout="responsive"
                      />
                    </div>
                  </div>

                  <p className="font-Suisse pt-2 lg:text-[1rem] text-[0.75rem] text-offBlack3 flex justify-center">
                    Focused light informed me what planes needed more or less
                    sanding. It reveals plane elevation.
                  </p>
                </div>
              </div>
            </main>
          </div>

          <div ref={processRef}>
            <CalloutSmall text1={"Process"} n />
          </div>

          <div ref={inspoRef}>
            <DividerLine text={"Inspiration"} />
            <CalloutSmall
              text1={<div>Muscles, caustics, and hands.</div>}
              text2={
                <div>
                  The harmonious symmetry created by how light caustics
                  interact, the way muscles fold into one another, and geometry
                  of our hands are all formed by{" "}
                  <strong className="text-offBlack1">fair curves</strong>.
                  Muscles and hands have a sense of tension during flexion /
                  extension, which subconsciously influenced the recurring
                  tapers which seem under tension in my spatula.
                </div>
              }
            />
          </div>

          <div className="flex justify-center">
            <div className="w-1/2">
              <Image
                src={
                  "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/comp_inspo-sketches-frame.png.webp"
                }
                height={500}
                width={500}
                layout="responsive"
              />
            </div>
          </div>

          <div className="pt-[5rem] md:pt-[10rem]"></div>
          {/* NEW SECTION */}
          <div ref={ergonomicsRef}>
            {/* EXPANDED HEADER */}
            <div
              className="
          md:w-2/3 h-fit 
          items-start"
            >
              <h1 className="font-SFProDisplay  text-3xl md:text-[3rem] leading-tight md:leading-[3rem] tracking-tight">
                Ergonomics Discoveries: Toothpaste revealing form
              </h1>
            </div>
            <main className="pt-[2rem] md:pt-[5rem]">
              <div className="w-full">
                <Image
                  className="pt-2"
                  src={
                    "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/comp_handstudies-sketches-frame-toothpaste.png.webp"
                  }
                  layout="responsive"
                  height={500}
                  width={500}
                />
              </div>

              <div className="grid grid-cols-3 pt-[3rem] gap-y-[3rem]">
                <div className="col-start-1 text-p">Using only Fair Curves</div>

                <div className="col-start-2 col-span-2">
                  The harmonious arcs & fair curves in the naturally occurring
                  geometry of our hands inspired me to try drawing various long
                  arcs in relation to one another, whether that be a golden
                  ratio relation, rule of thirds, or by primitive circles. I
                  found more success in this approach than by trying to directly
                  emulate the flow forms of my inspirations.
                </div>
                <div className="text-p">Ergonomics Discoveries</div>
                <div className="col-start-2 col-span-2">
                  <div className="grid grid-cols-4 gap-[2rem]">
                    <div>1</div>
                    <div className="col-span-3">
                      Studying the planes of my toothpaste one morning, I
                      realized how the bottom of the thenar eminence is a
                      horizontal plane (in the sketched grip), while the
                      underside of your forearm (where veins are) is vertical in
                      this grip. By running my fingers across these planes eyes
                      closed, I visualized that a 90º twist was occurring
                      between the hand to wrist to forearm connection.{" "}
                      <strong>
                        In pursuit to make my spatula integrated with the
                        transition of these body parts, I aimed to create top &
                        side views that might afford a twist as such.
                      </strong>
                    </div>
                    <div>2</div>
                    <div className="col-span-3">
                      In studying the planes, I found the &apos;palm
                      triangle&apos; plane is a key area requiring volume and
                      support for the intent of my spatula&apos;s motion.
                    </div>
                    <div>3</div>
                    <div className="col-span-3">
                      The Thenar Eminence (thumb meat area) becomes a push-plane
                      against my middle and index for grasping thinner forms.
                    </div>
                  </div>
                </div>
              </div>

              {/* NEW SECTION */}
              <div ref={constraintsRef}>
                <DividerLine text={"Setting Constraints"} />
                {/* old callout idea: A direct 1:1 relationship between the thumb and working edge */}
                <CalloutSmall
                  text1={<div>When the thumb moves, the food follows.</div>}
                  text2={
                    <div>
                      The direct 1:1 relationship between the thumb and the
                      working edge follows the user's intent precisely, ensuring
                      that the spatula feels instinctive, as if it were an
                      extension of the body itself.
                    </div>
                  }
                />
                <div className="w-full">
                  <Image
                    src={
                      "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/comp_lineOfActionFrame.png.webp"
                    }
                    height={500}
                    width={500}
                    layout="responsive"
                  />
                  <div className="flex justify-center text-offBlack3">
                    The spatula becomes an extended "wedge" emerging from the
                    arm.
                  </div>
                </div>
                {/* EXTRA BLURB. */}
                {/* <div className="pt-[1rem] md:w-2/3">
              I designed my spatula to function as a seamless extension of the
              hand, transforming natural movement into precise control. By
              establishing a direct 1:1 relationship between the thumb and the
              working edge, the tool follows the user's intent—when the thumb
              moves, the food follows. This approach prioritizes ergonomics and
              responsiveness, ensuring that the spatula feels instinctive, as if
              it were an extension of the body itself.
            </div> */}
              </div>

              {/* NEW SECTION: PROTOTYPING & CAD */}
              <main>
                <DividerLine text={"Prototyping & CAD"} />
                {/* CAD */}
                <div
                  className=" 
      lg:grid lg:grid-cols-6
      gap-[5.06rem] 
      w-full h-fit 
      items-start
      pt-[5rem]"
                >
                  <div className="lg:pt-0 pt-8  lg:pb-0 pb-16 col-start-3 col-span-4">
                    <div className="flex w-full gap-[0.5rem]">
                      <div className="w-[60rem]">
                        <Image
                          src={
                            "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/finalTopViewSketches.png"
                          }
                          height={500}
                          width={500}
                          layout="responsive"
                        />
                      </div>
                      <div>
                        <Image
                          src={
                            "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/SOLIDWORKS-SPATULA-3.png"
                          }
                          height={500}
                          width={500}
                          layout="responsive"
                        />
                      </div>
                      <div>
                        <Image
                          src={
                            "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/SOLIDWORKS-SPATULA-1.png"
                          }
                          height={500}
                          width={500}
                          layout="responsive"
                        />
                      </div>
                    </div>

                    <p className="font-Suisse pt-2 lg:text-[1rem] text-[0.75rem] text-offBlack3 flex justify-center">
                      Solidworks helped speed visualizing minor tweaks to my
                      base top and side profiles.
                    </p>
                  </div>
                </div>
                {/* CAD */}
                <div
                  className=" 
      lg:grid lg:grid-cols-6
      gap-[5.06rem] 
      w-full h-fit 
      items-start
      pt-[5rem]"
                >
                  <div className="lg:pt-0 pt-8  lg:pb-0 pb-16 col-start-3 col-span-4">
                    <div className="flex w-full gap-[0.5rem]">
                      <div>
                        <video
                          className=""
                          controls
                          autoPlay
                          loop
                          muted
                          playsInline
                        >
                          <source
                            src={
                              "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/compressed_C0031-trim.MP4.webm"
                            }
                            type="video/webm"
                          />
                        </video>
                      </div>
                      <div>
                        <video
                          className="
                              
                              https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/compressed_C0031-trim.MP4.webm"
                          controls
                          autoPlay
                          loop
                          muted
                          playsInline
                        >
                          <source
                            src={
                              "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/compressed_C0034-trim.MP4.webm"
                            }
                            type="video/webm"
                          />
                        </video>
                      </div>
                    </div>

                    <p className="font-Suisse pt-2 lg:text-[1rem] text-[0.75rem] text-offBlack3 flex justify-center">
                      (L) First prototype was too visually heavy, opted for a
                      slimmer, tighter profile
                      <br />
                      (R) Considering creating a slice so form follows the
                      motions function.
                    </p>
                  </div>
                </div>
                <div className="pt-[5rem]"></div>
                <New3
                  img1="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/sketchbook-printouts.png"
                  caption={
                    <div>
                      Observing how it looks at every angle, where the palm
                      needs more support. I often find photographing and
                      physically iterating in the latter half of a project is
                      most effective for refinement.
                    </div>
                  }
                />
                {/* USING LIGHT TO REVEAL IMPERFECTIONS */}
                <div
                  className=" 
      lg:grid lg:grid-cols-6
      gap-[5.06rem] 
      w-full h-fit 
      items-start
      pt-[5rem]"
                >
                  {/* <div
                  className="
        col-span-2
        leading-[1.5rem]
        lg:text-[1rem]
        tracking-[0.005em]
        text
        font-Suisse
        font-regular
        text-offBlack2"
                >
                  text
                </div> */}
                  <div className="lg:pt-0 pt-8  lg:pb-0 pb-16 col-start-3 col-span-4">
                    <div className="flex w-full gap-[0.5rem]">
                      <div>
                        <Image
                          src={
                            "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/comp_edit-07083.jpg.webp"
                          }
                          height={500}
                          width={500}
                          layout="responsive"
                        />
                      </div>
                      <div>
                        <Image
                          src={
                            "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/spatula/comp_edit-07082.jpg.webp"
                          }
                          height={500}
                          width={500}
                          layout="responsive"
                        />
                      </div>
                    </div>

                    <p className="font-Suisse pt-2 lg:text-[1rem] text-[0.75rem] text-offBlack3 flex justify-center">
                      Focused light informed me what planes needed more or less
                      sanding. It reveals plane elevation.
                    </p>
                  </div>
                </div>
              </main>
            </main>
          </div>
        </main>
      </div>
    </>
  );
}

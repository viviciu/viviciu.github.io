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

export default function Liminal() {
  const members = [
    "Yon Maor",
    "Stacy Chen",
    "Chris Song",
    "Ayden Xu",
    "Ervin Song",
    "Eric Lin",
    "Minsung Kang",
  ];
  const tools = [
    "Three.js",
    "React Three Fiber",
    "Figma",
    "Blender"
  ]
  const myRole = "Creative Technologist";
  const timeline = "6 months"


  const [activeIndex, setActiveIndex] = useState(0);
  const componentRefs = [useRef(null), useRef(null), useRef(null)];

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    componentRefs.forEach((ref, index) => {
      if (ref.current) {
        const { offsetTop, offsetHeight } = ref.current;
        console.log(index);
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveIndex(index);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // A realm where the very essence of self and time finds itself in flux.
  return (
    <main className=" block px-4">
      <Title
        text1={
          <div>
            LIMINAL, <br /> A realm where the very essence of self and time
            finds itself in flux.
          </div>
        }
      />

      {/* Role: Interaction Design, 3D Web Development, UI/UX Immersive Experiences" ? */}
      <YAMLBar
        client="Lunar Gala"
        year="2024"
        role="Interaction Design, 3D Web Development, Creative Direction"
      />
      <CoverYAML />
      <Context2
        context={
          <div>
            Lunar Gala (LG) is Pittsburgh&apos;s largest annual fashion show.
            It&apos;s website features the model lines, members, and ticketing
            all in line with this year&apos;s visual identity: <i>Liminality</i>.
            <br /> <br /> I designed and developed the site&apos;s home page,
            and conceptualized the lines page. Working amongst 7 others, I
            learned to communicate with devs, create concept renderings, and
            program interactive prototypes for our Creative Directors using
            React Three Fiber.
            <br /> <br />
            We encountered challenges with members ghosting and optimization issues, but managed to release on-time, garnering 250+ attendees for the final show.
          </div>
        }
        myRole={myRole}
        members={members}
        tools={tools}
        timeline={timeline}
      />
      <DividerLine text="Process" />
      <Header text={"Defining Liminality."} />

      {/* HERE USED TO BE Context4 */}
      <div
        className="flex 
      lg:grid lg:grid-cols-6
      gap-[5.06rem] 
      w-full h-fit 
      items-start
      pt-[1rem]"
      >
        <div
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
          {/* TEXT1 */}
          <div className="text-offBlack">
            After recieving the Creative Director&apos;s theme, Liminal, we had
            to establish constraints. How does LG{" "}
            <i className=" text-offBlack">interpret</i> the concept of
            Liminality? How does that{" "}
            <i className=" text-offBlack">translate to digital interactions?</i>
            <br />
            <br />
            <div className="text-offBlack">
              We define Liminality as &quot;neither here nor there,&quot; a
              place that is temporary—fleeting even. It is a transitional
              stage...{" "}
              <i className=" text-offBlack">“the space between spaces”</i> ,
              where time cannot be measured. A sense of infinite space is
              created in each page.
            </div>
            <br />
            <div className="text-offBlack">
              Our challenge was to achieve Liminality through the form,
              function, and interaction of the website. Weekly Creative Team
              meetings directed our visual identity as the website had to stay
              cohesive with the interpretations that Print, Motion, and
              Photography sub-teams were developing in their work.
            </div>
          </div>
        </div>
        <div className="col-start-3 col-span-4">
          <div className="grid grid-cols-2 col-start-1">
            <Image
              src={"/imgs/headsInit.png"}
              alt="home page image"
              layout="responsive"
              width={500}
              height={500}
            />
            <Image
              src={"/imgs/TypefaceGuidelines.png"}
              alt="home page image"
              layout="responsive"
              width={500}
              height={500}
            />
            <Image
              src={"/imgs/printBooklet.png"}
              alt="home page image"
              layout="responsive"
              width={500}
              height={500}
            />
            <Image
              src={"/imgs/cdPrint.png"}
              alt="home page image"
              layout="responsive"
              width={500}
              height={500}
            />
          </div>
          <p className="font-Suisse pt-2">
            Various moodboards issued by CDs and creative team deliverables.
          </p>
        </div>
      </div>

      <DividerLine text={"Challenge 1: Liminality in form"} />

      <Header text={"What form language creates a liminal space?"} />
      <New3
        img1={"/imgs/homeGif.gif"}
        caption={"A user must wait to enter a page—each space is transitory."}
        text1={
          "The home page is a transitory white void hosting each space: Time moves in an infinite loop, and when the user wants to enter a page, they enter the “space between spaces” — neither here nor there, they are “in-between” time, and can reside in that page as long as they hold the mouse. This forced interaction was integral to evoking the feeling of temporality established in our initial definition."
        }
      />
      <New3
        img1={"/imgs/peoplePageGif.gif"}
        caption={"Seemingly endless deck of cards temporarily visible."}
        text1={
          "The people page creates an “infinity scroll” of cards representing each LG member. This emphasizes liminality and at the same time emphasizes the great mass of talents a part of making the show possible."
        }
      />
      <New3
        img1={"/imgs/linesPageGif.gif"}
        caption={"Infinite runway of model lines."}
        text1={
          "The lines page translates the physicality of the liminality within spaces by emulating an infinitely long fashion runway in 3D. Instead of flipping magazine-like pages, we transformed the interaction by creating depth a user must walk through using mouse position. The endless nature of the runway is innately liminal."
        }
      />

      <DividerLine text={"Challenge 2: Liminality in function"} />

      <Header text={"Constructing a transitory site architecture."} />
      <New3
        img1={"/imgs/lg-site-diagram-offwhite.png"}
        text1={
          "The visual language and interaction design would suffer if the entire site’s mapping wasn’t transitory. This required us to establish new terms to avoid miscommunication when discussing such abstract ideas during team meetings: “Capital-L Liminal” and “liminal”—zone C—is liminality in its form—its visual language. Visual cues such as endless tunnels, negative space, and the like. “Capital-L Liminal”—zone B—is literally a liminal space—it does not exist and its only purpose is to transport the user to another space. The home page serves this purpose—it is a navigation hub as discussed earlier where time is an infinite loop. However, it is also “liminal” visually."
        }
      />
      <DividerLine text={"Challenge 3: Liminality through Interaction"} />
      <Header text={"Forced interaction: Temporal mouse holds."} />
      <New3
        img1={"/imgs/home-inoutmov.gif"}
        text1={
          "To enter the site, you must click and hold a panel. The nature of a mouse hold is innately temporary and transitory. Through both computer and multi-touch gestures, a mouse hold is the time-the experience even—in between the beginning and end of any interaction, encapsulating feelings of Liminality."
        }
      />

      <DividerLine text={"Reflection"} />
      {/* <Header
        text={
          "ITERATIONS ● BUGS ● R&D ● FALLEN SOLDIERS ● ...AND A PIVOT FROM DESIGNER TO CREATIVE DEVELOPER."
        }
      /> */}
      {/* HEADER V2 */}
      <div
        className="
        py-[2.87rem]
        lg:grid lg:grid-cols-6 flex
        lg:gap-[5.06rem]
        w-full h-fit 
        items-start"
      >
        <h1 className="font-SFProDisplay  text-[3rem] leading-[3rem] tracking-tight col-span-4">
          ITERATIONS ● BUGS ● R&D ● FALLEN SOLDIERS ● ...AND A PIVOT FROM
          DESIGNER TO CREATIVE DEVELOPER.
        </h1>
      </div>

      {/* IMAGES */}
      <div
        className="
        py-[2.87rem]
        lg:grid lg:grid-cols-6 flex
        lg:gap-[1rem]
        w-full h-fit 
        items-start"
      >
        <div className="col-span-4">
          <Image
            src={"/imgs/lg-process-reel.gif"}
            alt="home page image"
            layout="responsive"
            width={500}
            height={500}
          />
        </div>
        <div className="col-span-2">
          <Image
            src={"/imgs/whiteboard-peoplePage.jpg"}
            alt="home page image"
            layout="responsive"
            width={500}
            height={500}
          />
          <p className="font-Suisse">
            Notational sketching improved cross functional communciation.
          </p>
        </div>
        <div className="col-span-6">
          <Image
            src={"/imgs/liminalTitle.png"}
            alt="home page image"
            layout="responsive"
            width={500}
            height={500}
          />
          <p className="font-Suisse">
            Blender concept renders for home page animation.
          </p>
        </div>
        <div className="col-span-4">
          <Image
            src={"/imgs/panels-blender-render.png"}
            alt="home page image"
            layout="responsive"
            width={500}
            height={500}
          />
        </div>
        <div className="col-span-2">
          <Image
            src={"/imgs/whiteboard-notationalSketching.png"}
            alt="home page image"
            layout="responsive"
            width={500}
            height={500}
          />
        </div>
      </div>

      <New3
        text1={
          <div>
            <b className="text-black">
              Transitioning from designer to dev gave me eyes on both sides of
              the process, preparing me to lead the team next semester.
            </b>{" "}
            Joining the team I only had some html and css background self-taught
            during highschool-but I still wanted to be involved in the building
            of the site after the design stage to ensure it&apos;s execution
            follows the vision. So through Blender tutorials, reading
            documentation, and looking towards well-structured codepen examples,
            I learned React and React Three Fiber to help build our site using
            3D scenes.
          </div>
        }
      />
      <New3
        text1={
          <div>
            <b className="text-black">
              I honed my ability to integrate my work into a large
              organization&apos;s brand identity.
            </b>{" "}
            Creative team is over 40 students across different subgroups and
            must move as one cohesive unit. The synergistic influences during
            cross-team meetings and weekly general body meetings-where each team
            shared their progress-made me prioritize the team and themes
            direction in every design decision.
          </div>
        }
      />
      <New3
        text1={
          <div>
            <b className="text-black">
              Notational Sketching improved my cross functional communciation.
              You can&apos;t talk with your hands.
            </b>{" "}
            It allowed me to quickly communicate to another dev a simpler
            approach to programming the 3D infinitely rotating planes on the
            Home page. I took on programming and styling the texture of the Home
            page and frosted cursor.
          </div>
        }
      />

      <UnderDevelopment
        text={
          <p>
            process under dev.
            <br /> last update 14 Nov 2024.
          </p>
        }
      />
    </main>
  );
}

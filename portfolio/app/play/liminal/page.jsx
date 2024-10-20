"use client"
import React, { useState, useEffect, useRef } from "react";
import Context from "../../_components/Context";
import CoverYAML from "../../_components/CoverYAML";
import Challenges from "../../_components/Challenges";
import Callout from "../../_components/Callout";
import Solution from "../../_components/Solution";
import ImageGrid1 from "../../_components/ImageGrid1";
import ImageGrid2 from "../../_components/ImageGrid2";
import ImageGrid3 from "../../_components/ImageGrid3";
import ImageGrid4 from "../../_components/ImageGrid4";
import ImageGrid5 from "../../_components/ImageGrid5";
import CircleSect from "../../_components/CircleSect";

import "../../_components/greyBGLines.css";
import Footer from "../../_components/Footer";

export default function Liminal() {
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
  
  return (
    <main className=" h-fit block grid-background">
      <div className="m-5">
        <Context
          text1="A realm where the very essence of self and time finds itself in flux."
          text2={
            <div>
              Lunar Gala (LG) is Pittsburgh’s largest annual fashion show. The
              entirely student-run show harnesses the diverse creative talents
              of CMU—including designers, models, photographers, animators, and
              dancers. <br /> <br /> I worked amongst 7 others both designing and
              developing the show’s website on the creative web team. It
              documents the lines, members, ticketing all in line with the
              year&apos;s visual identity: <i>Liminality</i>
            </div>
          }
        />
      </div>
      <CoverYAML />
      <div className="m-5">
        {/* DIVIDER LINE 2 */}
        {/* in figma, the divider line height is 0.105rem */}
        <div
          className="bg-white w-full h-[1px]
      "
        ></div>
        <p
          className={`pt-2 indent-[1.75rem] uppercase 
            text-offwhite font-Helvetica
          `}
        >
          <span className="font-sans">●</span> Defining Liminality.
        </p>
        {/* END DIVIDER LINE */}
        <Context
          text1="'LIMINAL'"
          text2={
            <div>
              Before ideating, we had to establish constraints. How does LG{" "}
              <i className="font-SuisseWorks text-white">interpret</i> the
              concept of Liminality? How does that{" "}
              <i className="font-SuisseWorks text-white">
                translate to digital interactions?
              </i>
              <br />
              <br />
              <div>
                We define Liminality as &quot;neither here nor there,&quot; a
                place that is temporary—fleeting even. It is a transitional
                stage… Liminality is the space between spaces. We chose to
                employ feelings of{" "}
                <i className="font-SuisseWorks text-white">
                  “the space between spaces”
                </i>{" "}
                , where time cannot be measured. A sense of infinite space is
                created in each “room.”{" "}
                <i className="font-SuisseWorks text-white">The backrooms</i>,
                one primal cultural example of liminality, was one of a few of
                our early influences.
              </div>
            </div>
          }
        />

        {/* Scene */}
        <Challenges
          activeIndex={activeIndex}
          index={0}
          ref={componentRefs[0]}
        />
      </div>
      {/* CALLOUT HAS MARGIN 0, others use a wrapper div with m-5 */}
      <Callout
        className="m-0"
        text="WHAT FORM LANGUAGE CREATES A LIMINAL SPACE?"
      />

      <Solution>
        <ImageGrid1
          img="imgs/peoplePage.png"
          img2="imgs/linesPage.png"
          img3="imgs/homeGif.gif"
          text1={
            <div>
              The people page ... fig 01 creates a sort of “infinity scroll” of
              cards representing each LG member. This emphasizes liminality and
              at the same time emphasizes the great mass of talents a part of
              making the show possible.
            </div>
          }
          text2={
            <div>
              The lines page ... fig 02 translates the physicality of the
              liminality within spaces by emulating an infinitely long fashion
              runway in 3D. Instead of flipping magazine-like pages, we
              transformed the interaction by creating depth a user must walk{" "}
              <i className="font-SuisseWorks">through</i> using mouse position.
              The endless nature of the runway is innately liminal.
            </div>
          }
          text3={
            <div>
              The home page ... fig 03 is a transitory white void hosting each
              space: Time moves in an infinite loop, and when the user wants to
              enter a page, they enter the “space between spaces” — neither here
              nor there, they are “in-between” time, and can reside in that page
              as long as they hold the mouse. This forced interaction was
              integral to evoking the feeling of temporality established in our
              initial definition.
            </div>
          }
        />
      </Solution>

      <div className="m-5">
        <Challenges
          activeIndex={activeIndex}
          index={1}
          ref={componentRefs[1]}
        />
      </div>
      <Callout
        className="m-0"
        text="LIMINALITY STARTS WITH THE FOUNDATION—SITE ARCHITECTURE."
      />
      <div className="m-5">
        <Solution>
          <ImageGrid2 img="lg-site-diagram-labels-lowOpacity.png" />
        </Solution>
        <Challenges
          activeIndex={activeIndex}
          index={2}
          ref={componentRefs[2]}
        />
      </div>

      <Callout
        className="m-0"
        text="HOW MIGHT INTERACTION DESIGN EVOKE FEELINGS OF TEMPORALITY?"
      />
      <div className="m-5">
        <ImageGrid3
          img="imgs/enteringPages.gif"
          text1="To enter the site, you must click and hold a panel. The nature of a mouse hold is innately temporary and transitory.
            Through both computer and multi-touch gestures, a mouse hold is the
            time—the experience even—in between the beginning and end of any
            interaction, encapsulating feelings of Liminality."
          dividerLineText="Liminality in interaction"
        />
      </div>
      <CircleSect text="REFLECTION" />
      <ImageGrid5
        img1="imgs/lg-process-reel.gif"
        img2="whiteboard-notationalSketching.png"
        img3="imgs/panels-blender-render.png"
        img4="imgs/whiteboard-peoplePage.jpg"
        bgColor="white"
      />
      <Footer />
    </main>
  );
}

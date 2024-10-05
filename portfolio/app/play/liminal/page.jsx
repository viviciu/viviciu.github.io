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
            <p>
              Lunar Gala (LG) is Pittsburgh’s largest annual fashion show. The
              entirely student-run show harnesses the diverse creative talents
              of CMU—including designers, models, photographers, animators, and
              dancers. <br /> <br /> I worked amongst 7 others on designing and
              developing the show’s website on the creative web team. It
              documents the lines, members, ticketing all in line with the
              year's visual identity: <i>Liminality</i>
            </p>
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
            <p>
              Before ideating, we had to establish constraints. How does LG{" "}
              <i className="font-SuisseWorks text-white">interpret</i> the
              concept of Liminality? How does that{" "}
              <i className="font-SuisseWorks text-white">
                translate to digital interactions?
              </i>
              <br />
              <br />
              <p>
                We define Liminality as "neither here nor there,” a place that
                is temporary—fleeting even. It is a transitional stage…
                Liminality is the space between spaces. We chose to employ
                feelings of{" "}
                <i className="font-SuisseWorks text-white">
                  “the space between spaces”
                </i>{" "}
                , where time cannot be measured. A sense of infinite space is
                created in each “room.”{" "}
                <i className="font-SuisseWorks text-white">The backrooms</i>,
                one primal cultural example of liminality, was one of a few of
                our early influences.
              </p>
            </p>
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
        <ImageGrid1 img="IMAG0009.JPG" img2="fav-color.png" />
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
        <ImageGrid3 img="lg-gif-compressed.gif" />
      </div>
      <CircleSect text="REFLECTION" />
      <ImageGrid5
        img=""
        img2="whiteboard-notationalSketching.png"
        bgColor="white"
      />
      <Footer />
    </main>
  );
}

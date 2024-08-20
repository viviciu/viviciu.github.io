"use client"
import React, { useState, useEffect, useRef } from "react";
import Context from "../../_components/Context";
import CoverYAML from "../../_components/CoverYAML";
import Challenges from "../../_components/Challenges";
import "../../_components/greyBGLines.css";

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
    <main className="m-5 h-fit block grid-background">
      <Context
        text1="A realm where the very essence of self and time finds itself in flux."
        text2="We define Liminality as a captivating interlude, where the boundaries
          of reality blur and reconfigure. It is a passage where the soul's
          chrysalis unfurls, and the harmonious transition from the familiar to
          the enigmatic."
      />
      <CoverYAML />
      <Context
        text1="'LIMINAL'"
        text2="             We define Liminality as a captivating interlude, where the boundaries of reality blur and reconfigure. It is a passage where the soul's chrysalis unfurls, and the harmonious transition from the familiar to the enigmatic."
      />
      {/* <Callout /> */}
      {/* Scene */}
      <Challenges activeIndex={activeIndex} index={0} ref={componentRefs[0]} />

      <Context
        text1="'LIMINAL'"
        text2="             We define Liminality as a captivating interlude, where the boundaries of reality blur and reconfigure. It is a passage where the soul's chrysalis unfurls, and the harmonious transition from the familiar to the enigmatic."
      />
      <Challenges activeIndex={activeIndex} index={1} ref={componentRefs[1]} />
      <Context
        text1="'LIMINAL'"
        text2="             We define Liminality as a captivating interlude, where the boundaries of reality blur and reconfigure. It is a passage where the soul's chrysalis unfurls, and the harmonious transition from the familiar to the enigmatic."
      />
      <Challenges activeIndex={activeIndex} index={2} ref={componentRefs[2]} />
      <Context
        text1="'LIMINAL'"
        text2="             We define Liminality as a captivating interlude, where the boundaries of reality blur and reconfigure. It is a passage where the soul's chrysalis unfurls, and the harmonious transition from the familiar to the enigmatic."
      />
      {/* <Solution /> */}
    </main>
  );
}

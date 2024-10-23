import React, { useEffect, useRef } from "react";
import "./circle.css"

const CircleSect = ({ text }) => {
  
    // Circle animation
  // FROM : https://github.com/conorbailey90/form-clone/blob/main/js/app.js
  // FROM : https://www.youtube.com/watch?v=WgKQxXMrJb0
    // TRANSLATION OF JS -> JSX WITH AID OF GIRHUB COPILOT  
    const circleSectionRef = useRef(null);
    const circleRef = useRef(null);

    useEffect(() => {
      const circleSection = circleSectionRef.current;
      const circle = circleRef.current;

      function scrollCircle() {
        let { top } = circleSection.getBoundingClientRect();
        let scaleTop = Math.abs(top);
        let scale = scaleTop / window.innerHeight;
        scale = scale < 0 ? 0 : scale > 1 ? 1 : scale;
        if (top <= 0) {
          circle.style.transform = `translate(-50%, -50%) scale(${scale})`;
        } else {
          circle.style.transform = `translate(-50%, -50%) scale(${0})`;
        }
      }

      window.addEventListener("scroll", scrollCircle);

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener("scroll", scrollCircle);
      };
    }, []);

  return (
    <main id="circle__section" ref={circleSectionRef}>
      <div className="circle__sticky">
        <h1 className="lg:text-[10rem] text-[#fafafa] z-10">{text}</h1>
        <div className="circle__container z-0">
          <div className="circle" ref={circleRef}></div>
        </div>
      </div>
    </main>
  );
};
export default CircleSect;

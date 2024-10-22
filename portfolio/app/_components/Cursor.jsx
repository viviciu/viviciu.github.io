// "use client"
// import {React, useEffect, useRef} from 'react'
// import gsap from 'gsap'
// import "./cursorStyle.css"

// const Cursor = () => {
//   //   useEffect(() => {
//   //     const cursorDot = document.querySelector("[data-cursor-dot]");
//   //     const cursorOutline = document.querySelector("[data-cursor-outline]");

//   //     const moveCursor = (e) => {
//   //       cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
//   //       cursorOutline.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
//   //     };

//   //     window.addEventListener("mousemove", moveCursor);

//   //     return () => {
//   //       window.removeEventListener("mousemove", moveCursor);
//   //     };
//   //   }, []);

//   // CURSOR TUTORIAL: https://youtu.be/E6PZvwITeU4?si=w8zFLJDUgXkfRWSw Oliver Larose
//   const circles = useRef([]);

//   const mouse = useRef({
//     x: 0,
//     y: 0,
//   });

//   const delayedMouse = useRef({
//     x: 0,
//     y: 0,
//   });

//   const manageMouseMove = (e) => {
//     const { clientX, clientY } = e;
//     mouse.current = {
//       x: clientX,
//       y: clientY,
//     };
//   };

//   const lerp = (x, y, a) => x * (1 - a) + y * a;

//   const moveCircle = (x, y) => {
//     circles.current.forEach((circle, i) => {
//         gsap.set(circle, { x, y, xPercent: -50 });
//     })
//   };

//   const animate = () => {
//     const { x, y } = delayedMouse.current;
//     delayedMouse.current = {
//       // Every second, we're moving the delated mouse towards the current mouse with a 0.01 delay, aka a 10% delay
//       x: lerp(x, mouse.current.x, 0.095),
//       y: lerp(y, mouse.current.y, 0.095),
//     };

    

//     moveCircle(delayedMouse.current.x, delayedMouse.current.y);
//     window.requestAnimationFrame(animate);
//   };

//   useEffect(() => {
//     animate();
//     window.addEventListener("mousemove", manageMouseMove);
//     return () => window.removeEventListener("mousemove", manageMouseMove);
//   }, []);

//   return (
//     <div>
//       <div
//         ref={circles.current[0]}
//         className="cursor-dot"
//         data-cursor-dot
//       ></div>
//       <div
//         ref={circles.current[1]}
//         className="cursor-outline"
//         data-cursor-outline
//       ></div>
//     </div>
//   );
// };

// export default Cursor




// COPILOT

"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./cursorStyle.css";

const Cursor = () => {
  const circles = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouseDot = useRef({ x: 0, y: 0 });
  const delayedMouseOutline = useRef({ x: 0, y: 0 });

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.current = { x: clientX, y: clientY };
  };

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const moveCircle = (x, y, circle) => {
    gsap.set(circle, { x, y, xPercent: -50, yPercent: -50 });
  };

  const animate = () => {
    const { x: xDot, y: yDot } = delayedMouseDot.current;
    const { x: xOutline, y: yOutline } = delayedMouseOutline.current;

    delayedMouseDot.current = {
      x: lerp(xDot, mouse.current.x, 1), // Faster interpolation for the dot
      y: lerp(yDot, mouse.current.y, 1),
    };

    delayedMouseOutline.current = {
      x: lerp(xOutline, mouse.current.x, 0.05), // Slower interpolation for the outline
      y: lerp(yOutline, mouse.current.y, 0.05),
    };

    moveCircle(
      delayedMouseDot.current.x,
      delayedMouseDot.current.y,
      circles.current[0]
    );
    moveCircle(
      delayedMouseOutline.current.x,
      delayedMouseOutline.current.y,
      circles.current[1]
    );

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    circles.current = [
      document.querySelector("[data-cursor-dot]"),
      document.querySelector("[data-cursor-outline]"),
    ];
    window.addEventListener("mousemove", manageMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return (
    <div>
      <div className="cursor-dot" data-cursor-dot></div>
      <div className="cursor-outline" data-cursor-outline></div>
    </div>
  );
};

export default Cursor;
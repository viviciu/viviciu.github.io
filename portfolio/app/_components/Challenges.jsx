import React, { forwardRef } from "react";// IMPORTANT
import DividerLine from "./DividerLine";

const Challenges = forwardRef(({ activeIndex, index }, ref) => {
  // IMPORTANT
  return (
    <main>
      <div
        ref={ref} // NOTICE REF HERE
        className="
        py-[2.87rem]
        lg:grid lg:grid-cols-5
        lg:gap-[5.06rem]
        w-full h-fit 
        items-start"
      >
        <h1 className="text-h1 leading-h1 tracking-h1">Challenges</h1>

        <div className="flex col-start-3 lg:py-0 pt-[3rem]">
          <p
            className={`${
              index === 0 && activeIndex === index
                ? "text-offBlack"
                : "text-gray-100"
            }`}
          >
            ●
          </p>
          <p
            className={`indent-[11%] font-SuisseWorks ${
              index === 0 && activeIndex === index
                ? "text-offBlack"
                : "text-gray-100"
            }`}
          >
            Liminality in <span className="italic">form</span>
          </p>
        </div>
        <div className="flex lg:py-0 pt-[1rem]">
          <p
            className={`${
              index === 1 && activeIndex === index
                ? "text-offBlack"
                : "text-gray-100"
            }`}
          >
            ●
          </p>
          <p
            className={`indent-[11%] font-SuisseWorks ${
              index === 1 && activeIndex === index
                ? "text-offBlack"
                : "text-gray-100"
            }`}
          >
            Liminality in <span className="italic">function</span>
          </p>
        </div>
        <div className="flex lg:py-0 pt-[1rem]">
          <p
            className={`${
              index === 2 && activeIndex === index
                ? "text-offBlack"
                : "text-gray-100"
            }`}
          >
            ●
          </p>
          <p
            className={`indent-[11%] font-SuisseWorks ${
              index === 2 && activeIndex === index
                ? "text-offBlack"
                : "text-gray-100"
            }`}
          >
            Liminality in <span className="italic">interaction</span>
          </p>
        </div>
      </div>
    </main>
  );
});

export default Challenges;

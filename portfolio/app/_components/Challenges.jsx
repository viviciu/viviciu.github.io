import React, { forwardRef } from "react";// IMPORTANT

const Challenges = forwardRef(({ activeIndex, index }, ref) => {
  // IMPORTANT
  return (
    <main>
      {/* DIVIDER LINE */}
      {/* in figma, the divider line height is 0.105rem */}
      <div className="bg-white w-full h-[1px]"></div>
      <div
        ref={ref} // NOTICE REF HERE
        className="
        pt-[2.87rem]
        grid lg:grid-cols-5 grid-cols-3
        gap-[5.06rem] 
        w-full h-fit 
        items-start"
      >
        <h1 className="text-h1 leading-h1 tracking-h1">Challenges</h1>

        <div className="flex col-start-3">
          <p className={`${
              index === 0 && activeIndex === index
                ? "text-white"
                : "text-gray-500"
            }`}>●</p>
          <p
            className={`indent-[11%] font-SuisseWorks ${
              index === 0 && activeIndex === index
                ? "text-white"
                : "text-gray-500"
            }`}
          >
            Liminality in <span className="italic">form</span>
          </p>
        </div>
        <div className="flex">
          <p className={`${
              index === 1 && activeIndex === index
                ? "text-white"
                : "text-gray-500"
            }`}>●</p>
          <p
            className={`indent-[11%] font-SuisseWorks ${
              index === 1 && activeIndex === index
                ? "text-white"
                : "text-gray-500"
            }`}
          >
            Liminality in <span className="italic">function</span>
          </p>
        </div>
        <div className="flex">
          <p className={`${
              index === 2 && activeIndex === index
                ? "text-white"
                : "text-gray-500"
            }`}>●</p>
          <p
            className={`indent-[11%] font-SuisseWorks ${
              index === 2 && activeIndex === index
                ? "text-white"
                : "text-gray-500"
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

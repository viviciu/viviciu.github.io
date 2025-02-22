import React, { forwardRef } from "react";// IMPORTANT
import DividerLine from "./DividerLine";

const Header = forwardRef(({ text, activeIndex, index }, ref) => {
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
        <h1 className="font-SFProDisplay  text-[3rem] leading-[3rem] tracking-tight col-span-2">
          {text}
        </h1>
      </div>
    </main>
  );
});

export default Header;

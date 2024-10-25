import Link from 'next/link'
import React, { forwardRef } from 'react' // IMPORTANT

const Context = forwardRef(({ text1, text2, bgColor }, ref) => { // NOTICE REF HERE
  return (
    // NOTICE REF IN MAIN
    <main ref={ref} >
      <div
        // gap-[5.06rem] !!
        className={` ${
          bgColor === "white" ? "text-offBlack2" : "text-gray-200"
        } lg:my-[3rem] my-[3rem] 
      lg:grid lg:grid-cols-5
      lg:gap-[5.06rem] 
      flex
      flex-col
      gap-[2rem]
      w-full h-fit `}
      >
        <div
          className="text-offblack uppercase
            font-SFProDisplay
            font-regular
            tracking-['var(--ls-h1)']
            lg:leading-['var(--lh-h1)]
            leading-pMobile
            lg:text-xl
            text-xl
            lg:col-span-2
            lg:col-start-1

            "
        >
          {text1}
        </div>
        <div
          className={`
          ${bgColor === "white" ? "text-offBlack2" : "text-gray-200"}
          col-span-3
        leading-p3
        lg:text-p
        text
        font-SuisseWorks
        font-regular
      `}
        >
          {text2}
        </div>
      </div>
    </main>
  );
});

export default Context
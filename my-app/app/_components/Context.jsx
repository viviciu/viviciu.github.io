import Link from 'next/link'
import React, { forwardRef } from 'react' // IMPORTANT

const Context = forwardRef(({ text1, text2 }, ref) => { // NOTICE REF HERE
  return (
    // NOTICE REF IN MAIN
    <main ref={ref}>
      <div
        // gap-[5.06rem] !!
        className="
      pt-[2.9375rem] lg:pb-[5.06rem] mt-[3.5rem] mb-[5rem]
      lg:grid lg:grid-cols-5 grid-cols-3
      gap-[5.06rem] 
      w-full h-fit 
      items-start
      "
      >
        <div
          className="text-offblack 
            font-SFProDisplay
            font-semibold
            tracking-['var(--ls-h1)']
            lg:leading-['var(--lh-h1)]
            leading-pMobile
            lg:text-6xl
            text-xl
            lg:col-span-2
            lg:col-start-1
            mb-24
            "
        >
          {text1}
        </div>
        <div
          className="col-span-3
        leading-p3
        lg:text-p
        text
        font-SuisseWorks
        font-regular
        text-offBlack2"
        >
          {text2}
        </div>
      </div>
    </main>
  );
});

export default Context
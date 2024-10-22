import Link from 'next/link'
import React, { forwardRef } from 'react' // IMPORTANT

const Title = forwardRef(({ text1 }, ref) => { // NOTICE REF HERE
  return (
    // NOTICE REF IN MAIN
    <main ref={ref}>
      <div
        // gap-[5.06rem] !!
        className="
      pt-[2.9375rem] lg:pb-[5.06rem] mt-[3.5rem]
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
            lg:col-span-4
            lg:col-start-1
            mb-24
            "
        >
          {text1}
        </div>
        
      </div>
    </main>
  );
});

export default Title
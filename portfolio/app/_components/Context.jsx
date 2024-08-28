import Link from 'next/link'
import React, { forwardRef } from 'react' // IMPORTANT

const Context = forwardRef(({ text1, text2 }, ref) => { // NOTICE REF HERE
  return (
    // NOTICE REF IN MAIN
    <main ref={ref}>
      <div
        // gap-[5.06rem] !!
        className="
      pt-[2.9375rem] pb-[5.06rem] mt-[3.5rem]
      grid lg:grid-cols-5 grid-cols-3
      gap-[5.06rem] 
      w-full h-fit 
      items-start
      "
      >
        <h1
          className="text-offwhite 
            font-Helvetica
            tracking-['var(--ls-h1)']
            leading-['var(--lh-h1)]
            lg:text-h1
            md:text-h1
            xs:text-6xl
            col-span-2
            lg:col-span-2
            lg:col-start-1
            col-start-2
            "
        >
          {text1}
        </h1>
        <p
          className="
          indent-[33%]
        col-start-3
        col-span-3
        lg:col-span-3
        leading-h4pp
        text-h4pp
        font-Helvetica
        font-thin
        text-offwhite2
        "
        >
          {text2}
        </p>
      </div>
    </main>
  );
});

export default Context
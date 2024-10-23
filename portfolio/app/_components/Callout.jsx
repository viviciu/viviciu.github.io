import React, { forwardRef } from "react"; // IMPORTANT

const Callout = ({ text }) => {
  return (
    <main className="bg-black mx-[-1rem]">
      <div
        // gap-[5.06rem] !!
        className="
      pt-[10.61rem] pb-[8.81rem]
      grid lg:grid-cols-5 grid-cols-3
      gap-[5.06rem] 
      h-fit 
      items-start
      mx-5
      "
      >
        <h1
          className="text-offwhite 
            font-Helvetica
            text-500
            tracking-['var(--ls-h1)']
            leading-['var(--lh-h1)]
            lg:text-h1
            md:text-h1
            xs:text-6xl
            col-span-4
            lg:col-span-4
            col-start-1
            "
        >
          {text}
        </h1>
      </div>
    </main>
  );
}

export default Callout;

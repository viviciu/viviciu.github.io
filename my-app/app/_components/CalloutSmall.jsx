import React from "react"; // IMPORTANT

const Callout = ({ text1, text2 }) => {
  return (
    <main className="w-full mx-[-1rem] flex justify-center">
      <div
        // gap-[5.06rem] !!
        className="
      pt-[10.61rem] pb-[8.81rem]
      w-1/2
      flex flex-col
      gap-[2rem] 
      h-fit 
      mx-5
      text-center
      "
      >
        <h1
          className="text-offBlack2
            font-SFProDisplay
            text-regular
            tracking-['var(--ls-h1)']
            leading-['var(--lh-h1)]
            lg:text-h1
            md:text-h1
            leading-callout
            text-4xl
            
            "
        >
          {text1}
        </h1>
        <div
          className="text-offBlack3
            font-SFProDisplay
            text-regular
            tracking-['var(--ls-h1)']
            lg:leading-['var(--lh-h1)]
            lg:text-2xl
            md:text-2xl
            leading-tighter
            md:leading-callout
            text-2xl
            
            "
        >
          {text2}
        </div>
      </div>
    </main>
  );
}

export default Callout;

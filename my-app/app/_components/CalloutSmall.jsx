import React from "react"; // IMPORTANT

const Callout = ({ text1, text2 }) => {
  return (
    <main className="w-full mx-[-1rem] flex justify-center">
      <div
        // gap-[5.06rem] !!
        className="
      pt-[10.61rem] pb-[8.81rem]
      
      flex flex-col
      gap-[2rem] 
      h-fit 
      mx-5
      text-center

      items-center
      "
      >
        <h1
          className="text-offBlack2
            font-SFProDisplay
            text-regular
            tracking-['var(--ls-h1)']
            leading-['var(--lh-h1)]
            text-4xl
            md:text-h1
            md:leading-callout
            
            md:w-2/3
            "
        >
          {text1}
        </h1>
        <div
          className="text-offBlack3
            font-SFProDisplay
            text-regular
            tracking-['var(--ls-h1)']
            leading-normal
            md:leading-['var(--lh-h1)]
            text-p
            lg:text-2xl
            md:text-2xl
            leading-tighter
            md:leading-callout
            text-2xl
            md:w-1/2
            "
        >
          {text2}
        </div>
      </div>
    </main>
  );
}

export default Callout;

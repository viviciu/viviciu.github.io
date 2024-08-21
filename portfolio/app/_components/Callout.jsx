import React, { forwardRef } from "react"; // IMPORTANT

const Callout = ({ text }) => {
  return (
    <main className="bg-white">
      <div
        // gap-[5.06rem] !!
        className="
      pt-[10.61rem] pb-[8.81rem]
      grid lg:grid-cols-5 grid-cols-3
      gap-[5.06rem] 
      w-full h-fit 
      items-start
      mx-5
      "
      >
        {/* weird line */}
        <div style={{width: '100%', 
            height:'100%', 
            transform: 'rotate(90deg)', 
            transformOrigin:'0 0',
            opacity: '0.36', 
            border:'0.68px #151515 dotted',
            position:'absolute',
            left:'50%',
            }}></div>
        <h1
          className="text-black 
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

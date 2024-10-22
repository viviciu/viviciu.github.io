import React from 'react'

export const Context2 = ({text}) => {
  return (
    <div
      // gap-[5.06rem] !!
      className="
      lg:pt-[2.9375rem] lg:pb-[5.06rem] lg:mt-[3.5rem]
      pb-[3.06rem]
      lg:grid lg:grid-cols-5 grid-cols-3
      gap-[5.06rem] 
      w-full h-fit 
      items-start
      "
    >
      <div
        className="
        col-start-1
        col-span-3
        lg:col-span-3
        leading-p3
        lg:text-p
        text
        font-SuisseWorks
        font-regular
        text-offBlack2
        "
      >
        {text}
      </div>
    </div>
  );
}
export default Context2;
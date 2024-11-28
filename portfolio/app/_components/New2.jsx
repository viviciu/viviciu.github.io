import Link from 'next/link'
import React, { forwardRef } from 'react' // IMPORTANT
import Image from 'next/image';

const New2 = forwardRef(({ text0, text1, text2, text3, img1, img2, img3 }, ref) => { // NOTICE REF HERE
  return (
    // NOTICE REF IN MAIN
    <main ref={ref}>
      
      <div
        className="flex 
      lg:grid lg:grid-cols-6
      gap-[5.06rem] 
      w-full h-fit 
      items-start
      pt-[1rem]"
      >
        <div
          className="
        col-span-2
        leading-[1.5rem]
        lg:text-[1rem]
        tracking-[0.005em]
        text
        font-SuisseWorks
        font-regular
        text-offBlack2"
        >
          {text1}
        </div>
        <div className="col-start-3 col-span-4">
          <div className=" col-start-1">
            <Image
              src={img1}
              alt="home page image"
              layout="responsive"
              width={500}
              height={500}
            />
            
          </div>
        </div>
      </div>
    </main>
  );
});

export default New2
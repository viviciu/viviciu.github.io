// NO 6 COL GRID USED.
import Link from 'next/link'
import React, { forwardRef } from 'react' // IMPORTANT
import Image from 'next/image';

const New4 = forwardRef(({ text0, text1, text2, text3, img1, img2, img3, caption }, ref) => { // NOTICE REF HERE
  return (
    // NOTICE REF IN MAIN
    <main ref={ref}>
      <div
        className=" 


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
        font-Suisse
        font-regular
        text-offBlack2"
        >
          {text1}
        </div>
        <div className="lg:pt-0 pt-8 col-start-3 col-span-4">
          <div className=" col-start-1">
            {img1 && (
              <div className="col-start-1">
                <Image
                  src={img1}
                  alt="home page image"
                  layout="responsive"
                  width={500}
                  height={500}
                />
              </div>
            )}
          </div>
          <p className="font-Suisse pt-2 lg:text-[1rem] text-[0.75rem]">
            {caption}
          </p>
        </div>
      </div>
    </main>
  );
});

export default New4
import Link from 'next/link'
import React, { forwardRef } from 'react' // IMPORTANT
import Image from 'next/image';

const New = forwardRef(({ text0, text1, text2, text3, img1, img2, img3 }, ref) => { // NOTICE REF HERE
  return (
    // NOTICE REF IN MAIN
    <main ref={ref}>
      {/* flex pt-[2.9375rem] lg:pb-[5.06rem] mt-[3.5rem] mb-[5rem]
      lg:grid lg:grid-cols-5 grid-cols-3
      gap-[5.06rem] 
      w-full h-fit 
      items-start */}
      <div
        className="flex 
      lg:grid lg:grid-cols-5 grid-cols-3
      gap-[5.06rem] 
      w-full h-fit 
      items-start"
      >
        <div className="col-span-2 font-Suisse text-[0.75rem]">
          {text0}
          <br />
          <br />
          {text1}
          {/* <br />
          <br />

          {text2}
          <br />
          <br />

          {text3} */}
        </div>
        <div className="col-start-4 col-span-2">
          <div className=" col-start-1">
            <Image
              src={img1}
              alt="home page image"
              layout="responsive"
              width={500}
              height={500}
            />
            {/* <Image
              src={img2}
              alt="home page image"
              layout="responsive"
              width={500}
              height={500}
            />
            <Image
              src={img3}
              alt="home page image"
              layout="responsive"
              width={500}
              height={500}
            /> */}
            
            {/* <p className="font-SuisseWorks text-cap ml-2 mt-2">
              home, people, lines pages
            </p> */}
          </div>
        </div>
      </div>
    </main>
  );
});

export default New
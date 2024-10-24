import React from "react";
import Image from "next/image";

// currently UNUSED. ImageGrid1 does the job.
const ImageGrid2 = ({ text, img }) => {
  return (
    <main className="">
      <div
        className="
       pt-[3rem] pb-[8.81rem]
      grid lg:grid-cols-4 grid-cols-3
      gap-[2.06rem] 
       h-fit 
      items-start
      mx-5
      "
      >
        {/* IMAGE */}
        {/* grid grid-cols-2 gap-4 */}
        {/* height will be auto and width will be full width of the parent */}
        <div
          className="col-span-3
            col-start-1"
        >
          <Image
            src={"/" + img}
            alt="home page image"
            layout="responsive"
            width={500}
            height={500}
          />
        </div>

        {/* TEXT */}
        <div
          className="col-span-1
        leading-[1.25rem]
        text-cap
        font-SuisseWorks
        font-regular
        text-offBlack2"
        >
          {text}
        </div>

        
      </div>
    </main>
  );
};

export default ImageGrid2;

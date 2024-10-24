import React from "react"; // IMPORTANT
import Image from "next/image";

// `img` param is the name of the image, located at the top file level of /pubic. Formatted as `myImage.jpg` without a slash.
const ImageGrid2 = ({ text1, dividerLineText, img, bgColor, txtColor }) => {
  return (
    <main className={`bg-${bgColor}`}>
      <div
        className="
       pt-[3rem] pb-[8.81rem]
      grid lg:grid-cols-5 
      gap-[2.06rem] 
       h-fit 
      items-start
      mx-5
      "
      >
        {/* TEXT */}
        <div
          className={`space-y-8
        font-SuisseWorks text-cap leading-[1.25rem] text-offBlack col-start-1 col-span-1
        ${bgColor === "white" ? "text-black" : "text-offwhite"}  `}
        >
          {text1}
        </div>

        {/* IMAGE */}
        {/* height will be auto and width will be full width of the parent */}
        <div
          className="col-span-3
            col-start-3"
        >
          <Image
            src={"/" + img}
            alt="home page image"
            layout="responsive"
            width={500}
            height={500}
          />
        </div>
      </div>
    </main>
  );
};

export default ImageGrid2;

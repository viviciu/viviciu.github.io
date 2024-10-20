import React from "react"; // IMPORTANT
import Image from "next/image";

// `img` param is the name of the image, located at the top file level of /pubic. Formatted as `myImage.jpg` without a slash.
const ImageGrid2 = ({ text1, dividerLineText, img, bgColor, txtColor }) => {
  return (
    <main className={`bg-${bgColor}`}>
      {/* DIVIDER LINE 2 */}
      {/* in figma, the divider line height is 0.105rem */}
      <div
        className={`w-full h-[1px]
          ${bgColor === "white" ? "bg-black" : "bg-offwhite"}`}
      ></div>
      <p
        className={`pt-2 indent-[1.75rem] uppercase 
             font-Helvetica
             ${bgColor === "white" ? "text-black" : "text-offwhite"}
          `}
      >
        <span
          className={`
            font-sans`}
        >
          ●
        </span>{" "}
        {dividerLineText}
      </p>
      {/* END DIVIDER LINE */}

      <div
        className="
       pt-[3rem] pb-[8.81rem]
      grid lg:grid-cols-5 grid-cols-3
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
          className={`space-y-8
        text-[1.25em] font-Helvetica font-light leading-[1.75em] 
        ${bgColor === "white" ? "text-black" : "text-offwhite"}
        col-start-4 col-span-2 indent-[33%] m-5`}
        >
          {text1}
        </div>
      </div>
    </main>
  );
};

export default ImageGrid2;

import React from "react"; // IMPORTANT
import Image from "next/image";

// `img` param is the name of the image, located at the top file level of /pubic. Formatted as `myImage.jpg` without a slash.
const ImageGrid2 = ({ img, bgColor }) => {
  return (
    <main className={`bg-${bgColor}`}>
      {/* DIVIDER LINE 2 */}
      {/* in figma, the divider line height is 0.105rem */}
      <div
        className="bg-white w-full h-[1px]
      "
      ></div>
      <p
        className={`pt-2 indent-[1.75rem] uppercase 
            text-offwhite font-Helvetica
          `}
      >
        <span className="font-sans">●</span> Liminality in interaction
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
          <p>
            The nature of a mouse hold is innately temporary and transitory.
            Through both computer and multi-touch gestures, a mouse hold is the
            time—the experience even—in between the beginning and end of any
            interaction: For example drawing rectangle in Figma—the press
            defines one corner of the rectangle, the release another. Thus, the
            forced mouse hold to enter a page perfectly encapsulates feelings of
            Liminality.
          </p>
        </div>
      </div>
    </main>
  );
};

export default ImageGrid2;

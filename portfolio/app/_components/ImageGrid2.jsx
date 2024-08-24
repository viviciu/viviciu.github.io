import React from "react"; // IMPORTANT
import Image from "next/image";

// `img` param is the name of the image, located at the top file level of /pubic. Formatted as `myImage.jpg` without a slash.
const ImageGrid2 = ({ img, img2 }) => {
  return (
    <main className="">
      {/* DIVIDER LINE */}
      {/* in figma, the divider line height is 0.105rem */}
      <div
        className="bg-white w-full h-[1px]
      mt-[10.61rem]"
      ></div>
      <p>SITE ARCHITECTURE</p>

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
            src={"/" + img2}
            alt="home page image"
            layout="responsive"
            width={500}
            height={500}
          />
        </div>

        {/* TEXT */}
        <p
          className="
        text-s font-Helvetica leading-tight text-offwhite
        col-start-4 col-span-1 indent-[33%]"
        >
          <span className="font-SuisseWorks text-p ">The home page's </span>
          white void is a transitory space hosting each space: Time moves
          circularly, and when the user wants to enter a page, they enter the
          “space between spaces” — neither here nor there, they are “in-between”
          time, and can reside there as long as they hold the mouse. This forced
          interaction was integral to establishing liminality in interaction.
        </p>
      </div>
    </main>
  );
};

export default ImageGrid2;

import React from "react"; // IMPORTANT
import Image from "next/image";
import ImageGrid3 from "./ImageGrid3";
import ReflectionPoints from "./ReflectionPoints.jsx"

// `img` param is the name of the image, located at the top file level of /pubic. Formatted as `myImage.jpg` without a slash.
const ImageGrid5 = ({ img1, img2, img3, img4, text3, bgColor }) => {
  return (
    <main className={`bg-[#121212] pl-5`}>
     
      <div
        className="
       pt-[3rem] pb-[8.81rem]
      
      gap-[1rem] 
       h-fit 
      items-start
      mx-5

      "
      >
        {/* TEXT */}
        <div className="lg:grid grid-cols-5">
          <div
            className={`space-y-8  col-start-3 col-span-3
        text-[1.25em] font-SFProDisplay leading-callout
        ${bgColor === "white" ? "text-black" : "text-offwhite"}
        col-start-2 col-span-2 indent-[33%] m-5`}
          >
            <p className="uppercase text-callout">
              Many, many iterations considered
              <span className="text-[2.5rem]"> ● </span>
              setbacks
              <span className="text-[2.5rem]"> ● </span>
              R&D
              <span className="text-[2.5rem]"> ● </span>
              design rotations
              <span className="text-[2.5rem]"> ● </span>
              ... and a pivot from designer to developer.
            </p>
          </div>
        </div>

        {/* sidebyside 2 IMAGES */}

        <div className="pt-[3.5rem] pb-[1rem] lg:flex lg:mx-0 mx-[-1rem] gap-[1rem] h-fit items-start">
          {img2 && (
            <div className="col-span-2 col-start-1">
              <Image
                src={"/" + img2}
                alt="home page image"
                layout="responsive"
                width={500}
                height={500}
              />
              {/* <p className="font-SuisseWorks text-cap ml-2 mt-2">{caption2}</p> */}
            </div>
          )}
          {img3 && (
            <div className="col-span-2 self-end">
              <Image
                src={"/" + img3}
                alt="home page image"
                layout="responsive"
                width={500}
                height={500}
              />
              {/* <p className="font-SuisseWorks text-cap ml-2 mt-2">{caption3}</p> */}
            </div>
          )}
        </div>

        {/* BIG IMAGE */}
        {/* grid grid-cols-2 gap-4 */}
        {/* height will be auto and width will be full width of the parent */}
        <div
          className="col-span-2
            col-start-1"
        >
          <Image
            src={"/" + img1}
            alt="home page image"
            layout="responsive"
            width={500}
            height={500}
          />
        </div>

        {/* Notational sketching to communicate to other devs. */}
      </div>
      <ReflectionPoints bgColor="black" text3={text3} />
    </main>
  );
};

export default ImageGrid5

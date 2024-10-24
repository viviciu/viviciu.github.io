import React from "react"; // IMPORTANT
import Image from "next/image";
import ImageGrid3 from "./ImageGrid3";
import ReflectionPoints from "./ReflectionPoints.jsx"

// `img` param is the name of the image, located at the top file level of /pubic. Formatted as `myImage.jpg` without a slash.
const ImageGrid2 = ({ img1, img2, img3, img4, text3, bgColor }) => {
  return (
    <main className={`bg-[${bgColor}] pl-5`}>
      {/* DIVIDER LINE */}
      {/* in figma, the divider line height is 0.105rem */}
      <div
        className="bg-[${bgColor}] w-full h-[1px]
      "
      ></div>
      <p
        className={`font-Helvetica pt-2 indent-[1.75rem] uppercase ${
          bgColor === "white" ? "text-black" : "text-offwhite"
        }`}
      >
        <span className="font-sans">● Process</span>
      </p>
      {/* END DIVIDER LINE */}

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

      {/* TEXT — SUBGRIDS VERSION */}
      {/* <div className="grid grid-cols-3 gap-[2.25rem] ">
        <ul
          className=" text-p leading-p 
          grid grid-cols-subgrid grid-rows-3 col-start-2
      gap-[2.25rem] 
      h-fit 
      items-start
      text-black
      "
        >
          <li className="text-callout leading-callout text-right">
            You have the resources to figure out anything.
          </li>

          <li className="text-callout leading-callout text-right">
            Notational sketching is crucial for communicating with developers as
            it visualizes abstract concepts, clarifying which tools best suit
            the task.
          </li>

          <li className="text-callout leading-callout text-right">
            I refined my ability to blend external inspiration with outputs from
            other creative teams, like print and motion, to achieve a cohesive
            visual language set by our creative directors.
          </li>
        </ul>

        <ul className="grid grid-cols-subgrid col-start-3 text-black">
          <li>
            I’m a fast self-learner → Learned blender, discovered R3F, and
            learned how to code in React with no js experience.
          </li>
          <li>
            - Notational sketching is crucial for communicating concepts with
            developers, enabling us to brainstorm algorithmic approaches for
            implementation. → Freshman year design practices heavily influenced
            my process collaborating in teams. → *Blender rotating wheel*
          </li>
          <li>
            - **I honed my ability to integrate inspiration from external
            sources with the output of our other creative teams—such as print
            and motion—to achieve a cohesive visual language established by our
            creative directors.** - Interaction design facilitates subliminal
            emotion and experiences and was at the core of making the site truly
            feel “Liminal.”
          </li>
        </ul>
      </div> */}
    </main>
  );
};

export default ImageGrid2;

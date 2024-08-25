import React from "react"; // IMPORTANT
import Image from "next/image";

// `img` param is the name of the image, located at the top file level of /pubic. Formatted as `myImage.jpg` without a slash.
const ImageGrid2 = ({ img, img2, bgColor }) => {
  return (
    <main className={`bg-${bgColor} pl-5`}>
      {/* DIVIDER LINE */}
      {/* in figma, the divider line height is 0.105rem */}
      <div
        className="bg-black w-full h-[1px]
      "
      ></div>
      <p
        className={`pt-2 indent-[1.75rem] uppercase ${
          bgColor === "white" ? "text-black" : "text-offwhite"
        }`}
      >
        ● Process.
      </p>

      <div
        className="
       pt-[3rem] pb-[8.81rem]
      grid lg:grid-cols-3 grid-cols-3
      gap-[1.25rem] 
       h-fit 
      items-start
      mx-5

      "
      >
        {/* TEXT */}
        <div
          className={`space-y-8
        text-[1.25em] font-Helvetica leading-callout
        ${bgColor === "white" ? "text-black" : "text-offwhite"}
        col-start-2 col-span-2 indent-[33%] m-5`}
        >
          <p className="uppercase text-callout">
            Many, many iterations considered
            <span className="text-[3.5rem]"> ● </span>
            setbacks
            <span className="text-[3.5rem]"> ● </span>
            R&D
            <span className="text-[3.5rem]"> ● </span>
            design rotations
            <span className="text-[3.5rem]"> ● </span>
            ... and a pivot from designer to developer.
          </p>
        </div>

        {/* IMAGE */}
        {/* grid grid-cols-2 gap-4 */}
        {/* height will be auto and width will be full width of the parent */}
        <div
          className="col-span-2
            col-start-1"
        >
          <Image
            src={"/" + img}
            alt="home page image"
            layout="responsive"
            width={500}
            height={500}
            className="rounded-xl"
          />
        </div>

        <div className="col-span-1 self-end">
          <Image
            src={"/" + img}
            alt="home page image"
            layout="responsive"
            width={500}
            height={500}
            className="rounded-xl"
          />
          <p className="font-SuisseWorks text-s text-black">
            fig. 02 Using notational sketching to communicate to other devs.
          </p>
        </div>

        {/* BOTTOM 2 IMAGES */}
        <div
          className="col-span-2
            col-start-1"
        >
          <div className="flex gap-[1.25rem] ">
            <Image
              src={"/" + img}
              alt="home page image"
              layout="responsive"
              width={500}
              height={500}
              className="rounded-xl"
            />
            {/* <p className="text-black">fig 02</p> */}

            <div className=" self-end">
              <Image
                src={"/" + img2}
                alt="home page image"
                layout="responsive"
                width={500}
                height={500}
                className="rounded-xl"
              />
              <p className="text-black">fig 02</p>
            </div>
          </div>
        </div>

        {/* TEXT */}
        <div
          className={`space-y-8
        text-[1.125rem] font-Helvetica leading-[1.7em] 
        ${bgColor === "white" ? "text-black" : "text-offwhite"}
        col-start-3 col-span-1 indent-[33%] m-5`}
        >
          <p className="uppercase">Many</p>
        </div>
      </div>

      {/* DIVIDER LINE 2 */}
      {/* in figma, the divider line height is 0.105rem */}
      <div
        className="bg-black w-full h-[1px]
      "
      ></div>
      <p
        className={`pt-2 indent-[1.75rem] uppercase ${
          bgColor === "white" ? "text-black" : "text-offwhite"
        }`}
      >
        ● PERSONAL GROWTH.
      </p>

      {/* TEXT */}
      <div className="grid grid-cols-3">
        <div
          className={`
      pt-[3rem] pb-[8.81rem]
      col-start-1
      col-span-2
      mx-5
      font-Helvetica leading-callout
      ${bgColor === "white" ? "text-black" : "text-offwhite"}
      m-5`}
        >
          <ul
            className=" text-p leading-p 
          grid lg:grid-cols-2 grid-cols-2
      grid-rows-3
      gap-[2.25rem] 
      h-fit 
      items-start"
          >
            <li className="text-callout leading-callout text-right">
              You have the resources to figure out anything.
            </li>

            <li>
              I’m a fast self-learner → Learned blender, discovered R3F, and
              learned how to code in React with no js experience.
            </li>
            <li className="text-callout leading-callout text-right">
              Notational sketching is crucial for communicating with developers
              as it visualizes abstract concepts, clarifying which tools best
              suit the task.
            </li>
            <li>
              - Notational sketching is crucial for communicating concepts with
              developers, enabling us to brainstorm algorithmic approaches for
              implementation. → Freshman year design practices heavily
              influenced my process collaborating in teams. → *Blender rotating
              wheel*
            </li>
            <li className="text-callout leading-callout text-right">
              I refined my ability to blend external inspiration with outputs
              from other creative teams, like print and motion, to achieve a
              cohesive visual language set by our creative directors.
            </li>
            <li>
              - **I honed my ability to integrate inspiration from external
              sources with the output of our other creative teams—such as print
              and motion—to achieve a cohesive visual language established by
              our creative directors.** - Interaction design facilitates
              subliminal emotion and experiences and was at the core of making
              the site truly feel “Liminal.”
            </li>
          </ul>
        </div>
      </div>


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

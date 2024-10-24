import React from 'react'

export const ReflectionPoints = ({bgColor, text3}) => {
  return (
    <>
      <div
        className={` ${
          bgColor === "white" ? "bg-black" : "bg-offwhite"
        } w-full h-[1px]`}
      ></div>
      <p
        className={`pt-2 indent-[1.75rem] uppercase ${
          bgColor === "white" ? "text-black" : "text-offwhite"
        }`}
      >
        ● PERSONAL GROWTH
      </p>

      <div className="lg:grid lg:grid-cols-5 gap-[1.168rem] flex flex-col ">
        <div className="font-SuisseWorks text-cap leading-[1.25rem] text-offBlack col-start-3">
          {/* {text1} */}
        </div>
        <div className="font-SuisseWorks text-cap leading-[1.25rem] text-offBlack col-start-4">
          {/* {text2} */}
        </div>
        <div className="font-SuisseWorks text-cap leading-[1.25rem] text-offBlack col-start-5">
          {text3}
        </div>
      </div>

      {/* TEXT */}
      {/* <div className="grid grid-cols-3">
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
              You have the resources to address any challenge.
            </li>

            <li>
              Joining the team I only had some html and css background
              self-taught during highschool—but I still wanted to be involved in
              the building of the site after the design stage to ensure
              it&apos;s execution follows the vision.
              <br />
              <br />
              So through Blender tutorials, reading documentation, and looking
              towards well-structured codepen examples, I learned React and
              React Three Fiber to help build our site using 3D scenes.
            </li>
            <li className="text-callout leading-callout text-right">
              Notational sketching aids designer-developer communication
              significantly.
            </li>
            <li>
              Notational Sketching practices developed over freshman year
              heavily influenced my process collaborating in teams. It allowed
              me to quickly communicate to another dev a simpler approach to
              programming the 3D infinitely rotating planes on the Home page. (
              fig. 02 ) I took on programming and styling the texture of the
              Home page and frosted cursor.
            </li>
            <li className="text-callout leading-callout text-right">
              I honed my ability to integrate external inspiration with creative
              team outputs for a cohesive visual style.
            </li>
            <li>
              Creative—a team of over 40 students across different
              subgroups—must move as one cohesive unit. The synergistic
              influences during cross-team meetings and weekly general body
              meetings—where each team shared their progress—made me prioritize
              the team and theme&apos;s direction in every design decision.
            </li>
          </ul>
        </div>
      </div> */}
    </>
  );
}
export default ReflectionPoints;

import React from 'react'
import Context3 from "./Context3"

export const ReflectionPoints = ({bgColor, text3}) => {
  return (
    <main className='mb-[5rem]'>
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

      <Context3
      bgColor={bgColor}
        text1="You have the resources to address any challenge."
        text2={
          <div>
            Joining the team I only had some html and css background self-taught
            during highschool—but I still wanted to be involved in the building
            of the site after the design stage to ensure it&apos;s execution
            follows the vision.
            
            Through Blender tutorials, reading documentation, and looking
            towards well-structured codepen examples, I learned React and React
            Three Fiber to help build our site using 3D scenes.
          </div>
        }
      />
      <Context3
      bgColor={bgColor}
        text1="Notational sketching aids designer-developer communication
              significantly."
        text2={
          <div>
            Notational Sketching practices developed over freshman year heavily
            influenced my process collaborating in teams. It allowed me to
            quickly communicate to another dev a simpler approach to programming
            the 3D infinitely rotating planes on the Home page. I took on
            programming and styling the texture of the Home page and frosted
            cursor.
          </div>
        }
      />
      <Context3
      bgColor={bgColor}
        text1="I honed my ability to integrate external inspiration with creative
              team outputs for a cohesive visual style."
        text2={
          <div>
            Creative—a team of over 40 students across different subgroups—must
            move as one cohesive unit. The synergistic influences during
            cross-team meetings and weekly general body meetings—where each team
            shared their progress—made me prioritize the team and theme's
            direction in every design decision.
          </div>
        }
      />
      <Context3
      bgColor={bgColor}
        text1="Challenges: POOR OPTIMIZATION & USABILITY"
        text2="Unfortunately, since the 3.js textures of the glass panels of the home page were extremely heavy, we had to settle for a more optimized version—still to which had performance issues. I learned it's key to test assets to production-grade fidelity live as early as the design stages, to see if a concept can be well executed by the devs far ahead of launch date. This also calls for transparency between devs and designers as to what truly can be done in our timeline. The navigation UX had also become an issue: We gave no affordances on how to really enter the site or what was clickable // hoverable. This served the artistic theme well, but not the users. If we stray too far from familiarity and usability becomes lost, the artistic concept of the work becomes lost along with it."
      />
    </main>
  );
}
export default ReflectionPoints;

import React from 'react'

export const Context2 = ({context, members, tools, myRole}) => {
// Members is a list [] of members
  return (
    <main
      className="lg:grid lg:grid-cols-5 grid-cols-3
      gap-[5rem] lg:mb-0 mb-[5rem]"
    >
      <div
        // gap-[5.06rem] !!
        className="
       lg:pb-[5rem] lg:mt-[3.5rem] mt-[2rem]
      mb-[3.06rem]
      
      w-full h-fit 
      items-start
      col-span-3
      "
      >
        <div
          className="
        leading-p3
        text-p
        text
        font-SuisseWorks
        font-regular
        text-offBlack2
        "
        >
          {context}
        </div>
      </div>

      <div
        className="mt-[3.5rem] text-cap leading-cap
      col-start-4 col-span-2"
      >
        <ul>
          <li className="grid grid-cols-2 gap-[1rem]">
            <div className="font-SuisseWorks">
              {myRole}
            </div>
            <a
              href="instagram or linkedin of credited member here"
              className="font-SFProDisplay font-bold"
            >
              Viviana Staicu
            </a>
          </li>

          <li className="h-4">{/* FILLER GAP */}</li>

          {/* MAPPING EACH MEMBER IN */}
          {members.map((member, index) => (
            <li key={index} className="grid grid-cols-2 gap-[1rem]">
              <div
                className={`font-SuisseWorks ${index === 0 ? "" : "opacity-0"}`}
              >
                {index === 0 ? "Contributors" : ""}
              </div>
              <div className="font-SFProDisplay font-bold text-offBlack">
                {member}
              </div>
            </li>
          ))}

          <li className="h-4">{/* FILLER GAP */}</li>

          {/* TOOLS */}
          {tools.map((tool, index) => (
            <li key={index} className="grid grid-cols-2 gap-[1rem]">
              <div
                className={`font-SuisseWorks ${index === 0 ? "" : "opacity-0"}`}
              >
                {index === 0 ? "Tools" : ""}
              </div>
              <div className="font-SFProDisplay font-bold text-offBlack">
                {tool}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
export default Context2;
// NOTES
// If changing category names in ./items.js or in this file, make sure to change category names EVERYWHERE. I have noted this in a comment called "// this must be changed if category changes." Note this is for EACH div containing a label.

"use client";
import { useState } from "react";
import { items } from "./items.js";
import Link from "next/link.js";
import React from "react";

export default function Projects() {
  // RADIO BUTTONS: https://www.w3schools.com/tags/att_input_type_radio.asp
  const [selectedLabel, setSelectedLabel] = useState(null);

  const handleClick = (label) => {
    setSelectedLabel(label);
  };

  const displayedItems = items
    // important
    .filter((item) => !selectedLabel || selectedLabel === item.category)

    .map((item) => (
      <div key={item.id} className="item space-y-2">
        {/* PARENT GROUP */}
        <Link href={"/work/" + item.id}>
          <div
            className="flex flex-col justify-center relative group 
            pb-[1rem]
          text-[1.55rem] leading-[1.55rem] font-Suisse translate-y-0 "
          >
            <img
              src={item.url}
              alt={item.name}
              className="w-full h-full object-cover pb-[1rem]
            "
            />
            {/* Renders line breaks: Include \n in the name prop in items.js */}
            <p className="w-[70%]">
              {item.name.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
            <p
              className="
              w-[60%]
              opacity-0
              transition
              group-hover:opacity-100
              text-[1.55rem] leading-[1.55rem] font-Suisse "
            >
              {item.categorySpecific}
            </p>
          </div>
        </Link>
        {/* CARD CATEGORY LABEL */}
        {/* <pre>{item.category}</pre> */}
      </div>
    ));

  return (
    <main className="m-1">
      <section className=" mx-4 mt-[12rem]">
        


        {/* ITEMS */}
        <article className="w-full mx-auto grid grid-cols-2 md:grid-cols-3 gap-[2rem] md:gap-12 place-content-center ">
          {displayedItems}
        </article>


        
      </section>
    </main>
  );
}
// NOTES
// If changing category names in ./items.js or in this file, make sure to change category names EVERYWHERE. I have noted this in a comment called "// this must be changed if category changes." Note this is for EACH div containing a label.

"use client";
import { useState } from "react";
import { items } from "./items.js";
import Link from "next/link.js";
import React from "react";
import Image from "next/image";

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
          text-[1.55rem] leading-[1.55rem]  translate-y-0 "
          >
            {item.fileType === "img" ? (
              <Image
                src={item.url}
                alt={item.name}
                className="w-full h-full object-cover pb-[0.6rem]"
                width={500} // Example width, adjust as needed
                height={500} // Example height, adjust as needed
              />
            ) : item.fileType === "mp4" ? (
              <video
                className="w-full h-full object-cover pb-[0.6rem]"
                width={500} // Example width, adjust as needed
                height={500} // Example height, adjust as needed
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={item.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : null}

            {/* TITLE PARENT DIV */}
            <div className="">
              {/* Renders line breaks: Include \n in the name prop in items.js */}
              {/* Mobile title sizing here */}
              <p className="w-[70%] lg:text-p lg:leading-[1.55rem] text-[1.2rem] leading-[1.25rem]">
                {item.name.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
              <div className="text-p  tracking-tight text-gray-300">
                {item.category}
              </div>
            </div>

            {/* Conditionally renders if the title description is there. It is not rendered on mobile, but the space is rendered on lg devices. */}
            {/* {item.categorySpecific && (
              <p
                className="
      w-[60%]
      opacity-0
      transition
      group-hover:opacity-100
      text-[1.55rem] leading-[1.55rem] 
      hidden sm:block
    "
              >
                {item.categorySpecific}
              </p>
            )} */}
          </div>
        </Link>
        {/* CARD CATEGORY LABEL */}
        {/* <pre>{item.category}</pre> */}
      </div>
    ));

  return (
    <main className="m-1">
      <section className="lg:mx-4 mx-2 mt-[12rem]">
        {/* ITEMS */}
        <article className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[0.5rem]">
          {displayedItems}
        </article>
      </section>
    </main>
  );
}

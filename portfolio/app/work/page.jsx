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
      <div key={item.id} className="basis-[32.71%]">
        {/* PARENT GROUP */}
        <Link href={"/work/" + item.id}>
          <div
            className=""
          >
            <Image
              src={item.url}
              alt={item.name}
              className="w-full h-full object-cover pb-[0.6rem]"
              unoptimized={item.url.endsWith(".gif")} // Add unoptimized property for GIFs
              width={500} // Example width, adjust as needed
              height={500} // Example height, adjust as needed
            />
            
          </div>
        </Link>
        {/* CARD CATEGORY LABEL */}
        {/* <pre>{item.category}</pre> */}
      </div>
    ));

  return (
    <main className="m-1">
      <section className=" lg:mx-4 mx-2 mt-[12rem]">
        {/* ITEMS */}
        {/* OLD STYLING AS OF DEC 29 2024:
        <article className="w-full mx-auto grid grid-cols-2 md:grid-cols-3 lg:gap-[2rem] gap-3 place-content-center ">
        */}
        <article className="w-full mx-auto items-start columns-3 lg:gap-[0.6rem] gap-3  ">
          {displayedItems}
        </article>
      </section>
      
    </main>
  );
}
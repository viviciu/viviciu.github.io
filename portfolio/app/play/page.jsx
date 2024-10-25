// NOTES
// If changing category names in ./items.js or in this file, make sure to change category names EVERYWHERE. I have noted this in a comment called "// this must be changed if category changes." Note this is for EACH div containing a label.

"use client";
import { useState } from "react";
import { items } from "./items.js";
import Link from "next/link.js";

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
      <div key={item.id} className="item ">
        {/* PARENT GROUP */}
        <Link href={"/play/" + item.id}>
          <div className="justify-center relative group text-cap">
            <p
              className="
              font-SuisseWorks
              opacity-0
              transition
              group-hover:opacity-100"
            >
              {item.categorySpecific}
            </p>
            <img
              src={item.url}
              alt={item.name}
              className="w-full h-full object-cover 
            translate-y-0 transition group-hover:translate-y-2"
            />
          </div>
        </Link>
        {/* CARD CATEGORY LABEL */}
        {/* <pre>{item.category}</pre> */}
      </div>
    ));

  return (
    <main className="m-1">
      <section className="flex flex-col  mx-4 ">
        {/* SELECTION BAR */}
        <article
          className="
          mb-[11vh] mt-[11vh] 
          flex flex-wrap sm:flex-row 
          md:text-h1 text-3xl
          leading-h1 
          font-h1 font-medium"
        >
          {/* SHOW ALL ITEMS */}
          <div className="">
            <input
              type="radio"
              id="all"
              className="mr-1 appearance-none"
              onChange={() => handleClick(null)}
            />
            <label
              className={`
                  checkbox-label-checked
                  ${selectedLabel === null ? "clicked" : ""}
                `}
              htmlFor="all"
              onClick={() => handleClick(null)}
            >
              All,
            </label>
          </div>
          <div className="">
            <input
              type="radio"
              id="code"
              className="mr-1
                appearance-none"
              onChange={() => handleClick("code")}
            />
            <label
              className={`
                cursor-none
                checkbox-label-checked
                ${selectedLabel === "code" ? "clicked" : ""}`} // custom class in tailwind.config under plugins called ".checkbox-label-checked" where you can alter this color.
              htmlFor="code"
              onClick={() => handleClick("code")}
            >
              code,
            </label>
          </div>
          <div className="">
            <input
              type="radio"
              id="photo"
              className="mr-1 
                appearance-none"
              onChange={() => handleClick("code")}
            />
            <label
              className={`
                checkbox-label-checked
                ${selectedLabel === "photo" ? "clicked" : ""}`}
              htmlFor="photo"
              onClick={() => handleClick("photo")}
            >
              photo,
            </label>
          </div>
          <div className="">
            <input
              type="radio"
              id="video" // this must be changed if category changes.
              className="mr-1
                appearance-none"
              onChange={() => handleClick("code")}
            />
            <label
              className={`
                checkbox-label-checked
                ${selectedLabel === "video" ? "clicked" : ""}`}
              htmlFor="video" // this must be changed if category changes.
              onClick={() => handleClick("video")}
            >
              video,
            </label>
          </div>
        </article>
        {/* ITEMS */}
        <article className="w-full mx-auto grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-7 gap-[5rem] place-content-center p-2">
          {displayedItems}
        </article>
      </section>
    </main>
  );
}
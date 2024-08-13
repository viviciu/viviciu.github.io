// NOTES
// If changing category names in ./items.js or in this file, make sure to change category names EVERYWHERE. I have noted this in a comment called "// this must be changed if category changes." Note this is for EACH div containing a label.

"use client";
import { useState } from "react";
import { items } from "./items.js";

export default function Projects() {
  // const [searchQuery, setSearchQuery] = useState("");
  // const [selectedCategories, setSelectedCategories] = useState([]);
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
        <div
          className="flex flex-col justify-center relative group cursor-pointer
          "
        >
          <p className="font-display">{item.name}</p>
          <p
            className="
              font-CMUSerif
              opacity-0
              transition
              group-hover:opacity-100"
          >
            ::081124
          </p>
          <img
            src={item.url}
            alt={item.name}
            className="w-full h-full object-cover 
            translate-y-0 transition group-hover:translate-y-2"
          />
          {/* ————POPUP FLAG———— */}
          {/* <div className="bg-black text-white absolute bottom-0 left-0 right-0 text-center py-2 translate-y-full transition group-hover:translate-y-0">
            (._.)
          </div> */}
        </div>

        {/* CARD CATEGORY LABEL */}
        {/* <pre>{item.category}</pre> */}
      </div>
    ));

  return (
    // Previous <main> className: className="mx-auto flex justify-center items-center flex-col gap-4"
    <main className="">
      {/*                  ————SEARCHBAR————                 */}
      {/* <section className="relative">
        <input
          type="text"
          id="search"
          className="p-2 bg-gray-50 border-gray-300 rounded-md"
          placeholder="Search items..."
          onChange={handleSearch}
        />
      </section> */}
      <section className="flex flex-col md:flex-col mx-auto container max-w-6xl">
        {/* SELECTION BAR */}
        <article
          className="mb-[11vh] mt-[33vh] mx-16 justify-end flex sm:flex-row 
        text-4xl
        font-display"
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
                  cursor-pointer
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
                cursor-pointer
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
                cursor-pointer
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
                cursor-pointer
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
        <article className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-content-center p-2">
          {displayedItems}
        </article>
      </section>
    </main>
  );
}
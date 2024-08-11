"use client";
import Navbar from "../_components/Navbar";
import Image from "next/image";

// import myPhoto from "/ss-plane-slog.png"

import { useState } from "react";
import { items } from "./items.js";

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  function handleSearch(e) {
    setSearchQuery(e.target.value);
  }

  function handleCheckbox(e) {
    const category = e.target.id;

    if (e.target.checked) {
      setSelectedCategories((prevCategories) => [...prevCategories, category]);
    } else {
      setSelectedCategories((prevCategories) =>
        prevCategories.filter((prevCategory) => prevCategory !== category)
      );
    }
  }

  const displayedItems = items
    .filter(
      (item) =>
        selectedCategories.length === 0 ||
        selectedCategories.includes(item.category)
    )
    .filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.trim().toLowerCase())
    )
    .map((item) => (
      <div key={item.id} className="item space-y-2">
        <div className="flex justify-center relative overflow-hidden group cursor-pointer rounded-xl">
          <img
            src={item.url}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="bg-black text-white absolute bottom-0 left-0 right-0 text-center py-2 translate-y-full transition group-hover:translate-y-0">
            Link
          </div>
        </div>
        <p className="font-semibold">{item.name}</p>
        <pre>{item.category}</pre>
      </div>
  ));

  return (
    <main className="mx-auto flex justify-center items-center flex-col gap-4">
      <h1 className="text-3xl font-semibold">Items</h1>
      <section className="relative">
        <input
          type="text"
          id="search"
          className="p-2 bg-gray-50 border-gray-300 rounded-md"
          placeholder="Search items..."
          onChange={handleSearch}
        />
      </section>
      <section className="flex flex-col md:flex-row mx-auto container max-w-6xl">
        <article className="space-y-2 p-2 w-full max-w-[10rem]">
          <h2 className="text-xl font-semibold">Category</h2>
          <aside className="flex sm:flex-col gap-2">
            <div className="flex flex-row items-center">
              <input
                type="checkbox"
                id="CategoryOne"
                className="mr-1"
                onChange={handleCheckbox}
              />
              <label htmlFor="CategoryOne">Category 1</label>
            </div>
            <div className="flex flex-row items-center">
              <input
                type="checkbox"
                id="CategoryTwo"
                className="mr-1"
                onChange={handleCheckbox}
              />
              <label htmlFor="CategoryTwo">Category 2</label>
            </div>
            <div className="flex flex-row items-center">
              <input
                type="checkbox"
                id="CategoryThree"
                className="mr-1"
                onChange={handleCheckbox}
              />
              <label htmlFor="CategoryThree">Category 3</label>
            </div>
          </aside>
        </article>
        <article className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-content-center p-2">
          {displayedItems}
        </article>
      </section>
    </main>
  );
}
// export default function Play() {
//   return (
//     <main className="">
//       <h2>Play</h2>
//       <div className="grid grid-cols-4">
//         {cards.map((card) => {
//           return <Card card={card} key={card.id} />;
//         })}
//       </div>
//     </main>
//   );
// }

// const Card = ({ card }) => {
//   return (
//     <div key={card.id}>
//       <div className="w-12">
//         <Image src={"/ss-plane-slog.png"} fill={true} alt="project photo" />
//         <div className="text-left">{card.title}</div>
//       </div>
//     </div>
//   );
// };

// const cards = [
//   {
//     url: "portfolio/app/_components/edit-03512-3.jpg",
//     title: "Title 1",
//     id: 1,
//   },
//   {
//     url: "/imgs/abstract/2.jpg",
//     title: "Title 2",
//     id: 2,
//   },
//   {
//     url: "/imgs/abstract/3.jpg",
//     title: "Title 3",
//     id: 3,
//   },
//   {
//     url: "/imgs/abstract/4.jpg",
//     title: "Title 4",
//     id: 4,
//   },
//   {
//     url: "/imgs/abstract/5.jpg",
//     title: "Title 5",
//     id: 5,
//   },
//   {
//     url: "/imgs/abstract/6.jpg",
//     title: "Title 6",
//     id: 6,
//   },
//   {
//     url: "/imgs/abstract/7.jpg",
//     title: "Title 7",
//     id: 7,
//   },
// ];

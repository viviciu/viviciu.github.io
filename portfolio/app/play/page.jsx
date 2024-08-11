// NOTES
// If changing category names in ./items.js or in this file, make sure to change category names EVERYWHERE. I have noted this in a comment called "// this must be changed if category changes." Note this is for EACH div containing a label.

"use client";
import { useState } from "react";
import { items } from "./items.js";

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  // CHange color on click
  const [clickedLabels, setClickedLabels] = useState({});
  const handleClick = (label) => {
    setClickedLabels((prevState) => ({
      ...prevState,
      [label]: !prevState[label],
    }));
  };

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
        {/* PARENT GROUP */}
        <div
          className="flex flex-col justify-center relative group cursor-pointer
          "
        >
          <p className="font-display">{item.name}</p>
          <p className="
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
      <h1 className="text-xl font-display my-16 ml-16">
        photography,videography,code0909
      </h1>

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
      <section className="flex flex-col md:flex-row mx-auto container max-w-6xl">
        <article className="space-y-2 p-2 w-full max-w-[10rem]">
          <aside className="flex sm:flex-col gap-2">
            <div className="flex flex-row items-center ">
              <input
                type="checkbox"
                id="code"
                className="mr-1
                appearance-none"
                onChange={handleCheckbox}
              />
              <label
                className={`font-CMUSerif
                cursor-pointer
                checkbox-label-checked
                ${
    clickedLabels['code'] ? 'clicked' : ''
  }`} // custom class in tailwind.config under plugins called ".checkbox-label-checked" where you can alter this color.
                htmlFor="code"
                onClick={() => handleClick('code')}
              >
                code
              </label>
            </div>
            <div className="flex flex-row items-center">
              <input
                type="checkbox"
                id="photo"
                className="mr-1 
                appearance-none"
                onChange={handleCheckbox}
              />
              <label
                className={`font-CMUSerif
                cursor-pointer
                checkbox-label-checked
                ${
    clickedLabels['photo'] ? 'clicked' : ''
  }`}
                htmlFor="photo"
                onClick={() => handleClick('photo')}
              >
                photo
              </label>
            </div>
            <div className="flex flex-row items-center">
              <input
                type="checkbox"
                id="video" // this must be changed if category changes.
                className="mr-1
                appearance-none"
                onChange={handleCheckbox}
              />
              <label
                className={`font-CMUSerif
                cursor-pointer
                checkbox-label-checked
                ${
    clickedLabels['video'] ? 'clicked' : ''
  }`}
                htmlFor="video" // this must be changed if category changes.
                onClick={() => handleClick('video')}
              >
                video
              </label>
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

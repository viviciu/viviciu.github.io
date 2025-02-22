"use client";
import { useState } from "react";
import { items } from "./items.js";
import Link from "next/link.js";
import Image from "next/image.js";

export default function Projects() {
  const [selectedLabel, setSelectedLabel] = useState(null);
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (label) => {
    setSelectedLabel(label);
  };

  const handleImageClick = (item, index) => {
    setClickedImg(item);
    setCurrentIndex(index);
  };

  const handleCloseModal = () => {
    setClickedImg(null);
  };

  const handleNextImage = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(nextIndex);
    setClickedImg(items[nextIndex]);
  };

  const handlePrevImage = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(prevIndex);
    setClickedImg(items[prevIndex]);
  };

  const displayedItems = items
    .filter((item) => !selectedLabel || selectedLabel === item.category)
    .map((item, index) => (
      <div key={item.id} className="item">
        <div className="justify-center relative group text-cap">
          {item.fileType === "webp" ? (
            <Image
              src={item.url}
              alt={`Item ${item.id}`}
              className="w-full h-full object-cover translate-y-0 transition group-hover:translate-y-2 cursor-pointer"
              width={500} // Example width, adjust as needed
              height={500} // Example height, adjust as needed
              onClick={() => handleImageClick(item, index)}
            />
          ) : item.fileType === "webm" ? (
            <video
              className="w-full h-full object-cover translate-y-0 transition group-hover:translate-y-2 cursor-pointer"
              width={500} // Example width, adjust as needed
              height={500} // Example height, adjust as needed
              onClick={() => handleImageClick(item, index)}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={item.url} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          ) : null}
        </div>
      </div>
    ));

  return (
    <main className="m-1">
      <section className="flex flex-col mx-4">
        <article
          className="
          lg:mb-[11vh] mb-[2.5rem] mt-[11vh] 
          flex flex-wrap sm:flex-row 
          lg:text-h1  md:text-[2.75rem] text-[1.6rem] tracking-tight
          lg:leading-[3.7rem]
          leading-[1.6rem]
          font-h1 font-medium"
        >
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
              className="mr-1 appearance-none"
              onChange={() => handleClick("code")}
            />
            <label
              className={`
                cursor-none
                checkbox-label-checked
                ${selectedLabel === "code" ? "clicked" : ""}`}
              htmlFor="code"
              onClick={() => handleClick("code")}
            >
              Digital,
            </label>
          </div>
          <div className="">
            <input
              type="radio"
              id="product"
              className="mr-1 appearance-none"
              onChange={() => handleClick("product")}
            />
            <label
              className={`
                cursor-none
                checkbox-label-checked
                ${selectedLabel === "product" ? "clicked" : ""}`}
              htmlFor="product"
              onClick={() => handleClick("product")}
            >
              Product,
            </label>
          </div>
          <div className="">
            <input
              type="radio"
              id="photo"
              className="mr-1 appearance-none"
              onChange={() => handleClick("photo")}
            />
            <label
              className={`
                checkbox-label-checked
                ${selectedLabel === "photo" ? "clicked" : ""}`}
              htmlFor="photo"
              onClick={() => handleClick("photo")}
            >
              Photo,
            </label>
          </div>
          <div className="">
            <input
              type="radio"
              id="video"
              className="mr-1 appearance-none"
              onChange={() => handleClick("video")}
            />
            <label
              className={`
                checkbox-label-checked
                ${selectedLabel === "video" ? "clicked" : ""}`}
              htmlFor="video"
              onClick={() => handleClick("video")}
            >
              Cinematography,
            </label>
          </div>
          <div className="">
            <input
              type="radio"
              id="print"
              className="mr-1 appearance-none"
              onChange={() => handleClick("print")}
            />
            <label
              className={`
                checkbox-label-checked
                ${selectedLabel === "print" ? "clicked" : ""}`}
              htmlFor="print"
              onClick={() => handleClick("print")}
            >
              Print,
            </label>
          </div>
          <div className="">
            <input
              type="radio"
              id="3d"
              className="mr-1 appearance-none"
              onChange={() => handleClick("3d")}
            />
            <label
              className={`
                checkbox-label-checked
                ${selectedLabel === "3d" ? "clicked" : ""}`}
              htmlFor="3d"
              onClick={() => handleClick("3d")}
            >
              3D,
            </label>
          </div>
          <div className="">
            <input
              type="radio"
              id="motion"
              className="mr-1 appearance-none"
              onChange={() => handleClick("motion")}
            />
            <label
              className={`
                checkbox-label-checked
                ${selectedLabel === "motion" ? "clicked" : ""}`}
              htmlFor="motion"
              onClick={() => handleClick("motion")}
            >
              Motion,
            </label>
          </div>
          <div className="">
            <input
              type="radio"
              id="motion"
              className="mr-1 appearance-none"
              onChange={() => handleClick("sketch")}
            />
            <label
              className={`
                checkbox-label-checked
                ${selectedLabel === "sketch" ? "clicked" : ""}`}
              htmlFor="sketch"
              onClick={() => handleClick("sketch")}
            >
              Sketch
            </label>
          </div>
        </article>
        <article className="w-full mx-auto grid grid-cols-2 gap-[2rem] sm:gap-[5rem] sm:grid-cols-5 lg:grid-cols-7 place-content-center">
          {displayedItems}
        </article>
      </section>

      {clickedImg && (
        <div
          className="fixed inset-0 bg-white bg-opacity-85 flex justify-start items-start z-50"
          onClick={handleCloseModal}
        >
          <div
            className="relative m-[0.6rem] cursor-pointer"
            onClick={(e) => e.stopPropagation()} // Stop propagation on the modal content
          >
            {clickedImg.fileType === "webp" ? (
              <img
                src={clickedImg.url}
                alt="Modal Image"
                className="max-h-[84vh] cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  const clickX =
                    e.clientX - e.target.getBoundingClientRect().left;
                  const halfWidth = e.target.clientWidth / 2;
                  if (clickX > halfWidth) {
                    handleNextImage();
                  } else {
                    handlePrevImage();
                  }
                }}
                style={{ cursor: "e-resize" }} // Change cursor to arrow
                onMouseMove={(e) => {
                  const clickX =
                    e.clientX - e.target.getBoundingClientRect().left;
                  const halfWidth = e.target.clientWidth / 2;
                  if (clickX > halfWidth) {
                    e.target.style.cursor = "e-resize";
                  } else {
                    e.target.style.cursor = "w-resize";
                  }
                }}
              />
            ) : clickedImg.fileType === "webm" ? (
              <video
                className="max-h-[84vh] cursor-pointer"
                autoPlay
                loop
                muted
                playsInline
                onClick={(e) => {
                  e.stopPropagation();
                  const clickX =
                    e.clientX - e.target.getBoundingClientRect().left;
                  const halfWidth = e.target.clientWidth / 2;
                  if (clickX > halfWidth) {
                    handleNextImage();
                  } else {
                    handlePrevImage();
                  }
                }}
                style={{ cursor: "e-resize" }} // Change cursor to arrow
                onMouseMove={(e) => {
                  const clickX =
                    e.clientX - e.target.getBoundingClientRect().left;
                  const halfWidth = e.target.clientWidth / 2;
                  if (clickX > halfWidth) {
                    e.target.style.cursor = "e-resize";
                  } else {
                    e.target.style.cursor = "w-resize";
                  }
                }}
              >
                <source src={clickedImg.url} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            ) : null}
          </div>
        </div>
      )}
    </main>
  );
}

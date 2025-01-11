"use client";
import { useState } from "react";
import { items } from "./items.js";
import Image from "next/image.js";
import Iframe from "react-iframe";

export default function Projects() {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (url, index) => {
    setClickedImg(url);
    setCurrentIndex(index);
  };

  const handleCloseModal = () => {
    setClickedImg(null);
  };

  const handleNextImage = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(nextIndex);
    setClickedImg(items[nextIndex].url);
  };

  const displayedItems = items.map((item, index) => (
    <div key={item.id} className="item">
      <div className="justify-center relative group text-cap">
        <Image
          src={item.url}
          alt={item.name}
          className="h-full object-cover translate-y-0 transition group-hover:translate-y-2 cursor-pointer"
          unoptimized={item.url.endsWith(".gif")} // Add unoptimized property for GIFs
          width={500} // Example width, adjust as needed
          height={500} // Example height, adjust as needed
          onClick={() => handleImageClick(item.url, index)}
        />
      </div>
    </div>
  ));

  // Function to convert YouTube URLs to embed format
  const url = "https://www.youtube.com/watch?v=E1XWWuYkrhs&t=1484s"
  const getEmbedUrl = (url) => {
    const youtubeRegex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(youtubeRegex);
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
    return url; // Return the original URL if it's not a YouTube URL
  };

  const embedUrl = getEmbedUrl(url);

  return (
    <main className="m-1">
      {/* Sketchbook tour video */}
      <div className="mx-4 mt-[11vh] w-1/2 lg:h-[30rem] h-[14rem] sm:h-[23rem] flex items-center justify-center">
        {/* DOCUMENTATION: https://www.npmjs.com/package/react-iframe */}
        <Iframe
          url={embedUrl} // Ensure the URL is in the correct embed format
          width="100%"
          height="100%"
          id=""
          className=""
          display="block"
          position="relative"
        />
      </div>

      

      <section className="flex flex-col mx-4 mt-32">
        {/* lg:mb-[11vh] mb-[2.5rem] mt-[11vh] 
          flex flex-wrap sm:flex-row 
          lg:text-h1  md:text-[2.75rem] text-[1.6rem] tracking-tight
          lg:leading-[3.7rem]
          leading-[1.6rem]
          font-h1 font-medium */}
        <article className="w-full mx-auto grid grid-cols-2 gap-[2rem] sm:gap-[5rem]sm:grid-cols-5 lg:grid-cols-5  place-content-center">
          {displayedItems}
        </article>
      </section>

      {clickedImg && (
        <div
          className="fixed inset-0 bg-white bg-opacity-85 flex justify-start items-start z-50"
          onClick={handleCloseModal}
        >
          <div
            className="relative m-[0.6rem]" // m-2 adds the little margin around img
            onClick={(e) => e.stopPropagation()} // Stop propagation on the modal content
          >
            <img
              src={clickedImg}
              alt="Modal Image"
              className=" max-h-[84vh] cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }} // Stop propagation and handle next image
              style={{ cursor: "e-resize" }} // Change cursor to arrow
            />
          </div>
        </div>
      )}
    </main>
  );
}

// 6 COL GRID USED HERE. USE NEW4 FOR NO GRID.
import { useState } from "react";
import React, { forwardRef } from 'react' // IMPORTANT
import Image from 'next/image';

const New3 = forwardRef(({ text1, img1, caption }) => { 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    // NOTICE REF IN MAIN
    <main>
      <div
        className=" 
      lg:grid lg:grid-cols-6
      gap-[5.06rem] 
      w-full h-fit 
      items-start
      pt-[0.5rem]" // important padding top here
      >
        {text1 && (
          <div
            className="
        col-span-2
        leading-[1.5rem]
        lg:text-[1rem]
        tracking-[0.005em]
        text
        font-Suisse
        font-regular
        text-offBlack2"
          >
            {text1}
          </div>
        )}
        <div className="lg:pt-0 pt-8  lg:pb-0 pb-16 col-start-3 col-span-4">
          <div className=" col-start-1">
            {img1 && (
              <div className="col-start-1">
                <Image
                  src={img1}
                  alt="home page image"
                  layout="responsive"
                  width={500}
                  height={500}
                  onClick={handleImageClick} // Add click handler to open modal
                  className="cursor-pointer" // Change cursor to pointer
                />
              </div>
            )}
          </div>
          {caption && (
            <p className="font-Suisse pt-2 lg:text-[1rem] text-[0.75rem]">
              {caption}
            </p>
          )}

          {/* MODAL EDIT HERE */}
          {isModalOpen && (
            <div
          className="fixed inset-0 bg-white bg-opacity-85 flex justify-start items-start z-50"
          onClick={handleCloseModal}
        >
          <div
            className="relative m-[0.6rem]" // m-2 adds the little margin around img
            onClick={(e) => e.stopPropagation()} // Stop propagation on the modal content
          >
            <img
              src={img1}
              alt="Modal Image"
              className=" max-h-[84vh] cursor-crosshair"
            />
          </div>
        </div>
          )}
        </div>
      </div>
    </main>
  );
});

export default New3
import React from "react"; // IMPORTANT
import Image from "next/image";

// `img` param is the name of the image, located at the top file level of /pubic. Formatted as `myImage.jpg` without a slash.
const ImageGrid1 = ({ img, img2, img3, text1, text2, text3 }) => {
  return (
    <main className="">
      <div
        className="
      pt-[10.61rem] pb-[8.81rem]
      grid lg:grid-cols-5 grid-cols-3
      gap-[2.06rem] 
       h-fit 
      items-start
      mx-5
      "
      >
        {/* IMAGE */}
        {/* grid grid-cols-2 gap-4 */}
        {/* height will be auto and width will be full width of the parent */}
        <div
          className="col-span-3
            col-start-1"
        >
          <Image
            src={"/" + img}
            alt="home page image"
            layout="responsive"
            width={500}
            height={500}
          />
          <p className="font-SuisseWorks text-s">fig 01</p>
        </div>
        <div className="col-span-2 self-end">
          <Image
            src={"/" + img2}
            alt="home page image"
            layout="responsive"
            width={500}
            height={500}
          />
          <p className="font-SuisseWorks text-s">fig 02</p>
        </div>
        {/* TEXT */}
        <div
          className="
        text-[1.25em] font-Helvetica font-light leading-[1.75rem] text-offwhite
        col-start-3 indent-[33%]
        ml-1"
        >
          {text1}
        </div>
        <div
          className="
        text-[1.25em] font-Helvetica font-light leading-[1.75rem] text-offwhite
        col-start-4 indent-[33%]
        ml-2"
        >
          {text2}
        </div>
        <div
          className="
        text-[1.25em] font-Helvetica font-light leading-[1.75rem] text-offwhite
        col-start-5 indent-[33%]
        ml-3"
        >
          {text3}
        </div>
      </div>
      {/* BELOW IMAGE */}
      <p className="font-SuisseWorks text-s ml-5">fig 03</p>
      <div
        className="
      
       h-fit w-full"
      >
        {/* height will be auto and width will be full width of the parent */}
        <Image
          src={"/" + img3}
          alt="home page image"
          layout="responsive"
          width={500}
          height={500}
        />
      </div>
    </main>
  );
};

export default ImageGrid1;

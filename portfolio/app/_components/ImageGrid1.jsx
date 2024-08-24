import React from "react"; // IMPORTANT
import Image from "next/image";

// `img` param is the name of the image, located at the top file level of /pubic. Formatted as `myImage.jpg` without a slash.
const ImageGrid1 = ({ img, img2 }) => {
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
            src={"/" + img}
            alt="home page image"
            layout="responsive"
            width={500}
            height={500}
          />
          <p className="font-SuisseWorks text-s">fig 02</p>
        </div>
        {/* TEXT */}
        <p
          className="
        text-[1.25em] font-Helvetica leading-[1.75rem] text-offwhite
        col-start-3 indent-[33%]
        ml-1"
        >
          The lines page ... fig 01 translates the physicality of the liminality
          within spaces by emulating an infinitely long fashion runway in 3D.
          Instead of flipping magazine-like pages, we transformed the
          interaction by creating depth a user must walk{" "}
          <i className="font-SuisseWorks">through</i> using mouse position. The
          endless nature of the runway is innately liminal.
        </p>
        <p
          className="
        text-[1.25em] font-Helvetica leading-[1.75rem] text-offwhite
        col-start-4 indent-[33%]
        ml-2"
        >
          The people page ... fig 02 creates a sort of “infinity scroll” of
          cards representing each LG member. This emphasizes liminality and at
          the same time emphasizes the great mass of talents a part of making
          the show possible.
        </p>
        <p
          className="
        text-[1.25em] font-Helvetica leading-[1.75rem] text-offwhite
        col-start-5 indent-[33%]
        ml-3"
        >
          The home page ... fig 03 is a transitory white void hosting each
          space: Time moves in an infinite loop, and when the user wants to
          enter a page, they enter the “space between spaces” — neither here nor
          there, they are “in-between” time, and can reside in that page as long
          as they hold the mouse. This forced interaction was integral to
          evoking the feeling of temporality established in our initial
          definition.
        </p>
      </div>
      {/* BELOW IMAGE */}
      <p className="font-SuisseWorks text-s ml-5">fig 03</p>
      <div
        className="
      
       h-fit w-full"
      >
        {/* height will be auto and width will be full width of the parent */}
        <Image
          src={"/" + img2}
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

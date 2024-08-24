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
        </div>
        <div className="col-span-2 self-end">
          <Image
            src={"/" + img}
            alt="home page image"
            layout="responsive"
            width={500}
            height={500}
          />
        </div>
        {/* TEXT */}
        <p
          className="
        text-s font-Helvetica leading-tight text-offwhite
        col-start-3 indent-[33%]"
        >
          <span className="font-SuisseWorks text-p ">The home page's </span>
          white void is a transitory space hosting each space: Time moves
          circularly, and when the user wants to enter a page, they enter the
          “space between spaces” — neither here nor there, they are “in-between”
          time, and can reside there as long as they hold the mouse. This forced
          interaction was integral to establishing liminality in interaction.
        </p>
        <p
          className="
        text-s font-Helvetica leading-tight text-offwhite
        col-start-4 indent-[33%]"
        >
          <span className="font-SuisseWorks text-p ">The people page </span>
          creates a sort of “infinity scroll” of cards representing each LG
          member. This emphasizes liminality and at the same time emphasizes the
          great mass of talents a part of making the show possible.
        </p>
        <p
          className="
        text-s font-Helvetica leading-normal text-offwhite
        col-start-5 indent-[33%]"
        >
          <span className="font-SuisseWorks text-p ">The lines page </span>
          translates the physicality of the liminality within spaces by
          emulating an infinitely long fashion runway in 3D. Instead of flipping
          magazine-like pages, we transformed the interaction by creating depth
          a user must walk <i className="font-SuisseWorks">through</i> using
          mouse position. The endless nature of the runway is innately liminal.
        </p>
      </div>
      {/* BELOW IMAGE */}
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

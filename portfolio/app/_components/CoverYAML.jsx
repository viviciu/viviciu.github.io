import React from "react";
import Image from "next/image";


const Navbar = () => {
  return (
    <main className=" pb-[5.06rem]">
      {/* IMAGE */}
      <div
        className="
      
       h-fit w-full"
      >
        {/* height will be auto and width will be full width of the parent */}
        <Image
          src="/imgs/homegif.gif"
          alt="home page image"
          layout="responsive"
          width={500}
          height={500}
        />

        {/* CENTERS A HALF-SCREEN-WIDTH IMG.. parent width must be w-[50vw] and grid place-items-center — tailwind */}
        {/* <Image
          src="/liminalTitle.png"
          alt="home page image"
          layout="responsive"
          width={500}
          height={500}
          // https://stackoverflow.com/questions/72864851/how-to-make-nextjs-image-component-100-height-and-width-for-its-parent-div
          //   i guess i dont need these?
          //   sizes="10vw"
          // objectFit="cover"
        /> */}
      </div>
    </main>
  );
};

export default Navbar;

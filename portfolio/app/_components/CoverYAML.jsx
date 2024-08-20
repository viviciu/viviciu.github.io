import React from "react";
import Image from "next/image";


const Navbar = () => {
  return (
    <main className=" pb-[5.06rem] mt-[3.5rem]">
      {/* YAML */}
      {/* gap-[1.31rem]!! */}
      <div
        className="
        w-full
        absolute
       grid lg:grid-cols-5 gap-[1.31rem] grid-cols-3
       -mb-[0.9375rem]"
      >
        <div className="pl-1">
          <span className="font-CMUSerif">Client </span>
          <span className="font-Helvetica-Neue font-bold">Lunar Gala</span>
        </div>
        <div className="justify-self-end">
          <span className="font-CMUSerif">Year </span>
          <span className="font-Helvetica-Neue font-bold">2023-2024</span>
        </div>
        <div className="pl-1">
          <span className="font-CMUSerif">Role </span>
          <span className="font-Helvetica-Neue font-bold">Web Designer, Developer</span>
        </div>
      </div>

      {/* IMAGE */}
      <div
        className="
      
       h-fit w-full"
      >
        {/* height will be auto and width will be full width of the parent */}
        <Image
          src="/liminalTitle.png"
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

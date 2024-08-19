import React from "react";
import Image from "next/image";


const Navbar = () => {
  return (
    <main className="grid place-items-center">
      <div
        className="
      pt-[2.9375rem] pb-[5.06rem] mt-[3.5rem]
      w-[50vw] h-fit "
      >
        {/* height will be auto and width will be full width of the parent */}
        <Image
          
          src="/lg-gif-compressed.gif"
          alt="home page image"
          layout="responsive"
          width={500}
          height={500}
          // https://stackoverflow.com/questions/72864851/how-to-make-nextjs-image-component-100-height-and-width-for-its-parent-div
          //   i guess i dont need these?
        //   sizes="10vw"
            // objectFit="cover"
        />
      </div>
    </main>
  );
};

export default Navbar;

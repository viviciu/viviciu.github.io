import React from "react"; // IMPORTANT
import Image from "next/image";

// `img` param is the name of the image, located at the top file level of /pubic. Formatted as `myImage.jpg` without a slash.
const ImageGrid1 = ({ img }) => {
  return (
    <main className="">
      <div
        className="
      pt-[10.61rem] pb-[8.81rem]
      grid lg:grid-cols-5 grid-cols-3
      gap-[3.06rem] 
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
        <Image
          src={"/" + img}
          alt="home page image"
          layout="responsive"
          width={500}
          height={500}
        />
        <Image
          src={"/" + img}
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

export default ImageGrid1;

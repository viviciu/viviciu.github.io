import React from "react"; // IMPORTANT
import Image from "next/image";



// `img` param is the name of the image, located at the top file level of /pubic. Formatted as `myImage.jpg` without a slash.
const ImageGridTest = ({ img1, img2, img3, text1, text2, text3 }) => {
  return (
    <main className="">
      {/* BELOW IMAGE */}

      <div
        className="
      
       h-fit w-full"
      >
        {/* height will be auto and width will be full width of the parent */}
        <div className="grid grid-cols-4 gap-6 h-full">
          <div
            className="
         font-SuisseWorks font-light text-cap leading-[1.25rem] text-offBlack
        ml-1 sticky top-20"
          >
            {text1}
            <br />
            {text2}
            <br />
            {text3}
          </div>

          <div className="col-start-2 col-span-3 h-full">
            <Image
              src={"/" + img3}
              alt="home page image"
              layout="responsive"
              width={500}
              height={500}
            />
            <Image
              src={"/" + img1}
              alt="home page image"
              layout="responsive"
              width={500}
              height={500}
            />
            <Image
              src={"/" + img2}
              alt="home page image"
              layout="responsive"
              width={500}
              height={500}
            />
          </div>
          
        </div>

        <div
          className="
      pt-[10.61rem] pb-[8.81rem]
      grid lg:grid-cols-4 grid-cols-4
      gap-[2.06rem] 
       h-fit 
      items-start
      mx-5
      "
        >
          <div
            className="col-span-2
            col-start-1"
          ></div>
          {/* TEXT */}

          <div
            className="
        text-cap font-SFProDisplay font-regular leading-cap text-offBlack
        indent-[33%]
        ml-2"
          >
            {text2}
          </div>
          <div
            className="
        text-cap font-SFProDisplay font-regular leading-cap text-offBlack
       indent-[33%]
        ml-3"
          >
            {text3}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ImageGridTest

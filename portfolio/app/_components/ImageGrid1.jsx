import React from "react";
import Image from "next/image";

// `img` param is the name of the image, located at the top file level of /public. Formatted as `myImage.jpg` without a slash.
const ImageGrid1 = ({
  img1,
  img2,
  img3,
  text1,
  text2,
  text3,
  caption1,
  caption2,
  caption3,
}) => {
  return (
    <main className="mb-[3rem]">
      <div className="h-fit w-full">
        {img1 && (
          <div className="mx-[-1rem]">
            <Image
              src={"/" + img1}
              alt="home page image"
              layout="responsive"
              width={500}
              height={500}
            />
            <p className="font-SuisseWorks text-cap ml-2 mt-1">{caption1}</p>
          </div>
        )}
      </div>

      <div className="pt-[3.5rem] pb-[5rem] lg:flex lg:mx-0 mx-[-1rem] gap-[1.06rem] h-fit items-start">
        {img2 && (
          <div className="col-span-2 col-start-1">
            <Image
              src={"/" + img2}
              alt="home page image"
              layout="responsive"
              width={500}
              height={500}
            />
            <p className="font-SuisseWorks text-cap ml-2 mt-2">{caption2}</p>
          </div>
        )}
        {img3 && (
          <div className="col-span-2 self-end">
            <Image
              src={"/" + img3}
              alt="home page image"
              layout="responsive"
              width={500}
              height={500}
            />
            <p className="font-SuisseWorks text-cap ml-2 mt-2">{caption3}</p>
          </div>
        )}
      </div>

      <div className="lg:grid lg:grid-cols-5 gap-[1.168rem] flex flex-col ">
        <div className="font-SuisseWorks text-cap leading-[1.25rem] text-offBlack col-start-3">
          {text1}
        </div>
        <div className="font-SuisseWorks text-cap leading-[1.25rem] text-offBlack col-start-4">
          {text2}
        </div>
        <div className="font-SuisseWorks text-cap leading-[1.25rem] text-offBlack col-start-5">
          {text3}
        </div>
      </div>
    </main>
  );
};

export default ImageGrid1;

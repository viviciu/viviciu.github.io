import React from "react"; // IMPORTANT
import Image from "next/image";

// `img` param is the name of the image, located at the top file level of /pubic. Formatted as `myImage.jpg` without a slash.
const ImageGrid2 = ({ img, bgColor }) => {
  return (
    <main className={`bg-${bgColor} pl-5`}>
      {/* DIVIDER LINE 2 */}
      {/* in figma, the divider line height is 0.105rem */}
      <div
        className="bg-white w-full h-[1px]
      "
      ></div>
      <p
        className={`pt-2 indent-[1.75rem] uppercase 
            text-offwhite font-Helvetica
          `}
      >
        <span className="font-sans">●</span> CONTENT HEADER
      </p>
      {/* END DIVIDER LINE */}

      <div
        className="
       pt-[3rem] pb-[8.81rem]
      grid lg:grid-cols-5 grid-cols-3
      gap-[2.06rem] 
       h-fit 
      items-start
      mx-5

      "
      >
        {/* TEXT */}
        <div
          className={`space-y-8
        text-[1.25em] font-Helvetica leading-[1.75em] 
        ${bgColor === "white" ? "text-black" : "text-offwhite"}
        col-start-4 col-span-2 indent-[33%] m-5`}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            dapibus sed dolor ac accumsan. Nullam rutrum risus sit amet enim
            tincidunt, nec feugiat mauris finibus. Aliquam et rhoncus eros.
            Fusce lectus nunc, pellentesque vitae euismod id, pretium nec
            mauris. Mauris sed fringilla neque. Integer dignissim dapibus neque,
            vel interdum diam consectetur in. Nulla erat odio, semper sed quam
            et, faucibus hendrerit nunc. Fusce quis lorem dapibus, blandit
            lectus quis, vehicula ipsum. Cras lacinia tellus non odio mattis
            consectetur. Aenean faucibus vestibulum sapien, eget malesuada ipsum
            lobortis id. Aenean mi lacus, auctor ac metus non, mattis luctus
            dolor. Praesent vestibulum mi eget quam ultrices ultrices.
          </p>
        </div>

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
            className="rounded-xl"
          />
        </div>

        <div className="col-span-2 self-end">
          <Image
            src={"/" + img}
            alt="home page image"
            layout="responsive"
            width={500}
            height={500}
            className="rounded-xl"
          />
          <p className="font-SuisseWorks text-s text-black">
            fig. 02 Using notational sketching to communicate to other devs.
          </p>
        </div>

        {/* BOTTOM 2 IMAGES */}
        <div
          className="col-span-3
            col-start-1"
        >
          <div className="flex gap-[2.06rem] ">
            <Image
              src={"/" + img}
              alt="home page image"
              layout="responsive"
              width={500}
              height={500}
              className="rounded-xl"
            />
            {/* <p className="text-black">fig 02</p> */}

            <div className="h-[50%] self-end">
              <Image
                src={"/" + img}
                alt="home page image"
                layout="responsive"
                width={500}
                height={500}
                className="rounded-xl"
              />
              <p className="text-black">fig 02</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ImageGrid2;

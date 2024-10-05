import React from "react";
import Image from "next/image";

// `img` param is the name of the image, located at the top file level of /pubic. Formatted as `myImage.jpg` without a slash.
const ImageGrid2 = ({ img }) => {
  return (
    <main className="">
      {/* DIVIDER LINE 2 */}
      {/* in figma, the divider line height is 0.105rem */}
      <div
        className="bg-white w-full h-[1px] mt-[10.61rem]
      "
      ></div>
      <p
        className={`pt-2 indent-[1.75rem] uppercase 
            text-offwhite font-Helvetica
          `}
      >
        <span className="font-sans">●</span> Site architecture
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

        {/* TEXT */}
        <div
          className="space-y-8
        text-[1.25em] font-Helvetica font-light leading-[1.75em] text-offwhite
        col-start-4 col-span-2 indent-[33%] m-5"
        >
          <p>
            The visual form language and interaction design would suffer if the
            entire site’s mapping wasn’t transitory. This required us to
            establish new terms to avoid miscommunication when discussing such
            abstract ideas during team meetings: “Capital-L Liminal” and
            “liminal.”
          </p>

          <ul className="indent-0 space-y-4">
            <div className="flex space-x-[11%]">
              <p>●</p>
              <li>
                “liminal” <i>is liminality in its form—its visual language</i>.
                Visual cues such as endless tunnels, negative space, and the
                like.
              </li>
            </div>

            <div className="flex space-x-[11%]">
              <p>●</p>
              <li>
                “Capital-L Liminal” is <i>literally a liminal space</i>—it does
                not exist and its only purpose is to transport the user to
                another space. The home page serves this purpose—it is a
                navigation hub as discussed earlier where time is an infinite
                loop. However, it is also “liminal.” visually.
              </li>
            </div>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default ImageGrid2;

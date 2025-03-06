"use client";
import Image from "next/image";
import MuxPlayer from "@mux/mux-player-react";
import Iframe from "react-iframe";

import Title from "../../_components/Title";
import Context2 from "../../_components/Context2";
import CoverYAMLVideo from "../../_components/CoverYAMLVideo";
import YAMLBar from "../../_components/YAMLBar";
import DividerLine from "../../_components/DividerLine";
import { MdOutlineArrowOutward } from "react-icons/md";
import New3Video from "../../_components/New3Video"
import New3 from "../../_components/New3"
import New4 from "../../_components/New4"
import New3Grid from "../../_components/New3Grid"
import Header from "../../_components/Header"


export default function Cinematography() {
  const members = [];
  const tools = ["Davinci Resolve", "LightroomClassic"];
  const myRole = "Solo ";

  // Function to convert YouTube URLs to embed format
  
  const url = "https://youtu.be/iwR8DDjFYes?si=g6cg3uDmEMG6690q"
  const getEmbedUrl = (url) => {
    const youtubeRegex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(youtubeRegex);
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
    return url; // Return the original URL if it's not a YouTube URL
  };

  const embedUrl = getEmbedUrl(url);

  return (
    <main className=" block px-4">
      <Title text1={<div>Some storytelling.</div>} />

      <Context2
        context={<div>Desc</div>}
        myRole={myRole}
        timeline="2021 — Present"
        members={members}
        tools={tools}
      />

      {/* https://res.cloudinary.com/ddjxpkewq/video/upload/q_auto/v1/pmini/elqxufreseulmgvbxs1n */}
      <New3Video
        src={"bWtOP7AxOvsonYYuecvDfLM00QVyHjZu8lIOvatm011bE"}
        text1="wiped clean, 2022."
      />
      <div
        className=" lg:grid lg:grid-cols-6
          gap-[5.06rem] 
          w-full h-[18rem]"
      >
        {/* DOCUMENTATION: https://www.npmjs.com/package/react-iframe */}

        <div className="col-start-3 col-span-4 h-[25rem]">
          <Iframe
            url={embedUrl} // Ensure the URL is in the correct embed format
            width="100%"
            height="100%"
            id=""
            className=""
            display="block"
            position="relative"
          />
        </div>
      </div>

      {/* SPACER */}
      <div className="mt-[4rem]"></div>
      {/* GRID OF HIGHLIGHTED STILLS */}
      {/* <New3Grid
        caption={
          <div>
            Still highlights
          </div>
        }
        img1="https://image.mux.com/9REJpbYaWwZDSBex5302HhjOao1mCCv53936TZ6T01SV8/animated.gif?width=320"
        img2="https://image.mux.com/01MIq98IRiA013B4S9oBpiYjpVmZqFptQy5rf00QxXrgS8/animated.gif?width=320"
        img3="https://image.mux.com/wnPigEnjWslHEA01Ugc1PQKlbf3DHg01u1ebJub7un4fc/animated.gif?width=320"
        img4="https://image.mux.com/KO4WMlrBo2eEd5VTg2Z2Z02P3tV5wyoUlYD00azrk02lGQ/animated.gif?width=320"
        
      /> */}

      {/* SPACER */}
      {/* <div className="mt-[4rem]"></div>
      <div className="mt-10 lg:grid lg:grid-cols-3 gap-[0.6rem] flex flex-col">
        <div className="col-span-3 col-start-1">
          <Image
            src="/imgs/playfulPractical/finalCoverImg_manyIterations.webp"
            height={500}
            width={1400}
            layout="responsive"
          />
        </div>
      </div>
      <div className="mt-[0.6rem] mb-32 lg:columns-3 sm:columns-2 w-full place-content-center gap-[0.6rem]">
        <div className="">
          <Image
            src="https://image.mux.com/TKWj6nwkH0082l008G96sOHKN3X6PklbfOzrN8oaJ62hw/animated.gif?width=320"
            height={500}
            width={500}
            layout="responsive"
          />
          <Image
            className="mt-[0.6rem]"
            src={"/imgs/playfulPractical/DSC05499.webp"}
            height={500}
            width={500}
            layout="responsive"
          />
        </div>

        <div>
          <Image
            src={"/imgs/playfulPractical/DSC04956.webp"}
            height={500}
            width={500}
            layout="responsive"
          />
          <Image
            className="mt-[0.6rem]"
            src={"/imgs/playfulPractical/DSC04934.webp"}
            height={500}
            width={500}
            layout="responsive"
          />
          <Image
            className="mt-[0.6rem]"
            src={"/imgs/playfulPractical/DSC04825.webp"}
            height={500}
            width={500}
            layout="responsive"
          />
        </div>
        <div>
          <Image
            src={"/imgs/playfulPractical/DSC04918.webp"}
            height={500}
            width={500}
            layout="responsive"
          />
        </div>
        
      </div> */}
    </main>
  );
}

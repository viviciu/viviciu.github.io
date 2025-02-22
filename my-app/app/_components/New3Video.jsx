// 6 COL GRID USED HERE. USE NEW4 FOR NO GRID.
import Link from 'next/link'
import { useState } from "react";
import React, { forwardRef } from 'react' // IMPORTANT
import Video from 'next-video'
import MuxPlayer from "@mux/mux-player-react";

const New3 = forwardRef(({ text1, src, caption }, ref) => { // NOTICE REF HERE
 
  
  return (
    // NOTICE REF IN MAIN
    <main>
      <div
        className=" 
          lg:grid lg:grid-cols-6
          gap-[5.06rem] 
          w-full h-fit 
          items-start
          pt-[0.5rem]" // important padding top here
      >
        {text1 && (
          <div
            className="
            col-span-2
            leading-[1.5rem]
            lg:text-[1rem]
            tracking-[0.005em]
            text
            font-Suisse
            font-regular
            text-offBlack2"
          >
            {text1}
          </div>
        )}
        <div className="lg:pt-0 pt-8  lg:pb-0 pb-16 col-start-3 col-span-4">
          <div className=" col-start-1">
            {src && (
              <div className="col-start-1">
                {/* CLOUDINARY */}
                {/* <video controls>
                  <source
                    src={src}
                    type="video/webm"
                  />
                </video> */}
                <MuxPlayer
                  playbackId={src}
                  metadataVideoTitle="Placeholder (optional)"
                  metadata-viewer-user-id="Placeholder (optional)"
                  primary-color="#ffffff"
                  secondary-color="#000000"
                  accent-color="#e0e0e0"
                />
                {/* <Video src={src} /> */}
              </div>
            )}
          </div>
          {caption && (
            <div className="font-Suisse pt-2 lg:text-[1rem] text-[0.75rem]">
              {caption}
            </div>
          )}
        </div>
      </div>
    </main>
  );
});

export default New3
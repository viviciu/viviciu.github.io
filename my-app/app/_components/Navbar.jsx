import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";


export default function Navbar({ onAboutClick }) {
  return (
    // doing height 0 allows the nav to be sticky and not take up space.. so it overlays the canvas as if the position was absolute.
    <div
      className="lg:px-0 mx-4 sticky z-10  h-0 lg:leading-normal leading-[0.75rem]
    lg:text-base
    text-cap
    font-semibold"
    >
      {/* TO EDIT TOP PADDING OF NAVBAR: CHANGE pt-[_rem], DO NOT ADD MARGIN/PADDING TO TOP LEVEL PARENT DIV. */}
      <nav
        className="grid lg:pt-[0.5rem] pt-[1rem]
      lg:grid-cols-5
      gap-5 w-full
      grid-cols-2 h-fit"
      >
        <div className="col-start-1  uppercase hover:text-mwsGrey">
          <Link href="/">staicu, viviana</Link>
        </div>

        <div className="lg:col-start-5  col-start-2 col-span-3 flex justify-end items-center">
          {["work", "play", "sketchbook", "about"].map((item, idx, arr) => (
            <React.Fragment key={item}>
              {item === "about" ? (
                <button
                  className="hover:text-mwsGrey"
                  onClick={onAboutClick}
                >
                  {item}
                </button>
              ) : (
                <Link href={item === "work" ? "/" : "/" + item} className="hover:text-mwsGrey">
                  {item}
                </Link>
              )}
              {idx < arr.length - 1 && ", "}
            </React.Fragment>
          ))}
        </div>
      </nav>
    </div>
  );
}
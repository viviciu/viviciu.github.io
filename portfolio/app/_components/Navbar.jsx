import { appleImg } from '../../public/utils';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";


const Navbar = () => {
  return (
    // doing height 0 allows the nav to be sticky and not take up space.. so it overlays the canvas as if the position was absolute.
    <div
      className="lg:px-0  lg:mx-4 mx-2 sticky z-10 w-full h-0 lg:leading-normal leading-[0.75rem]
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

        <div className="lg:col-start-4 col-start-2 inline col-span-3">
          {["play", "theSketchbook", "about"].map((item, index, array) => (
            // The React.Fragment is used to group the elements together without adding an extra node to the DOM. The key prop is moved to the React.Fragment because keys should be on the outermost element returned by map.
            <React.Fragment key={item}>
              <Link
                href={"/" + item} // you can combine strings like this
                className="hover:text-mwsGrey"
              >
                {item}
              </Link>
              {index < array.length - 1 && ", "}
            </React.Fragment>
          ))}

          <Link
            href={"https://medium.com/@vivianastaicu05"}
            className="hover:text-mwsGrey relative group"
            target="_blank"
            rel="noopener noreferrer"
          >
            {", "}blogs
            <MdOutlineArrowOutward className="inline-block ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-00" />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar
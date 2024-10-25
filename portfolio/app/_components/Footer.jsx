import React from 'react'
import Link from "next/link";

const Footer = () => {
  return (
    <main className=" m-2">
      <h2 className="lg:text-5xl text-xl text-display z-10">
        see the{"  "}
        <Link className="hover:text-mwsGrey underline relative" href="/play">
          archive
        </Link>
        —
      </h2>
      <h1 className="block uppercase lg:text-[26vw] text-[26vw] tracking-tighter font-SFProDisplay font-bold m-0 leading-none max-h-[45rem]">
        staicu
      </h1>
      {/* Feldorean */}
      <div
        className="grid lg:grid-cols-5 grid-cols-3 lg:px-0 px-8 pb-2 gap-4 w-full
      lg:text-base text-xxs"
      >
        <p className="col-start-1">© 2021 staicu. All rights reserved.</p>
        <p className="lg:col-start-3 justify-self-end self-end">a.</p>
        <p className="lg:col-start-4 col-start-3">
          Margaret Morrison Carnegie Hall, <br /> Pittsburgh, PA 15213
        </p>
      </div>
    </main>
  );
}

export default Footer
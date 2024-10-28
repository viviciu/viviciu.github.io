import React from 'react'
import Link from "next/link";

const Footer = () => {
  return (
    <main className="mx-2">
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
        className="grid lg:grid-cols-5 grid-cols-3 lg:px-0 px-8  gap-4 w-full
       text-cap font-Suisse"
      >
        <p className="col-start-1 self-end ">
          <span className="font-SuisseWorks">© </span>
          <span className="font-semibold">2024, Three.js, Next.js, Vercel</span>
        </p>
        <p className="col-start-2 self-end">
          <span className="font-SuisseWorks font-regular">Socials </span>
          <Link
            href="https://www.linkedin.com/in/viviana-staicu-633aa2223/"
            className="hover:text-mwsGrey font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin,
          </Link>
          <span> </span>
          <Link
            href="https://www.flickr.com/photos/200128547@N03/albums/"
            className="hover:text-mwsGrey font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Flickr,
          </Link>
          <span> </span>
          <Link
            href="https://medium.com/@vivianastaicu05"
            className="hover:text-mwsGrey font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog{" "}
          </Link>
        </p>
        <p
          className="lg:col-start-3 justify-self-end self-end
        font-SuisseWorks"
        >
          a.
        </p>
        <p
          className="lg:col-start-4 col-start-3 
        hover:text-mwsGrey  leading-cap flex"
        >
          <Link
            href={"https://www.design.cmu.edu"}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold"
          >
            Margaret Morrison Carnegie Hall, <br /> Pittsburgh, PA 15213
          </Link>
        </p>
        {/* <p
          className="lg:col-start-5 
        font-SuisseWorks"
        >
          e.
        </p> */}
        <div
          className="lg:col-start-5 col-start-3 
          leading-cap 
        justify-self-end self-end flex gap-3"
        >
          <div
            className="lg:col-start-5 
        font-SuisseWorks justify-self-end self-end ml-auto"
          >
            e.
          </div>
          <Link
            href={"mailto:vstaicu@andrew.cmu.edu"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-mwsGrey font-semibold"
          >
            vstaicu@andrew.cmu.edu
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Footer
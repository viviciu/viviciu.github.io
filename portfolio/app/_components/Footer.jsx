import React from 'react'
import Link from "next/link";

const Footer = () => {
  return (
    <main className="m-4">
      <h2 className="text-5xl text-display ">
        see the <Link className='underline' href="/blog">archive</Link>—
      </h2>
      <h1 className="inline-block uppercase lg:text-[30vw] text-[30vw] tracking-tighter font-bold m-0 leading-none max-h-[45rem]">
        staicu
      </h1>
      {/* Feldorean */}
      <div className="grid lg:grid-cols-5 grid-cols-3 lg:px-0 px-8 pb-2 gap-4 w-full">
        <p className="col-start-1">© 2021 staicu. All rights reserved.</p>
        {/* LEFT OFF HERE WORKING ON ALIGNING GRID IN FOOTER. NEXT STEPS: FIX THE HORIZONTAL SCROLL! */}
        <p className="lg:col-start-3 justify-self-end self-end">a.</p>
        <p className="lg:col-start-4 col-start-3">
          Margaret Morrison Carnegie Hall, <br /> Pittsburgh, PA 15213
        </p>
      </div>
    </main>
  );
}

export default Footer
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <main>
      <div
        className="
      pt-[2.9375rem] pb-[5.06rem]
      grid lg:grid-cols-5 gap-[5.06rem] w-full h-80 grid-cols-3"
      >
        <h1
          className="text-white 
            font-HelveticaMedium
            tracking-['var(--ls-h1)']
            leading-['var(--lh-h1)]
            lg:text-h1
            md:text-h1
            xs:text-6xl
            self-end
            col-span-2
            lg:col-span-2
            lg:col-start-1
            col-start-2
            pb-16
            md:pb-32"
        >
          A realm where the very essence of self and time finds itself in flux.
        </h1>
        <p
          className="
        col-start-3
        col-span-2
        lg:col-span-2 
        leading-p 
        text-p 
        font-[AdobeTextPro-Regular]"
        >
          We define Liminality as a captivating interlude, where the boundaries
          of reality blur and reconfigure. It is a passage where the soul's
          chrysalis unfurls, and the harmonious transition from the familiar to
          the enigmatic.
        </p>
      </div>
    </main>
  );
}

export default Navbar
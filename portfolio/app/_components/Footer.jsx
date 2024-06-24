import React from 'react'

const Footer = () => {
  return (
    <main>
      <h1 className="uppercase lg:text-[36rem] text-[6rem] tracking-tighter font-bold m-0 max-h-[45rem]">staicu</h1>
      <div className="grid lg:grid-cols-5 grid-cols-3 lg:px-0 px-8 pb-2 gap-4 w-full">
        {/* use `shift+option+dash` to insert long dash character `—` */}
        <p className="col-start-1">© 2024 STAICU — Design+HCI @ Carnegie Mellon</p>
        {/* LEFT OFF HERE WORKING ON ALIGNING GRID IN FOOTER. NEXT STEPS: FIX THE HORIZONTAL SCROLL! */}
        <p className='lg:col-start-3 justify-self-end self-end'>a.</p>
        <p className='lg:col-start-4 col-start-3'>Margaret Morrison Carnegie Hall, <br /> Pittsburgh, PA 15213</p>
      </div>
    </main>
  )
}

export default Footer
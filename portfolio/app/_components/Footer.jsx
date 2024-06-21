import React from 'react'

const Footer = () => {
  return (
    <main>
      <h1 className="uppercase lg:text-[26rem] tracking-tighter font-bold m-0">staicu</h1>
      <div className="grid lg:grid-cols-5 pb-6">
        <p className="col-start-1">© 2021 staicu. All rights reserved.</p>
        {/* LEFT OFF HERE WORKING ON ALIGNING GRID IN FOOTER. NEXT STEPS: FIX THE HORIZONTAL SCROLL! */}
        <p className='col-start-3 self-end'>a.</p>
        <p className='col-start-4'>Margaret Morrison Carnegie Hall, <br /> Pittsburgh, PA 15213</p>
      </div>
    </main>
  )
}

export default Footer
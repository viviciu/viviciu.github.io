import React from 'react'

const DividerLine = ({text}) => {
  return (
    <>
      {/* in figma, the divider line height is 0.105rem */}
      <div
        className="bg-offBlack w-full h-[1px]"
      ></div>
      <p
        className={`pt-2 indent-[1.75rem] uppercase 
            text-offblack font-SFPro
          `}
      >
        <span className="font-sans">●</span> {text}
      </p>

    </>
  );
}

export default DividerLine
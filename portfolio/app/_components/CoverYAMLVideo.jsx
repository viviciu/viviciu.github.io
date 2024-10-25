import React from "react";
import Image from "next/image";
import Iframe from 'react-iframe'


const CoverYAMLVideo = () => {
  return (
    <div className="w-full lg:h-[50rem] h-[14rem] sm:h-[23rem] flex items-center justify-center">
      {/* DOCUMENTATION: https://www.npmjs.com/package/react-iframe */}
      <Iframe
        url="https://www.youtube.com/embed/n7lI6HM4wjc?si=BHsnvu883ixvxeA5" //DO NOT LIKE yout.be LINKS. THIS IS INCORRECT EMBED FORMATTING.
        width="100%"
        height="100%"
        id=""
        className=""
        display="block"
        position="relative"
      />
    </div>
  );
};

export default CoverYAMLVideo;

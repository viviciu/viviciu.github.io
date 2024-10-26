import React from "react";
import Iframe from "react-iframe";

const CoverYAMLVideo = ({ url }) => {
  // Function to convert YouTube URLs to embed format
  const getEmbedUrl = (url) => {
    const youtubeRegex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(youtubeRegex);
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
    return url; // Return the original URL if it's not a YouTube URL
  };

  const embedUrl = getEmbedUrl(url);

  return (
    <div className="w-full lg:h-[50rem] h-[14rem] sm:h-[23rem] flex items-center justify-center">
      {/* DOCUMENTATION: https://www.npmjs.com/package/react-iframe */}
      <Iframe
        url={embedUrl} // Ensure the URL is in the correct embed format
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

// url={url} //DO NOT LIKE yout.be LINKS. THIS IS INCORRECT EMBED FORMATTING.
// width = "100%";
// height = "100%";
// id = "";
// className = "";
// display = "block";
// position = "relative";
// w-full lg:h-[50rem] h-[14rem] sm:h-[23rem] flex items-center justify-center

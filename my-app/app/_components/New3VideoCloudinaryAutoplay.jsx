// 6 COL GRID USED HERE. USE NEW4 FOR NO GRID.


const New3VideoCloudinaryAutoplay = ({ text1, src, caption }) => { 
  return (
    <main>
      <div
        className=" 
          lg:grid lg:grid-cols-6
          gap-[5.06rem] 
          w-full h-fit 
          items-start
          pt-[0.5rem]" // important padding top here
      >
        {text1 && (
          <div
            className="
            col-span-2
            leading-[1.5rem]
            lg:text-[1rem]
            tracking-[0.005em]
            text
            font-Suisse
            font-regular
            text-offBlack2"
          >
            {text1}
          </div>
        )}
        <div className="lg:pt-0 pt-8  lg:pb-0 pb-16 col-start-3 col-span-4">
          <div className=" col-start-1">
            {src && (
              <div className="col-start-1">
                {/* CLOUDINARY */}
                <video controls autoPlay>
                  <source
                    src={src}
                    type="video/mp4"
                  />
                </video>
              </div>
            )}
          </div>
          {caption && (
            <div className="font-Suisse pt-2 lg:text-[1rem] text-[0.75rem]">
              {caption}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default New3VideoCloudinaryAutoplay;
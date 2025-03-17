const New3VideoAWS = ({ text1, src, caption }) => {
  return (
    <main className="w-full">
      <section
        className=" 
          lg:grid lg:grid-cols-6
          gap-[3rem] 
          w-full h-full 
          pt-[0.5rem]"
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
        <div className="col-start-3 col-span-4 h-full flex flex-col">
          {/* Ensure this wrapper div is full height */}
          <div className="h-full flex">
            {src && (
              <div className="w-full flex justify-center max-h-[80vh]">
                <video className="w-full" controls>
                  <source src={src} type="video/webm" />
                </video>
              </div>
            )}
          </div>
          {caption && (
            <div className="font-Suisse pt-2 lg:text-[1rem] text-[0.75rem] flex justify-center">
              {caption}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default New3VideoAWS;

import Image from 'next/image';

export default function New3Grid({ text1, img1, img2, img3, img4, caption }) { 
  
  return (
    // NOTICE REF IN MAIN
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
                <div className="grid grid-cols-2 gap-2">
                  {img1 && (
                    <div className="col-start-1">
                      <Image
                        src={img1}
                        alt="home page image"
                        layout="responsive"
                        width={200}
                        height={500}
                      />
                    </div>
                  )}
      
                  {img2 && (
                    <div className="col-start-2">
                      <Image
                        src={img2}
                        alt="home page image"
                        layout="responsive"
                        width={500}
                        height={500}
                      />
                    </div>
                  )}
      
                  {img3 && (
                    <div className="col-start-1">
                      <Image
                        src={img3}
                        alt="home page image"
                        layout="responsive"
                        width={500}
                        height={500}
                      />
                    </div>
                  )}
      
                  {img4 && (
                    <div className="col-start-2">
                      <Image
                        src={img4}
                        alt="home page image"
                        layout="responsive"
                        width={500}
                        height={500}
                      />
                    </div>
                  )}
                </div>
                {caption && (
                  <p className="font-Suisse pt-2 lg:text-[1rem] text-[0.75rem]">
                    {caption}
                  </p>
                )}
              </div>
      </div>
    </main>
  );
};
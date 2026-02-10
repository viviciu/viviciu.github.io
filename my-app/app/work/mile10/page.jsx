"use client";
import Title from "../../_components/Title";
import Context2 from "../../_components/Context2";
import Image from "next/image";
import DividerLine from "../../_components/DividerLine";

export default function Mile10() {
  const members = [];
  const tools = ["Figma", "React", "Three.js"];
  const myRole = "Design, Development";
  const timeline = "Jan 2026 — Present";

  return (
    <main className="block px-4 font-Arial text-p text-[#121212] antialiased">
      {/* HERO IMAGE */}
    <div className="w-[50%] relative pt-12 mx-auto">
    <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10/coverimg-alpha-crop.png" alt="disc" width={500} height={500} layout="responsive" />
      {/* <div className="flex">
      <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10/edit-XRAY-SIDE-WHITE.jpg" alt="disc" width={500} height={500} layout="responsive" />
      <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10/edit-XRAYYYY.jpg" alt="disc" width={500} height={500} layout="responsive" />
      
      </div> */}
      
    </div>



      {/* SECTION TITLE */}
      <div className="pt-12">
        <div className="text-center">Mile 10 for OEM, 2025</div>
        <div className="text-center">6 weeks | Individual | Solidworks | Bambu | Cinema 4D</div>
        {/* <a href="https://drive.google.com/file/d/1B6qURWkGYWRig1GnrVh18hK8Q7n6Pm2q/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-center block underline">Full Sketchbook PDF</a> */}
      </div>

      {/* BODY */}
      <div className="pt-12 font-Arial text-[1.1rem] mx-10 md:mx-[12rem] lg:mx-[25%]">

        <div className="text-center leading-p2 tracking-p2">
          
          A coin that celebrates quitting substances—without guilt. It makes progress permanently visible, which encourages users to keep trying even if they relapse. </div>

        <div className="w-[40%] mx-auto pt-12"><video
        controls
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src={
              "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10/comp_WIP-v3.mov.webm"
            }
            type="video/webm"
          />
        </video>
        <div className="pt-2 text-center font-Arial text-[.9rem] text-gray-300">process reel</div></div>

        <div className="p-12"></div>
        

<div className="text-center">
  Only 5% of college students who meet Substance Use Disorder criteria seek help. How can this be?
</div>

        <div className="text-center mx-[-30%] text-[1.687rem] pb-40 pt-40 leading-p2 tracking-p2">How could quitting nicotine become a celebratory journey? <br /> Could products sustain motivation post-relapse?</div>

      </div>

      {/* FEATURES */}
      <div className="pt-12 font-Arial text-[1.125rem] mx-[28%]">


        <video
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src={
              "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10/comp_C0208-spin.MP4.webm"
            }
            type="video/webm"
          />
        </video>
        
        
        <div className="text-left pt-12">
          When you feel a craving, spin the disc.
          <br />
          <br />
          Mile 10 permanently, physically etches users’ sobriety progress into a set ‘Milestone Disc’ as the user spins it in its case via a nib. Upon reaching the sobriety milestone, users can preserve the disc as a celebration of their growth and reminder of their resilience.
        </div>
      </div>


      <div className="w-[30%] mx-auto pt-40">
        <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10/edit-DSDFSDFX.jpg" alt="disc" width={500} height={500} layout="responsive" />
      </div>

      {/* . */}
      <div className="pt-12 font-Arial text-[1.125rem] mx-[28%]">
        <div className="text-left">
        Watch the nib carve a ring into your disc. Feel reminded of the visible effort and strength you gave when resisting that craving.
        </div>
      </div>
      <div className="w-[30%] mx-auto pt-40">
        <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10/edit-XRAY-BLURNIB-RENDER.jpg" alt="disc" width={500} height={500} layout="responsive" />
        <div className="pt-2 text-center font-Arial text-[.9rem] text-gray-300">nib, in orange</div>
      </div>
      <div className="pt-12 font-Arial text-[1.125rem] mx-[28%]">
        <div className="text-left">
        Every night, you shift the nib closer to the center—one step closer to your goal. Deeper rings show the days that you had the strongest cravings, but resisted—something to you can celebrate even if you break sobriety later. Life happens, but it’s no reason to give up. 
        </div>
      </div>
      <div className="w-[30%] mx-auto pt-40">
        <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_edit-GH-squ.jpg.webp" alt="disc" width={500} height={500} layout="responsive" />
        <div className="pt-2 text-center font-Arial text-[.9rem] text-gray-300">nib, in orange</div>
      </div>
      <div className="pt-12 font-Arial text-[1.125rem] mx-[28%]">
        <div className="text-left">
        display it on a stand, or keep with you always as a reminder of your growth.
        </div>
      </div>
      <div className="w-[60%] mx-auto pt-40">
        <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/peeracc.png" alt="disc" width={500} height={500} layout="responsive" />
      </div>
      <div className="pt-12 font-Arial text-[1.125rem] mx-[28%]">
        <div className="text-left">
        trade the shell of your current milestone disc with a friend also quitting—each shell has a barcode with your unique identifier stamped on.
        </div>
      </div>
      <div className="w-[60%] mx-auto pt-40">
        <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_edit-KJVKNDJ.jpg.webp" alt="disc" width={500} height={500} layout="responsive" />
      </div>
      <div className="pt-12 font-Arial text-[1.125rem] mx-[28%]">
        <div className="text-left">
        Mile 10 comes with 5 discs, each in different finishes representing different milestones and aligned with OEM’s brand colorway. premium finishes like chrome for the 6 month mark, and a concrete disc for the one year milestone represent a symbol of achievement and grit.
        <br />
        <br />
        concrete on the 1 year milestone makes it physically tougher to engrave, as it’s expected there to be thousands of disc rotations over a long time period.
        </div>
      </div>
      <div className="w-[70%] mx-auto pt-40">
        <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_intro2.jpeg.webp" alt="disc" width={500} height={500} layout="responsive" />
        <div className="pt-2 text-center font-Arial text-[.9rem] text-gray-300">study and rational for choosing OEM as Mile 10's brand extension</div>
      </div>
      <div className="pt-12 font-Arial text-[1.125rem] mx-[28%]">
        <div className="text-left">
        
        </div>
      </div>
      <div className="w-[30%] mx-auto pt-40">
        <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_edit-gfhsdaf.jpg.webp" alt="disc" width={500} height={500} layout="responsive" />
        {/* <div className="pt-2 text-center font-Arial text-[.9rem] text-gray-300">nib, in orange</div> */}
      </div>
      <div className="pt-12 font-Arial text-[1.125rem] mx-[28%]">
        <div className="text-left">
        Each disc comes in it’s own case, waiting for you to unveil it when you’re ready. A ring graphic reveals itself when taking out the disc, encouraging users to complete their milestone.
        <br />
        <br />
        Additional discs are provided free of charge for insurance-bearing users via university health services.
        </div>
      </div>

      <div className="w-[30%] mx-auto pt-40 gap-2">
      <video
      controls
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src={
              "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_IMG_3854.MOV.webm"
            }
            type="video/webm"
          />
        </video>

        <div className="pt-2 text-center font-Arial text-[.9rem] text-gray-300">packaging experience</div>
      </div>

      <div className=" mx-[10%] pt-40">
        <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_vstaicu-storyboard-final-205mmx100mm-02-6.jpeg.webp" alt="" width={500} height={500} layout="responsive" />
  <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_vstaicu-storyboard-final-205mmx100mm-02-7.jpeg.webp" alt="" width={500} height={500} layout="responsive" />
  <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_vstaicu-storyboard-final-205mmx100mm-02-8.jpeg.webp" alt="" width={500} height={500} layout="responsive" />
  <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_vstaicu-storyboard-final-205mmx100mm-02-9.jpeg.webp" alt="" width={500} height={500} layout="responsive" />
  <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_vstaicu-storyboard-final-205mmx100mm-02-10.jpeg.webp" alt="" width={500} height={500} layout="responsive" />
        <div className="pt-2 text-center font-Arial text-[.9rem] text-gray-300">instructional booklet, included in every box</div>
      </div>
      <div className="pt-12 font-Arial text-[1.125rem] mx-[28%]">
        <div className="text-left">
        An instructional booklet is included in every box, with step-by-step instructions for how to engage with Mile 10.
        </div>
      </div>
      
      <div className="pt-12 font-Arial text-[1.125rem] mx-[28%]">
        <div className="text-left">

        </div>
      </div>
      <div className="mx-[10%] pt-40 gap-2">
      <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_IMG_3787.jpeg.webp" alt="" width={500} height={500} layout="responsive" />
      <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_IMG_3790.jpeg.webp" className="mt-2" alt="" width={500} height={500} layout="responsive" />
        <div className="pt-2 text-center font-Arial text-[.9rem] text-gray-300">final showcase</div>
      </div>

      {/* . */}
      <div className="pt-12 font-Arial text-[1.125rem] mx-[28%]">
        <div className="text-left">
        
        </div>
      </div>
      

{/* PROCESS */}
<a href="https://drive.google.com/file/d/1B6qURWkGYWRig1GnrVh18hK8Q7n6Pm2q/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-center block underline">Full Sketchbook PDF</a>
<a href="https://docs.google.com/document/d/1bxIB3USA6xnIPXkUN-zVusBmKzxAHLrV3jREtLD_1-k/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-center block underline">Design proposal, research protocol, supporting documentation</a>
<div className="columns-3 gap-2 pt-40 mx-[10%] [&>*]:mb-2">
<video
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src={
              "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_cool-spin.mov.webm"
            }
            type="video/webm"
          />
        </video>
  
  <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_edit-DSC09380.jpg.webp" alt="" width={500} height={500} layout="responsive" />
  <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_edit-DSC09383.jpg.webp" alt="" width={500} height={500} layout="responsive" />
  <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_IDK.jpeg.webp" alt="" width={500} height={500} layout="responsive" />
  <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_IMG_3515.jpeg.webp" alt="" width={500} height={500} layout="responsive" />
  <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_IMG_3628.jpeg.webp" alt="" width={500} height={500} layout="responsive" />
  <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_IMG_3652.jpeg.webp" alt="" width={500} height={500} layout="responsive" />
  <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_IMG_3693.JPG.webp" alt="" width={500} height={500} layout="responsive" />
  <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_IMG_3701.jpeg.webp" alt="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_IMG_3693.JPG.webp" width={500} height={500} layout="responsive" />
  <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_IMG_3713.jpeg.webp" alt="" width={500} height={500} layout="responsive" />
  <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_IMG_3717.PNG.webp" alt="" width={500} height={500} layout="responsive" />
  <video
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src={
              "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_SPIN.mov.webm"
            }
            type="video/webm"
          />
        </video>
  <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_IMG_3724.jpeg.webp" alt="" width={500} height={500} layout="responsive" />
  <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_IMG_3743.jpeg.webp" alt="" width={500} height={500} layout="responsive" />
  <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_IMG_3770.jpeg.webp" alt="" width={500} height={500} layout="responsive" />
  
  
  
  
  <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_FINAL-4.jpeg.webp" alt="" width={500} height={500} layout="responsive" />
  <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_FINAL-6.jpeg.webp" alt="" width={500} height={500} layout="responsive" />
  <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_intro2.jpeg.webp" alt="" width={500} height={500} layout="responsive" />
  <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_FINAL-5.jpeg.webp" alt="" width={500} height={500} layout="responsive" />
  <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_measuretool.png.webp" alt="" width={500} height={500} layout="responsive" />
  <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_sdljkfhur.png.webp" alt="" width={500} height={500} layout="responsive" />
  <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_ss010.png.webp" alt="" width={500} height={500} layout="responsive" />
  <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_freeform-sketch.png.webp" alt="" width={500} height={500} layout="responsive" />
  <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_mechanism.png.webp" alt="" width={500} height={500} layout="responsive" />
  <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_moreee-oem-logo.png.webp" alt="" width={500} height={500} layout="responsive" />
  <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_cragrphicindex.png.webp" alt="" width={500} height={500} layout="responsive" />
  <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_ericNotebook.png.webp" alt="" width={500} height={500} layout="responsive" />
  <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_CROP.png.webp" alt="" width={500} height={500} layout="responsive" />
  <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_oem-logo.png.webp" alt="" width={500} height={500} layout="responsive" />
  <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10-process/comp_whatsaddictionrecoverymean.jpg.webp" alt="" width={500} height={500} layout="responsive" />
  <Image src="" alt="" width={500} height={500} layout="responsive" />
  
  <video
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src={
              ""
            }
            type="video/webm"
          />
        </video>
  <video
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src={
              ""
            }
            type="video/webm"
          />
        </video>
</div>


      <div className="pt-40 pb-80 text-center font-Arial text-[1.125rem]">
        under construction <br />
        —01.19.2026
      </div>
    </main>
  );
}


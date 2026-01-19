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
    <main className="block px-4 font-Arial text-p">
      {/* HERO IMAGE */}
    <div className=" h-full relative pt-12 mx-2">
    <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10/comp_edit-oem-02-tiff-2.jpg.webp" alt="disc" width={500} height={500} layout="responsive" />
      {/* <div className="flex">
      <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10/edit-XRAY-SIDE-WHITE.jpg" alt="disc" width={500} height={500} layout="responsive" />
      <Image src="https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/mile10/edit-XRAYYYY.jpg" alt="disc" width={500} height={500} layout="responsive" />
      
      </div> */}
      
    </div>



      {/* SECTION TITLE */}
      <div className="pt-12">
        <div className="text-center">Mile 10 for OEM, 2025</div>
        <div className="text-center">4 weeks, Solidworks, Bambu, C4D</div>
      </div>

      {/* BODY */}
      <div className="pt-12 font-Arial text-[1.125rem] mx-[28%]">

        <div className="text-left">A little over-engineered case that approaches quitting nicotine in a way that is visible and celebratory, supporting recovery through the occasional relapse.</div>

        <div className="w-[60%] mx-auto pt-12"><video
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
        </video></div>

        <div className="p-12"></div>
        <div className="text-left">Evidence shows that over 40% of University Students smoke nicotine, and 46% of U.S undergrads meet Substance Use Disorder criteria, yet only 5% seek help.
          <br />
          <br />
          University healthcare service <i>waitlists can exceed over one month</i> until students can even begin to receive help.
          <br />
          <br />
          Vapes are far from any solution, and apps fail to support recovery from relapses—once you break a streak, it can feel like all progress was lost, making it easy to completely give up. Apps are also far less visible compared to physical or human interventions.
          <br />
          <br />
          How could quitting nicotine be approached in the form of progressive overload? Could progress be made permanently visible? What might encourage you to keep trying, even when you slip up?</div>



        <div className="text-center mx-[-20%] text-[1.687rem] pb-40 pt-40">What would it look like to make quitting nicotine a celebratory journey? <br /> How could products sustain motivation post-relapse?</div>

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

      {/* . */}
      <div className="pt-12 font-Arial text-[1.125rem] mx-[28%]">
        <div className="text-left">
        Every night, you shift the nib closer to the center—one step closer to your goal. Deeper rings show the days that you had the strongest cravings, but resisted—something to you can celebrate even if you break sobriety later. Life happens, but it’s no reason to give up. 
        </div>
      </div>



      <div className="pt-40 pb-80 text-center font-Arial text-[1.125rem]">
        under construction <br />
        —01.19.2026
      </div>
    </main>
  );
}


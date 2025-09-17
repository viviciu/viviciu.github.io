"use client";
import Title from "../../_components/Title";
import Context2 from "../../_components/Context2";
import Image from "next/image";
import DividerLine from "../../_components/DividerLine";


export default function Liminal() {
  const members = [];
  const tools = [
    "Cinema 4D",
    "Redshift",
    "Plasticity",
    "RealityScan",
    "Davinci Resolve",
  "Lightroom Classic"];
  const myRole = "Motion design, 3D Modelling";
  const timeline = "May 2025 — Present";


  return (
    <main className=" block px-4">
      <Title
        text1={
          <div>
            Cinema 4D Explorations, <br /> Summer 2025.
          </div>
        }
      />

      <Context2
        context={
          <div>
            A collection of Cinema 4D experiments, exploring procedural
            animation, 3D modelling, and rendering techniques.
          </div>
        }
        myRole={myRole}
        members={members}
        tools={tools}
        timeline={timeline}
      />

      <DividerLine text={""} />
      <div className="mt-[2rem]"></div>

      {/* SPACER */}
      <div className="mt-[4rem]"></div>

      {/* GRID */}
      <div className="w-full mx-auto lg:columns-3 sm:columns-2 lg:gap-[0.6rem] gap-3 space-y-[0.5rem] place-content-center">
        <video autoPlay loop muted playsInline className="w-full">
          <source
            src={
              "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/c4d/comp_myfirsthoudinirender.mov.webm"
            }
            type="video/webm"
          />
        </video>
        <p>Vellum Balloon simulation in Houdini, rendered in Redshift.</p>
        <video autoPlay loop muted playsInline className="w-full">
          <source
            src={
              "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/c4d/2.7MB_COVER_comp_final-poppingPills.mov.webm"
            }
            type="video/webm"
          />
        </video>
        <p>
          Experimenting with a 1/2s shutter speed and motion blur. Hard lighting
          and shadows helped create light-trail like effects.
        </p>
        <Image
          src={
            "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/play/comp_poppingPills_mojo-II_1.1.1.jpg.webp"
          }
          height={500}
          width={500}
        />
        <Image
          src={
            "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/play/poppingPills-noblur.jpg"
          }
          height={500}
          width={500}
        />

        <Image
          src={
            "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/play/poppingPills-blur.jpg"
          }
          height={500}
          width={500}
        />
        <Image
          src={
            "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/c4d/process-poppingpills.jpg"
          }
          height={500}
          width={500}
        />
        <p>
          Creating custom LUTs in Lightroom Classic as a base to edit footage in
          Davinci Resolve.
        </p>
        <Image
          src={
            "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/play/grassHill.jpg"
          }
          height={500}
          width={500}
        />
        <p>
          Scattering megascans using noise shaders with an animated gobo setup.
        </p>
        <Image
          src={
            "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/play/Bread.jpg"
          }
          height={500}
          width={500}
        />
        <Image
          src={
            "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/c4d/comp_edit-AEFSD.jpg.webp"
          }
          height={500}
          width={500}
        />
        <Image
          src={
            "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/c4d/edit-EXTRA-GUM-EKTACHROME-100%2B.png"
          }
          height={500}
          width={500}
        />

        {/* the kite runner */}

        <video autoPlay loop muted playsInline className="w-full">
          <source
            src={
              "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/c4d/comp_080525_grassHill.mov.webm"
            }
            type="video/webm"
          />
        </video>

        <Image
          src={
            "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/play/comp_edit-appleWatchSamplesBlur_1.jpg.webp"
          }
          height={500}
          width={500}
        />
        <Image
          src={
            "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/play/appleWatch%2Brocks.jpg"
          }
          height={500}
          width={500}
        />
        <p>
          Modelling an Apple Watch Ultra in Plasticity to learn NURBS workflows.
        </p>
        <Image
          src={
            "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/play/comp_edit-finalTileSample.webp"
          }
          height={500}
          width={500}
        />
        <p>
          Material exploration using simple custom displacement maps I designed
          in Figma.
        </p>
        <video autoPlay loop muted playsInline className="w-full">
          <source
            src={
              "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/c4d/comp_bread_pointcloud.mov.webm"
            }
            type="video/webm"
          />
        </video>
        <p>Photoscanning with RealityScan.</p>
      </div>
    </main>
  );
}

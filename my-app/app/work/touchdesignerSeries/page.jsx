"use client";
import Title from "../../_components/Title";
import New3VideoCoudinary from "../../_components/New3VideoCloudinary"
import New3VideoAWS from "../../_components/New3VideoAWS"
import Context2 from "../../_components/Context2";
import YAMLBar from "../../_components/YAMLBar";


export default function Liminal() {
  const members = [];
  const tools = ["Touchdesigner"];
  const myRole = "Procedural animation";
  const timeline = "Nov 2024 — Present";


// test

  // A realm where the very essence of self and time finds itself in flux.
  return (
    <main className=" block px-4">
      <Title
        text1={
          <div>
            TouchDesigner Experiments, <br /> some explorations in generative
            design.
          </div>
        }
      />

      <YAMLBar client="Self" year="2024" role="Procedural Animation" />

      {/* COVER YAML EXPANDED */}
      <main className=" pb-[5.06rem]">
        <div className="h-fit w-full">
          <video className="w-full h-auto" autoPlay loop muted playsInline>
            <source
              src={
                "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/touchdesigner/dune-trimmed-cover-thumbnail.mov.webm"
              }
              type="video/webm"
            />
          </video>
        </div>
      </main>

      <Context2
        context={
          <div>
            Explorations into how this procedural, node-based software can
            leverage inputs of data—such as image, video, and sound—to
            generatively create infinite variations of assets in a design
            system.
          </div>
        }
        myRole={myRole}
        members={members}
        tools={tools}
        timeline={timeline}
      />

      <New3VideoAWS
        src={
          "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/touchdesigner/compressed_010425_dune-full.mov.webm"
        }
        text1={
          <div>
            Experiments with mapping audio waveform normals onto geometry in
            touchdesigner, being my first time giving generative design a shot,
            I feel like half creator half viewer in the process. it&apos;s this
            odd give to the computer take from the computer I can&apos;t really
            compare to anything else.
            <br />
            <br />
            Audio: A Time of Quiet Between Storms, Hans Zimmer
          </div>
        }
      />

      {/* SPACER */}
      <div className="mt-[4rem]"></div>

      {/* GRID */}
      <div className="w-full mx-auto lg:columns-3 sm:columns-2 lg:gap-[0.6rem] gap-3 space-y-[0.5rem] place-content-center">
        <video autoPlay loop muted playsInline className="w-full">
          <source
            src={
              "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/touchdesigner/compressed_pointCloudModel.mov.webm"
            }
            type="video/webm"
          />
        </video>
        <p>Video as input to particle pointcloud data.</p>
        <video autoPlay loop muted playsInline className="w-full">
          {/* dune process */}
          <source
            src={
              "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/touchdesigner/compressed_particles_noiseSculpting.0.mov.webm"
            }
            type="video/webm"
          />
        </video>
        <video autoPlay loop muted playsInline className="w-full">
          <source
            src={
              "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/touchdesigner/compressed_td_dune-colorChange-process-trim.mov.webm"
            }
            type="video/webm"
          />
        </video>
        <p>
          Procedural nodes could change color or other properties via various
          inputs like audio, visual, and lidar sensor data. Here, a constant RGB
          value node is changed manually instead.
        </p>
        <video autoPlay loop muted playsInline className="w-full">
          <source
            src={
              "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/touchdesigner/compressed_BannanaVHS.1.mov.webm"
            }
            type="video/webm"
          />
        </video>
        <video autoPlay loop muted playsInline className="w-full h-full">
          <source
            src={
              "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/touchdesigner/comp_compressed_particles_noiseSculpting-2-2-trim.mov.webm.webm"
            }
            type="video/webm"
          />
        </video>
        <video autoPlay loop muted playsInline className="w-full h-full">
          <source
            src={
              "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/touchdesigner/comp_compressed_DUNE-yellowPurple.mov.webm.webm"
            }
            type="video/webm"
          />
        </video>
      </div>
    </main>
  );
}

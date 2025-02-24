"use client";
import Title from "../../_components/Title";
import New3VideoCoudinary from "../../_components/New3VideoCloudinary"
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
            TouchDesigner Experiments, <br /> some explorations in generative design.
          </div>
        }
      />

      <YAMLBar client="Self" year="2024" role="Procedural Animation" />
      {/* "https://image.mux.com/EWeOGWvhBZ79DwTqSLKtR02F19MmWBk1xQZEN01hTLny00/animated.gif?width=600" */}

      {/* COVER YAML EXPANDED */}
      <main className=" pb-[5.06rem]">
        <div className="h-fit w-full">
          <video className="w-full h-auto" autoPlay loop muted playsInline>
            <source
              src={
                "https://res.cloudinary.com/ddjxpkewq/video/upload/f_mp4,q_auto/v1/touchdesigner/tn1qnhqpbextyksfdpvk"
              }
              type="video/mp4"
            />
          </video>
        </div>
      </main>

      <Context2
        context={
          <div>
            Explorations into how this procedural, node-based software can
            leverage inputs of data—such as image, video, and sound—to
            generatively create infinite variations of assets in a design system.
          </div>
        }
        myRole={myRole}
        members={members}
        tools={tools}
        timeline={timeline}
      />

      <New3VideoCoudinary
        src={
          "https://res.cloudinary.com/ddjxpkewq/video/upload/f_mp4,q_auto/v1/touchdesigner/tn1qnhqpbextyksfdpvk"
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
      {/* <New3VideoCoudinaryAutoplay
        src={
          "https://res.cloudinary.com/ddjxpkewq/video/upload/f_mp4,q_auto/v1/touchdesigner/kxuxwhu3vchw1p09ctlw"
        }
        caption="Procedural nodes could change color or other properties via various inputs like audio, visual, and lidar sensor data. Here, I manipulate a constant RGB value node manually instead."
      />

      <New3VideoCoudinaryAutoplayLoop
        src={
          "https://res.cloudinary.com/ddjxpkewq/video/upload/f_mp4,q_auto/v1/touchdesigner/vx8mvjx494uj0j5rohru"
        }
        caption="Video as input to particle pointcloud data."
      /> */}

      {/* GRID */}
      <div
        className="w-full mx-auto lg:columns-3 sm:columns-2 lg:gap-[0.6rem] gap-3 place-content-center
          "
      >
        <video autoPlay loop muted playsInline className="pt-2">
          <source
            src={
              "https://res.cloudinary.com/ddjxpkewq/video/upload/f_mp4,q_auto/v1/touchdesigner/k6yrnavjpkvpwedpwkqd"
            }
            type="video/mp4"
          />
        </video>
        <video autoPlay loop muted playsInline className="pt-2">
          <source
            src={
              "https://res.cloudinary.com/ddjxpkewq/video/upload/f_mp4,q_auto/v1/touchdesigner/tn1qnhqpbextyksfdpvk"
            }
            type="video/mp4"
          />
        </video>

        <video autoPlay loop muted playsInline className="pt-2">
          <source
            src={
              "https://res.cloudinary.com/ddjxpkewq/video/upload/f_mp4,q_auto/v1/touchdesigner/pf1tssh39e5pqkirptca"
            }
            type="video/mp4"
          />
        </video>
        <div>
          <video autoPlay loop muted playsInline className="pt-2">
            {/* dune process */}
            <source
              src={
                "https://res.cloudinary.com/ddjxpkewq/video/upload/f_mp4,q_auto/v1/touchdesigner/kxuxwhu3vchw1p09ctlw"
              }
              type="video/mp4"
            />
          </video>
          <p>
            Procedural nodes could change color or other properties via various
            inputs like audio, visual, and lidar sensor data. Here, a constant
            RGB value node is changed manually instead.
          </p>
        </div>

        <div>
          <video autoPlay loop muted playsInline className="pt-2">
            <source
              src={
                "https://res.cloudinary.com/ddjxpkewq/video/upload/f_mp4,q_auto/v1/touchdesigner/vx8mvjx494uj0j5rohru"
              }
              type="video/mp4"
            />
          </video>
          <p>Video as input to particle pointcloud data.</p>
        </div>

        <video autoPlay loop muted playsInline className="pt-2 w-full h-full">
          <source
            src={
              "https://res.cloudinary.com/ddjxpkewq/video/upload/f_mp4,q_auto/v1/touchdesigner/ipka2uztgvg4ky0w5nmn"
            }
            type="video/mp4"
          />
        </video>
      </div>

      {/* https://res.cloudinary.com/ddjxpkewq/video/upload/f_auto:video,q_auto/v1/touchdesigner/k6yrnavjpkvpwedpwkqd */}

      {/* <p>BELOW: video under f_mp4 codec, autoPlay loop muted playsInLine </p>
      <video autoPlay loop muted playsInline>
        <source
          src={
            "https://res.cloudinary.com/ddjxpkewq/video/upload/f_mp4,q_auto/v1/pmini/ebwqu7ijxeh3vm6qklkr"
          }
          type="video/mp4"
        />
      </video> */}
    </main>
  );
}

"use client";



import Image from "next/image";
import Title from "../../_components/Title";
import Context2 from "../../_components/Context2";
import CoverYAMLVideo from "../../_components/CoverYAMLVideo";
import YAMLBar from "../../_components/YAMLBar";
import DividerLine from "../../_components/DividerLine";
import { MdOutlineArrowOutward } from "react-icons/md";
import New3Video from "../../_components/New3Video"
import New3 from "../../_components/New3"
import New4 from "../../_components/New4"
import New3Grid from "../../_components/New3Grid"
import Header from "../../_components/Header"


export default function PlayfulVsPractical() {
  const members = [];
  const tools = ["Rapid Prototyping", "Desktop Modelmaking"];
  const myRole = "Timeline";

 

  

  // OLD LENIS SCROLL STUFF

  // const [activeIndex, setActiveIndex] = useState(0);
  // const componentRefs = [useRef(null), useRef(null), useRef(null)];

  // const handleScroll = () => {
  //   const scrollPosition = window.scrollY + window.innerHeight / 2;
  //   componentRefs.forEach((ref, index) => {
  //     if (ref.current) {
  //       const { offsetTop, offsetHeight } = ref.current;
  //       console.log(index);
  //       if (
  //         scrollPosition >= offsetTop &&
  //         scrollPosition < offsetTop + offsetHeight
  //       ) {
  //         setActiveIndex(index);
  //       }
  //     }
  //   });
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  // A realm where the very essence of self and time finds itself in flux.
  return (
    <main className=" block px-4">
      <Title
        text1={
          <div>
            Playful vs. Practical, <br /> a synergy of language, form, and
            context.
          </div>
        }
      />
      <YAMLBar
        client="Products Studio I: Form and Context"
        year="2024"
        role="Industrial Design"
      />
      <CoverYAMLVideo url="https://www.youtube.com/watch?v=aewhf6EUHoQ&t=132s" />
      <Context2
        context={
          <div>
            Process under development.
            <br />
            Last update:{" "}
            <span className="font-Suisse font-semibold"> 11 January 2025 </span>
            <br />
            <br />
            Inspired by a lamp post on campus and the familiar gestures we
            conjure from hearing music, this study reflects a playful yet
            precise object. It is one that incites methodical exploration over
            immediate understanding. It traces the evolution of a relationship
            through the initial spark of curiosity, the uncertainty of trial and
            error, and ultimate delight of learning something foreign.
            <br />
            <br />
            <br />
            <br />
            <strong>Breif :</strong>
            <br />
            Exploring the material relationships between elastic band and wood,
            design a sensible working object that has playful or practical
            device-like characteristics. Unite form studies to determine the
            appropriate look, feel, make, and performance of the device. The
            models do not have to work, but must allow us to imagine so without
            distraction and interruption.
            <br />
            <br />
            How do the pieces of this device come together as a whole making a
            satisfying interaction? The working nature of the device derives
            itself from the properties, characteristics, look, and feel of
            material.
          </div>
        }
        myRole={myRole}
        timeline="Aug — Oct 2024"
        members={members}
        tools={tools}
      />
      {/* <DividerLine text="Takeaways" /> */}
      <Header text={"Outcomes & Takeaways"} />
      <div className="lg:grid lg:grid-cols-4 gap-[4rem] lg:pb-[14rem] pb-[5rem]">
        <New4
          text1={
            <div>
              <div>
                <strong className="text-black">
                  My best ideas spark from the physical process of modelmaking.{" "}
                </strong>
                <br />
                Actually holding the parts in 3D space raises opportunities to
                connect, dismantle, and discover new proportional relationships.
                Sometimes this can be distracting as I&apos;m constantly tempted
                to diverge from the plan with the allure of the &quot;what
                ifs&quot;, the potential of a new idea. To me, ideas are time
                sensitive. You can&apos;t let them run away, so at times process
                models become mutilated as I try to bring new ideas to life on
                old work.{" "}
              </div>
            </div>
          }
        />
        <New4
          text1={
            <div>
              <strong className="text-black">
                Never leave an idea in concept—it&apos;ll have to be made
                eventually.
              </strong>
              <br />
              Just do something when you don&apos;t know what. Get everything
              out of your system on paper and start building immediately. The
              sketchbook can be an endless hole of unrealistic concepts never
              brought to fruition.
            </div>
          }
        />
        <New4
          text1={
            <div>
              <strong className="text-black">
                Not every aspect of form needs to bluntly communicate its
                intended use.
              </strong>
              <br />
              An object that isn&apos;t quick to understand is something I used
              to think was a poor design. This piece taught me that objects can
              act as a violins: only through exploration, play, and some
              teaching one is able to handle it with grace. Not everything is or
              should be intuitive. This piece traces the evolution of a
              relationship through the initial spark of curiosity, the
              uncertainty of trial and error, and ultimate delight of learning
              something foreign.
            </div>
          }
        />

        <New4
          text1={
            <div>
              <strong className="text-black">
                Trust your intuition, and be ready to hear &quot;No.&quot;
              </strong>
              <br />
              In the beginning, I felt every single decision had to be backed by
              specific logic. While this is true to an extent, ignoring
              intuition only held me back from committing to what I truly felt
              was strong. There&apos;s incredible value to what your hands and
              eyes can tell you without words. This project was an exercise not
              only in taking a functional, rubber-band form into a model that
              conveys the movement without elastic function, but a trust
              exercise. A style exercise.
            </div>
          }
        />
      </div>

      {/* <DividerLine text="Process" /> */}
      {/* Experimental video grid of 3 cols */}
      {/* <div className="mt-10 mb-32 lg:grid grid-cols-3 gap-[0.6rem] flex flex-col">
        <div>
          <Video src={C0469} />
          <p className="mt-1">Tabletop exploration A</p>
        </div>
        <div>
          <Video src={C0475} />
          <p className="mt-1">Tabletop exploration B</p>
        </div>
        <div>
          <img src="https://image.mux.com/TKWj6nwkH0082l008G96sOHKN3X6PklbfOzrN8oaJ62hw/animated.gif?width=500" />
          <p className="mt-1">
            &quot;Isn&apos;t a flip just a &apos;long&apos; spin?&quot;
          </p>
        </div>
        <div>
          <img src="https://image.mux.com/3lLZyuv4c8WHV2s02Im1wqxpVGdHN1apOzd3FuAmfeRU/animated.gif?width=500" />
          <p className="mt-1">caption</p>
        </div>
      </div> */}

      <Header text={"Process"} />

      {/* MODIFIED NEW3GRID */}

      <div
        className=" 
                            lg:grid lg:grid-cols-6
                            gap-[5.06rem] 
                            w-full h-fit 
                            items-start
                            pt-[0.5rem]" // important padding top here
      >
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
          In the everyday, sometimes I imagine how I might interact with the
          static forms in the world around me—as if I could bend, hinge, or
          extrude fascinating forms. I wonder what context the form could live
          in and who they might serve.
          <br />
          <br />
          This lamp on campus inspired my initial elastic band working model. I
          thought: What if I could put my hand on top, and methodically rotate
          it laterally?
        </div>

        <div className="lg:pt-0 pt-8  lg:pb-0 pb-16 col-start-3 col-span-4">
          <div className="grid grid-cols-2 gap-2">
            <div className="col-start-1">
              <Image
                src={"/imgs/playfulPractical/movingLampSketch.webp"}
                alt="Imagining everyday static objects moving in my mind"
                layout="responsive"
                width={200}
                height={500}
              />
              <Image
                className="pt-[0.6rem]"
                src={"/imgs/playfulPractical/constructionProcess.webp"}
                alt="Construction Process"
                layout="responsive"
                width={500}
                height={500}
              />
              <p className="font-Suisse pt-6 lg:text-[1rem] text-[0.75rem]">
                Imagining how static forms in my everyday life could be
                interacted with inspired my initial elastic form.
              </p>
            </div>

            <div className="col-start-2">
              <Image
                src={"/imgs/playfulPractical/sketchFirstModel.webp"}
                alt="Sketch"
                layout="responsive"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>

      {/* SPACER */}
      <div className="mt-[4rem]"></div>
      <New3Video
        src={
          "https://res.cloudinary.com/ddjxpkewq/video/upload/f_auto:video,q_auto/v1/pmini/elqxufreseulmgvbxs1n"
        }
        text1="Carrying my form around with me everywhere, listening to music on the go influenced different grips. I found myself preferring using the smaller radius paddle, sometimes the larger radius paddle, sometimes even scrubbing it like a DJ depending on the rhythm."
      />

      {/* SPACER */}
      <div className="mt-[4rem]"></div>
      {/* NEW3VIDEO GRID OF 4 GIFs */}
      <New3Grid
        caption={
          <div>
            Top: Toying with scrap parts inspiring tabletop idea. Bottom: Hybrid
            tabletop-handheld model.
          </div>
        }
        img1="https://image.mux.com/9REJpbYaWwZDSBex5302HhjOao1mCCv53936TZ6T01SV8/animated.gif?width=320"
        img2="https://image.mux.com/01MIq98IRiA013B4S9oBpiYjpVmZqFptQy5rf00QxXrgS8/animated.gif?width=320"
        img3="https://image.mux.com/wnPigEnjWslHEA01Ugc1PQKlbf3DHg01u1ebJub7un4fc/animated.gif?width=320"
        img4="https://image.mux.com/KO4WMlrBo2eEd5VTg2Z2Z02P3tV5wyoUlYD00azrk02lGQ/animated.gif?width=320"
        text1={
          <div>
            Thinking about the context of where my object might live, I wanted
            to explore how the essence of the interaction could get translated
            to a fixed tabletop tool.
            <br />
            <br />
            The modelmaking process sparked the idea of a hybrid ( bottom gifs
            )—where one could use it at home, and while travelling.{" "}
            <strong>
              Ideas are time sensitive—so I get a rough prototype out of my
              system as quickly as possible using the scraps on my desk to see
              if theres potential.{" "}
            </strong>{" "}
            This initial rough form gives my hands and eyes so much information
            as to what my next step is, which lead to the bottom final form.
            <br />
            <br />
            Though not a marketable object, I gravitated more towards this being
            a playful audiotechnical instrument.
          </div>
        }
      />

      {/* SPACER */}
      <div className="mt-[8rem]"></div>
      {/* 2 VIDEO GRID */}
      <div
        className=" 
                            lg:grid lg:grid-cols-6
                            gap-[5.06rem] 
                            w-full h-fit 
                            items-start
                            pt-[0.5rem]" // important padding top here
      >
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
          The negative space from my original form brought me back to refine it.
          Compared to the desktop model, the negative space and handheld nature
          gave rise to a novel instrument, one which affords an opportunity to
          explore a foreign interaction.
          <br />
          <br />
          It becomes a skillfull instrument—
          <strong>
            bringing a user through a journey of intrigue, methodical inquiry,
            play, and ultimately delight
          </strong>{" "}
          from learning something new.
          <br />
          <br />I angled the paddle as I noticed my wrists natrually want to
          rotate like turning a doorknob, improving ergonomics. The concave wood
          paddle affords a place for users to rest their fingers in.
        </div>

        <div className="lg:pt-0 pt-8  lg:pb-0 pb-16 col-start-3 col-span-4">
          <div className="grid grid-cols-2 gap-2">
            <div className="col-start-1">
              <video controls>
                <source
                  src={
                    "https://res.cloudinary.com/ddjxpkewq/video/upload/f_auto:video,q_auto/v1/pmini/elqxufreseulmgvbxs1n"
                  }
                  type="video/webm"
                />
              </video>
            </div>

            <div className="col-start-2">
              <video controls>
                <source
                  src={
                    "https://res.cloudinary.com/ddjxpkewq/video/upload/f_auto:video,q_auto/v1/pmini/gd2ae1jp8y01gvpc1ip8"
                  }
                  type="video/webm"
                />
              </video>
            </div>
          </div>

          <div className="font-Suisse pt-2 lg:text-[1rem] text-[0.75rem]">
            Left: Strained wrist. Right: Angled paddle improved ergonomics.
          </div>
        </div>
      </div>
      {/* SPACER */}
      <div className="mt-[8rem]"></div>
      {/* 2 VIDEO GRID */}
      <div
        className=" 
                            lg:grid lg:grid-cols-6
                            gap-[5.06rem] 
                            w-full h-fit 
                            items-start
                            pt-[0.5rem]" // important padding top here
      >
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
          Designing the entire experience starts from before the user is aware
          of its presence—how does one approach it? Pick it up? The moment you
          pick up a form influences the way you might interact with it and needs
          consideration.
          <br />
          <br />
          Starting with a clay counterform to inform me of what shapes the
          intented grip creates, I then shaved away what was not essential to
          give just enough info of how to pick it up.
          <br />
          <br />
          Widening the palm-facing side and extending subtle edges pointed
          towards the head of the form, indicating where your other hand should
          interact.
        </div>

        <div className="lg:pt-0 pt-8  lg:pb-0 pb-16 col-start-3 col-span-4">
          <div className="grid grid-cols-2 gap-2">
            <div className="col-start-1">
              <Image
                src="/imgs/playfulPractical/clay-sideView.webp"
                alt="home page image"
                layout="responsive"
                width={200}
                height={500}
              />
            </div>

            <div className="col-start-2">
              <video controls>
                <source
                  src={
                    "https://res.cloudinary.com/ddjxpkewq/video/upload/f_auto:video,q_auto/v1/pmini/ebwqu7ijxeh3vm6qklkr"
                  }
                  type="video/webm"
                />
              </video>
            </div>
            <div className="col-start-1">
              <Image
                src="/imgs/playfulPractical/C0517_ss-styrene.webp"
                alt="home page image"
                layout="responsive"
                width={200}
                height={500}
              />
            </div>
            <div className="col-start-2">
              <Image
                src="/imgs/playfulPractical/chipboardGripPrototype_ss.webp"
                alt="home page image"
                layout="responsive"
                width={200}
                height={500}
              />
            </div>
          </div>

          <div className="font-Suisse pt-2 lg:text-[1rem] text-[0.75rem]">
            Picking up the form: Clay counterforms informed a precision
            chipboard mockup.
          </div>
        </div>
      </div>
      {/* SPACER */}
      <div className="mt-[8rem]"></div>
      <Header text={"Final Form"} />
      <New3Video
        src={
          "https://res.cloudinary.com/ddjxpkewq/video/upload/f_auto:video,q_auto/v1/pmini/ilcojxlzsai4oil7qhhd"
        }
        text1={
          <div>
            From testing prototypes with my peers, I found the top styrene
            &apos;hood&apos; was found uncessesary to the essence of the grip.
            Thus, only the tapered pointing arrows, like hands, directed the
            eyes towards the wooden paddle for the other hand to rest.
            <br />
            <br />
            Further iterations and explorations leading to the final form are
            found in the process video above.
          </div>
        }
      />
      {/* SPACER */}
      <div className="mt-[4rem]"></div>
      {/* finalCoverImg_manyIterations */}
      {/* <DividerLine text="Process" /> */}
      {/* Experimental video grid of 3 cols */}
      <div className="mt-10 lg:grid lg:grid-cols-3 gap-[0.6rem] flex flex-col">
        <div className="col-span-3 col-start-1">
          <Image
            src="/imgs/playfulPractical/finalCoverImg_manyIterations.webp"
            height={500}
            width={1400}
            layout="responsive"
          />
        </div>
      </div>
      <div className="mt-[0.6rem] mb-32 lg:columns-3 sm:columns-2 w-full place-content-center gap-[0.6rem]">
        <div className="">
          {/* https://res.cloudinary.com/ddjxpkewq/video/upload/f_auto:video,q_auto/xij1gucxemxw0iofndvz */}
          <video loop autoPlay>
            <source
              src={
                "https://res.cloudinary.com/ddjxpkewq/video/upload/f_auto:video,q_auto/xij1gucxemxw0iofndvz"
              }
              type="video/webm"
            />
          </video>
          <Image
            className="mt-[0.6rem]"
            src={"/imgs/playfulPractical/DSC05499.webp"}
            height={500}
            width={500}
            layout="responsive"
          />
        </div>

        <div>
          <Image
            src={"/imgs/playfulPractical/DSC04956.webp"}
            height={500}
            width={500}
            layout="responsive"
          />
          <Image
            className="mt-[0.6rem]"
            src={"/imgs/playfulPractical/DSC04934.webp"}
            height={500}
            width={500}
            layout="responsive"
          />
          <Image
            className="mt-[0.6rem]"
            src={"/imgs/playfulPractical/DSC04825.webp"}
            height={500}
            width={500}
            layout="responsive"
          />
        </div>

        {/* col 3 */}
        <div>
          <Image
            src={"/imgs/playfulPractical/DSC04918.webp"}
            height={500}
            width={500}
            layout="responsive"
          />
        </div>
        {/* <Image
          className="mt-[0.6rem]"
          src={
            "https://vstaicu-portfolio-assets.s3.us-east-2.amazonaws.com/4x5-instaFrame-suanna-aphi.jpg"
          }
          height={500}
          width={500}
          layout="responsive"
        /> */}
      </div>
    </main>
  );
}

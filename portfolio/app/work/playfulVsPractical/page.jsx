"use client";
import diffGrips from "/videos/compressed_temp-differentGrips.mp4.json";
import Link from "next/link";
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
            Playful vs. Practical, a synergy of movement and material, foreign
            and familiar. 2024.
            <br />
            <br />
            Inspired by a lamp post on campus and the familiar gestures we
            conjure from hearing music, this study reflects a playful yet
            precise object. It is one that incites methodical exploration over
            immediate understanding.
            <br />
            <br />
            An object that isn’t quick to understand is something I used to
            think was a poor design. This piece taught me that objects can act
            as a violins: only through exploration, play, and some teaching one
            is able to handle it with grace. Not everything is or should be
            intuitive. This piece traces the evolution of a relationship through
            the initial spark of curiosity, the uncertainty of trial and error,
            and ultimate delight of learning something foreign.
            <br />
            <br />
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
              <strong className="text-black">Header</strong>
              <br />
              Desc.
            </div>
          }
        />
        <New4
          text1={
            <div>
              <strong className="text-black">Header</strong>
              <br />
              Desc.
            </div>
          }
        />
        <New4
          text1={
            <div>
              <strong className="text-black">Header</strong>
              <br />
              Desc.
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
      <New3Video
        src={diffGrips}
        text1="Carrying my form around with me everywhere, listening to music on the go influenced different grips. I found myself preferring using the smaller radius paddle, sometimes the larger radius paddle, sometimes even scrubbing it like a DJ depending on the rhythm."
      />
{/* SPACER */}
      <div className="mt-[2rem]"></div> 
      {/* NEW3VIDEO GRID OF 4 GIFs */}
      <New3Grid
        caption={
          <div>
            Top: Toying with scrap parts inspiring tabletop idea. 

             Bottom: Hybrid
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
            The modelmaking process sparked the idea of a hybrid ( bottom
            gifs )—where one could use it at home, and while travelling. Though
            not a marketable object, I gravitated more and more towards this
            being a playful audiotechnical instrument.
          </div>
        }
      />
    </main>
  );
}

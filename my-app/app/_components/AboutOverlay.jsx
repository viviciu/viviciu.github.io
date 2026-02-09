import Link from "next/link";

export default function AboutOverlay({ isOpen, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-50 pointer-events-none transition-opacity duration-[420ms] ease-[cubic-bezier(.78,-0.01,.17,.99)] backdrop-blur-[60px]  ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
      }`}
      aria-hidden={!isOpen}
      onClick={onClose}
    >
      {/* semi-opaque layer + backdrop blur */}
      <div className="absolute inset-0 bg-white/20" onClick={onClose} />
      {/* centered content */}
      <div
        className="font-ABCDiatypeReg text-black grid grid-cols-6 grid-rows-5 gap-[15px] mx-[32px] my-[13px] relative z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* simple close button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Close about"
          className="absolute top-2 right-2 text-sm px-2 py-1 text-black/80 hover:text-mwsGrey underline underline-offset-2"
        >
          Close
        </button>

        {/* 6 columns x 4 rows grid, 15px gaps, 32px horizontal margin */}

        <div className="col-start-1 col-span-3 row-span-1 text-sm">
          I'm a a multidisciplinary designer studying Industrial Design and HCI at Carnegie Mellon University.
          I've been into image-making for a pretty long time, and my fascination with light lead me to love visualization and CGI.
          In ID, I'm interested in subjects around calm technology, and everyday carry items that make life just a little more delightful.
          <br />
          <br />
          I enjoy learning new processes that force me to think differently, which has lead me to become a chronic side quester: <br />
          I've worked on websites, directed a spectulative app promotion film, and worked at an AI startup aiming to spark more authentic human connection.

          <br />
          <br />

          I come from Baltimore {">"} now based in Pittsburgh.
        </div>
        {/* MINI BOX */}
        <div className="col-start-3 row-start-3 col-span-4 row-span-4 text-sm">
          {/* TITLE */}
          <div className="grid grid-cols-4 grid-rows-2">
            <div className="col-span-2">
              <div className="">
                Designer @ Gentle Systems
              </div>
              <div className="">2026—Present</div>
            </div>
            {/* DESC */}
            <div className="col-span-2">
              3D Visualization & Industrial Design concepting.
            </div>
          </div>
          {/* TITLE */}
          <div className="grid grid-cols-4 grid-rows-2">
            <div className="col-span-2">
              <div className="">
                3D Motion Designer @ Lunar Gala
              </div>
              <div className="">2025—Present</div>
            </div>
            {/* DESC */}
            <div className="col-span-2">
              Designing backdrop motion for Pittsburgh's largest final show.
            </div>
          </div>
          {/* TITLE */}
          <div className="grid grid-cols-4 grid-rows-2">
            <div className="col-span-2">
              <div className="">
                Industrial Designer @ Augemented Perception Lab
              </div>
              <div className="">2025—2025</div>
            </div>
            {/* DESC */}
            <div className="col-span-2">
              Spent a semester prototyping a device which helps those in distributed teams feel more connected.
            </div>
          </div>
          {/* TITLE */}
          <div className="grid grid-cols-4 grid-rows-2">
            <div className="col-span-2">
              <div className="">Web Design Lead @ Lunar Gala</div>
              <div className="">2024—2025</div>
            </div>
            {/* DESC */}
            <div className="col-span-2">
              Designed and developed flexible interactive GLSL particle system
              while leading a team of 9.
            </div>
          </div>
          {/* TITLE */}
          <div className="grid grid-cols-4 grid-rows-2">
            <div className="col-span-2">
              <div className="">
                Motion Designer @ Spatial Experiences Lab, CMU SoD
              </div>
              <div className="">2025—2025</div>
            </div>
            {/* DESC */}
            <div className="col-span-2">
              Produced static and animated visualizations to illustrate spatial
              interaction frameworks for an MR paper.
            </div>
          </div>
        </div>
        {/* CONTACT */}

        <div className="col-start-1 row-start-3 text-sm font-ABCDiatypeReg">
          vstaicu@andrew.cmu.edu
          <br />
          <a
            className=" hover:text-mwsGrey"
            href="https://www.linkedin.com/in/viviana-staicu-633aa2223/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          <br />
          <a
            className="hover:text-mwsGrey "
            href="/assets/vivianaStaicu_CV.pdf"
            alt="alt text"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
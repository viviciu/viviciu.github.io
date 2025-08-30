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
          Viviana Staicu (b.2005) is a storyteller. motion designer. interactive
          prototyper. Currently, she is exploring the intersections between
          creative code, motion design, and brand identity. Trying to keep
          things playful. She has created 3D renders, generative work,
          procedural animations, objects that delight, and immersive websites.
          She currently studies Design and HCI at Carnegie Mellon University and
          comes from Baltimore {">"} Pittsburgh.
        </div>
        {/* MINI BOX */}
        <div className="col-start-3 row-start-3 col-span-4 row-span-4 text-sm">
          {/* TITLE */}
          <div className="grid grid-cols-4 grid-rows-2">
            <div className="col-span-2">
              <div className="">
                Interaction Designer @ Augmented Perception Lab, HCII
              </div>
              <div className="">2025—Present</div>
            </div>
            {/* DESC */}
            <div className="col-span-2">
              Making MR interfaces better than just a floating pane;
              <br /> Bringing tangible connection to online work relationships.
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
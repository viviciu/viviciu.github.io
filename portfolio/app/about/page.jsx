import Image from "next/image";
import Link from "next/link";


export default function About() {
  return (
    <main className="px-4 mt-20 h-full lg:grid lg:grid-cols-5">
      {/* flex justify-center items-center */}
      <div
        className="
       items-start col-span-2 max-h-dvh"
      >
        <Image
          src={"/imgs/AA009-crop1.jpg"}
          alt="home page image"
          width={400}
          height={500}
        />
      </div>

      <p className="col-start-3 text-cap">
        <span className="text-black font-semibold">
          Viviana Staicu (b.2005)
        </span>{" "}
        is an interaction designer. interactive experience prototyper. creative
        technologist. She has created interactive 3D websites, 3D renderings,
        UI/UX design, and interactive objects.
        <br />
        <br />
        In her practice, she aims to reignite curiosity and play through honest,
        unobtrusive design. Currently, she is exploring the intersection between
        physical and digital design, studying industrial design in school and
        procedural animation and XR in her studio practice. <br />
        <br />
        She currently studies Design and HCI at{" "}
        <span className="text-black font-semibold">
          Carnegie Mellon University.
        </span>{" "}
        Feel free to shoot her an email with any inquiries or if you&apos;ve got an
        idea—lets talk!
        <br />
        <br />
        <Link
          href={"mailto:vstaicu@andrew.cmu.edu"}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-mwsGrey font-semibold"
        >
          vstaicu@andrew.cmu.edu
        </Link>
        <br />
        {/* <Link
          src={"/assets/vivianaStaicu_CV.pdf"}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-mwsGrey font-semibold"
        >
          CV
        </Link> */}
        <a
          className="hover:text-mwsGrey font-semibold"
          href="/assets/vivianaStaicu_CV.pdf"
          alt="alt text"
          target="_blank"
          rel="noopener noreferrer"
        >
          CV
        </a>
      </p>
    </main>
  );
}

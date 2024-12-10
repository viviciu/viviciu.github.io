import Image from "next/image";
import Link from "next/link";
import Footer from "../_components/Footer"


export default function About() {
  return (
    <>
      <main className="px-4 mt-[20vh] mb-[10vh] h-full lg:grid lg:grid-cols-10 gap-x-6">
        <div
          className="
       items-start col-span-4"
        >
          {/* Add layout="responsive" to remove margin */}
          <Image
            src={"/imgs/AA009-crop1.jpg"}
            alt="home page image"
            width={450}
            height={500}
          />
        </div>

        <p className="lg:pt-0 pt-8 col-start-5 col-span-2 text-[0.9rem]">
          <span className="text-black font-semibold">
            Viviana Staicu (b.2005)
          </span>{" "}
          is an interaction designer. experience prototyper. creative
          technologist. She has created immersive websites, 3D renderings, UI/UX
          designs, and objects that delight.
          <br />
          <br />
          In her practice, she aims to reignite curiosity and play through
          honest, unobtrusive design. Currently, she is exploring the
          intersection between physical and digital design, studying industrial
          design in school and procedural animation and XR in her studio
          practice. <br />
          <br />
          She currently studies{" "}
          <span className="text-black font-semibold">
            Design and HCI
          </span> at{" "}
          <span className="text-black font-semibold">
            Carnegie Mellon University.
          </span>{" "}
          Feel free to shoot her an email with any inquiries or if you&apos;ve
          got an idea—lets talk!
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
            Resume
          </a>
        </p>
      </main>
      <Footer />
    </>
  );
}

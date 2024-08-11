// THIS FILE IS UNUSED. IT MAY BE BROKEN. I DONT KNOW. ::081124

"use client"
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const Example = () => {
  return (
    <div className="">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase">
          [ the work ]
        </span>
      </div>
      <HorizontalScrollCarousel />
      
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      {/* <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div> */}
      <div className="sticky top-0 flex">
        <div className=" flex-col h-screen items-start overflow-hidden">
            <motion.div style={{ x }} className="flex gap-4">
            {cards.map((card) => {
                return <Card card={card} key={card.id} />;
            })}
            </motion.div>
            <motion.div style={{ x }} className="flex gap-4">
            {cards.map((card) => {
                return <Card card={card} key={card.id} />;
            })}
            </motion.div>
            <motion.div style={{ x }} className="flex gap-4">
            {cards.map((card) => {
                return <Card card={card} key={card.id} />;
            })}
            </motion.div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <>
      <div className="flex flex-col">
        <div
          key={card.id}
          className="group relative h-[30vh] w-[25vw] overflow-hidden bg-neutral-200"
        >
          <div
            style={{
              backgroundImage: `url(${card.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
          >
            <Image
              src={card.img}
              width="500"
              height="500"
              alt="project photo"
            />
          </div>
        </div>
        <div className="text-left">{card.title}</div>
      </div>
    </>
  );
};

export default Example;

const cards = [
  {
    url: "portfolio/app/_components/edit-03512-3.jpg",
    img: "/refrigerator-lut_1.2.1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    img: "/refrigerator-lut_1.2.1.jpg",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    img: "/refrigerator-lut_1.2.1.jpg",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    img: "/refrigerator-lut_1.2.1.jpg",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    img: "/refrigerator-lut_1.2.1.jpg",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    img: "/refrigerator-lut_1.2.1.jpg",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    img: "/refrigerator-lut_1.2.1.jpg",
    id: 7,
  },
];
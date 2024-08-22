import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Top = () => {
  return (
      <HorizontalScrollCarousel />
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-lightblue-500" style = {{borderRadius:'1%'}}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-lightblue-500"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius:'6%',
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
    </div>
  );
};

export default Top;

const cards = [
  {
    url: "/imgs/dental/1.jpg",
    id: 1,
  },
  {
    url: "/imgs/dental/2.jpg",
    id: 2,
  },
  {
    url: "/imgs/dental/3.jpg",
    id: 3,
  },
  {
    url: "/imgs/dental/4.png",
    id: 4,
  },
  {
    url: "/imgs/dental/5.jpg",
    id: 5,
  },
  {
    url: "/imgs/dental/6.jpg",
    id: 6,
  },
  {
    url: "/imgs/dental/7.jpg",
    id: 7,
  },
];
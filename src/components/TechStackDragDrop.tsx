"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import tech from "../data/tech.json";

const TechStackDragDrop = () => {
  const dragDropContainer = useRef(null);

  return (
    <div
      className="md:h-75 flex flex-wrap gap-3 items-center justify-center"
      ref={dragDropContainer}
    >
      {tech.map((item, index) => (
        <motion.div
          key={index}
          className="flex px-5 py-2 rounded-3xl cursor-grab text-white font-medium gradient-1 space-x-2 items-center shadow-lg hover:shadow-blue-400/30 transition-shadow w-fit h-fit"
          drag
          dragConstraints={dragDropContainer}
          dragElastic={0.1}
          dragTransition={{ power: 0.1 }}
          whileDrag={{ scale: 1.1, cursor: "grabbing" }}
        >
          <Image
            src={`/icons/${item.path}`}
            alt=""
            width={20}
            height={20}
            className="w-[20px] h-[20px] select-none pointer-events-none"
          />
          <span>{item.name}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default TechStackDragDrop;

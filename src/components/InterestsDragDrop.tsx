"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const interests = [
  "🎮 Gaming",
  "🍔 Food",
  "⌛ History",
  "🐈‍⬛ Cats",
  "🌎 Travelling",
  "🍿 Movies",
  "⛰️ Hiking",
  "📖 Reading",
  "♟️ Chess",
];

const InterestsDragDrop = () => {
  const interestsContainer = useRef(null);

  return (
    <div className="h-50 relative" ref={interestsContainer}>
      {interests.map((item, index) => (
        <motion.div
          key={index}
          className="absolute px-5 py-2 rounded-lg cursor-grab text-white font-medium shadow-lg hover:shadow-blue-400/30 transition-shadow gradient-3"
          drag
          dragConstraints={interestsContainer}
          dragElastic={0.1}
          dragTransition={{ power: 0.1 }}
          whileDrag={{ scale: 1.1, cursor: "grabbing" }}
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
};

export default InterestsDragDrop;

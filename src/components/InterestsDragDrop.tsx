"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const interests = [
  { emoji: "🎮", label: "Gaming", top: 0, left: 0 },
  { emoji: "🍔", label: "Food", top: 0, left: 0 },
  { emoji: "⌛", label: "History", top: 0, left: 0 },
  { emoji: "🐈‍⬛", label: "Cats", top: 0, left: 0 },
  { emoji: "🌎", label: "Travelling", top: 0, left: 0 },
  { emoji: "🚀", label: "Space", top: 0, left: 0 },
  { emoji: "⛰️", label: "Nature", top: 0, left: 0 },
  { emoji: "📖", label: "Reading", top: 0, left: 0 },
];

const InterestsDragDrop = () => {
  const interestsContainer = useRef(null);

  return (
    <div className="h-50 relative" ref={interestsContainer}>
      {interests.map((item, index) => (
        <motion.div
          key={index}
          className="absolute px-5 py-2 rounded-lg cursor-grab text-white font-medium shadow-lg bg-gradient-to-r from-indigo-500 via-blue-500 
                to-cyan-600 hover:shadow-blue-400/30 transition-shadow"
          drag
          dragConstraints={interestsContainer}
          dragElastic={0.1}
          dragTransition={{ power: 0.1 }}
          whileDrag={{ scale: 1.1, cursor: "grabbing" }}
          style={{
            top: item.top,
            left: item.left,
          }}
        >
          {item.emoji} {item.label}
        </motion.div>
      ))}
    </div>
  );
};

export default InterestsDragDrop;

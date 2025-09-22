import { Variants, Transition } from "motion/react";

const slideTransition: Transition = {
  duration: 1.25,
  ease: "easeInOut",
};

export const SlideDownVariants: Variants = {
  hidden: {
    y: "-100%",
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const slideLeftVariants: Variants = {
  initial: {
    x: "-100%",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: slideTransition,
  },
};

export const slideRightVariants: Variants = {
  initial: {
    x: "100%",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: slideTransition,
  },
};

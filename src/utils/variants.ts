import { Variants, Transition } from "motion/react";

const slideLeftRightTransition: Transition = {
  duration: 1.25,
  ease: "easeInOut",
};

const slideDownTransition: Transition = {
  duration: 0.5,
  ease: "easeInOut",
};

export const slideDownVariants: Variants = {
  hidden: {
    y: "-100%",
    transition: slideDownTransition,
  },
  visible: {
    y: 0,
    transition: slideDownTransition,
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
    transition: slideLeftRightTransition,
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
    transition: slideLeftRightTransition,
  },
};

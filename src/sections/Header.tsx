"use client";

import NavMenu from "@/components/NavMenu";
import Link from "next/link";
import useCheckMobile from "@/utils/useCheckMobile";
import { SlideDownVariants } from "@/utils/variants";
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

const Header = () => {
  const isMobile = useCheckMobile();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    setHidden(isMobile && previous && latest > previous ? true : false);
  });

  return (
    <motion.header
      className="w-full fixed left-1/2 -translate-x-1/2 bg-gray-900 py-6 z-20 section-padding shadow-2xl"
      variants={SlideDownVariants}
      initial="hidden"
      animate={isMobile && hidden ? "hidden" : "visible"}
    >
      <div className="mx-auto flex justify-center items-center flex-col gap-3 md:flex-row md:gap-0 md:justify-between max-w-5xl">
        <Link href="#home">
          <h1 className="gradient-1">Terence Zhang</h1>
        </Link>
        <NavMenu />
      </div>
    </motion.header>
  );
};

export default Header;

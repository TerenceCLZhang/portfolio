import NavMenu from "@/components/NavMenu";
import Link from "next/link";
import * as motion from "motion/react-client";

const Header = () => {
  return (
    <motion.header
      className="w-full fixed left-1/2 -translate-x-1/2 bg-gray-900 py-6 z-20 section-padding"
      initial={{
        y: "-100%",
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="mx-auto flex justify-center items-center flex-col space-y-3 md:flex-row md:space-y-0 md:justify-between max-w-5xl">
        <Link href="#home">
          <h1 className="gradient-1">Terence Zhang</h1>
        </Link>
        <NavMenu />
      </div>
    </motion.header>
  );
};

export default Header;

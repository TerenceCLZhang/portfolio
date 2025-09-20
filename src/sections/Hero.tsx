import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import { slideLeftVariants } from "@/utils/variants";

const Hero = () => {
  return (
    <motion.section
      className="pt-32 md:pt-40 container text-center flex flex-col items-center space-y-3 max-w-5xl"
      id="home"
      variants={slideLeftVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <Image
        src="/hero.png"
        alt="Man with glasses typing on a laptop"
        width={300}
        height={300}
        className="mx-auto"
      />
      <div className="bg-gray-800 py-3 px-5 rounded-4xl flex items-center space-x-3">
        <div className="h-5 w-5 bg-green-500 rounded-full [box-shadow:0px_0px_20px_#00ff26] animate-pulse"></div>
        <p className="text-sm">Open to New Opportunities</p>
      </div>
      <div className="space-y-5">
        <h2 className="text-gray-300">
          Transforming concepts into seamless{" "}
          <span className="gradient-1 bg-clip-text text-transparent italic">
            web experiences
          </span>
        </h2>
        <div className="text-gray-300">
          <p className="max-w-4xl mx-auto">
            I'm <b>Terence Zhang</b>, a full-stack web developer based in
            Auckland, New Zealand. I am passionate about crafting fast,
            scalable, and visually appealing web applications.
          </p>
          <b>Let's discuss your next project!</b>
        </div>
      </div>
      <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 mt-5 md:space-x-7">
        <Button asChild size="lg">
          <Link href="#projects">Expore my Work ⬇️</Link>
        </Button>
        <Button asChild variant="secondary" size="lg">
          <Link href="#contact">👋 Get in Touch</Link>
        </Button>
      </div>
    </motion.section>
  );
};

export default Hero;

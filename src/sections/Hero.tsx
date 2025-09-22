import Image from "next/image";
import * as motion from "motion/react-client";
import { slideLeftVariants } from "@/utils/variants";
import { ButtonLink } from "@/components/CustomButtons";

const Hero = () => {
  return (
    <motion.section
      className="pt-32 container text-center flex flex-col items-center space-y-5 max-w-5xl"
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
          <span className="gradient-1 bg-clip-text text-transparent italic pr-1">
            web experiences
          </span>
        </h2>
        <div className="text-gray-300">
          <p className="max-w-4xl mx-auto mb-5">
            I'm <b>Terence Zhang</b>, a full-stack web developer based in
            Auckland, New Zealand. I am passionate about crafting fast,
            scalable, and visually appealing web applications.
          </p>
          <b className="text-lg">Let's discuss your next project!</b>
        </div>
      </div>
      <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 mt-5 md:space-x-7">
        <ButtonLink content="Expore my Work ⬇️" link="#projects" />
        <ButtonLink
          content="👋 Get in Touch"
          link="#contact"
          variant="secondary"
        />
      </div>
    </motion.section>
  );
};

export default Hero;

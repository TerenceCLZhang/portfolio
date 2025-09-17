import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="pt-32 md:pt-40 container text-center flex flex-col items-center space-y-10"
      id="hero"
    >
      <Image
        src="/hero.png"
        alt="Man with glasses typing on a laptop"
        width={300}
        height={300}
        className="mx-auto"
      />
      <div className="space-y-5">
        <h2 className="gradient-1">
          Transforming concepts into seamless web experiences
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
      <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-7">
        <Button asChild className="gradient-3 font-semibold hover:opacity-80">
          <Link href="#projects">Expore my Work ⬇️</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="#contact">👋 Get in Touch</Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-32 md:py-40">
      <div className="container text-center flex flex-col items-center space-y-10">
        <Image
          src="/hero.png"
          alt="Man with glasses typing on a laptop"
          width={300}
          height={300}
          className="mx-auto"
        />
        <div className="space-y-5">
          <h2 className="text-3xl lg:text-5xl/15 max-w-2xl mx-auto">
            Transforming concepts into seamless web experiences
          </h2>
          <div className="text-gray-300">
            <p className="max-w-4xl mx-auto">
              I'm Terence Zhang, a full-stack web developer based in Auckland,
              New Zealand. I am passionate about crafting fast, scalable, and
              visually appealing web applications.
            </p>
            <b>Let's discuss your next project!</b>
          </div>
        </div>
        <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-7">
          <Button
            asChild
            className="border border-gray-400 hover:text-black hover:bg-gray-100"
          >
            <Link href="#">Expore my Work ⬇️</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="#">👋 Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

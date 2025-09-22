import { slideLeftVariants } from "@/utils/variants";
import * as motion from "motion/react-client";

const SectionHead = ({
  title,
  heading,
  description,
}: {
  title: string;
  heading: string;
  description: string;
}) => {
  return (
    <motion.div
      className="flex items-center justify-center flex-col gap-3 text-center mb-10"
      variants={slideLeftVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <span className="uppercase text-gray-400 font-semibold tracking-[0.65rem]">
        {title}
      </span>
      <h3 className="gradient-1">{heading}</h3>
      <p className="max-w-4xl">{description}</p>
    </motion.div>
  );
};

const Section = ({
  id,
  title,
  heading,
  description,
  content,
}: {
  id: string;
  title: string;
  heading: string;
  description: string;
  content: React.ReactNode;
}) => {
  return (
    <section className="container pt-37 md:pt-28 py-5 max-w-5xl" id={id}>
      <SectionHead title={title} heading={heading} description={description} />
      {content}
    </section>
  );
};

export default Section;

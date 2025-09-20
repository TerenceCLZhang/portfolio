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
      className="flex items-center justify-center flex-col space-y-3 text-center"
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
      <h3 className="gradient-2">{heading}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

export default SectionHead;

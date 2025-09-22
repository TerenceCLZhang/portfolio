import ContactForm from "@/components/ContactForm";
import Section from "@/components/Sections";
import { slideLeftVariants } from "@/utils/variants";
import * as motion from "motion/react-client";

const Contact = () => {
  return (
    <Section
      id="contact"
      title="Contact Me"
      heading="Let's Work Together"
      description="I’m always excited about new opportunities and interesting projects. If you’d like to collaborate or hire me, don’t hesitate to reach out!"
      content={
        <motion.div
          variants={slideLeftVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          <ContactForm />
        </motion.div>
      }
    />
  );
};

export default Contact;

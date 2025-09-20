import ContactForm from "@/components/ContactForm";
import SectionHead from "@/components/SectionHead";
import { slideLeftVariants } from "@/utils/variants";
import * as motion from "motion/react-client";

const Contact = () => {
  return (
    <section className="container py-5 pt-30 max-w-5xl" id="contact">
      <SectionHead
        title="Contact"
        heading="Let's Work Together"
        description="I’m always excited about new opportunities and interesting projects. If you’d like to collaborate or hire me, don’t hesitate to reach out!"
      />
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
    </section>
  );
};

export default Contact;

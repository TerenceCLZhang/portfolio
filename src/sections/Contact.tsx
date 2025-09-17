import ContactForm from "@/components/ContactForm";
import SectionHead from "@/components/SectionHead";

const Contact = () => {
  return (
    <section className="container" id="contact">
      <SectionHead
        title="Contact"
        heading="Let's Work Together"
        description="I’m always excited about new opportunities and interesting projects. If you’d like to collaborate or hire me, don’t hesitate to reach out!"
      />
      <ContactForm />
    </section>
  );
};

export default Contact;

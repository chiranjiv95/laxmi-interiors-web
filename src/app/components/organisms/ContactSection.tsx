import ContactForm from "../molecules/ContactForm";

const ContactSection = () => {
  return (
    <section className="bg-gray-50 p-6 rounded-xl shadow">
      <p className="text-center text-gray-800 mb-4">
        Fill out the form below and we’ll get back to you shortly.
      </p>
      <ContactForm />
    </section>
  );
};

export default ContactSection;

import Layout from "@/components/common/Layout";

const ContactPage = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
        <p className="mb-8">
          We are excited to invite businesses, organizations, and individuals to
          join hands with us in advancing the field of artificial intelligence.
          Your support can play a pivotal role in enabling us to host events,
          workshops, and projects that foster AI knowledge and innovation.
          Whether you are an AI enthusiast, a tech company looking to connect
          with passionate AI practitioners, or simply someone who shares our
          passion for the limitless possibilities of AI, we welcome you to get
          involved. Please reach out to us through the contact form below to
          discuss potential partnerships, sponsorship packages, or to join our
          club. Together, we can shape the future of AI!
        </p>
        <p className="mb-8">You can contact us via email or phone.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="border p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Email Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions or comments, please email us at
              <br /> <a href="mailto:info@example.com">aiclub@cit.ac.in</a>
            </p>
          </div>
          <div className="border p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Call Us</h2>
            <p className="text-gray-600 mb-4">
              If you prefer to talk to someone, please call us at <br />
              <a href="tel:+918453173141">+91 8453173141</a>
            </p>
          </div>
          <div className="border p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-4">LinkedIn</h2>
            <p className="text-gray-600 mb-4">
              Connect us on LinkedIn <br />

              <a
                href="https://www.linkedin.com/in/aiclubcitk/"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-gray-500 text-sm hover:text-blue-500 break-words"
              >
                @aiclubcitk 
              </a>
              <a
                href="https://www.linkedin.com/in/aiclubcitk/"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-gray-500 text-sm hover:text-blue-500 break-words pl-9"
              >
              <img
                              src="/assets/images/logo/others/linkedin.svg"
                              alt="LinkedIn"
                              className="h-12 w-12 mr-2"
                            /></a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;

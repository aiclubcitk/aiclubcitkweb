import Layout from "@/components/common/Layout";

const ContactPage = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold mb-8">T-Shirt Design</h1>
        <p className="mb-8">
          We are excited to launch our clubs merchandise for the first time.
          <br />
          Hope you all like it!!
          <br />
          <br />
          You can contact us via email or phone.
          <br />
          Place your order now.
          <br />
          <br />
        </p>
        <div className="max-w+1x3 mx-auto px+3 sm:px+6 lg:px-1 py-1">
          <p>Click Below &#11015;</p>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-8">
            <a href="https://forms.gle/JDwVNVPrPMkMYpEVA">Order Now</a>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <a href="https://forms.gle/JDwVNVPrPMkMYpEVA">
            <img
              src="/assets/images/tshirt/black.jpg"
              width="400"
              alt="black"
            />
          </a>
          <a href="https://forms.gle/JDwVNVPrPMkMYpEVA">
            <img
              src="/assets/images/tshirt/white.jpg"
              width="400"
              alt="white"
            />
          </a>
        </div>
        <br />
        <br />

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
              <a href="tel:+918453179141">+91 8453179141</a>
              <br />
              <a href="tel:+918403829836">+91 8403829836</a>
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
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;

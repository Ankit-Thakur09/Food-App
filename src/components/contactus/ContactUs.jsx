import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    // mobile: "",
    // category: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useRef();

  const validate = () => {
    const newErrors = {};
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    // if (!formData.mobile || !/^\d{10}$/.test(formData.mobile)) {
    //   newErrors.mobile = "Please enter a valid 10-digit mobile number.";
    // }
    if (!formData.message) {
      newErrors.message = "Requirement field cannot be empty.";
    }
    if (!formData.fullName) {
      newErrors.fullName = "Enter your name.";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        "service_1aj1kz6",
        "template_6mm01ox",
        form.current,
        "jcpSSJ1y1lN1Fd9kl" // Replace with your actual user ID
      );
      setIsSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        mobile: "",

        message: "",
      });
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Email sending failed:", error);
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-2">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-700 mb-10">
          Contact Us
        </h1>

        <div className="flex flex-col md:flex-row md:gap-10 items-start">
          <div className="bg-white shadow-lg w-full md:w-[24rem] rounded-lg py-6 px-8 flex-1">
            <h2 className="text-xl md:text-2xl font-semibold mb-6">
              Send Us a Message
            </h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="mb-4">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 capitalize"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">{errors.fullName}</p>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className={`w-full p-2 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              {/* <div className="mb-4">
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile"
                  className={`w-full p-2 border ${
                    errors.mobile ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200`}
                  required
                />
                {errors.mobile && (
                  <p className="text-red-500 text-sm">{errors.mobile}</p>
                )}
              </div> */}

              <div className="mb-6">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Send your message"
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
            {isSuccess && (
              <p className="text-green-500 mt-4">
                Your message has been sent successfully!
              </p>
            )}
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 flex-1 mt-8 md:mt-0">
            <h2 className="text-xl md:text-2xl font-semibold mb-6">
              Contact Details
            </h2>
            <p className="mb-4 text-gray-600">
              If you have any questions, feel free to contact us using the
              information below.
            </p>
            <div className="mb-4">
              <h3 className="font-semibold text-gray-700">Address</h3>
              <p className="text-gray-600">666, Devils Kitchen, Hell Street</p>
              <p className="text-gray-600">Country XYZ</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold text-gray-700">Phone</h3>
              <p className="text-gray-600">+91-456-7890</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">Email</h3>
              <p className="text-gray-600">info@myapp.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

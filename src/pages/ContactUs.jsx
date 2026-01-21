import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { useOutletContext } from "react-router-dom";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});

export default function ContactUs() {

  const { logout, user} = useOutletContext();
  const { API } = useOutletContext();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    try {
      await axios.post(`${API}/contacts`, data);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-earn ">
      <Navbar logout={logout} user={user}/>

      <div className="grow">
        {/* Contact Form and Info Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
            <p className="mt-4 text-lg text-gray-600">
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white border-2 shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full px-4 py-2 border focus:ring-blue-500 focus:border-blue-500 ${errors.name ? "border-red-500" : "border-gray-300"}`}
                    {...register("name")}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full px-4 py-2 border focus:ring-blue-500 focus:border-blue-500 ${errors.email ? "border-red-500" : "border-gray-300"}`}
                    {...register("email")}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className={`w-full px-4 py-2 border focus:ring-blue-500 focus:border-blue-500 ${errors.subject ? "border-red-500" : "border-gray-300"}`}
                    {...register("subject")}
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className={`w-full px-4 py-2 border focus:ring-blue-500 focus:border-blue-500 ${errors.message ? "border-red-500" : "border-gray-300"}`}
                    {...register("message")}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full  bg-(--color-main3) hover:bg-(--color-main2) text-white py-3 px-6 focus:outline-none focus:ring-2 focus:ring-offset transition-colors disabled:opacity-70"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>

            {/* Map Section */}
            <div className="space-y-8">
              <div className="h-96 w-full rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.744888355785!2d100.5016183153463!3d13.756467590356615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29963f5a663c1%3A0xb3a4e1f4b5c4b1e5!2sBangkok%2C%20Thailand!5e0!3m2!1sen!2sth!4v1234567890123!5m2!1sen!2sth"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Hotel Location"
                ></iframe>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="shrink-0 bg-(--color-main3) p-3 rounded-full">
                    <FaMapMarkerAlt className="text-white" size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Our Location
                    </h3>
                    <p className="mt-1 text-gray-600">
                      123 Hotel Street, Bangkok 10110, Thailand
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="shrink-0 bg-(--color-main3) p-3 rounded-full">
                    <FaPhone className="text-white" size={18} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Phone Number
                    </h3>
                    <p className="mt-1 text-gray-600">+66 2 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="shrink-0 bg-(--color-main3) p-3 rounded-full">
                    <FaEnvelope className="text-white" size={18} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Email Address
                    </h3>
                    <p className="mt-1 text-gray-600">info@monkeydbhotel.com</p>
                  </div>
                </div>

                <div className="pt-2">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-(--color-main3) text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                    >
                      <FaFacebookF size={18} />
                    </a>
                    <a
                      href="#"
                      className="bg-(--color-main3) text-white p-3 rounded-full hover:bg-blue-500 transition-colors"
                    >
                      <FaTwitter size={18} />
                    </a>
                    <a
                      href="#"
                      className="bg-(--color-main3) text-white p-3 rounded-full hover:bg-pink-700 transition-colors"
                    >
                      <FaInstagram size={18} />
                    </a>
                    <a
                      href="#"
                      className="bg-(--color-main3) text-white p-3 rounded-full hover:bg-blue-800 transition-colors"
                    >
                      <FaLinkedinIn size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

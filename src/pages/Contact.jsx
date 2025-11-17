import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const form = useRef();
  const [captchaValue, setCaptchaValue] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    // if (!captchaValue) {
    //   toast.error("⚠ Please verify the CAPTCHA!");
    //   return;
    // }

    emailjs
      .sendForm(
        "service_xfmae29",
        "template_m46ikbd",
        form.current,
        "scig4mAc9q4ZbG0Gd"
      )
      .then(
        () => {
          toast.success("Message sent successfully! 🚀");
          form.current.reset();
          // setCaptchaValue(null);
        },
        () => {
          toast.error("Failed to send message. Try again ❌");
        }
      );
  };

  return (
    <>
      <h2 className="text-4xl font-extrabold text-center text-purple-600 mt-12">
        Let’s Connect
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-10 text-center">
        Drop a message below—I'm excited to hear from you!
      </p>

      <section className="max-w-xl mx-auto px-6 pb-24">
          
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 border-1 border-gray-300 bg-gray-200 dark:bg-gray-800 dark:border-gray-800 rounded-lg p-5 shadow-xl">
            
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 shadow border border-transparent focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition"
              required
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 shadow border border-transparent focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition"
              required
            />

            <input
              type="tel"
              inputMode="tel"
              name="user_phone"
              placeholder="Your Phone Number"
              className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 shadow border border-transparent focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition"
              required
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 shadow border border-transparent focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition"
              required
            ></textarea>

            {/* reCAPTCHA */}
            {/* <div className="flex justify-center my-3">
              <ReCAPTCHA
                sitekey="6Lf0dw8sAAAAABjj286JQiBNZL8fg8uSqaGDuIvU"  // Replace with real site key
                onChange={(value) => setCaptchaValue(value)}
              />
            </div> */}

            {/* Send Button */}
            <button
              type="submit"
              className="mt-2 px-6 py-3 bg-purple-600 text-white text-lg font-semibold rounded-lg shadow border border-purple-600 hover:bg-transparent hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:shadow-[0_0_15px_4px_rgba(147,51,234,0.8)]"
            >
              Send Message 
            </button>
          </form>

      </section>
    </>
  );
};

export default Contact;

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",     // from EmailJS dashboard
        "your_template_id",    // your email template ID
        form.current,
        "your_public_key"      // your public API key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Try again.");
        }
      );
  };

  return (
    <>
      <h2 className="text-4xl font-extrabold text-center text-purple-600 dark:text-purple-500 mb-8 mt-12">Let’s connect!</h2>
      <p className="text-lg text-gray-300 leading-relaxed mb-8 text-center">
        Drop a message below, and I’ll respond at the earliest convenience.</p>
    <section className="max-w-lg mx-auto px-6 pb-24">
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input type="text" name="user_name" placeholder="Your Name" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-md" required />
        <input type="email" name="user_email" placeholder="Your Email" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-md" required />
        <textarea name="message" rows="5" placeholder="Your Message" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-md" required />
        <button type="submit" className="bg-purple-700 text-white py-3 rounded-md hover:bg-purple-500">Send Message</button>
      </form>
    </section>
    </>
  );
};

export default Contact;

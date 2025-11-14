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
    <section className="max-w-lg mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-purple-500 mb-8 text-center">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input type="text" name="user_name" placeholder="Your Name" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-md" required />
        <input type="email" name="user_email" placeholder="Your Email" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-md" required />
        <textarea name="message" rows="5" placeholder="Your Message" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-md" required />
        <button type="submit" className="bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;

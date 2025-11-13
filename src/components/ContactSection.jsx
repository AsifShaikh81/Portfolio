"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Connects to /api/contact (Nodemailer)
  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const err = await res.json();
        console.error(err);
        setStatus("❌ Failed to send. Try again later.");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Error sending message.");
    }
  };

  return (
    <section
      id="contact"
      className="bg-black text-white py-24 px-6 md:px-20 flex flex-col items-center text-center min-h-screen"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-12"
      >
        Get in <span className="text-orange-500">Touch</span>
      </motion.h2>

      <p className="text-gray-400 mb-12 max-w-2xl">
        Feel free to reach out for collaborations, freelance work, or just to
        say hello 👋. I’ll get back to you as soon as possible!
      </p>

      <form onSubmit={sendEmail} className="w-full max-w-lg space-y-6">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-800 focus:border-orange-500 focus:outline-none text-white"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-800 focus:border-orange-500 focus:outline-none text-white"
          />
        </div>
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-800 focus:border-orange-500 focus:outline-none text-white"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="w-full py-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-semibold hover:opacity-90 transition"
        >
          Send Message
        </motion.button>
      </form>

      {status && (
        <p className="mt-4 text-orange-400 font-medium">{status}</p>
      )}

      <div className="flex gap-6 mt-12">
        <a
          href="mailto:asiftech2025@gmail.com"
          className="text-orange-500 hover:text-yellow-500 text-2xl transition"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/asif-shaikh-a0b588315/"
          target="_blank"
          className="text-orange-500 hover:text-yellow-500 text-2xl transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/AsifShaikh81"
          target="_blank"
          className="text-orange-500 hover:text-yellow-500 text-2xl transition"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
}

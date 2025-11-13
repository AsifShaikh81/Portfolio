"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Trend",
      description:
      "An e-commerce website where users can browse products, add them to their cart, and place orders securely. Built with clean design, fast performance, and mobile-friendly layouts for a seamless shopping experience.",
      image: "/Trend.png",
      live: "https://trendfrontend.vercel.app/",
    },
    {
      title: "Connexa",
      description:
        "A social media web application where users can share their thoughts, follow people, and interact in real time. Built with a responsive interface and optimized for speed and usability.",
      image: "/Connexa.png",
      live: "https://connexa-client.vercel.app/",
    },
    {
      title: "Zync",
      description:
        "A fast and easy-to-use chat app where users can connect and talk in real time. Messages are delivered instantly using WebSockets, and the interface is designed for smooth, distraction-free communication.",
      image: "/Zync.png",
      live: "https://zync-rt-chat-app.onrender.com",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-black text-white min-h-[80vh] px-10 md:px-20 text-center py-20 scroll-mt-20"
    >
      <h2 className="text-4xl md:text-4xl font-bold mb-10">
        My{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
          Projects
        </span>
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-orange-500 transition-all shadow-lg flex flex-col"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(255,115,0,0.4)",
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-xl mb-4 object-cover h-72 w-full"
            />
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 flex-grow">{project.description}</p>

            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-semibold hover:opacity-90 transition"
            >
              Live Demo <ExternalLink size={18} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

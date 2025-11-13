"use client";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaLaptopCode } from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-orange-500 text-5xl" />,
    title: "Frontend Development",
    desc: "Responsive, pixel-perfect UI using React, Next.js, and Tailwind CSS.",
  },
  {
    icon: <FaServer className="text-orange-500 text-5xl" />,
    title: "Backend Development",
    desc: "Secure APIs, databases, and server logic with Node.js, Express, and MongoDB.",
  },
  {
    icon: <FaLaptopCode className="text-orange-500 text-5xl" />,
    title: "Full Stack Projects",
    desc: "End-to-end web solutions — from concept to deployment.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-black text-white py-20 px-6 md:px-16 text-center"
    >
      <motion.h2
        className="text-4xl font-bold mb-10 text-orange-500"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        // viewport={{ once: true }}
      >
        <span className="text-white">My</span> Services
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-8 h-80 flex flex-col justify-center rounded-2xl bg-[#111] shadow-lg hover:shadow-orange-500/30 transition-shadow duration-300"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{
              rotateX: 10,
              rotateY: -10,
              scale: 1.05,
              transition: { type: "spring", stiffness: 200, damping: 10 },
            }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="flex flex-col items-center">
              {service.icon}
              <h3 className="text-2xl font-semibold mt-4 text-orange-500">
                {service.title}
              </h3>
              <p className="mt-3 text-gray-300 text-sm px-3">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

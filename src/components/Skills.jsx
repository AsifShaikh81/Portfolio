"use client";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiFlutter,
  SiPostman,
} from "react-icons/si";

export default function Skills() {
  const skillCategories = [
    {
      title: "Front-End & Framework",
      skills: [
        { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
        { icon: <FaCss3Alt className="text-orange-500" />, name: "CSS" },
        { icon: <FaJsSquare className="text-orange-500" />, name: "JavaScript" },
        { icon: <SiTailwindcss className="text-orange-500" />, name: "Tailwind CSS" },
        { icon: <FaReact className="text-orange-500" />, name: "React.js" },
        { icon: <SiNextdotjs className="text-orange-500" />, name: "Next.js" },
      ],
    },
    {
      title: "Back-End & Database",
      skills: [
        { icon: <FaNodeJs className="text-orange-500" />, name: "Node.js" },
        { icon: <SiExpress className="text-orange-500" />, name: "Express.js" },
        { icon: <SiMongodb className="text-orange-500" />, name: "MongoDB" },
        { icon: <FaDatabase className="text-orange-500" />, name: "REST APIs" },
        { icon: <SiPostman className="text-orange-500" />, name: "Postman" },
      ],
    },
    {
      title: "Tools & Design",
      skills: [
        { icon: <FaFigma className="text-orange-500" />, name: "Figma" },
        { icon: <SiFlutter className="text-orange-500" />, name: "Flutter" },
        { icon: <FaFigma className="text-orange-500" />, name: "UI/UX Design" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white py-24 flex flex-col items-center px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-16 tracking-wide"
      >
        My <span className="text-orange-500">Skills</span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-12 w-full max-w-7xl">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              rotateY: 8,
              rotateX: 3,
              boxShadow: "0px 0px 40px rgba(255, 100, 0, 0.3)",
            }}
            className="bg-[#111] border border-orange-600 rounded-2xl p-8 shadow-[0_0_25px_rgba(255,100,0,0.2)] hover:shadow-[0_0_40px_rgba(255,120,0,0.4)] transition-transform duration-500 cursor-pointer"
          >
            <h3 className="text-2xl font-semibold text-orange-500 mb-6 text-center">
              {category.title}
            </h3>

            <ul className="space-y-4">
              {category.skills.map((skill, i) => (
                <motion.li
                  key={i}
                  whileHover={{
                    scale: 1.1,
                    x: 5,
                    color: "#ffa500",
                  }}
                  className="flex items-center space-x-4 text-lg font-medium"
                >
                  <div className="text-2xl">{skill.icon}</div>
                  <span>{skill.name}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

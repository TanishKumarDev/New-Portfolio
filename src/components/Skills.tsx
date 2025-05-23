"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Skills() {
  const skills = [
    { name: "React", icon: "/file.svg" },
    { name: "Next.js", icon: "/next.svg" },
    { name: "TypeScript", icon: "/globe.svg" },
    { name: "Tailwind", icon: "/vercel.svg" },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-800">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="card p-4 bg-gray-900 rounded-lg flex flex-col items-center"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={50}
                height={50}
                className="mb-2"
              />
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
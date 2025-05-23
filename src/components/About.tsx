"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-300">
          I am a full-stack developer with a passion for creating intuitive and
          visually appealing web applications. I specialize in React, Next.js, and
          TypeScript, with a focus on performance and user experience.
        </p>
      </motion.div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl text-gray-400">
          I am a passionate developer creating modern web experiences.
        </p>
      </motion.div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="navbar">
        <ul className="hidden md:flex">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#skills">Skills</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
        </ul>
        <div
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <motion.div
        className={`mobile-menu ${isMenuOpen ? "open" : ""}`}
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? 0 : "100%" }}
        transition={{ duration: 0.3 }}
      >
        <ul>
          <li>
            <Link href="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="#skills" onClick={toggleMenu}>
              Skills
            </Link>
          </li>
          <li>
            <Link href="#projects" onClick={toggleMenu}>
              Projects
            </Link>
          </li>
        </ul>
      </motion.div>
      <div
        className={`blur-overlay ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      ></div>
    </>
  );
}
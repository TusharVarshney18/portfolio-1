// components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-purple-700/30 py-10 text-white text-center">
      <div className="mb-4">
        <h3 className="text-2xl font-semibold">Tushar Varshney</h3>
        <p className="text-gray-400 text-sm">Full Stack Developer</p>
      </div>

      <div className="flex justify-center gap-6 text-xl mb-6">
        <a
          href="https://www.instagram.com/edit_opia_18?igsh=MTY1OWtjMTNxd25sMA=="
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:tusharvarshney1810@gmail.com"
          className="hover:text-purple-400 transition"
        >
          <FaEnvelope />
        </a>
      </div>

      <p className="text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Tushar Varshney. All rights reserved.
      </p>
    </footer>
  );
}

// App.jsx
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


export default function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

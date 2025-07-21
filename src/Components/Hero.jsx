// components/Hero.jsx
import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  const parallaxRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden py-32 px-4 md:px-12">
      <div
        className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-black pointer-events-none"
        ref={parallaxRef}
      ></div>
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-left" data-aos="fade-right">
          <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight tracking-tight bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Hi, I'm Tushar
            <br />
            Full Stack Developer
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            I build elegant full-stack applications and intuitive user
            experiences using the modern web.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg text-lg shadow-md transition text-center"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg text-lg transition text-center"
            >
              Contact Me
            </a>
            <a
              href="assets/cv.pdf"
              download
              className="border border-purple-600 text-white px-6 py-3 rounded-lg text-lg transition text-center"
            >
              Download CV
            </a>
          </div>

          <div className="flex justify-center md:justify-start mt-6 space-x-6">
            <a
              href="https://www.linkedin.com/in/tushar-varshney-693233262/"
              className="text-purple-400 hover:text-white text-3xl"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href="https://github.com/TusharVarshney18"
              className="text-purple-400 hover:text-white text-3xl"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://www.instagram.com/_varshney_g/?__pwa=1#"
              className="text-purple-400 hover:text-white text-3xl"
            >
              <i className="bx bxl-instagram"></i>
            </a>
          </div>
        </div>
        <div className="flex-1" data-aos="fade-left">
          <img
            src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Full Stack Developer"
            className="w-full max-w-md mx-auto rounded-2xl shadow-xl animate-fade-in"
          />
        </div>
      </div>
    </section>
  );
}

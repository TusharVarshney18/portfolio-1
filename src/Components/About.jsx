import React from "react";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-12 bg-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-6 text-purple-400">About Me</h2>
          <h3 className="text-xl font-semibold mb-4">
            Full Stack Web Developer | Frontend & Backend | Payment Integration
          </h3>
          <p className="text-lg leading-relaxed mb-4 text-gray-300">
            I'm a dedicated Full Stack Developer with a background in commerce
            and a strong passion for creating seamless, scalable, and
            user-centric web applications. I have hands-on experience working
            with both frontend and backend technologies, allowing me to build
            complete web solutions from concept to deployment.
            <br />
            <br />
            On the frontend, I specialize in creating responsive and interactive
            interfaces using
            <strong>
              {" "}
              HTML, CSS, JavaScript, React, Tailwind CSS, Bootstrap,
            </strong>{" "}
            and more. On the backend, I work with{" "}
            <strong>Node.js, Express.js, MongoDB, SQL</strong>, and RESTful APIs
            to build secure and high-performance server-side logic.
            <br />
            <br />I also have experience integrating *secure payment gateways*
            and managing user authentication and authorization using JWT and
            bcrypt. I'm always eager to explore new technologies and take on
            challenging problems. Currently, I’m open to opportunities where I
            can contribute, learn, and grow as a developer.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Next.js",
              "Tailwind CSS",
              "Bootstrap",
              "Node.js",
              "Express.js",
              "MongoDB",
              "SQL",
              "REST APIs",
              "JWT",
              "Bcrypt",
              "Axios",
              "Payment Integration",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="flex-1" data-aos="zoom-in">
          <img
            src="https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About Me"
            className="rounded-2xl shadow-lg w-full max-w-sm mx-auto md:mx-0"
          />
        </div>
      </div>
    </section>
  );
}

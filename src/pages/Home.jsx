import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-[#14213D] px-6 py-12">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          <span className="bg-gradient-to-r from-[#000000] via-[#FCA311] to-[#14213D] text-transparent bg-clip-text">
            Crafting Digital Experiences
          </span>
        </h1>
        <p className="mt-6 text-lg text-[#4B5563] max-w-xl mx-auto">
          Welcome to my portfolio. I'm a passionate developer turning ideas into beautiful, functional web apps.
        </p>

        <div className="mt-8">
          <a
            href="#projects"
            className="inline-block bg-[#FCA311] hover:bg-[#14213D] hover:text-white text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-md"
          >
            View My Work
          </a>
        </div>
      </div>

      {/* Skills/Tech Stack */}
      <div className="mt-20 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {["React", "Tailwind", "Node.js", "ML"].map((skill, index) => (
          <div
            key={index}
            className="bg-[#E5E5E5] text-[#000000] p-6 rounded-2xl shadow hover:shadow-lg transition duration-300"
          >
            <p className="text-lg font-semibold">{skill}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-24 text-center text-sm text-[#6B7280]">
        © {new Date().getFullYear()} Aachman Yadav. No rights reserved lol.
      </footer>
    </div>
  );
};

export default Home;

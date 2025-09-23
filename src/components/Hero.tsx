import { ArrowRight, Download } from "lucide-react";
import profile from "../assets/profile.jpeg";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const titles: string[] = [
  "React Developer",
  "Next.js Developer",
  "Full Stack Developer",
  "MERN Developer",
  "Node.js Developer",
];

const Hero: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  // Cycle through titles every 2.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-pink-500 text-base sm:text-lg md:text-xl font-medium uppercase tracking-wider mb-4">
                WELCOME TO MY PORTFOLIO
              </p>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Hi, I'm <span className="text-pink-500">Vivek Anjan</span>
                <br />
                {/* Animated Titles */}
                <motion.span
                  key={index} // re-animate when index changes
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="block text-gray-300 mt-2"
                >
                  {titles[index]}
                </motion.span>
              </h1>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
              Passionate Full Stack Developer with 2+ years of experience in
              creating responsive and user-friendly web applications. Skilled in
              building scalable apps, RESTful APIs, and implementing modern
              development practices. I enjoy solving complex problems, writing
              clean code, and collaborating with teams to deliver exceptional
              digital experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="flex items-center justify-center px-8 py-3 bg-pink-500 text-white font-medium rounded-lg hover:bg-pink-600 transition-colors duration-200"
              >
                View Projects
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="https://drive.google.com/file/d/1yoytx_sSl1Q5Pkx6bVRJesVukGru6QOV/view"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-8 py-3 border border-pink-500 text-pink-500 font-medium rounded-lg hover:bg-pink-500 hover:text-white transition-all duration-200"
                title="Preview & Download Resume"
                onClick={(e) => {
                  e.preventDefault(); // prevent default, we'll handle manually

                  // Open preview in a new tab
                  window.open(
                    "https://drive.google.com/file/d/1yoytx_sSl1Q5Pkx6bVRJesVukGru6QOV/view",
                    "_blank"
                  );

                  // Trigger auto-download using direct download link
                  const link = document.createElement("a");
                  link.href =
                    "https://drive.google.com/uc?export=download&id=1yoytx_sSl1Q5Pkx6bVRJesVukGru6QOV";
                  link.setAttribute("download", "Vivek-Anjan-Resume.pdf");
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download className="mr-2" size={20} />
                Resume 
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:justify-end flex justify-center">
            <div className="relative">
              <div className="w-80 h-96 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl overflow-hidden">
                <img
                  src={profile}
                  alt="Developer Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-pink-500 rounded-full opacity-20"></div>
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-500 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

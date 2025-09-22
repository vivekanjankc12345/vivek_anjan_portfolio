import { useState, useRef } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  // Reference to scroll back to top of projects section
  const projectsRef = useRef<HTMLDivElement | null>(null);

  const projects = [
    {
      title: "JioMart Clone",
      category: "FULL STACK",
      description:
        "An e-commerce platform clone featuring authentication, homepage, product pages, cart, checkout, and payment functionality. Built collaboratively by a team of 5 developers in 5 days.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Redux", "Chakra UI"],
      liveLink: "https://gucci1909.github.io/Jio-Mart-Website-Clone/",
      githubLink: "https://github.com/gucci1909/Jio-Mart-Website-Clone",
    },
    {
      title: "HubSpot Clone",
      category: "WEB APP",
      description:
        "A CRM platform clone with features like authentication, data filtering, search, and full CRUD operations. Built collaboratively by a team of 5 developers in 5 days.",
      image:
        "https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://bespoke-gumdrop-e4c156.netlify.app/",
      githubLink: "https://github.com/anwarjitme/green-room-4314",
    },
    {
      title: "Monkey Survey",
      category: "WEB APP",
      description:
        "A free online survey tool to capture voices and opinions, built using modern web technologies. Drive your business forward by gathering insights from people who matter most to you.",
      image:
        "https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Chakra UI", "JavaScript", "CSS"],
      liveLink: "https://heartfelt-creponne-02f101.netlify.app/",
      githubLink: "https://github.com/vivekanjankc12345/rural-error-930/tree/main",
    },
    {
      title: "Abof",
      category: "WEB APP",
      description:
        "An e-commerce platform clone. Unfortunately, no new orders can be placed, but the closure does not affect ongoing orders and returns. Users can track recent orders through the My Orders section.",
      image:
        "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Chakra UI"],
      liveLink: "https://adof-aj31032003.vercel.app/",
      githubLink: "https://github.com/ajayahara/homely-yarn-5441",
    }
  ];

  // Display only first 2 projects unless showAll is true
  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  const handleToggle = () => {
    if (showAll) {
      // When collapsing, scroll back to top of the projects section with smooth behavior
      projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    setShowAll(!showAll);
  };

  return (
    <section id="projects" className="py-20 bg-gray-900" ref={projectsRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-pink-500 text-sm font-medium uppercase tracking-wider mb-4">
            Portfolio
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Featured <span className="text-pink-500">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group shadow-lg"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-pink-500 text-white text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-pink-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies Used */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links Section */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    {/* Live Demo Link */}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-pink-500 hover:text-pink-400 transition-colors duration-200"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        <span className="text-sm font-medium">Live Demo</span>
                      </a>
                    )}

                    {/* GitHub Link */}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                        title="View Source Code"
                      >
                        {/* GitHub SVG Icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="mr-1"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2 .37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                        <span className="text-sm">Source</span>
                      </a>
                    )}
                  </div>

                  {/* Arrow Icon */}
                  <ArrowRight
                    size={20}
                    className="text-gray-600 group-hover:text-pink-500 group-hover:translate-x-1 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {projects.length > 2 && (
          <div className="text-center mt-10">
            <button
              onClick={handleToggle}
              className="px-6 py-2 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600 transition duration-300"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

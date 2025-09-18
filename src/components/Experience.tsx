// React import not required with the new JSX transform
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      period: "August 2023 - August 2025",
      title: "Full Stack Developer",
      company: "BrainerHub Solutions",
      location: "Ahmedabad, India",
      description: [
        "Developing and maintaining full-stack web applications using modern technologies.",
        "Integrating APIs and implementing complex business logic in scalable architectures.",
        "Collaborating with cross-functional teams to deliver high-quality software solutions.",
        "Optimizing performance and ensuring application security best practices.",
      ],
    },
  ];

  const education = [
    {
      period: "April 2023 - July 2024",
      title: "Full Stack Web Developer Intern",
      company: "Masai School",
      location: "Remote",
      description: [
        "Worked on internal Masai School projects to enhance functionality and performance.",
        "Gained hands-on experience in debugging, testing, and optimizing real-world applications.",
        "Assisted senior developers in backend and frontend development tasks using MERN stack.",
      ],
    },
    {
      period: "August 2013 - June 2017",
      title: "B.Tech in Computer Science and Engineering",
      institution: "Darbhanga College of Engineering",
      location: "Darbhanga, Bihar, India",
      description:
        "Graduated with a focus on computer science fundamentals and software development.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-pink-500 text-sm font-semibold uppercase tracking-wider mb-2">
            Career Journey
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">
            Experience & <span className="text-pink-500">Education</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            My professional journey and educational background in software
            development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <span className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center mr-3">
                <Calendar size={18} />
              </span>
              Professional Experience
            </h3>

            <div className="space-y-10 relative">
              <div className="absolute left-5 top-0 h-full w-0.5 bg-gray-700"></div>
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-2.5 top-2 w-4 h-4 bg-pink-500 rounded-full border-2 border-gray-900"></div>
                  <div className="bg-gray-800/80 p-6 rounded-xl shadow-lg hover:shadow-pink-500/20 transition-all duration-300">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-pink-400 text-sm font-medium">
                        {exp.period}
                      </span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400 text-sm flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-white">
                      {exp.title}
                    </h4>
                    <p className="text-pink-400 mb-3 text-sm">{exp.company}</p>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2 mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <span className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center mr-3">
                <ExternalLink size={18} />
              </span>
              Education
            </h3>

            <div className="space-y-10 relative">
              <div className="absolute left-5 top-0 h-full w-0.5 bg-gray-700"></div>
              {education.map((edu, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-2.5 top-2 w-4 h-4 bg-pink-500 rounded-full border-2 border-gray-900"></div>
                  <div className="bg-gray-800/80 p-6 rounded-xl shadow-lg hover:shadow-pink-500/20 transition-all duration-300">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-pink-400 text-sm font-medium">
                        {edu.period}
                      </span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400 text-sm flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {edu.location}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-white">
                      {edu.title}
                    </h4>
                    <p className="text-pink-400 mb-3 text-sm">
                      {edu.institution}
                    </p>
                    <p className="text-gray-300 text-sm">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills Section */}
           
          </div>
          
        </div>
         <div className="mt-10 bg-gray-800/80 p-6 rounded-xl shadow-lg">
              <h4 className="text-lg font-semibold text-white mb-5">
                Technical Proficiency
              </h4>
              <div className="space-y-5">
                {[
                  { skill: "JavaScript/TypeScript", level: 95 },
                  { skill: "React", level: 90 },
                  { skill: "Node.js/Express", level: 85 },
                  { skill: "MongoDB/PostgreSQL", level: 80 },
                  { skill: "DevOps/CI-CD", level: 70 },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="text-white text-sm">{item.skill}</span>
                      <span className="text-pink-400 text-sm">
                        {item.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
      </div>
    </section>
  );
};

export default Experience;

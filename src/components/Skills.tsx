// React import not required with the new JSX transform
import { Code, Database, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3']
    },
    {
      icon: Server,
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs']
    },
    {
      icon: Database,
      title: 'Database',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL']
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-pink-500 text-sm font-medium uppercase tracking-wider mb-4">
            TECHNICAL EXPERTISE
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            My <span className="text-pink-500">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center group-hover:bg-pink-500/20 transition-colors duration-300">
                  <category.icon className="text-pink-500" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white ml-4">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full hover:bg-pink-500 hover:text-white transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
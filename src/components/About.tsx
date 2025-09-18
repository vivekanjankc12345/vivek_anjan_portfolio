// React import not required with the new JSX transform
import { Github, Linkedin, Mail } from 'lucide-react';

const About = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/vivekanjankc12345', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/vivek-anjan/', label: 'LinkedIn' },
  // Opens Gmail compose in a new tab. Replace 'vivekanjankc12345@gmail.com' if needed.
  { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=vivekanjankc12345@gmail.com', label: 'Email' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              About <span className="text-pink-500">Me</span>
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm Vivek Anjan, a Full Stack Developer with 2+ years of experience building responsive,
                high-quality web applications. I work across the stack — building intuitive frontends
                and robust backends using modern JavaScript and TypeScript technologies.
              </p>
              <p>
                My projects include e-commerce platforms, analytics dashboards, and collaboration tools.
                I focus on performance, accessibility, and maintainable code. I enjoy mentoring others and
                contributing to open-source.
              </p>
              <p>
                Outside of development I write technical articles and keep learning new tools and frameworks
                to stay current in the rapidly evolving web ecosystem.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Find Me On</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target={link.href?.startsWith('http') ? '_blank' : undefined}
                    rel={link.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={link.label}
                    className="flex flex-col items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-200 group"
                  >
                    <link.icon 
                      size={24} 
                      className="text-gray-400 group-hover:text-pink-500 transition-colors duration-200 mb-2" 
                    />
                    <span className="text-xs text-gray-400 group-hover:text-white">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-500">10+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-500">2+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
             
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-500">5+</div>
                  <div className="text-sm text-gray-400">Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
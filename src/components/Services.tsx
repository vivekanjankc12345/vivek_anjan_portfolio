// React import not required with newer JSX transform
import { Monitor, Layers, Database } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Frontend Development',
      description: 'I create stunning, responsive user interfaces using modern frameworks like React, Vue, and Angular. Focused on performance, accessibility, and user experience.'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Building robust server-side applications with Node.js, Python, and modern databases. RESTful APIs, microservices, and scalable architectures.'
    },
    {
      icon: Layers,
      title: 'Full Stack Solutions',
      description: 'Complete web application development from concept to deployment. Seamless integration between frontend and backend systems.'
    },
    
  ];

  return (
    <section id="services" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-pink-500 text-sm font-medium uppercase tracking-wider mb-4">
            SERVICES
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            What I <span className="text-pink-500">Do</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I provide comprehensive development services to help bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 group border border-gray-700 hover:border-pink-500/50"
            >
              <div className="w-16 h-16 bg-pink-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-pink-500/20 transition-colors duration-300">
                <service.icon className="text-pink-500" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-pink-500 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
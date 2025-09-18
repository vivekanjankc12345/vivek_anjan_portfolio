import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'vivekanjankc12345@gmail.com',
      // Use Gmail compose to open webmail in a new tab for users without a mail client
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=vivekanjankc12345@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7759952654',
      link: 'tel:+917759952654'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Ahemdabad, India',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/vivekanjankc12345', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/vivek-anjan/', label: 'LinkedIn' },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-pink-500 text-sm font-medium uppercase tracking-wider mb-4">
            GET IN TOUCH
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Let's Work <span className="text-pink-500">Together</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link?.startsWith('http') ? '_blank' : undefined}
                    rel={info.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center group-hover:bg-pink-500/20 transition-colors duration-300">
                      <info.icon className="text-pink-500" size={20} />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-medium">{info.title}</h4>
                      <p className="text-gray-400 text-sm">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href?.startsWith('http') ? '_blank' : undefined}
                    rel={social.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all duration-300 group"
                    title={social.label}
                  >
                    <social.icon size={20} className="text-gray-400 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-pink-500 focus:outline-none transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-pink-500 focus:outline-none transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-pink-500 focus:outline-none transition-colors duration-200"
                  placeholder="Project inquiry"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-pink-500 focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-3 rounded-lg font-medium hover:bg-pink-600 transition-colors duration-200 flex items-center justify-center"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
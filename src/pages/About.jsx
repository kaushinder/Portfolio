import React from 'react';

const About = () => {
  const personalInfo = [
    { label: 'Full Name', value: 'Kaushinder Singh Raghav', icon: '👤' },
    { label: 'Phone', value: '+91 6395004998', icon: '📱' },
    { label: 'Email', value: 'kaushindersinghraghav@gmail.com', icon: '📧' },
    { label: 'Location', value: 'Greater Noida, India', icon: '📍' },
  ];

  const education = [
    {
      degree: 'Master of Computer Applications - AI & Machine Learning',
      institution: 'Galgotias University',
      year: 'Sep 2024 - Present',
      grade: 'CGPA: 7.8/10',
    },
    {
      degree: 'Bachelor of Science (Hons.) - Mathematics & Statistics',
      institution: 'Jaypee University Anoopshahr',
      year: 'Sep 2017 - May 2020',
      grade: '',
    },
  ];

  const experience = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Istudio, Pune',
      duration: 'Jul 2025 - Dec 2025',
      description: 'Architected microservices e-commerce platform using Node.js, Express, React, and MongoDB supporting 1,000+ concurrent users with 99.9% uptime. Improved performance by 40% through code splitting, lazy loading, and Redis caching. Developed 25+ secure API endpoints with JWT authentication, role-based access control, and Stripe integration.',
    },
    {
      title: 'Web Development Intern',
      company: 'LabMentix, Noida',
      duration: 'Jun 2025 - Jul 2025',
      description: 'Developed AI-powered chatbot with OpenAI GPT API, Next.js SSR, and Express processing 500+ daily conversations. Implemented real-time messaging using Socket.io achieving sub-100ms latency for 200+ concurrent connections with JWT and OAuth authentication.',
    },
    {
      title: 'Java Full Stack Development Trainee',
      company: 'Wipro TalentNext (Remote)',
      duration: 'Jul 2025 - Oct 2025',
      description: 'Completed intensive training in Java, Spring Boot, Hibernate, REST APIs, and microservices architecture. Gained hands-on experience with OOP, SOLID principles, system design, data structures & algorithms, and Test-Driven Development using JUnit and Mockito.',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Get to know more about my journey, skills, and passion for web development
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="card p-8 text-center sticky top-24 animate-slide-up">
              <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center text-6xl">
                👨‍💻
              </div>
              <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                Kaushinder Singh Raghav
              </h2>
              <p className="text-primary-600 dark:text-primary-400 font-semibold mb-6">
                Frontend / MERN Stack Developer
              </p>
              
              {/* Download Resume Button */}
              <a
                href="https://drive.google.com/uc?export=download&id=1MCCNsvEQCZAygFFawRg-tO3enSGqLu66"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>

              {/* Social Links */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-4">
                  CONNECT WITH ME
                </h3>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://github.com/kaushinder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/kaushindersinghraghav"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Personal Info */}
            <div className="card p-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
                <span className="text-3xl">📋</span>
                Personal Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personalInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <span className="text-2xl">{info.icon}</span>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        {info.label}
                      </p>
                      <p className="text-gray-900 dark:text-white font-semibold">
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Summary */}
            <div className="card p-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
                <span className="text-3xl">💼</span>
                Professional Summary
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm a passionate Frontend and MERN Stack Developer with a strong foundation in modern web technologies. 
                I specialize in building responsive, user-friendly web applications using React, Node.js, and MongoDB. 
                My goal is to create seamless digital experiences that solve real-world problems. I'm constantly learning 
                new technologies and best practices to stay current in the ever-evolving field of web development.
              </p>
            </div>

            {/* Education */}
            <div className="card p-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
                <span className="text-3xl">🎓</span>
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span>📅 {edu.year}</span>
                      {edu.grade && <span>📊 {edu.grade}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="card p-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
                <span className="text-3xl">💻</span>
                Experience
              </h3>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                      {exp.title}
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      📅 {exp.duration}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

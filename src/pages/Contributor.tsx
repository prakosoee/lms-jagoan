import React from 'react';
import { Github, Linkedin, Twitter, Mail, Award, Code, Users, Heart } from 'lucide-react';

const Contributor = () => {
  const contributors = [
    {
      name: "Dr. Ahmad Rizki",
      role: "Lead Instructor & Founder",
      specialization: "Full Stack Development",
      experience: "10+ years",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Former Senior Software Engineer at Google. Passionate about teaching and helping developers grow their careers in tech industry.",
      contributions: "Created 15+ courses, mentored 3000+ students",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "ahmad@jagocoding.com"
      },
      achievements: [
        "Google Developer Expert",
        "Microsoft MVP",
        "Tech Speaker at 20+ conferences"
      ]
    },
    {
      name: "Sarah Wijaya",
      role: "Frontend Specialist",
      specialization: "React & Modern Frontend",
      experience: "7+ years",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "UI/UX Engineer with extensive experience in React ecosystem. Loves creating beautiful and performant user interfaces.",
      contributions: "8 courses, 200+ tutorials, 1500+ students mentored",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "sarah@jagocoding.com"
      },
      achievements: [
        "React Community Contributor",
        "Open Source Maintainer",
        "Design Systems Expert"
      ]
    },
    {
      name: "Michael Chen",
      role: "Backend Expert",
      specialization: "Node.js & Cloud Architecture",
      experience: "8+ years",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Cloud Solutions Architect specializing in scalable backend systems. Previously worked at AWS and Microsoft Azure teams.",
      contributions: "12 courses, cloud infrastructure guides, 2000+ students",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "michael@jagocoding.com"
      },
      achievements: [
        "AWS Solutions Architect",
        "Node.js Foundation Member",
        "Cloud Native Expert"
      ]
    },
    {
      name: "Diana Putri",
      role: "Mobile Development Lead",
      specialization: "React Native & Flutter",
      experience: "6+ years",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Mobile app developer who has published 20+ apps on both iOS and Android platforms. Expert in cross-platform development.",
      contributions: "6 courses, mobile development workshops, 1200+ students",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "diana@jagocoding.com"
      },
      achievements: [
        "Google Play Developer Expert",
        "React Native Core Contributor",
        "Mobile Innovation Award"
      ]
    },
    {
      name: "Kevin Pratama",
      role: "DevOps Engineer",
      specialization: "CI/CD & Infrastructure",
      experience: "9+ years",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "DevOps expert with deep knowledge in containerization, orchestration, and cloud infrastructure automation.",
      contributions: "5 courses, infrastructure guides, 800+ students",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "kevin@jagocoding.com"
      },
      achievements: [
        "Kubernetes Certified Expert",
        "Docker Captain",
        "Cloud Infrastructure Specialist"
      ]
    },
    {
      name: "Lisa Anderson",
      role: "Data Science Instructor",
      specialization: "Machine Learning & AI",
      experience: "5+ years",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Data Scientist with PhD in Computer Science. Specializes in making complex AI concepts accessible to beginners.",
      contributions: "4 courses, research papers, 600+ students",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "lisa@jagocoding.com"
      },
      achievements: [
        "PhD in Computer Science",
        "AI Research Publications",
        "Kaggle Grandmaster"
      ]
    }
  ];

  const stats = [
    {
      icon: Users,
      value: "6",
      label: "Expert Instructors",
      color: "text-blue-600"
    },
    {
      icon: Code,
      value: "50+",
      label: "Courses Created",
      color: "text-green-600"
    },
    {
      icon: Heart,
      value: "10,000+",
      label: "Students Mentored",
      color: "text-red-600"
    },
    {
      icon: Award,
      value: "95%",
      label: "Success Rate",
      color: "text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Contributors
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Tim ahli yang berdedikasi untuk memberikan pendidikan teknologi terbaik. 
            Mereka adalah praktisi industri dengan pengalaman bertahun-tahun di bidangnya masing-masing.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${stat.color} bg-white rounded-full shadow-lg mb-4`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contributors Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contributors.map((contributor, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                <div className="p-6">
                  <div className="text-center mb-6">
                    <img
                      src={contributor.image}
                      alt={contributor.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-gray-100"
                    />
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{contributor.name}</h3>
                    <p className="text-blue-600 font-semibold mb-1">{contributor.role}</p>
                    <p className="text-gray-600 text-sm">{contributor.specialization}</p>
                    <p className="text-gray-500 text-sm">{contributor.experience} experience</p>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {contributor.bio}
                  </p>

                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Contributions:</p>
                    <p className="text-sm text-gray-700 font-medium">{contributor.contributions}</p>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-2">Achievements:</p>
                    <div className="space-y-1">
                      {contributor.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-center text-sm text-gray-700">
                          <Award className="h-3 w-3 text-yellow-500 mr-2" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center space-x-4">
                    <a
                      href={contributor.social.github}
                      className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={contributor.social.linkedin}
                      className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={contributor.social.twitter}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href={`mailto:${contributor.social.email}`}
                      className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                      aria-label="Email"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ingin Bergabung Sebagai Contributor?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Kami selalu mencari expert yang passionate untuk berbagi knowledge dan 
            membantu mengembangkan talenta tech Indonesia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Apply Now
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contributor;
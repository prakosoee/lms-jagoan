import React from 'react';
import { Globe, Palette, Smartphone, Code, Play, Clock, Users, Star, CheckCircle } from 'lucide-react';

const Frontend = () => {
  const levels = [
    {
      title: "Dasar (Beginner)",
      description: "Mulai dari fundamental frontend development",
      duration: "6 weeks",
      courses: 3,
      color: "from-blue-400 to-cyan-600",
      modules: [
        "HTML5 & Semantic Markup",
        "CSS3 & Responsive Design",
        "JavaScript ES6+ Fundamentals",
        "DOM Manipulation"
      ]
    },
    {
      title: "Menengah (Intermediate)",
      description: "Pelajari framework dan tools modern",
      duration: "8 weeks",
      courses: 4,
      color: "from-indigo-400 to-purple-600",
      modules: [
        "React.js Fundamentals",
        "State Management",
        "Component Lifecycle",
        "React Router",
        "API Integration"
      ]
    },
    {
      title: "Lanjutan (Advanced)",
      description: "Master level frontend development",
      duration: "10 weeks",
      courses: 5,
      color: "from-purple-400 to-pink-600",
      modules: [
        "Next.js & SSR/SSG",
        "TypeScript Integration",
        "Testing (Jest, React Testing Library)",
        "Performance Optimization",
        "PWA Development",
        "Deployment & CI/CD"
      ]
    }
  ];

  const roadmapItems = [
    {
      title: "HTML & CSS Mastery",
      description: "Struktur dan styling yang solid sebagai fondasi",
      icon: Code,
      completed: true
    },
    {
      title: "JavaScript Proficiency",
      description: "Programming logic dan DOM manipulation",
      icon: Globe,
      completed: true
    },
    {
      title: "React Development",
      description: "Component-based development dengan React",
      icon: Palette,
      completed: false
    },
    {
      title: "Advanced Frontend",
      description: "Performance optimization dan production-ready apps",
      icon: Smartphone,
      completed: false
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                <Globe className="h-4 w-4" />
                <span>Frontend Development Track</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Become a Frontend
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Expert
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Pelajari cara membuat user interface yang menarik, responsive, 
                dan user-friendly menggunakan teknologi frontend terkini.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-blue-600" />
                  <span>24 weeks total</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-blue-600" />
                  <span>2,500+ students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>4.8 rating</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                  <Play className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Frontend Development Preview
                </h3>
                <p className="text-gray-600 mb-4">
                  Lihat overview lengkap tentang frontend development dan teknologi yang akan dipelajari
                </p>
                <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200">
                  Watch Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Levels */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Level Pembelajaran
            </h2>
            <p className="text-xl text-gray-600">
              Kurikulum terstruktur dari dasar hingga mahir
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {levels.map((level, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                <div className={`h-2 bg-gradient-to-r ${level.color}`}></div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{level.title}</h3>
                  <p className="text-gray-600 mb-6">{level.description}</p>
                  
                  <div className="flex items-center space-x-4 mb-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{level.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Globe className="h-4 w-4" />
                      <span>{level.courses} courses</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {level.modules.map((module, moduleIndex) => (
                      <div key={moduleIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-gray-700">{module}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full px-6 py-3 bg-gradient-to-r ${level.color} text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200`}>
                    Mulai Level Ini
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Roadmap */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frontend Learning Roadmap
            </h2>
            <p className="text-xl text-gray-600">
              Jalur pembelajaran yang akan Anda tempuh
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500"></div>
            
            <div className="space-y-12">
              {roadmapItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                      <div className={`bg-white rounded-xl shadow-lg p-6 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                        <div className={`inline-flex items-center justify-center w-12 h-12 ${item.completed ? 'bg-green-500' : 'bg-gray-300'} rounded-full mb-4`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                        {item.completed && (
                          <div className="mt-3">
                            <span className="inline-flex items-center space-x-1 text-green-600 text-sm font-semibold">
                              <CheckCircle className="h-4 w-4" />
                              <span>Completed</span>
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-white border-4 border-blue-500 rounded-full"></div>
                    <div className="w-1/2"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Siap Memulai Journey Frontend Development?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Bergabung dengan ribuan developer yang sudah memulai karier mereka di frontend development
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Mulai Sekarang
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200">
              Lihat Kurikulum Lengkap
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Frontend;
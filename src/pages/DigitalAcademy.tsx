import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Database, Globe, Server, Smartphone, ArrowRight, Clock, Users, Star } from 'lucide-react';

const DigitalAcademy = () => {
  const tracks = [
    {
      title: "Frontend Development",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      description: "Pelajari cara membuat user interface yang menarik dan responsive dengan teknologi modern",
      courses: 12,
      students: 2500,
      rating: 4.8,
      path: "/digital-academy/frontend",
      skills: ["HTML & CSS", "JavaScript", "React.js", "Next.js", "TypeScript", "Tailwind CSS"],
      duration: "6 months"
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "from-purple-500 to-pink-500",
      description: "Kuasai server-side development dan database management untuk aplikasi yang scalable",
      courses: 10,
      students: 1800,
      rating: 4.9,
      path: "/digital-academy/backend",
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "API Design", "Authentication"],
      duration: "5 months"
    }
  ];

  const featuredCourses = [
    {
      title: "Complete React Developer",
      category: "Frontend",
      level: "Intermediate",
      duration: "40 hours",
      students: 1250,
      rating: 4.9,
      price: "Rp 299.000",
      image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600",
      instructor: "John Doe",
      description: "Pelajari React dari dasar hingga mahir dengan project real-world"
    },
    {
      title: "Node.js & Express Masterclass",
      category: "Backend",
      level: "Advanced",
      duration: "35 hours",
      students: 890,
      rating: 4.8,
      price: "Rp 399.000",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
      instructor: "Jane Smith",
      description: "Bangun API yang robust dan scalable dengan Node.js"
    },
    {
      title: "Full Stack Web Development",
      category: "Full Stack",
      level: "Beginner",
      duration: "60 hours",
      students: 2100,
      rating: 4.7,
      price: "Rp 599.000",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600",
      instructor: "Mike Johnson",
      description: "Lengkap dari frontend hingga backend development"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Digital Academy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Pilih jalur pembelajaran yang sesuai dengan minat dan tujuan karier Anda. 
            Kurikulum yang dirancang oleh praktisi industri dengan pengalaman bertahun-tahun.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-blue-600" />
              <span>4,300+ Active Students</span>
            </div>
            <div className="flex items-center space-x-2">
              <Code className="h-5 w-5 text-blue-600" />
              <span>22+ Courses</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <span>4.8 Average Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Tracks */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pilih Learning Track
            </h2>
            <p className="text-xl text-gray-600">
              Jalur pembelajaran terstruktur dengan mentor berpengalaman
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tracks.map((track, index) => {
              const IconComponent = track.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className={`h-2 bg-gradient-to-r ${track.color}`}></div>
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${track.color} rounded-full mr-4`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{track.title}</h3>
                        <p className="text-gray-600">{track.duration} • {track.courses} courses</p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {track.description}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-6">
                      {track.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full text-center">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{track.students} students</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>{track.rating}</span>
                        </div>
                      </div>
                    </div>

                    <Link
                      to={track.path}
                      className={`inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r ${track.color} text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
                    >
                      Mulai Belajar
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Course Terpopuler
            </h2>
            <p className="text-xl text-gray-600">
              Course yang paling banyak diambil dan memiliki rating tertinggi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full">
                      {course.category}
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-semibold rounded-full">
                      {course.level}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="mr-4">{course.duration}</span>
                    <Users className="h-4 w-4 mr-1" />
                    <span className="mr-4">{course.students}</span>
                    <Star className="h-4 w-4 mr-1 text-yellow-500" />
                    <span>{course.rating}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Instructor: {course.instructor}</p>
                      <p className="text-lg font-bold text-blue-600">{course.price}</p>
                    </div>
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                      Enroll
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalAcademy;
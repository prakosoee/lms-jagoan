import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Play,
  Users,
  BookOpen,
  Award,
  Star,
  ArrowRight,
  CheckCircle,
  Code,
  Globe,
  Server,
  Layers,
} from "lucide-react";

const Home = () => {
  const testimonials = [
    {
      name: "Sarah Wijaya",
      role: "Full Stack Developer",
      company: "Tech Startup",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      content:
        "JagoCoding benar-benar mengubah karier saya. Materi yang diajarkan sangat praktis dan sesuai dengan kebutuhan industri. Dalam 6 bulan saya berhasil mendapat pekerjaan sebagai developer.",
      rating: 5,
    },
    {
      name: "Ahmad Rizki",
      role: "Backend Developer",
      company: "E-commerce Company",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      content:
        "Mentor di JagoCoding sangat berpengalaman. Saya belajar dari nol sampai bisa membuat aplikasi backend yang kompleks. Sistem mentoring 1:1 nya sangat membantu.",
      rating: 5,
    },
    {
      name: "Diana Putri",
      role: "Frontend Developer",
      company: "Digital Agency",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      content:
        "Kurikulum JagoCoding selalu update dengan teknologi terbaru. Saya bisa langsung praktek dengan project real yang ada di industri. Highly recommended!",
      rating: 5,
    },
  ];

  const coursePreviews = [
    {
      title: "React & Next.js Fundamentals",
      category: "Frontend",
      duration: "12 weeks",
      students: 1250,
      image:
        "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Pelajari framework React dan Next.js dari dasar hingga mahir",
    },
    {
      title: "Node.js & Express API",
      category: "Backend",
      duration: "10 weeks",
      students: 980,
      image:
        "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Bangun API yang scalable dengan Node.js dan Express",
    },
    {
      title: "Database Design & SQL",
      category: "Database",
      duration: "8 weeks",
      students: 750,
      image:
        "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Master database design dan query optimization",
    },
    {
      title: "Mobile App Development",
      category: "Mobile",
      duration: "14 weeks",
      students: 650,
      image:
        "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Buat aplikasi mobile dengan React Native",
    },
  ];

  const whyChoose = [
    {
      icon: Users,
      title: "Mentor Berpengalaman",
      description:
        "Belajar langsung dari praktisi industri dengan pengalaman 5+ tahun",
    },
    {
      icon: BookOpen,
      title: "Kurikulum Terkini",
      description:
        "Materi pembelajaran yang selalu update dengan perkembangan teknologi terbaru",
    },
    {
      icon: Award,
      title: "Sertifikat Resmi",
      description:
        "Dapatkan sertifikat yang diakui industri setelah menyelesaikan course",
    },
    {
      icon: Play,
      title: "Learning by Doing",
      description:
        "Metode pembelajaran praktis dengan project real dan portfolio building",
    },
  ];

  const roadmaps = [
    {
      title: "Frontend Development",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      skills: [
        "HTML & CSS",
        "JavaScript ES6+",
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
      ],
      duration: "6 months",
      projects: 8,
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "from-purple-500 to-pink-500",
      skills: [
        "Node.js",
        "Express.js",
        "Database Design",
        "API Development",
        "Authentication",
        "Deployment",
      ],
      duration: "5 months",
      projects: 6,
    },
    {
      title: "Full Stack Development",
      icon: Layers,
      color: "from-green-500 to-teal-500",
      skills: [
        "Frontend + Backend",
        "System Design",
        "DevOps",
        "Testing",
        "Performance",
        "Scaling",
      ],
      duration: "8 months",
      projects: 12,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-20 pb-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Mulai Karier
                  <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Tech Impianmu
                  </span>
                  Bersama Kami
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Platform pembelajaran online terpercaya dengan mentor
                  berpengalaman, kurikulum industry-ready, dan metode learning
                  by doing yang terbukti efektif.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/digital-academy"
                  className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  Mulai Belajar
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
                  <Play className="mr-2 h-5 w-5" />
                  Tonton Demo
                </button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span>10,000+ Students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-blue-600" />
                  <span>95% Success Rate</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <video
                    className="h-full w-full object-cover rounded-lg"
                    controls
                  >
                    <source src="/video/video1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  {/* <Play className="h-16 w-16 text-white absolute" /> */}
                </div>
                <div className="mt-6 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Intro to Web Development
                  </h3>
                  <p className="text-gray-600">
                    Pelajari dasar-dasar web development dan bangun project
                    pertama Anda
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>45 min</span>
                    <span>•</span>
                    <span>Beginner</span>
                    <span>•</span>
                    <span>Free</span>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Harus Memilih JagoCoding?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami berkomitmen memberikan pengalaman pembelajaran terbaik untuk
              mengembangkan karier tech Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="text-center group hover:transform hover:scale-105 transition-all duration-200"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-6 group-hover:shadow-lg">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Kata Mereka Yang Sudah Bergabung
            </h2>
            <p className="text-xl text-gray-600">
              Ribuan alumni yang sudah berhasil berkarier di industri tech
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-200"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Preview Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Materi Pembelajaran Populer
            </h2>
            <p className="text-xl text-gray-600">
              Pilih course yang sesuai dengan minat dan tujuan karier Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {coursePreviews.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-200 border border-gray-100"
              >
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
                    <span className="text-sm text-gray-500">
                      {course.duration}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {course.description}
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{course.students} students</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/digital-academy"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Lihat Semua Course
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Roadmap Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Roadmap Pembelajaran
            </h2>
            <p className="text-xl text-gray-600">
              Jalur pembelajaran terstruktur untuk mencapai tujuan karier Anda
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {roadmaps.map((roadmap, index) => {
              const IconComponent = roadmap.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-200"
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${roadmap.color} rounded-full mb-6`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {roadmap.title}
                  </h3>

                  <div className="flex items-center space-x-6 mb-6 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="h-4 w-4" />
                      <span>{roadmap.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Code className="h-4 w-4" />
                      <span>{roadmap.projects} projects</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {roadmap.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">{skill}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/digital-academy"
                    className="inline-flex items-center mt-6 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                  >
                    Mulai Learning Path
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

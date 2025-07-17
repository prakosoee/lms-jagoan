import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Award, Play, CheckCircle, BarChart3, Trophy } from 'lucide-react';
import { useAuth } from '../store/AuthContext';
import { useLearning } from '../store/LearningContext';

const Dashboard = () => {
  const { user } = useAuth();
  const { courses } = useLearning();

  const stats = [
    {
      icon: BookOpen,
      label: 'Courses Enrolled',
      value: courses.length,
      color: 'text-blue-600'
    },
    {
      icon: CheckCircle,
      label: 'Completed Modules',
      value: courses.reduce((acc, course) => acc + course.modules.filter(m => m.completed).length, 0),
      color: 'text-green-600'
    },
    {
      icon: Trophy,
      label: 'Certificates Earned',
      value: courses.filter(course => course.certificateEarned).length,
      color: 'text-yellow-600'
    },
    {
      icon: BarChart3,
      label: 'Average Progress',
      value: `${Math.round(courses.reduce((acc, course) => acc + course.progress, 0) / courses.length || 0)}%`,
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.fullName}!
          </h1>
          <p className="text-gray-600">
            Continue your learning journey and track your progress
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center">
                  <div className={`p-3 rounded-full bg-gray-100 ${stat.color}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Current Courses */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Courses</h2>
          
          {courses.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses enrolled yet</h3>
              <p className="text-gray-600 mb-6">Start your learning journey by enrolling in a course</p>
              <Link
                to="/digital-academy"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Browse Courses
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {courses.map((course) => (
                <div key={course.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{course.title}</h3>
                      <p className="text-gray-600">{course.level} Level</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600 mb-1">{Math.round(course.progress)}%</div>
                      <div className="text-sm text-gray-600">Progress</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>

                  {/* Modules */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {course.modules.map((module, index) => (
                      <div key={module.id} className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          module.completed && module.quizPassed
                            ? 'bg-green-500 text-white'
                            : module.completed
                            ? 'bg-yellow-500 text-white'
                            : 'bg-gray-200 text-gray-600'
                        }`}>
                          {module.completed && module.quizPassed ? (
                            <CheckCircle className="h-4 w-4" />
                          ) : (
                            <span className="text-sm font-semibold">{index + 1}</span>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">{module.title}</p>
                          <p className="text-xs text-gray-500">{module.duration}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center space-x-4">
                    {course.completed ? (
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2 text-green-600">
                          <CheckCircle className="h-5 w-5" />
                          <span className="font-semibold">Course Completed!</span>
                        </div>
                        {course.certificateEarned ? (
                          <Link
                            to={`/certificate/${course.id}`}
                            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                          >
                            <Award className="h-4 w-4 mr-2" />
                            View Certificate
                          </Link>
                        ) : (
                          <button className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                            <Trophy className="h-4 w-4 mr-2" />
                            Claim Certificate
                          </button>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={`/learning/${course.id}/${course.modules.find(m => !m.completed || !m.quizPassed)?.id || course.modules[0].id}`}
                        className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                      >
                        <Play className="h-4 w-4 mr-2" />
                        Continue Learning
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            to="/digital-academy"
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200 group"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-200">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 ml-4">Browse Courses</h3>
            </div>
            <p className="text-gray-600">Explore new courses and expand your skills</p>
          </Link>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-green-100 rounded-full">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 ml-4">Study Time</h3>
            </div>
            <p className="text-gray-600">Track your daily learning progress</p>
            <div className="mt-4">
              <div className="text-2xl font-bold text-green-600">2.5 hrs</div>
              <div className="text-sm text-gray-500">This week</div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-purple-100 rounded-full">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 ml-4">Achievements</h3>
            </div>
            <p className="text-gray-600">Your learning milestones and badges</p>
            <div className="mt-4">
              <div className="text-2xl font-bold text-purple-600">{courses.filter(c => c.certificateEarned).length}</div>
              <div className="text-sm text-gray-500">Certificates earned</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  Play,
  CheckCircle,
  Clock,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Headphones,
  FileText,
  Pizza as QuizIcon,
  Award,
} from "lucide-react";
import { useLearning } from "../store/LearningContext";

const Learning = () => {
  const { courseId, moduleId } = useParams();
  const navigate = useNavigate();
  const { getCurrentCourse, getCurrentModule, completeModule, courses } =
    useLearning();
  const [isCompleted, setIsCompleted] = useState(false);

  const course = getCurrentCourse(courseId!);
  const currentModule = getCurrentModule(courseId!, moduleId!);
  const currentModuleIndex =
    course?.modules.findIndex((m) => m.id === moduleId) || 0;
  const nextModule = course?.modules[currentModuleIndex + 1];
  const prevModule = course?.modules[currentModuleIndex - 1];

  useEffect(() => {
    if (currentModule) {
      setIsCompleted(currentModule.completed);
    }
  }, [currentModule]);

  if (!course || !currentModule) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Module not found
          </h2>
          <Link to="/dashboard" className="text-blue-600 hover:text-blue-700">
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const handleCompleteModule = () => {
    completeModule(courseId!, moduleId!);
    setIsCompleted(true);
  };

  const getContentIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Play className="h-5 w-5" />;
      case "podcast":
        return <Headphones className="h-5 w-5" />;
      case "text":
        return <FileText className="h-5 w-5" />;
      default:
        return <BookOpen className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6">
                <div className="flex items-center mb-4">
                  <Link
                    to="/dashboard"
                    className="inline-flex items-center text-white hover:text-blue-200 transition-colors duration-200 mr-4"
                  >
                    <ArrowLeft className="h-5 w-5 mr-2" />
                    Back to Dashboard
                  </Link>
                </div>
                <h1 className="text-2xl font-bold mb-2">
                  {currentModule.title}
                </h1>
                <div className="flex items-center space-x-4 text-blue-100">
                  <div className="flex items-center space-x-2">
                    {getContentIcon(currentModule.type)}
                    <span className="capitalize">{currentModule.type}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{currentModule.duration}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {currentModule.type === "video" && (
                  <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center mb-6">
                    <div className="text-center text-white w-full h-full">
                      <video
                        className="h-full w-full object-cover rounded-lg"
                        controls
                      >
                        <source
                          src="/video/video1.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                      <p className="text-lg">Video Content</p>
                      <p className="text-sm opacity-70">
                        Duration: {currentModule.duration}
                      </p>
                    </div>
                  </div>
                )}

                {currentModule.type === "podcast" && (
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-8 text-white text-center mb-6">
                    <Headphones className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-lg">Audio Content</p>
                    <p className="text-sm opacity-90">
                      Duration: {currentModule.duration}
                    </p>
                    <div className="mt-4 bg-white bg-opacity-20 rounded-full p-2">
                      <div className="flex items-center justify-center space-x-4">
                        <audio controls className="w-full">
                          <source
                            src="/audio/audio.mp3"
                            type="audio/mp3"
                          />
                          Your browser does not support the audio element.
                        </audio>
                      </div>
                    </div>
                  </div>
                )}

                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {currentModule.content}
                  </p>
                </div>

                {/* Completion Button */}
                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {!isCompleted ? (
                      <button
                        onClick={handleCompleteModule}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                      >
                        <CheckCircle className="h-5 w-5 mr-2" />
                        Mark as Complete
                      </button>
                    ) : (
                      <div className="flex items-center space-x-2 text-green-600">
                        <CheckCircle className="h-5 w-5" />
                        <span className="font-semibold">Module Completed!</span>
                      </div>
                    )}
                  </div>

                  {isCompleted && (
                    <Link
                      to={`/quiz/${courseId}/${moduleId}`}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                    >
                      <QuizIcon className="h-5 w-5 mr-2" />
                      Take Quiz
                    </Link>
                  )}
                </div>

                {/* Navigation */}
                <div className="mt-8 pt-8 border-t border-gray-200 flex items-center justify-between">
                  {prevModule ? (
                    <Link
                      to={`/learning/${courseId}/${prevModule.id}`}
                      className="inline-flex items-center px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Previous: {prevModule.title}
                    </Link>
                  ) : (
                    <div></div>
                  )}

                  {nextModule && currentModule.quizPassed && (
                    <Link
                      to={`/learning/${courseId}/${nextModule.id}`}
                      className="inline-flex items-center px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      Next: {nextModule.title}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Course Progress
              </h3>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">
                    Overall Progress
                  </span>
                  <span className="text-sm font-semibold text-blue-600">
                    {Math.round(course.progress)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Module List */}
              <div className="space-y-3">
                {course.modules.map((module, index) => (
                  <div key={module.id} className="flex items-center space-x-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                        module.id === moduleId
                          ? "bg-blue-500 text-white"
                          : module.completed && module.quizPassed
                          ? "bg-green-500 text-white"
                          : module.completed
                          ? "bg-yellow-500 text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {module.completed && module.quizPassed ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        index + 1
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/learning/${courseId}/${module.id}`}
                        className={`block text-sm font-medium truncate ${
                          module.id === moduleId
                            ? "text-blue-600"
                            : "text-gray-900 hover:text-blue-600"
                        } transition-colors duration-200`}
                      >
                        {module.title}
                      </Link>
                      <p className="text-xs text-gray-500">{module.duration}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Certificate */}
              {course.completed && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Link
                    to={`/certificate/${courseId}`}
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    <Award className="h-4 w-4 mr-2" />
                    Get Certificate
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;

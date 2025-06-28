import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Award, Download, Share2, ArrowLeft, Calendar, CheckCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useLearning } from '../contexts/LearningContext';

const Certificate = () => {
  const { courseId } = useParams();
  const { user } = useAuth();
  const { getCurrentCourse, earnCertificate } = useLearning();

  const course = getCurrentCourse(courseId!);

  React.useEffect(() => {
    if (course && course.completed && !course.certificateEarned) {
      earnCertificate(courseId!);
    }
  }, [course, courseId, earnCertificate]);

  if (!course || !user) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Certificate not found</h2>
          <Link to="/dashboard" className="text-blue-600 hover:text-blue-700">
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  if (!course.completed) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Course not completed</h2>
          <p className="text-gray-600 mb-6">Complete all modules to earn your certificate</p>
          <Link
            to="/dashboard"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Continue Learning
          </Link>
        </div>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Certificate - ${course.title}`,
        text: `I just completed ${course.title} on JagoCoding!`,
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Certificate link copied to clipboard!');
    }
  };

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/dashboard"
            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Dashboard
          </Link>

          <div className="flex items-center space-x-4">
            <button
              onClick={handleShare}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </button>
          </div>
        </div>

        {/* Certificate */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden print:shadow-none print:rounded-none">
          {/* Certificate Header */}
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-6">
              <Award className="h-12 w-12" />
            </div>
            <h1 className="text-4xl font-bold mb-2">Certificate of Completion</h1>
            <p className="text-xl opacity-90">JagoCoding Digital Academy</p>
          </div>

          {/* Certificate Body */}
          <div className="p-12 text-center">
            <div className="mb-8">
              <p className="text-lg text-gray-600 mb-4">This is to certify that</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-4 border-b-2 border-gray-200 pb-2 inline-block">
                {user.fullName}
              </h2>
              <p className="text-lg text-gray-600 mb-8">has successfully completed the course</p>
              <h3 className="text-3xl font-bold text-blue-600 mb-8">
                {course.title}
              </h3>
            </div>

            {/* Course Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Modules Completed</h4>
                <p className="text-gray-600">{course.modules.length} Modules</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Course Level</h4>
                <p className="text-gray-600">{course.level}</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-3">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Date Completed</h4>
                <p className="text-gray-600">{currentDate}</p>
              </div>
            </div>

            {/* Signature Section */}
            <div className="border-t border-gray-200 pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="border-b-2 border-gray-300 mb-2 pb-1 mx-auto w-48"></div>
                  <p className="text-sm text-gray-600">Dr. Ahmad Rizki</p>
                  <p className="text-xs text-gray-500">Lead Instructor & Founder</p>
                </div>
                <div className="text-center">
                  <div className="border-b-2 border-gray-300 mb-2 pb-1 mx-auto w-48"></div>
                  <p className="text-sm text-gray-600">JagoCoding Academy</p>
                  <p className="text-xs text-gray-500">Digital Learning Platform</p>
                </div>
              </div>
            </div>

            {/* Certificate ID */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-xs text-gray-500">
                Certificate ID: LH-{courseId?.toUpperCase()}-{user.id}-{Date.now().toString().slice(-6)}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Verify at: jagocoding.com/verify
              </p>
            </div>
          </div>

          {/* Decorative Border */}
          <div className="h-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
        </div>

        {/* Actions */}
        <div className="mt-8 text-center print:hidden">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Congratulations!</h3>
            <p className="text-gray-600 mb-6">
              You have successfully completed {course.title}. Share your achievement with your network!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/dashboard"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Continue Learning
              </Link>
              <Link
                to="/digital-academy"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
              >
                Explore More Courses
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
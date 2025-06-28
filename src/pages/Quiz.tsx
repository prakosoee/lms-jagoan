import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { CheckCircle, X, ArrowLeft, ArrowRight, Trophy } from 'lucide-react';
import { useLearning } from '../contexts/LearningContext';

const Quiz = () => {
  const { courseId, moduleId } = useParams();
  const navigate = useNavigate();
  const { getCurrentCourse, getCurrentModule, getQuiz, passQuiz } = useLearning();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const course = getCurrentCourse(courseId!);
  const currentModule = getCurrentModule(courseId!, moduleId!);
  const quiz = getQuiz(courseId!, moduleId!);
  const currentModuleIndex = course?.modules.findIndex(m => m.id === moduleId) || 0;
  const nextModule = course?.modules[currentModuleIndex + 1];

  useEffect(() => {
    if (currentModule?.quizPassed) {
      setQuizCompleted(true);
    }
  }, [currentModule]);

  if (!course || !currentModule || !quiz) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quiz not found</h2>
          <Link to="/dashboard" className="text-blue-600 hover:text-blue-700">
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmitQuiz();
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmitQuiz = () => {
    let correctAnswers = 0;
    quiz.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctAnswers++;
      }
    });

    const finalScore = (correctAnswers / quiz.questions.length) * 100;
    setScore(finalScore);
    setShowResults(true);

    if (finalScore >= 80) {
      passQuiz(courseId!, moduleId!);
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setScore(0);
  };

  if (showResults) {
    return (
      <div className="min-h-screen pt-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${
              score >= 80 ? 'bg-green-100' : 'bg-red-100'
            }`}>
              {score >= 80 ? (
                <Trophy className="h-10 w-10 text-green-600" />
              ) : (
                <X className="h-10 w-10 text-red-600" />
              )}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {score >= 80 ? 'Congratulations!' : 'Quiz Failed'}
            </h2>

            <p className="text-xl text-gray-600 mb-6">
              Your score: <span className={`font-bold ${score >= 80 ? 'text-green-600' : 'text-red-600'}`}>
                {Math.round(score)}%
              </span>
            </p>

            <div className="mb-8">
              <p className="text-gray-600 mb-4">
                You answered {selectedAnswers.filter((answer, index) => answer === quiz.questions[index].correctAnswer).length} out of {quiz.questions.length} questions correctly.
              </p>
              {score >= 80 ? (
                <p className="text-green-600 font-semibold">
                  Great job! You can now proceed to the next module.
                </p>
              ) : (
                <p className="text-red-600 font-semibold">
                  You need at least 80% to pass. Please review the material and try again.
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {score >= 80 ? (
                <>
                  {nextModule ? (
                    <Link
                      to={`/learning/${courseId}/${nextModule.id}`}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                    >
                      Next Module
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Link>
                  ) : (
                    <Link
                      to="/dashboard"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                    >
                      <Trophy className="h-5 w-5 mr-2" />
                      Course Complete!
                    </Link>
                  )}
                  <Link
                    to="/dashboard"
                    className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
                  >
                    Back to Dashboard
                  </Link>
                </>
              ) : (
                <>
                  <button
                    onClick={resetQuiz}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    Retake Quiz
                  </button>
                  <Link
                    to={`/learning/${courseId}/${moduleId}`}
                    className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
                  >
                    Review Material
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (quizCompleted && !showResults) {
    return (
      <div className="min-h-screen pt-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quiz Already Completed</h2>
            <p className="text-gray-600 mb-8">
              You have already passed this quiz. You can proceed to the next module or return to your dashboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {nextModule ? (
                <Link
                  to={`/learning/${courseId}/${nextModule.id}`}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Next Module
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              ) : (
                <Link
                  to="/dashboard"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  <Trophy className="h-5 w-5 mr-2" />
                  Course Complete!
                </Link>
              )}
              <Link
                to="/dashboard"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
              >
                Back to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = quiz.questions[currentQuestion];

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6">
            <div className="flex items-center mb-4">
              <Link
                to={`/learning/${courseId}/${moduleId}`}
                className="inline-flex items-center text-white hover:text-blue-200 transition-colors duration-200 mr-4"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Module
              </Link>
            </div>
            <h1 className="text-2xl font-bold mb-2">Quiz: {currentModule.title}</h1>
            <div className="flex items-center justify-between">
              <p className="text-blue-100">
                Question {currentQuestion + 1} of {quiz.questions.length}
              </p>
              <div className="text-blue-100">
                Minimum score: 80%
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
            ></div>
          </div>

          {/* Question */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {question.question}
            </h2>

            <div className="space-y-4 mb-8">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                    selectedAnswers[currentQuestion] === index
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center ${
                      selectedAnswers[currentQuestion] === index
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}>
                      {selectedAnswers[currentQuestion] === index && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                    <span className="text-lg">{option}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={handlePrevQuestion}
                disabled={currentQuestion === 0}
                className="inline-flex items-center px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </button>

              <div className="text-sm text-gray-500">
                {selectedAnswers.filter(answer => answer !== undefined).length} of {quiz.questions.length} answered
              </div>

              <button
                onClick={handleNextQuestion}
                disabled={selectedAnswers[currentQuestion] === undefined}
                className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {currentQuestion === quiz.questions.length - 1 ? 'Submit Quiz' : 'Next'}
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
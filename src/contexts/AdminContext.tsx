import React, { createContext, useContext, useState, useEffect } from 'react';

interface Contributor {
  id: string;
  name: string;
  role: string;
  specialization: string;
  experience: string;
  image: string;
  bio: string;
  contributions: string;
  email: string;
  achievements: string[];
  social: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
}

interface Course {
  id: string;
  title: string;
  category: string;
  level: string;
  duration: string;
  students: number;
  rating: number;
  price: string;
  image: string;
  instructor: string;
  description: string;
  modules: CourseModule[];
}

interface CourseModule {
  id: string;
  title: string;
  type: 'video' | 'podcast' | 'text';
  content: string;
  duration: string;
}

interface Roadmap {
  id: string;
  title: string;
  icon: string;
  color: string;
  skills: string[];
  duration: string;
  projects: number;
}

interface Participant {
  id: string;
  fullName: string;
  email: string;
  username: string;
  phone: string;
  occupation: string;
  organization: string;
  referralSource: string;
  registrationDate: string;
  coursesEnrolled: string[];
  progress: number;
  certificatesEarned: number;
}

interface AdminContextType {
  contributors: Contributor[];
  courses: Course[];
  roadmaps: Roadmap[];
  participants: Participant[];
  addContributor: (contributor: Omit<Contributor, 'id'>) => void;
  updateContributor: (id: string, contributor: Partial<Contributor>) => void;
  deleteContributor: (id: string) => void;
  addCourse: (course: Omit<Course, 'id'>) => void;
  updateCourse: (id: string, course: Partial<Course>) => void;
  deleteCourse: (id: string) => void;
  addRoadmap: (roadmap: Omit<Roadmap, 'id'>) => void;
  updateRoadmap: (id: string, roadmap: Partial<Roadmap>) => void;
  deleteRoadmap: (id: string) => void;
  getParticipants: () => Participant[];
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

const initialContributors: Contributor[] = [
  {
    id: '1',
    name: "Dr. Ahmad Rizki",
    role: "Lead Instructor & Founder",
    specialization: "Full Stack Development",
    experience: "10+ years",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Former Senior Software Engineer at Google. Passionate about teaching and helping developers grow their careers in tech industry.",
    contributions: "Created 15+ courses, mentored 3000+ students",
    email: "ahmad@jagocoding.com",
    achievements: [
      "Google Developer Expert",
      "Microsoft MVP",
      "Tech Speaker at 20+ conferences"
    ],
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
      email: "ahmad@jagocoding.com"
    }
  },
  {
    id: '2',
    name: "Sarah Wijaya",
    role: "Frontend Specialist",
    specialization: "React & Modern Frontend",
    experience: "7+ years",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "UI/UX Engineer with extensive experience in React ecosystem. Loves creating beautiful and performant user interfaces.",
    contributions: "8 courses, 200+ tutorials, 1500+ students mentored",
    email: "sarah@jagocoding.com",
    achievements: [
      "React Community Contributor",
      "Open Source Maintainer",
      "Design Systems Expert"
    ],
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
      email: "sarah@jagocoding.com"
    }
  }
];

const initialCourses: Course[] = [
  {
    id: '1',
    title: "Complete React Developer",
    category: "Frontend",
    level: "Intermediate",
    duration: "40 hours",
    students: 1250,
    rating: 4.9,
    price: "Rp 299.000",
    image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600",
    instructor: "Sarah Wijaya",
    description: "Pelajari React dari dasar hingga mahir dengan project real-world",
    modules: [
      {
        id: 'react-1',
        title: 'Introduction to React',
        type: 'video',
        content: 'Learn the basics of React and component-based architecture',
        duration: '2 hours'
      }
    ]
  }
];

const initialRoadmaps: Roadmap[] = [
  {
    id: '1',
    title: "Frontend Development",
    icon: "Globe",
    color: "from-blue-500 to-cyan-500",
    skills: ["HTML & CSS", "JavaScript ES6+", "React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    duration: "6 months",
    projects: 8
  }
];

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [contributors, setContributors] = useState<Contributor[]>(initialContributors);
  const [courses, setCourses] = useState<Course[]>(initialCourses);
  const [roadmaps, setRoadmaps] = useState<Roadmap[]>(initialRoadmaps);
  const [participants, setParticipants] = useState<Participant[]>([]);

  useEffect(() => {
    // Load data from localStorage
    const storedContributors = localStorage.getItem('adminContributors');
    const storedCourses = localStorage.getItem('adminCourses');
    const storedRoadmaps = localStorage.getItem('adminRoadmaps');
    
    if (storedContributors) setContributors(JSON.parse(storedContributors));
    if (storedCourses) setCourses(JSON.parse(storedCourses));
    if (storedRoadmaps) setRoadmaps(JSON.parse(storedRoadmaps));
    
    // Load participants from users
    loadParticipants();
  }, []);

  useEffect(() => {
    localStorage.setItem('adminContributors', JSON.stringify(contributors));
  }, [contributors]);

  useEffect(() => {
    localStorage.setItem('adminCourses', JSON.stringify(courses));
  }, [courses]);

  useEffect(() => {
    localStorage.setItem('adminRoadmaps', JSON.stringify(roadmaps));
  }, [roadmaps]);

  const loadParticipants = () => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const learningProgress = JSON.parse(localStorage.getItem('learningProgress') || '[]');
    
    const participantData: Participant[] = users.map((user: any) => {
      const userProgress = learningProgress.find((p: any) => p.userId === user.id) || { courses: [] };
      const coursesEnrolled = userProgress.courses || [];
      const totalProgress = coursesEnrolled.reduce((acc: number, course: any) => acc + (course.progress || 0), 0);
      const avgProgress = coursesEnrolled.length > 0 ? totalProgress / coursesEnrolled.length : 0;
      const certificatesEarned = coursesEnrolled.filter((course: any) => course.certificateEarned).length;

      return {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        username: user.username,
        phone: user.phone || '',
        occupation: user.occupation || '',
        organization: user.organization || '',
        referralSource: user.referralSource || '',
        registrationDate: new Date(parseInt(user.id)).toLocaleDateString(),
        coursesEnrolled: coursesEnrolled.map((c: any) => c.title || c.id),
        progress: Math.round(avgProgress),
        certificatesEarned
      };
    });

    setParticipants(participantData);
  };

  const addContributor = (contributor: Omit<Contributor, 'id'>) => {
    const newContributor = {
      ...contributor,
      id: Date.now().toString()
    };
    setContributors(prev => [...prev, newContributor]);
  };

  const updateContributor = (id: string, updatedContributor: Partial<Contributor>) => {
    setContributors(prev => prev.map(contributor => 
      contributor.id === id ? { ...contributor, ...updatedContributor } : contributor
    ));
  };

  const deleteContributor = (id: string) => {
    setContributors(prev => prev.filter(contributor => contributor.id !== id));
  };

  const addCourse = (course: Omit<Course, 'id'>) => {
    const newCourse = {
      ...course,
      id: Date.now().toString()
    };
    setCourses(prev => [...prev, newCourse]);
  };

  const updateCourse = (id: string, updatedCourse: Partial<Course>) => {
    setCourses(prev => prev.map(course => 
      course.id === id ? { ...course, ...updatedCourse } : course
    ));
  };

  const deleteCourse = (id: string) => {
    setCourses(prev => prev.filter(course => course.id !== id));
  };

  const addRoadmap = (roadmap: Omit<Roadmap, 'id'>) => {
    const newRoadmap = {
      ...roadmap,
      id: Date.now().toString()
    };
    setRoadmaps(prev => [...prev, newRoadmap]);
  };

  const updateRoadmap = (id: string, updatedRoadmap: Partial<Roadmap>) => {
    setRoadmaps(prev => prev.map(roadmap => 
      roadmap.id === id ? { ...roadmap, ...updatedRoadmap } : roadmap
    ));
  };

  const deleteRoadmap = (id: string) => {
    setRoadmaps(prev => prev.filter(roadmap => roadmap.id !== id));
  };

  const getParticipants = () => {
    loadParticipants();
    return participants;
  };

  return (
    <AdminContext.Provider value={{
      contributors,
      courses,
      roadmaps,
      participants,
      addContributor,
      updateContributor,
      deleteContributor,
      addCourse,
      updateCourse,
      deleteCourse,
      addRoadmap,
      updateRoadmap,
      deleteRoadmap,
      getParticipants
    }}>
      {children}
    </AdminContext.Provider>
  );
};
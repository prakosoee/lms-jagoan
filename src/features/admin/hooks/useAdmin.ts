import { useState, useEffect } from 'react';
import { adminApi, Contributor, Course, Roadmap, Participant } from '../api/adminApi';

// Initial data for fallback
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

export const useAdmin = () => {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [roadmaps, setRoadmaps] = useState<Roadmap[]>([]);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Load initial data
  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = async () => {
    setIsLoading(true);
    try {
      // Load contributors
      const contributorsResponse = await adminApi.getContributors();
      if (contributorsResponse.success && contributorsResponse.data) {
        setContributors(contributorsResponse.data.length > 0 ? contributorsResponse.data : initialContributors);
      } else {
        setContributors(initialContributors);
      }

      // Load courses
      const coursesResponse = await adminApi.getCourses();
      if (coursesResponse.success && coursesResponse.data) {
        setCourses(coursesResponse.data.length > 0 ? coursesResponse.data : initialCourses);
      } else {
        setCourses(initialCourses);
      }

      // Load roadmaps
      const roadmapsResponse = await adminApi.getRoadmaps();
      if (roadmapsResponse.success && roadmapsResponse.data) {
        setRoadmaps(roadmapsResponse.data.length > 0 ? roadmapsResponse.data : initialRoadmaps);
      } else {
        setRoadmaps(initialRoadmaps);
      }

      // Load participants
      await getParticipants();
    } catch (error) {
      console.error('Error loading admin data:', error);
      // Set fallback data
      setContributors(initialContributors);
      setCourses(initialCourses);
      setRoadmaps(initialRoadmaps);
    } finally {
      setIsLoading(false);
    }
  };

  // Contributors management
  const addContributor = async (contributor: Omit<Contributor, 'id'>): Promise<boolean> => {
    try {
      const response = await adminApi.addContributor(contributor);
      if (response.success && response.data) {
        setContributors(prev => [...prev, response.data!]);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error adding contributor:', error);
      return false;
    }
  };

  const updateContributor = async (id: string, contributor: Partial<Contributor>): Promise<boolean> => {
    try {
      const response = await adminApi.updateContributor(id, contributor);
      if (response.success) {
        setContributors(prev => prev.map(c => c.id === id ? { ...c, ...contributor } : c));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error updating contributor:', error);
      return false;
    }
  };

  const deleteContributor = async (id: string): Promise<boolean> => {
    try {
      const response = await adminApi.deleteContributor(id);
      if (response.success) {
        setContributors(prev => prev.filter(c => c.id !== id));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error deleting contributor:', error);
      return false;
    }
  };

  // Courses management
  const addCourse = async (course: Omit<Course, 'id'>): Promise<boolean> => {
    try {
      const response = await adminApi.addCourse(course);
      if (response.success && response.data) {
        setCourses(prev => [...prev, response.data!]);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error adding course:', error);
      return false;
    }
  };

  const updateCourse = async (id: string, course: Partial<Course>): Promise<boolean> => {
    try {
      const response = await adminApi.updateCourse(id, course);
      if (response.success) {
        setCourses(prev => prev.map(c => c.id === id ? { ...c, ...course } : c));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error updating course:', error);
      return false;
    }
  };

  const deleteCourse = async (id: string): Promise<boolean> => {
    try {
      const response = await adminApi.deleteCourse(id);
      if (response.success) {
        setCourses(prev => prev.filter(c => c.id !== id));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error deleting course:', error);
      return false;
    }
  };

  // Roadmaps management
  const addRoadmap = async (roadmap: Omit<Roadmap, 'id'>): Promise<boolean> => {
    try {
      const response = await adminApi.addRoadmap(roadmap);
      if (response.success && response.data) {
        setRoadmaps(prev => [...prev, response.data!]);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error adding roadmap:', error);
      return false;
    }
  };

  const updateRoadmap = async (id: string, roadmap: Partial<Roadmap>): Promise<boolean> => {
    try {
      const response = await adminApi.updateRoadmap(id, roadmap);
      if (response.success) {
        setRoadmaps(prev => prev.map(r => r.id === id ? { ...r, ...roadmap } : r));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error updating roadmap:', error);
      return false;
    }
  };

  const deleteRoadmap = async (id: string): Promise<boolean> => {
    try {
      const response = await adminApi.deleteRoadmap(id);
      if (response.success) {
        setRoadmaps(prev => prev.filter(r => r.id !== id));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error deleting roadmap:', error);
      return false;
    }
  };

  // Participants management
  const getParticipants = async (): Promise<void> => {
    try {
      const response = await adminApi.getParticipants();
      if (response.success && response.data) {
        setParticipants(response.data);
      }
    } catch (error) {
      console.error('Error loading participants:', error);
    }
  };

  return {
    contributors,
    courses,
    roadmaps,
    participants,
    isLoading,
    addContributor,
    updateContributor,
    deleteContributor,
    addCourse,
    updateCourse,
    deleteCourse,
    addRoadmap,
    updateRoadmap,
    deleteRoadmap,
    getParticipants,
    refreshData
  };
};
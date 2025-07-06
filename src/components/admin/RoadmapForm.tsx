import React, { useState, useEffect } from 'react';
import { X, MapPin, Clock, Code, Plus, Trash2 } from 'lucide-react';

interface Roadmap {
  id: string;
  title: string;
  icon: string;
  color: string;
  skills: string[];
  duration: string;
  projects: number;
}

interface RoadmapFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (roadmap: Omit<Roadmap, 'id'>) => void;
  onUpdate: (id: string, roadmap: Partial<Roadmap>) => void;
  roadmap?: Roadmap;
  mode: 'add' | 'edit';
}

const RoadmapForm: React.FC<RoadmapFormProps> = ({
  isOpen,
  onClose,
  onSubmit,
  onUpdate,
  roadmap,
  mode
}) => {
  const [formData, setFormData] = useState({
    title: '',
    icon: 'Globe',
    color: 'from-blue-500 to-cyan-500',
    skills: [''],
    duration: '',
    projects: 0
  });

  const iconOptions = [
    { value: 'Globe', label: 'Globe' },
    { value: 'Server', label: 'Server' },
    { value: 'Layers', label: 'Layers' },
    { value: 'Code', label: 'Code' },
    { value: 'Database', label: 'Database' },
    { value: 'Smartphone', label: 'Smartphone' }
  ];

  const colorOptions = [
    { value: 'from-blue-500 to-cyan-500', label: 'Blue to Cyan' },
    { value: 'from-purple-500 to-pink-500', label: 'Purple to Pink' },
    { value: 'from-green-500 to-teal-500', label: 'Green to Teal' },
    { value: 'from-orange-500 to-red-500', label: 'Orange to Red' },
    { value: 'from-indigo-500 to-purple-500', label: 'Indigo to Purple' },
    { value: 'from-yellow-500 to-orange-500', label: 'Yellow to Orange' }
  ];

  useEffect(() => {
    if (mode === 'edit' && roadmap) {
      setFormData({
        title: roadmap.title,
        icon: roadmap.icon,
        color: roadmap.color,
        skills: roadmap.skills.length > 0 ? roadmap.skills : [''],
        duration: roadmap.duration,
        projects: roadmap.projects
      });
    } else {
      setFormData({
        title: '',
        icon: 'Globe',
        color: 'from-blue-500 to-cyan-500',
        skills: [''],
        duration: '',
        projects: 0
      });
    }
  }, [mode, roadmap, isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'projects' ? Number(value) : value
    }));
  };

  const handleSkillChange = (index: number, value: string) => {
    const newSkills = [...formData.skills];
    newSkills[index] = value;
    setFormData(prev => ({
      ...prev,
      skills: newSkills
    }));
  };

  const addSkill = () => {
    setFormData(prev => ({
      ...prev,
      skills: [...prev.skills, '']
    }));
  };

  const removeSkill = (index: number) => {
    if (formData.skills.length > 1) {
      const newSkills = formData.skills.filter((_, i) => i !== index);
      setFormData(prev => ({
        ...prev,
        skills: newSkills
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const roadmapData = {
      ...formData,
      skills: formData.skills.filter(skill => skill.trim() !== '')
    };

    if (mode === 'edit' && roadmap) {
      onUpdate(roadmap.id, roadmapData);
    } else {
      onSubmit(roadmapData);
    }
    
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            {mode === 'edit' ? 'Edit Roadmap' : 'Add New Roadmap'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Roadmap Title *
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Frontend Development"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Icon *
              </label>
              <select
                name="icon"
                value={formData.icon}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                {iconOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Color Theme *
              </label>
              <select
                name="color"
                value={formData.color}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                {colorOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration *
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="6 months"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Projects *
              </label>
              <div className="relative">
                <Code className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="number"
                  name="projects"
                  value={formData.projects}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="8"
                  min="0"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Skills Covered *
              </label>
              <button
                type="button"
                onClick={addSkill}
                className="inline-flex items-center px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <Plus className="h-4 w-4 mr-1" />
                Add Skill
              </button>
            </div>
            
            <div className="space-y-3">
              {formData.skills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="relative flex-1">
                    <Code className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      value={skill}
                      onChange={(e) => handleSkillChange(index, e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="HTML & CSS"
                    />
                  </div>
                  {formData.skills.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeSkill(index)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              {mode === 'edit' ? 'Update Roadmap' : 'Add Roadmap'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RoadmapForm;
import React, { useState } from 'react';

// A small 'X' icon for the skill tags
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const CreateJobSkills = ({ formData, handleInputChange, setFormData }) => {
  // Local state to manage the current text in the skill input field
  const [currentSkill, setCurrentSkill] = useState('');

  // Handle adding a new skill when the user presses 'Enter'
  const handleSkillKeyDown = (e) => {
    if (e.key === 'Enter' && currentSkill.trim() !== '') {
      e.preventDefault(); // Prevent form submission on Enter
      // Add the new skill to the main formData state
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, currentSkill.trim()],
      }));
      // Clear the input field
      setCurrentSkill('');
    }
  };

  // Handle removing a skill when the 'x' is clicked
  const handleRemoveSkill = (indexToRemove) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, index) => index !== indexToRemove),
    }));
  };

  return (
    <div>
      {/* Required Skills Input */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-white mb-1 drop-shadow">
          Required Skills
        </label>
        <div className="flex flex-wrap items-center gap-2 p-2 border border-gray-300 rounded-lg">
          {formData.skills.map((skill, index) => (
            <div key={index} className="flex items-center gap-2 bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
              <span>{skill}</span>
              <button type="button" onClick={() => handleRemoveSkill(index)} className="hover:text-red-500">
                <CloseIcon />
              </button>
            </div>
          ))}
          <input
            type="text"
            value={currentSkill}
            onChange={(e) => setCurrentSkill(e.target.value)}
            onKeyDown={handleSkillKeyDown}
            placeholder="Type and add skills"
            className="flex-grow p-1 focus:outline-none text-cyan-100 placeholder:text-cyan-100"
          />
        </div>
      </div>

      {/* Salary Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="minSalary" className="block text-sm font-semibold text-white mb-1 drop-shadow">
            Minimum Salary (₹)
          </label>
          <input
            id="minSalary"
            name="minSalary"
            type="number"
            placeholder="Enter minimum salary"
            value={formData.minSalary}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-cyan-100 placeholder:text-cyan-100"
          />
        </div>
        <div>
          <label htmlFor="maxSalary" className="block text-sm font-semibold text-white mb-1 drop-shadow">
            Maximum Salary (₹)
          </label>
          <input
            id="maxSalary"
            name="maxSalary"
            type="number"
            placeholder="Enter maximum salary"
            value={formData.maxSalary}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-cyan-100 placeholder:text-cyan-100"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateJobSkills;
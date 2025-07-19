import React from 'react';

// A reusable textarea component
const FormTextArea = ({ label, name, value, onChange, placeholder, rows = 5 }) => (
  <div className="mb-6">
    <label htmlFor={name} className="block text-md font-semibold text-white mb-2 drop-shadow">
      {label}
    </label>
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-cyan-100 placeholder:text-cyan-100"
    />
  </div>
);

// The main component for Step 2
const CreateJobDescription = ({ formData, handleInputChange }) => (
  <>
    <FormTextArea
      label="Description & Qualifications"
      name="description"
      value={formData.description}
      onChange={handleInputChange}
    />
    <FormTextArea
      label="Key Responsibilities"
      name="responsibilities"
      value={formData.responsibilities}
      onChange={handleInputChange}
    />
    <FormTextArea
      label="Required Qualifications"
      name="qualifications"
      value={formData.qualifications}
      onChange={handleInputChange}
    />
    
    {/* Tips Section */}
    <div className="mt-8 p-4 bg-gray-50 rounded-lg flex items-center gap-6">
      <div className="flex-shrink-0">
        <img 
          src="https://i.pinimg.com/736x/76/d2/4c/76d24cada93fc6f23b940d6b743e8e42.jpg" // Placeholder image similar to your UI
          alt="Illustration of a person writing"
          className="w-32 h-32 object-cover rounded-lg" 
        />
      </div>
      <div>
        <h4 className="font-bold text-gray-800">Tips for a Great Job Post</h4>
        <p className="text-sm text-gray-600 mt-1">
          Use clear and concise language. Highlight the key responsibilities and qualifications.
          Showcase your company culture and values.
        </p>
      </div>
    </div>
  </>
);

export default CreateJobDescription;
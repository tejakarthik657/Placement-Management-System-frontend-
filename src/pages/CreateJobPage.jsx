import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import all the components for each step
import CreateJobCoreDetails from '../components/recruiter/createjob/CreateJobCoreDetails';
import CreateJobDescription from '../components/recruiter/createjob/CreateJobDescription';
import CreateJobSkills from '../components/recruiter/createjob/CreateJobSkills';
import CreateJobSuccess from '../components/recruiter/createjob/CreateJobSuccess';

// Data for each step's title and breadcrumb
const stepDetails = {
  1: { title: 'Create New Job', breadcrumb: '' },
  2: { title: 'Description & Qualifications', breadcrumb: 'Description' },
  3: { title: 'Skills & Salary', breadcrumb: 'Skills & Salary' },
  4: { title: 'Job Posted!', breadcrumb: 'Success' },
};

// Main Page Component
const CreateJobPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    jobTitle: '',
    location: '',
    jobType: '',
    description: '',
    responsibilities: '',
    qualifications: '',
    skills: [],
    minSalary: '',
    maxSalary: '',
  });

  // --- THIS IS THE MISSING FUNCTION THAT CAUSED THE ERROR ---
  // This function handles updates from any input field.
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };
  // -----------------------------------------------------------

  const totalSteps = 4;

  const handleNext = () => {
    if (currentStep === 3) {
      console.log("FINAL FORM DATA SUBMITTED:", formData);
      setCurrentStep(prev => prev + 1);
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => setCurrentStep(prev => prev - 1);

  const renderStep = () => {
    // Now this switch statement will work because `handleInputChange` is defined above.
    switch (currentStep) {
      case 1:
        return <CreateJobCoreDetails formData={formData} handleInputChange={handleInputChange} />;
      case 2:
        return <CreateJobDescription formData={formData} handleInputChange={handleInputChange} />;
      case 3:
        return <CreateJobSkills formData={formData} handleInputChange={handleInputChange} setFormData={setFormData} />;
      case 4:
        return <CreateJobSuccess onGoToDashboard={() => navigate('/recruiter/dashboard')} />;
      default:
        return <CreateJobCoreDetails formData={formData} handleInputChange={handleInputChange} />;
    }
  };

  return (
    <div className="min-h-screen">
      <main className="container mx-auto p-6 lg:p-8 max-w-3xl">
        {currentStep < totalSteps && (
          <div className="mb-8">
            <p className="text-sm text-cyan-200 drop-shadow">
              Jobs / Create New Job {stepDetails[currentStep].breadcrumb && `/ ${stepDetails[currentStep].breadcrumb}`}
            </p>
            <h1 className="text-3xl font-bold text-white mt-2 drop-shadow-lg !text-white">{stepDetails[currentStep].title}</h1>
          </div>
        )}
        
        <div className="mt-6">
          {renderStep()}
        </div>

        {currentStep < totalSteps && (
          <div className="mt-10 flex items-center justify-end">
            <div className="flex items-center gap-4">
              {currentStep > 1 && (
                <button
                  onClick={handleBack}
                  className="py-2 px-6 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Back
                </button>
              )}
              <button
                onClick={handleNext}
                className="py-2 px-8 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default CreateJobPage;
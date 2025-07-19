import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// Import all the components for each step
import CreateJobCoreDetails from '../components/recruiter/createjob/CreateJobCoreDetails';
import CreateJobDescription from '../components/recruiter/createjob/CreateJobDescription';
import CreateJobSkills from '../components/recruiter/createjob/CreateJobSkills';
import CreateJobSuccess from '../components/recruiter/createjob/CreateJobSuccess'; // Import the new success component

// Data for each step's title
const stepDetails = {
  1: { title: 'Create New Job', breadcrumb: '' },
  2: { title: 'Description & Qualifications', breadcrumb: 'Description' },
  3: { title: 'Skills & Salary', breadcrumb: 'Skills & Salary' },
  // Step 4 (success) doesn't need a title here as we'll hide the header
};

// Main Page Component
const CreateJobPage = () => {
  const navigate = useNavigate(); // Initialize navigate
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const totalSteps = 4;

  const handleNext = () => {
    // If we are on the last form step (Step 3), "submit" the form
    if (currentStep === 3) {
      // In a real application, you would send this data to your backend API
      console.log("FINAL FORM DATA SUBMITTED:", formData);
      // Then, proceed to the success screen (Step 4)
      setCurrentStep(prev => prev + 1);
    } else {
      // Otherwise, just go to the next step
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => setCurrentStep(prev => prev - 1);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <CreateJobCoreDetails formData={formData} handleInputChange={handleInputChange} />;
      case 2:
        return <CreateJobDescription formData={formData} handleInputChange={handleInputChange} />;
      case 3:
        return <CreateJobSkills formData={formData} handleInputChange={handleInputChange} setFormData={setFormData} />;
      case 4:
        // Render the success component and pass the navigation function
        return <CreateJobSuccess onGoToDashboard={() => navigate('/recruiter/dashboard')} />;
      default:
        return <CreateJobCoreDetails formData={formData} handleInputChange={handleInputChange} />;
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <main className="container mx-auto p-6 lg:p-8 max-w-3xl">
        
        {/* --- Conditionally render the header. Hide it on the success screen. --- */}
        {currentStep < totalSteps && (
          <div className="mb-8">
            <p className="text-sm text-gray-500">
              Jobs / Create New Job {stepDetails[currentStep].breadcrumb && `/ ${stepDetails[currentStep].breadcrumb}`}
            </p>
            <h1 className="text-3xl font-bold text-gray-900 mt-2">{stepDetails[currentStep].title}</h1>
          </div>
        )}
        
        {/* Render the current step's component */}
        <div className="mt-6">
          {renderStep()}
        </div>

        {/* --- Conditionally render navigation buttons. Hide them on the success screen. --- */}
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
                className="py-2 px-8 bg-black text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
              >
                {/* On step 3, the button text is still "Next", but the action is to submit */}
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
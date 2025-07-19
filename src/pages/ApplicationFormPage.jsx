import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// Import the new components
import ProgressBar from '../components/ui/ProgressBar';
import PersonalDetailsForm from '../components/application/PersonalDetailsForm';
import ResumeUploadForm from '../components/application/ResumeUploadForm';
import ApplicationSuccess from '../components/application/ApplicationSuccess';

const ApplicationFormPage = () => {
  const { jobId } = useParams();
  const totalSteps = 2;
  const stepNames = ['Personal', 'Add Your Resume'];

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '',
    linkedin: '', github: '', location: '',
    resume: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (file) => {
    setFormData(prev => ({ ...prev, resume: file }));
    console.log("File selected:", file.name);
  };
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    } else {
      console.log('Submitting final application for Job ID:', jobId);
      console.log('Final Data:', formData);
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return <ApplicationSuccess />;
  }

  return (
    <div className="container mx-auto max-w-2xl py-10">
      <div className="mb-10">
        <p className="text-sm font-semibold text-slate-600 mb-2">
          Step {currentStep}/{totalSteps}: {stepNames[currentStep - 1]}
        </p>
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      </div>
      <h1 className="text-4xl font-bold text-white text-center mb-10 drop-shadow-lg">
        {currentStep === 1 ? "Let's get to know you" : "Final Step: Add Your Resume"}
      </h1>
      <form onSubmit={handleFormSubmit}>
        {currentStep === 1 && <PersonalDetailsForm formData={formData} handleInputChange={handleInputChange} />}
        {currentStep === 2 && <ResumeUploadForm onFileChange={handleFileChange} />}
        <div className="flex justify-end mt-8">
          <button type="submit" className={`font-semibold px-6 py-2 rounded-full transition-colors ${
            currentStep === totalSteps 
            ? 'bg-slate-800 text-white hover:bg-slate-700' 
            : 'bg-slate-200 text-slate-800 hover:bg-slate-300'
          }`}>
            {currentStep === totalSteps ? 'Submit My Application' : 'Next'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationFormPage;
import FormInput from '../../ui/FormInput'; // Reusing the generic input

const CreateJobCoreDetails = ({ formData, handleInputChange }) => (
  <div className="p-6 bg-black/30 rounded-lg border border-gray-300 shadow-lg">
    <FormInput
      label="Job Title"
      name="jobTitle"
      type="text"
      placeholder="e.g., Software Engineer"
      value={formData.jobTitle}
      onChange={handleInputChange}
    />
    <FormInput
      label="Location"
      name="location"
      type="text"
      placeholder="Select"
      value={formData.location}
      onChange={handleInputChange}
    />
    <FormInput
      label="Job Type"
      name="jobType"
      type="text"
      placeholder="Select"
      value={formData.jobType}
      onChange={handleInputChange}
    />
  </div>
);

export default CreateJobCoreDetails;
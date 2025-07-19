import FormInput from '../ui/FormInput'; // Import the reusable input

const PersonalDetailsForm = ({ formData, handleInputChange }) => {
  return (
    <>
      <FormInput label="Full Name" name="fullName" type="text" placeholder="Enter your full name" value={formData.fullName} onChange={handleInputChange} />
      <FormInput label="Email" name="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleInputChange} />
      <FormInput label="Phone Number" name="phone" type="tel" placeholder="Enter your phone number" value={formData.phone} onChange={handleInputChange} />
      <FormInput label="LinkedIn URL" name="linkedin" type="url" placeholder="Enter your LinkedIn profile URL" value={formData.linkedin} onChange={handleInputChange} />
      <FormInput label="GitHub/Portfolio URL" name="github" type="url" placeholder="Enter your GitHub or portfolio URL" value={formData.github} onChange={handleInputChange} />
      <FormInput label="Location" name="location" type="text" placeholder="Enter your location" value={formData.location} onChange={handleInputChange} />
    </>
  );
};

export default PersonalDetailsForm;
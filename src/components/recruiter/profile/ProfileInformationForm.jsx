import FormInput from '../../ui/FormInput';

const ProfileInformationForm = ({ profileData, onChange }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
    <h2 className="text-xl font-bold text-slate-800 border-b border-slate-200 pb-4 mb-6">Profile Information</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormInput label="Full Name" name="fullName" type="text" value={profileData.fullName} onChange={onChange} />
      <FormInput label="Email Address" name="email" type="email" value={profileData.email} onChange={onChange} />
      <FormInput label="Company Name" name="company" type="text" value={profileData.company} onChange={onChange} />
      <FormInput label="Role / Title" name="role" type="text" value={profileData.role} onChange={onChange} />
    </div>
  </div>
);

export default ProfileInformationForm;
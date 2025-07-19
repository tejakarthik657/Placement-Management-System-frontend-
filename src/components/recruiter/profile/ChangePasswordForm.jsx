import FormInput from '../../ui/FormInput';

const ChangePasswordForm = ({ passwordData, onChange }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
    <h2 className="text-xl font-bold text-slate-800 border-b border-slate-200 pb-4 mb-6">Change Password</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormInput label="Current Password" name="currentPassword" type="password" value={passwordData.currentPassword} onChange={onChange} />
      <FormInput label="New Password" name="newPassword" type="password" value={passwordData.newPassword} onChange={onChange} />
    </div>
  </div>
);

export default ChangePasswordForm;
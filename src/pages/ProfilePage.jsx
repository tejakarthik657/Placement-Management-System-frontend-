import React, { useState } from 'react';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import PageHeader from '../components/ui/PageHeader';
import ProfileInformationForm from '../components/recruiter/profile/ProfileInformationForm';
import ChangePasswordForm from '../components/recruiter/profile/ChangePasswordForm';
import DangerZone from '../components/recruiter/profile/DangerZone';

const ProfilePage = () => {
  // Mock data - in a real app, this would come from an API
  const [profileData, setProfileData] = useState({
    fullName: 'Sophia Clark',
    email: 'sophia.clark@example.com',
    company: 'Tech Innovators Inc.',
    role: 'Senior Recruiter',
  });
  
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
  });

  const handleProfileChange = (e) => setProfileData({ ...profileData, [e.target.name]: e.target.value });
  const handlePasswordChange = (e) => setPasswordData({ ...passwordData, [e.target.name]: e.target.value });

  const handleSaveChanges = (e) => {
    e.preventDefault();
    // API call to save profile and/or password would go here
    console.log("Saving changes:", { profileData, passwordData });
    alert("Changes saved successfully!");
  };

  return (
    <div className="min-h-screen">
      <DashboardHeader />
      <main className="container mx-auto p-6 lg:p-8">
        <PageHeader 
          title="Your Profile"
          subtitle="Manage your personal information, password, and account settings."
        />
        <form onSubmit={handleSaveChanges} className="space-y-8">
          <ProfileInformationForm profileData={profileData} onChange={handleProfileChange} />
          <ChangePasswordForm passwordData={passwordData} onChange={handlePasswordChange} />
          <DangerZone />
          <div className="flex justify-end pt-4">
            <button type="submit" className="bg-slate-800 text-white font-semibold px-6 py-2 rounded-lg hover:bg-slate-700">
              Save All Changes
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ProfilePage;
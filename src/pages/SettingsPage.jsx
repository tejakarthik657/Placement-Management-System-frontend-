import React, { useState } from 'react';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import PageHeader from '../components/ui/PageHeader';
import NotificationSettings from '../components/recruiter/settings/NotificationSettings';

const SettingsPage = () => {
  // Mock data - in a real app, this would be fetched and updated via an API
  const [settings, setSettings] = useState({
    newApplicantAlerts: true,
    interviewReminders: true,
    weeklySummary: false,
  });

  const handleToggle = (settingName) => {
    setSettings(prev => ({ ...prev, [settingName]: !prev[settingName] }));
  };
  
  const handleSaveSettings = (e) => {
    e.preventDefault();
    // API call to save settings would go here
    console.log("Saving settings:", settings);
    alert("Settings saved successfully!");
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <DashboardHeader />
      <main className="container mx-auto p-6 lg:p-8">
        <PageHeader
          title="Settings"
          subtitle="Manage your notification preferences and other account settings."
        />
        <form onSubmit={handleSaveSettings} className="space-y-8 max-w-3xl">
          <NotificationSettings settings={settings} onToggle={handleToggle} />
          {/* You could add more settings components here, like <AccountPreferences /> */}
          <div className="flex justify-end pt-4">
            <button type="submit" className="bg-slate-800 text-white font-semibold px-6 py-2 rounded-lg hover:bg-slate-700">
              Save Settings
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default SettingsPage;
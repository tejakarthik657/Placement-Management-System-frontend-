import SettingsToggle from './SettingsToggle';

const NotificationSettings = ({ settings, onToggle }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
    <h2 className="text-xl font-bold text-slate-800 border-b border-slate-200 pb-4 mb-2">Notifications</h2>
    <div className="divide-y divide-slate-200">
      <SettingsToggle 
        label="New Applicant Alerts"
        description="Get an email when a new candidate applies for a job."
        enabled={settings.newApplicantAlerts}
        onToggle={() => onToggle('newApplicantAlerts')}
      />
      <SettingsToggle 
        label="Interview Reminders"
        description="Receive reminders for upcoming interviews."
        enabled={settings.interviewReminders}
        onToggle={() => onToggle('interviewReminders')}
      />
      <SettingsToggle 
        label="Weekly Summary"
        description="Get a weekly report of your recruitment activity."
        enabled={settings.weeklySummary}
        onToggle={() => onToggle('weeklySummary')}
      />
    </div>
  </div>
);

export default NotificationSettings;
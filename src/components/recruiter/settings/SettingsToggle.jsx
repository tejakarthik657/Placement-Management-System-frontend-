const SettingsToggle = ({ label, description, enabled, onToggle }) => (
  <div className="flex justify-between items-center py-4">
    <div>
      <h3 className="font-semibold text-slate-800">{label}</h3>
      <p className="text-sm text-slate-500">{description}</p>
    </div>
    <button
      type="button"
      onClick={onToggle}
      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 ${
        enabled ? 'bg-slate-800' : 'bg-gray-200'
      }`}
    >
      <span
        aria-hidden="true"
        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
          enabled ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </button>
  </div>
);

export default SettingsToggle;
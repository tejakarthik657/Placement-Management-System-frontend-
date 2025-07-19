const DangerZone = () => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-red-200">
    <h2 className="text-xl font-bold text-red-700 border-b border-red-200 pb-4 mb-6">Danger Zone</h2>
    <div className="flex justify-between items-center">
      <div>
        <h3 className="font-semibold text-slate-800">Delete Account</h3>
        <p className="text-sm text-slate-500">Once you delete your account, there is no going back. Please be certain.</p>
      </div>
      <button className="bg-red-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
        Delete My Account
      </button>
    </div>
  </div>
);

export default DangerZone;
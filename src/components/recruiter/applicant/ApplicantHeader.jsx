const ApplicantHeader = ({ name, status, score, avatarUrl }) => (
  <div className="flex items-center gap-4">
    <img src={avatarUrl} alt={name} className="h-20 w-20 rounded-full object-cover" />
    <div>
      <h2 className="text-3xl font-bold text-slate-800">{name}</h2>
      <p className="text-slate-500">{status}</p>
      <p className="text-sm font-semibold text-slate-600 mt-1">Match Score: {score}</p>
    </div>
  </div>
);
export default ApplicantHeader;
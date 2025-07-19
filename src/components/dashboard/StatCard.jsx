const StatCard = ({ title, value }) => (
  <div className="bg-slate-100 p-6 rounded-xl shadow-sm">
    <p className="text-sm text-slate-500">{title}</p>
    <p className="text-3xl font-bold text-slate-800 mt-1">{value}</p>
  </div>
);

export default StatCard;
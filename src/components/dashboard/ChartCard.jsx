const ChartCard = ({ title, children }) => (
  <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
    <h3 className="text-lg font-semibold text-slate-800 mb-1">{title}</h3>
    {children}
  </div>
);

export default ChartCard;
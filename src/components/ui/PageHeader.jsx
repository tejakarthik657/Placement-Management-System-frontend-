const PageHeader = ({ title, subtitle }) => (
  <div className="mb-8">
    <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
    <p className="text-slate-500 mt-2">{subtitle}</p>
  </div>
);

export default PageHeader;
const DetailItem = ({ label, value }) => (
  <div>
    <h4 className="text-sm font-semibold text-slate-500">{label}</h4>
    <p className="text-slate-800">{value}</p>
  </div>
);

const ApplicationDetails = () => (
  <div className="mt-8">
    <h3 className="text-xl font-bold mb-4">Application Details</h3>
    <div className="grid grid-cols-2 gap-x-8 gap-y-4 p-4 border-y border-slate-200">
      <DetailItem label="Contact" value="sophia.clark@email.com | (555) 123-4567" />
      <DetailItem label="Education" value="Master of Science in Computer Science, Stanford University" />
      <DetailItem label="Skills" value="Java, Python, SQL, Machine Learning, Data Analysis" />
      <DetailItem label="Experience" value="Software Engineer at TechCorp (2018-Present)" />
    </div>
  </div>
);
export default ApplicationDetails;
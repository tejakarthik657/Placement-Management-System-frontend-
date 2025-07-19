const DetailItem = ({ label, value }) => (
  <div>
    <h4 className="text-sm font-semibold text-slate-500">{label}</h4>
    <p className="text-white drop-shadow">{value}</p>
  </div>
);

const ApplicationDetails = () => (
  <div className="mt-8">
    <h3 className="text-xl font-bold text-white drop-shadow mb-4">Application Details</h3>
    <div className="grid grid-cols-2 gap-x-8 gap-y-4 p-4 border-y border-slate-200 bg-black/10 rounded-xl">
      <DetailItem label={<span className="text-white drop-shadow">Resume</span>} value="sophia.clark@email.com | (555) 123-4567" />
      <DetailItem label={<span className="text-white drop-shadow">Education</span>} value="Master of Science in Computer Science, Stanford University" />
      <DetailItem label={<span className="text-white drop-shadow">Skills</span>} value="Java, Python, SQL, Machine Learning, Data Analysis" />
      <DetailItem label={<span className="text-white drop-shadow">Experience</span>} value="Software Engineer at TechCorp (2018-Present)" />
    </div>
  </div>
);
export default ApplicationDetails;
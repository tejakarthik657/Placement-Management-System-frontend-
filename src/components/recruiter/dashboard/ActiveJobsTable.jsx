import { Link } from 'react-router-dom';

// MOCK DATA: In a real app, this data would come from your backend.
// Note that each job has a unique 'id' property.
const MOCK_JOBS_DATA = [
  { id: 1, title: 'Senior Software Engineer', department: 'Engineering', location: 'Remote', applicants: 25, status: 'Open' },
  { id: 2, title: 'Product Manager', department: 'Product', location: 'New York', applicants: 15, status: 'Open' },
  { id: 3, title: 'UX Designer', department: 'Design', location: 'San Francisco', applicants: 30, status: 'Open' },
  { id: 4, title: 'Data Scientist', department: 'Analytics', location: 'Remote', applicants: 20, status: 'Open' },
  { id: 5, title: 'Marketing Manager', department: 'Marketing', location: 'Chicago', applicants: 10, status: 'Open' },
];

const ActiveJobsTable = () => (
  <div className="bg-white rounded-lg shadow-sm border border-slate-200 mt-6">
    <div className="grid grid-cols-6 gap-4 p-4 font-semibold text-sm text-slate-500 border-b border-slate-200">
      <div className="col-span-2">Job Title</div>
      <div>Department</div>
      <div>Location</div>
      <div>Applicants</div>
      <div>Status</div>
      {/* Empty header for the "View" action column */}
      <div></div>
    </div>
    <div className="divide-y divide-slate-200">
      {MOCK_JOBS_DATA.map(job => (
        <div key={job.id} className="grid grid-cols-6 gap-4 p-4 items-center">
          <p className="font-bold text-slate-800 col-span-2">{job.title}</p>
          <p className="text-slate-600">{job.department}</p>
          <p className="text-slate-600">{job.location}</p>
          <p className="text-slate-600">{job.applicants}</p>
          <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full w-fit">
            {job.status}
          </span>
          
          {/* --- THIS IS THE CRITICAL LINE TO FIX --- */}
          {/* It uses 'applicants' (plural) and includes the job.id */}
          <Link 
            to={`/recruiter/applicants/${job.id}`} 
            className="font-semibold text-indigo-600 hover:text-indigo-800"
          >
            View
          </Link>
          
        </div>
      ))}
    </div>
  </div>
);

export default ActiveJobsTable;
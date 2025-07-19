import { Link } from 'react-router-dom';
// These paths go UP one level from `pages`, then DOWN into `components`
import DashboardHeader from '../components/dashboard/DashboardHeader';
import RecruiterStatCard from '../components/recruiter/dashboard/RecruiterStatCard';
import ActiveJobsTable from '../components/recruiter/dashboard/ActiveJobsTable';

const RecruiterDashboardPage = () => {
  return (
    <div className="container mx-auto max-w-4xl py-10">
      <DashboardHeader />
      <h2 className="text-3xl font-extrabold text-white drop-shadow-lg mt-8">Recruiter Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <RecruiterStatCard title="Total Open Positions" value="12" />
        <RecruiterStatCard title="New Applicants" value="45" />
        <RecruiterStatCard title="Candidates in Interview Stage" value="18" />
      </div>
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-white drop-shadow-lg">Active Jobs</h3>
        <Link to="/recruiter/jobs/new" className="bg-slate-800 text-white font-semibold px-4 py-2 rounded-lg hover:bg-slate-700">
          Create New Job Posting
        </Link>
      </div>
      <ActiveJobsTable />
    </div>
  );
};

export default RecruiterDashboardPage;
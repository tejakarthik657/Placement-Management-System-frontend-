// src/pages/CollegeDashboard.jsx

import DashboardHeader from '../components/dashboard/DashboardHeader';
import StatCard from '../components/dashboard/StatCard';
import PlacementsByDeptChart from '../components/dashboard/PlacementsByDeptChart';
import PlacementsByCompanyChart from '../components/dashboard/PlacementsByCompanyChart';
import StudentGpaChart from '../components/dashboard/StudentGpaChart';
import RecruitersByIndustryChart from '../components/dashboard/RecruitersByIndustryChart';

const CollegeDashboard = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <DashboardHeader />

      <main className="container mx-auto p-6 lg:p-8">
        {/* Page Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900">College Dashboard</h2>
          <p className="text-slate-500 mt-1">Track placements, student performance, and recruiter engagement.</p>
        </div>

        {/* Top Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard title="Total Placements" value="250" />
          <StatCard title="Average Salary" value="$75,000" />
          <StatCard title="Recruiters Active" value="50" />
        </div>

        {/* Main Dashboard Sections */}
        <div className="space-y-8">
        
          {/* Placement Statistics Section */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Placement Statistics</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <PlacementsByDeptChart />
              <PlacementsByCompanyChart />
            </div>
          </div>

          {/* Student Performance Section */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Student Performance</h3>
            <StudentGpaChart />
          </div>
          
          {/* Recruiter Engagement Section */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Recruiter Engagement</h3>
            <RecruitersByIndustryChart />
          </div>
          
        </div>
      </main>
    </div>
  );
};

export default CollegeDashboard;
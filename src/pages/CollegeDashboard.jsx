// src/pages/CollegeDashboard.jsx

import DashboardHeader from '../components/dashboard/DashboardHeader';
import StatCard from '../components/dashboard/StatCard'; // You correctly imported it as 'StatCard'
import PlacementsByDeptChart from '../components/dashboard/PlacementsByDeptChart';
import PlacementsByCompanyChart from '../components/dashboard/PlacementsByCompanyChart';
import StudentGpaChart from '../components/dashboard/StudentGpaChart';
import RecruitersByIndustryChart from '../components/dashboard/RecruitersByIndustryChart';


const CollegeDashboard = () => {
  return (
    // You can add the geometric background here if you wish
    // <div className="relative min-h-screen">
    //   <GeometricBackground />
    //   ... rest of the content
    // </div>

    <div className="container mx-auto max-w-4xl py-10">
      <DashboardHeader />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* --- CORRECTED from StatsCard to StatCard here --- */}
        <StatCard title={<span className="text-black drop-shadow-lg">Total Students</span>} value={<span className="text-black font-bold drop-shadow-lg">1,200</span>} />
        <StatCard title={<span className="text-black drop-shadow-lg">Placed Students</span>} value={<span className="text-black font-bold drop-shadow-lg">950</span>} />
        <StatCard title={<span className="text-black drop-shadow-lg">Companies Visited</span>} value={<span className="text-black font-bold drop-shadow-lg">35</span>} />
        <StatCard title={<span className="text-black drop-shadow-lg">Ongoing Drives</span>} value={<span className="text-black font-bold drop-shadow-lg">4</span>} />
      </div>
      <div className="mt-10">
        <h3 className="text-2xl font-extrabold text-white mb-4 drop-shadow-lg tracking-wide">Placement Statistics</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <PlacementsByDeptChart />
          <PlacementsByCompanyChart />
        </div>
      </div>
      {/* Student Performance Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-extrabold text-cyan-100 mb-4 drop-shadow-lg tracking-wide">Student Performance</h3>
        <StudentGpaChart />
      </div>
      {/* Recruiter Engagement Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-extrabold text-pink-100 mb-4 drop-shadow-lg tracking-wide">Recruiter Engagement</h3>
        <RecruitersByIndustryChart />
      </div>
    </div>
  );
};

export default CollegeDashboard;
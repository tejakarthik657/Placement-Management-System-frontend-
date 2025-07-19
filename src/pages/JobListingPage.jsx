import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import DashboardHeader from '../components/dashboard/DashboardHeader'; // Reusing the header
import JobListItem from '../components/joblistings/JobListItem';
import JobFilters from '../components/joblistings/JobFilters';
import Pagination from '../components/joblistings/Pagination';

// MOCK DATA: In a real app, this would come from your backend API
const MOCK_JOBS = [
  { id: 1, title: 'Software Engineer Intern', company: 'Tech Innovators Inc.', location: 'Remote', logoUrl: 'https://images.unsplash.com/photo-1640716203594-6628aa4952af?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 2, title: 'Data Analyst', company: 'Data Insights Corp.', location: 'New York, NY', logoUrl: 'https://i.pinimg.com/736x/7e/24/b2/7e24b283da9067255cc1a1e76462d01e.jpg' },
  { id: 3, title: 'Marketing Associate', company: 'Global Marketing Solutions', location: 'Chicago, IL', logoUrl: 'https://i.pinimg.com/736x/ce/1f/41/ce1f417f2d93cba6c9f450ccd9f2ef22.jpg' },
  { id: 4, title: 'Product Manager', company: 'Product Visionaries LLC', location: 'San Francisco, CA', logoUrl: 'https://i.pinimg.com/736x/ae/db/f4/aedbf43ceb4cbdd001b698c78a5643e8.jpg' },
  { id: 5, title: 'UX/UI Designer', company: 'Creative Design Studio', location: 'Los Angeles, CA', logoUrl: 'https://i.pinimg.com/736x/15/ba/a5/15baa577c55a9fd8db5c8b8bdc177d1e.jpg' },
];


const JobListingPage = () => {
  return (
    <div className="container mx-auto max-w-4xl py-10">
      <DashboardHeader />
      <main className="container mx-auto p-6 lg:p-8">
        {/* Page Title */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-white drop-shadow-lg">Job Listings</h2>
          <p className="text-cyan-200 mt-1 drop-shadow">Explore opportunities that match your profile and career aspirations.</p>
        </div>
        {/* Search Bar */}
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="search"
            placeholder="Search for jobs"
            className="w-full bg-slate-100 border-transparent rounded-lg py-3 pl-12 pr-4 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
        {/* Filters */}
        <JobFilters />
        {/* Job List */}
        <div className="mt-6 space-y-2">
          {MOCK_JOBS.map((job) => (
            <JobListItem
              key={job.id}
              id={job.id}
              title={<span className="text-white font-semibold drop-shadow-lg">{job.title}</span>}
              company={<span className="text-cyan-100 font-medium drop-shadow">{job.company}</span>}
              location={<span className="text-cyan-200 font-medium drop-shadow">{job.location}</span>}
              logoUrl={job.logoUrl}
            />
          ))}
        </div>
        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <div className="bg-white/80 rounded-xl px-6 py-3 shadow-lg backdrop-blur-md">
            <Pagination />
          </div>
        </div>
      </main>
    </div>
  );
};

export default JobListingPage;
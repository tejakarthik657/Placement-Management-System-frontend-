import React, { useState } from 'react';

const JobFilters = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Applied', 'Interviewing', 'Placed'];

  return (
    <div className="flex items-center gap-2 mt-6">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
            activeFilter === filter
              ? 'bg-slate-800 text-white'
              : 'bg-white text-slate-600 hover:bg-slate-100'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default JobFilters;
// src/components/joblistings/JobListItem.jsx

import { Link } from 'react-router-dom'; // <-- Import Link

const JobListItem = ({ id, title, company, location, logoUrl }) => { // <-- Add 'id' to props
  return (
    <div className="flex items-center justify-between py-4 border-b border-slate-200">
      <div className="flex flex-col">
        <h3 className="text-lg font-bold text-slate-800">{title}</h3>
        <p className="text-sm text-slate-500 mt-1">{company} - {location}</p>
        
        {/* MODIFIED: The button is now a Link */}
        <Link 
          to={`/apply/${id}`} // <-- Navigate to the dynamic route
          className="mt-3 w-fit bg-slate-100 text-slate-700 text-sm font-semibold px-4 py-1.5 rounded-full hover:bg-slate-200 transition-colors"
        >
          Apply
        </Link>
      </div>
      <img 
        src={logoUrl} 
        alt={`${company} logo`} 
        className="hidden sm:block w-40 h-24 rounded-lg object-cover bg-slate-100" 
      />
    </div>
  );
};

export default JobListItem;
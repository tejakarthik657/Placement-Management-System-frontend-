import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const Pagination = () => {
  return (
    <nav className="flex items-center justify-center gap-2 mt-8">
      <button className="p-2 rounded-full hover:bg-slate-100">
        <ChevronLeftIcon className="h-5 w-5 text-slate-600" />
      </button>
      
      {['1', '2', '3', '4', '5'].map((page) => (
        <button 
          key={page}
          className={`h-9 w-9 flex items-center justify-center rounded-full font-semibold text-sm transition-colors ${
            page === '2' 
              ? 'bg-slate-800 text-white' 
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          {page}
        </button>
      ))}
      
      <button className="p-2 rounded-full hover:bg-slate-100">
        <ChevronRightIcon className="h-5 w-5 text-slate-600" />
      </button>
    </nav>
  );
};

export default Pagination;
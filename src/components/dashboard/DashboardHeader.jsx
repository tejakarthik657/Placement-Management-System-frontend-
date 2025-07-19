import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const DashboardHeader = () => (
  <header className="bg-slate-600 shadow-md">
    <div className="container mx-auto px-6 py-3 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="h-6 w-6 fill-slate-200">
          <path fillRule="evenodd" clipRule="evenodd" d="M16 8L20 4V0H0V4L4 8H16ZM4 12L0 16V20H20V16L16 12H4Z" />
        </svg>
        <h1 className="text-xl font-bold text-white">CampusConnect</h1>
      </div>
      <div className="flex items-center gap-4">
        <a href="/" className="text-slate-200 hover:text-white transition-colors">Home</a>
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="search"
            placeholder="Search"
            className="w-full rounded-md border-0 bg-slate-700 py-1.5 pl-10 pr-4 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          />
        </div>
        <img
          className="h-9 w-9 rounded-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmAGa1z3fdQIqSpGNmYH48-4bjXlOYNCFB4w&s"
          alt="User profile"
        />
      </div>
    </div>
  </header>
);

export default DashboardHeader;
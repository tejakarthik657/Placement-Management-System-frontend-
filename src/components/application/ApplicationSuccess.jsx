import { Link } from 'react-router-dom';
import { CheckIcon } from '@heroicons/react/24/solid';

const ApplicationSuccess = () => (
  <div className="text-center">
    <div className="bg-teal-500 w-full max-w-lg mx-auto rounded-xl p-8 md:p-16 shadow-lg">
      <CheckIcon className="h-24 w-24 md:h-32 md:w-32 text-white/80 mx-auto" />
    </div>
    <h2 className="text-3xl font-bold mt-8">Thank You!</h2>
    <p className="text-slate-600 mt-2">Your application has been received. We will be in touch regarding the next steps.</p>
    <Link to="/jobs" className="mt-8 inline-block bg-slate-800 text-white font-semibold px-6 py-3 rounded-full hover:bg-slate-700 transition">
      Back to Job Listings
    </Link>
  </div>
);

export default ApplicationSuccess;
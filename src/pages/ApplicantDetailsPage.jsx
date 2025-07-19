import React from 'react';
// --- ADD useParams TO THIS IMPORT LINE ---
import { useParams } from 'react-router-dom';

// Your other component imports
import DashboardHeader from '../components/dashboard/DashboardHeader';
import ApplicantHeader from '../components/recruiter/applicant/ApplicantHeader';
import ApplicationDetails from '../components/recruiter/applicant/ApplicationDetails';
import InternalNotes from '../components/recruiter/applicant/InternalNotes';
import ApplicantActions from '../components/recruiter/applicant/ApplicantActions';

const ApplicantDetailsPage = () => {
  // Now this line will work because useParams is defined
  const { applicantId } = useParams();

  // In a real app, you would use applicantId to fetch data.
  // const { data: applicant, isLoading } = useApplicant(applicantId);

  return (
    <div className="min-h-screen">
      <DashboardHeader />
      <main className="container mx-auto p-6 lg:p-8 max-w-4xl">
        <ApplicantHeader
          name="Sophia Clark"
          status="Application Review | Interviewing"
          score="85%"
          avatarUrl="https://i.pinimg.com/1200x/cb/88/88/cb8888605eb70bafc1809a8753997388.jpg"
        />
        <h3 className="text-xl font-bold mt-8 mb-2">Resume</h3>
        <div className="p-4 border rounded-lg text-center text-gray-500 bg-gray-50 mb-6">
          <p>Resume viewer would be here.</p>
        </div>
        <ApplicationDetails />
        <InternalNotes />
        {/* Pass the applicantId to the Actions component */}
        <ApplicantActions applicantId={applicantId} />
      </main>
    </div>
  );
};

export default ApplicantDetailsPage;
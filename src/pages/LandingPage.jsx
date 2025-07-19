import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AcademicCapIcon, BriefcaseIcon, BuildingLibraryIcon } from '@heroicons/react/24/outline';

// Reusable Modal Component
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-4" onClick={e => e.stopPropagation()}>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700">{children}</p>
        <button onClick={onClose} className="mt-6 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors">
          Close
        </button>
      </div>
    </div>
  );
};

// Reusable Tooltip Component
const Tooltip = ({ children, text }) => (
  <div className="relative group">
    {children}
    <div className="absolute bottom-full mb-2 w-max max-w-xs px-3 py-2 text-sm text-white bg-gray-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
      {text}
      <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-gray-800"></div>
    </div>
  </div>
);


// RoleCard with Glass Morphism style
const RoleCard = ({ icon, title, description, to, roleState }) => (
  <Link 
    to={to} 
    state={roleState}
    className="block p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 
               bg-white/10 backdrop-blur-md border border-white/20"
  >
    <div className="flex justify-center mb-4">
      {React.cloneElement(icon, { className: "h-10 w-10 text-white" })}
    </div>
    <h4 className="text-2xl font-bold mb-2 text-white">{title}</h4>
    <p className="text-gray-200">{description}</p>
  </Link>
);


const LandingPage = () => {
  const [modalContent, setModalContent] = useState({ isOpen: false, title: '', content: '' });
  const rolesRef = useRef(null);

  const openModal = (title, content) => {
    setModalContent({ isOpen: true, title, content });
  };

  const closeModal = () => {
    setModalContent({ isOpen: false, title: '', content: '' });
  };

  const scrollToRoles = () => {
    rolesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const aboutContent = "Discover our story. We started with a simple mission: to connect the incredible student talent of Warangal and beyond with amazing career opportunities.";
  const contactContent = "Questions? Comments? We'd love to hear from you. Get in touch with our team right here in Warangal.";
  const privacyPolicyText = "We collect your data to connect students with employers and to improve our service. We are committed to keeping your information secure and respecting your rights.";
  const termsOfServiceText = "By using our site, you agree to our rules. These terms outline your responsibilities to use our platform fairly and honestly.";
  const contactUsText = "Questions? We're here to help. Reach us via email at support@yourdomain.com, our contact form, or visit our Warangal office (Mon-Fri, 10 AM - 6 PM).";

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Modal isOpen={modalContent.isOpen} onClose={closeModal} title={modalContent.title}>
        {modalContent.content}
      </Modal>

     <header className="fixed top-0 left-0 right-0 bg-slate-600 shadow-md z-40">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="h-6 w-6 fill-slate-200" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M16 8L20 4V0H0V4L4 8H16ZM4 12L0 16V20H20V16L16 12H4Z"/>
          </svg>
          <h1 className="text-xl font-bold text-white">CampusConnect</h1>
        </div>
        <nav className="space-x-8">
          <a href="#" className="text-slate-200 hover:text-white transition-colors">Home</a>
          <button onClick={() => openModal('About Us', aboutContent)} className="text-slate-200 hover:text-white transition-colors">About</button>
          <button onClick={() => openModal('Contact Us', contactContent)} className="text-slate-200 hover:text-white transition-colors">Contact</button>
        </nav>
      </div>
    </header>

      {/* Hero Section */}
      <main> {/* Removed pt-16 from here */}
        <section className="relative h-screen flex items-center justify-center text-center text-white pt-16"> {/* Added pt-16 here and h-screen */}
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2072&auto=format&fit=crop')` }}></div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 p-4">
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">Connecting Talent with Opportunity</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-200">
              CampusConnect is the leading platform for connecting students with top recruiters, streamlining the placement process for colleges and administrators.
            </p>
            <button onClick={scrollToRoles} className="mt-8 bg-black text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-transform hover:scale-105">
              Get Started
            </button>
          </div>
        </section>

        {/* --- UPDATED "Choose Your Role" Section --- */}
        <section ref={rolesRef} className="relative py-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://i.pinimg.com/1200x/fc/a4/c8/fca4c89190b68b105be9f6018ee1c4f0.jpg')` }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 container mx-auto px-6 text-center">
            <h3 className="text-4xl font-bold mb-4 text-white">Choose Your Role</h3>
            <p className="text-gray-200 max-w-3xl mx-auto mb-12">
              Select the role that best describes you to access the features and resources tailored to your needs.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <RoleCard
                to="/login"
                roleState={{ from: 'student' }}
                icon={<AcademicCapIcon />}
                title="Student"
                description="Find your dream job and connect with top companies."
              />
              <RoleCard
                to="/login"
                roleState={{ from: 'recruiter' }}
                icon={<BriefcaseIcon />}
                title="Recruiter"
                description="Discover talented students and streamline your hiring process."
              />
              <RoleCard
                to="/login"
                roleState={{ from: 'college' }}
                icon={<BuildingLibraryIcon />}
                title="College"
                description="Manage placements efficiently and connect with leading recruiters."
              />
            </div>
          </div>
        </section>
      </main>

      {/* --- UPDATED Footer with smaller padding --- */}
      <footer className="bg-slate-600 py-6">
        <div className="container mx-auto px-6 text-center text-slate-400">
          <div className="flex justify-center items-center space-x-6 mb-4">
            <Tooltip text={privacyPolicyText}>
              <a href="#" className="text-slate-200 hover:text-white transition-colors">Privacy Policy</a>
            </Tooltip>
            <Tooltip text={termsOfServiceText}>
              <a href="#" className="text-slate-200 hover:text-white transition-colors">Terms of Service</a>
            </Tooltip>
            <Tooltip text={contactUsText}>
              <a href="#" className="text-slate-200 hover:text-white transition-colors">Contact Us</a>
            </Tooltip>
          </div>
          <p>©2024 CampusConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
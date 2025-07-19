import React, { useRef } from 'react';

const ResumeUploadForm = ({ onFileChange }) => {
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => e.preventDefault();
  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onFileChange(e.dataTransfer.files[0]);
    }
  };
  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      onFileChange(e.target.files[0]);
    }
  };

  return (
    <div>
      <div 
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current.click()}
        className="w-full border-2 border-dashed border-slate-300 rounded-xl p-8 text-center cursor-pointer hover:bg-slate-50 transition"
      >
        <input type="file" ref={fileInputRef} onChange={handleFileSelect} className="hidden" accept=".pdf,.doc,.docx" />
        <p className="font-bold text-slate-800">Drag & drop your Resume/CV here</p>
        <p className="text-sm text-slate-500 mt-1">Accepted formats: PDF and DOCX, max size: 5MB</p>
        <span className="mt-4 inline-block text-indigo-600 font-semibold">browse your files</span>
      </div>
      <div className="mt-6 flex items-center gap-4">
        <button type="button" className="bg-slate-100 text-slate-700 text-sm font-semibold px-4 py-2 rounded-full hover:bg-slate-200">Import from Cloud Drive</button>
        <button type="button" className="bg-slate-100 text-slate-700 text-sm font-semibold px-4 py-2 rounded-full hover:bg-slate-200">Import from Dropbox</button>
      </div>
      <div className="mt-6 flex items-center">
        <input type="checkbox" id="autofill" className="h-5 w-5 rounded border-slate-300 text-slate-800 focus:ring-slate-500" />
        <label htmlFor="autofill" className="ml-3 text-sm text-slate-600">Use my resume to auto-fill the form</label>
      </div>
    </div>
  );
};

export default ResumeUploadForm;
import React from "react";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const jobs = useLoaderData();
  const {
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    hr_email,
    hr_name,
    company_logo,
    _id
  } = jobs;

  return (
    <div className="max-w-5xl mx-auto p-6 md:p-10 bg-base-200 rounded-2xl shadow-lg mt-8 space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={company_logo}
          alt="Company Logo"
          className="w-24 h-24 rounded-lg object-contain bg-base-100 p-2 border border-base-300"
        />
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
          <p className="text-lg text-base-content/70">{company}</p>
        </div>
      </div>

      {/* Job Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-base-100 p-6 rounded-xl border border-base-300">
        <p>
          <strong>📍 Location:</strong> {location}
        </p>
        <p>
          <strong>💼 Job Type:</strong> {jobType}
        </p>
        <p>
          <strong>📁 Category:</strong> {category}
        </p>
        <p>
          <strong>🗓️ Deadline:</strong> {applicationDeadline}
        </p>
        <p>
          <strong>💰 Salary:</strong> {salaryRange.min} - {salaryRange.max}{" "}
          {salaryRange.currency?.toUpperCase()}
        </p>
      </div>

      {/* Description */}
      <div>
        <h2 className="text-xl font-semibold mb-2">📝 Job Description</h2>
        <p className="text-base-content/80 leading-relaxed">{description}</p>
      </div>

      {/* Requirements */}
      <div>
        <h2 className="text-xl font-semibold mb-2">✅ Requirements</h2>
        <ul className="list-disc list-inside text-base-content/80 space-y-1">
          {requirements.map((req, idx) => (
            <li key={idx}>{req}</li>
          ))}
        </ul>
      </div>

      {/* Responsibilities */}
      <div>
        <h2 className="text-xl font-semibold mb-2">📌 Responsibilities</h2>
        <ul className="list-disc list-inside text-base-content/80 space-y-1">
          {responsibilities.map((res, idx) => (
            <li key={idx}>{res}</li>
          ))}
        </ul>
      </div>

      {/* HR Contact */}
      <div className="bg-base-100 p-5 rounded-xl border border-base-300">
        <h2 className="text-xl font-semibold mb-2">📞 HR Contact Info</h2>
        <p>
          <strong>Name:</strong> {hr_name}
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${hr_email}`} className="link link-primary">
            {hr_email}
          </a>
        </p>
      </div>

      {/* Apply Button */}
      <div className="text-center pt-4">
        <Link to={`/jobsApply/${_id}`}>
          <button className="btn btn-primary btn-wide rounded-full text-lg shadow-md">
            🚀 Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;

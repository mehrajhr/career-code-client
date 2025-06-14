import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    company,
    description,
    category,
    jobType,
    location,
    title,
    company_logo,
    requirements,
    salaryRange,
    _id
  } = job;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="flex items-center gap-3">
        <figure>
          <img className="w-16" src={company_logo} alt="Shoes" />
        </figure>
        <div>
            <h1 className="text-2xl font-semibold">{company}</h1>
            <p className="flex gap-1 items-center"><FaMapMarkerAlt></FaMapMarkerAlt> {location}</p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
         {description}
        </p>
        <p>Salary : {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
        <div className="card-actions">
          {
            requirements?.map((skill , index) => <div key={index} className="badge badge-outline">{skill}</div>)
          }
        </div>
        <div className="card-actions justify-end my-3">
          <Link to={`/jobs/${_id}`}><button className="btn btn-primary">Show Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;

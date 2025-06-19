import React from "react";
import { useLoaderData } from "react-router";

const ViewApplications = () => {
  const applications = useLoaderData();
  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-5">
        {applications.length} people applying this job
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Applicant Email</th>
              <th>Applicant LinkedIn Profile</th>
              <th>Applicant Github</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {applications?.map((application , index) => (
              <tr key={application._id}>
                <th>{index + 1}</th>
                <td>{application.applicant}</td>
                <td>{application.linkedIn}</td>
                <td>{application.github}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;

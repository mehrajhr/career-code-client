import React from "react";
import { Link } from "react-router";

const PostedJobList = ({ myPostedJobs }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Job Title</th>
              <th>Application Deadline</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {myPostedJobs?.map((job, index) => (
              <tr key={job._id}>
                <th>{index+1}</th>
                <td>{job.title}</td>
                <td>{job.applicationDeadline}</td>
                <td><Link to={`/applications/${job._id}`}>View Applications</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostedJobList;

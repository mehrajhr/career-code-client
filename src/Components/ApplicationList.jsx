import React, { use, useEffect } from "react";
import ApplicationListRow from "./ApplicationListRow";

const ApplicationList = ({ myApplicationPromise }) => {
  const applications = use(myApplicationPromise);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                #
              </label>
            </th>
            <th>Company</th>
            <th>Job Title</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        {
            applications?.map((application , index) => <ApplicationListRow index={index} key={application._id} application={application}></ApplicationListRow>)
        }
        <tbody>
         
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationList;

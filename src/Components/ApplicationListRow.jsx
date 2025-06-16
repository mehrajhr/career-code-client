import React from "react";

const ApplicationListRow = ({application , index}) => {
    const {company_logo , company , title, category} = application;
  return (
    <tr>
      <th>
        <label>
          {index + 1}
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
            src={company_logo}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{company}</div>
          </div>
        </div>
      </td>
      <td>
       <div className="text-sm opacity-50">{title}</div>
      </td>
      <td>{category}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default ApplicationListRow;

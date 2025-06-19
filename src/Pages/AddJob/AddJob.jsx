import axios from "axios";
import React from "react";
import Swal from "sweetalert2";
import UseAuth from "../../hooks/UseAuth";

const AddJob = () => {
  const {user} = UseAuth();
  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    // process salaryRange data
    const { min, max, currency, ...newJob } = data;
    newJob.salaryRange = { min, max, currency };

    // process requirements
    newJob.requirements = newJob.requirements
      .split(",")
      .map((req) => req.trim());

    // process responsibilities
    newJob.responsibilities = newJob.responsibilities
      .split(",")
      .map((res) => res.trim());

    axios.post("http://localhost:5000/jobs", newJob)
    .then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Job post done",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    })
    .catch(error => {
      console.log(error);
    })
  };
  return (
    <div>
      <h1 className="text-center font-bold text-2xl mb-5">Please add a job</h1>
      <div className="flex items-center my-5 justify-center">
        <form onSubmit={handleAddJob}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Basic Info</legend>

            <label className="label">Job Title</label>
            <input
              type="text"
              className="input"
              placeholder="Job Title"
              name="title"
            />

            <label className="label">Company</label>
            <input
              type="text"
              className="input"
              placeholder="Company Name"
              name="company"
            />

            <label className="label">Location</label>
            <input
              type="text"
              className="input"
              placeholder="Company Location"
              name="location"
            />

            <label className="label">Company Logo</label>
            <input
              type="text"
              className="input"
              placeholder="Company logo url"
              name="company_logo"
            />
          </fieldset>
          {/*Job type  */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Job Type</legend>
            <div className="filter">
              <input
                className="btn filter-reset"
                type="radio"
                name="jobType"
                aria-label="All"
              />
              <input
                className="btn"
                type="radio"
                name="jobType"
                aria-label="Remote"
                value="remote"
              />
              <input
                className="btn"
                type="radio"
                name="jobType"
                aria-label="On Site"
                value="onSite"
              />
              <input
                className="btn"
                type="radio"
                name="jobType"
                aria-label="Hybrid"
                value="hybrid"
              />
            </div>
          </fieldset>
          {/*  */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Job Category</legend>
            <select
              defaultValue="Pick a color"
              className="select"
              name="category"
            >
              <option disabled={true}>Job Category</option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Finance</option>
            </select>
          </fieldset>
          {/* Application Deadline */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Application Deadline</legend>
            <input type="date" className="input" name="applicationDeadline" />
          </fieldset>
          {/* Salary Range */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Salary Range</legend>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
              <div>
                <label className="label">Minimum Salary</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Mininimum Salary"
                  name="min"
                />
              </div>

              <div>
                <label className="label">Maximum Salary</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Maximum Salary"
                  name="max"
                />
              </div>

              <div>
                <label className="label">Currency</label>
                <select
                  defaultValue="Pick a color"
                  className="select"
                  name="currency"
                >
                  <option>bdt</option>
                  <option>usd</option>
                  <option>eu</option>
                </select>
              </div>
            </div>
          </fieldset>
          {/* description */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Job Description</legend>
            <textarea
              className="textarea"
              name="description"
              placeholder="Job Description"
            ></textarea>
          </fieldset>
          {/* Job Requirements */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Job Requirements</legend>
            <textarea
              className="textarea"
              name="requirements"
              placeholder="Job Requirements separeted by comma"
            ></textarea>
          </fieldset>
          {/* Job Responsibilities */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Job Responsibilities</legend>
            <textarea
              className="textarea"
              name="responsibilities"
              placeholder="Job Responsibilities separeted by comma"
            ></textarea>
          </fieldset>
          {/* HR Info */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">HR Info</legend>

            <label className="label">HR Name</label>
            <input
              type="text"
              className="input"
              placeholder="HR Name"
              name="hr_name"
            />

            <label className="label">HR Email</label>
            <input
              type="email"
              className="input"
              placeholder="HR Email"
              name="hr_email"
              defaultValue={user?.email}
            />
          </fieldset>
          <input
            type="submit"
            value="Submit"
            className="w-full btn btn-primary my-3"
          />
        </form>
      </div>
    </div>
  );
};

export default AddJob;

import React from "react";
import { useParams } from "react-router";
import UseAuth from "../../hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = UseAuth();
  console.log(jobId, user);

  const handleApplySubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const application = {
      jobId,
      applicant: user.email,
      linkedIn,
      github,
      resume,
    };

    axios
      .post("http://localhost:5000/application", application)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Apply Done",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="my-5">
      <h1 className="text-center text-xl font-bold my-3">Fillup This Form</h1>
      <form onSubmit={handleApplySubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 max-w-sm mx-auto rounded-box border p-4">
          <label className="label">LinkedIn Link</label>
          <input
            type="url"
            name="linkedIn"
            className="input"
            placeholder="LinkedIn Profile Link"
          />

          <label className="label">Github Link</label>
          <input
            type="url"
            name="github"
            className="input"
            placeholder="Github Account Link"
          />

          <label className="label">Resume Link</label>
          <input
            type="url"
            name="resume"
            className="input"
            placeholder="Resume Link"
          />

          <input
            type="submit"
            value="Apply"
            className="btn btn-primary w-fit mx-auto my-2"
          />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;

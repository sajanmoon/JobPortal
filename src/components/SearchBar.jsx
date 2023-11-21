import React, { useState } from "react";

const SearchBar = (props) => {
  const [jobCriteria, setJobCriteria] = useState({
    title: "",
    type: "",
    location: "",
    experience: "",
  });

  const handleChange = (e) => {
    setJobCriteria((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(jobCriteria);

  const search = async () => {
    await props.fetchJobsCustom(jobCriteria);
  };

  return (
    <div className=" flex gap-3 justify-center py-6 px-10">
      <select
        onChange={handleChange}
        name="title"
        value={jobCriteria.title}
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
        defaultValue=""
      >
        <option value="" disabled hidden>
          Job Role
        </option>
        <option value="iOS Developer">iOS Developer</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Android Developer">Android Developer</option>
      </select>
      <select
        onChange={handleChange}
        name="type"
        value={jobCriteria.type}
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
        defaultValue=""
      >
        <option value="" disabled hidden>
          Job Type
        </option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Contract">Contract </option>
      </select>
      <select
        onChange={handleChange}
        name="location"
        value={jobCriteria.location}
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
        defaultValue=""
      >
        <option value="" disabled hidden>
          Loacation
        </option>
        <option value="Remote">Remote</option>
        <option value="In-office ">In-Office </option>
        <option value="Hybrid">Hybrid </option>
      </select>
      <select
        onChange={handleChange}
        name="experience"
        value={jobCriteria.experience}
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
        defaultValue=""
      >
        <option value="" disabled hidden>
          Experience
        </option>
        <option value="Fresher">Fresher </option>
        <option value="Junior Level">Junior Level </option>
        <option value="Mid Level">Mid Level </option>
        <option value="Senior Level">Senior Level </option>
      </select>

      <button
        onClick={search}
        className=" w-40 bg-blue-500 py-3 rounded-md font-bold"
      >
        Search Jobs
      </button>
    </div>
  );
};

export default SearchBar;

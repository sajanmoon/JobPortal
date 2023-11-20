import React from "react";

const SearchBar = () => {
  return (
    <div className=" flex gap-3 justify-center py-6 px-10">
      <select
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
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
        defaultValue=""
      >
        <option value="" disabled hidden>
          Job Type
        </option>
        <option value="iOS Developer">iOS Developer</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Android Developer">Android Developer</option>
      </select>
      <select
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
        defaultValue=""
      >
        <option value="" disabled hidden>
          Loacation
        </option>
        <option value="iOS Developer">iOS Developer</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Android Developer">Android Developer</option>
      </select>
      <select
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
        defaultValue=""
      >
        <option value="" disabled hidden>
          Experience
        </option>
        <option value="iOS Developer">iOS Developer</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Android Developer">Android Developer</option>
      </select>

      <button className=" w-40 bg-blue-500 py-3 rounded-md font-bold">
        Search Jobs
      </button>
    </div>
  );
};

export default SearchBar;

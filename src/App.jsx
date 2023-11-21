import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/JobCard";
import jobData from "./DummyData";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase.config";

function App() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const tempJobs = [];
    const q = query(collection(db, "jobs"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      });
    });
    setJobs(tempJobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <SearchBar />
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </>
  );
}

export default App;

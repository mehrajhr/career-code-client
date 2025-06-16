import React, { useEffect, useState } from 'react';
import JobCard from '../Pages/Shared/JobCard';
import Loading from './Loading';

const HotJobs = () => {
    const [jobs , setJobs] = useState([]);
    const [loading , setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:5000/jobs')
        .then(res => res.json())
        .then(data => {
            setJobs(data);
            setLoading(false);
        })
    },[])
    if(loading){
        return <Loading></Loading>
    }
    if(jobs.length === 0){
        return <p className='text-center text-red-500 my-4 text-xl'>No data found</p>
    }
    return (
        <div>
            <h1 className='text-4xl font-bold text-center my-10'>Hot jobs of the day!</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    jobs?.map(job => <JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;
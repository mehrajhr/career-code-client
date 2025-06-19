import React, { Suspense, useEffect, useState } from 'react';
import UseAuth from '../../hooks/UseAuth';
import axios from 'axios';
import PostedJobList from '../../Components/PostedJobList';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const MyPostedJob = () => {
    const {user} =UseAuth();
    const [myPostedJobs , setMyPostedJobs] = useState([]);
    const axiosSecure = useAxiosSecure();
    useEffect(()=>{
        axiosSecure.get(`/jobs?email=${user.email}`)
        .then(res =>{
            setMyPostedJobs(res.data);
        })
    },[user, axiosSecure])
    return (
        <div>
            <h1 className='text-center font-bold text-2xl my-4'>Posted Jobs here</h1>
            <Suspense fallbac={<span className="loading loading-dots loading-xl"></span>}>
                <PostedJobList myPostedJobs={myPostedJobs}></PostedJobList>
            </Suspense>
        </div>
    );
};

export default MyPostedJob;
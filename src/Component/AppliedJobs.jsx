import React, { useEffect, useState } from 'react';
import { getJobCart } from '../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
import JobContainer from './JobContainer';

const AppliedJobs = () => {
    const companies = useLoaderData();
    const [appliedJobs,setAppliedJobs] = useState([])
    useEffect(()=>{
        const storedCard = getJobCart();
        const savedCart = [];
        for(const id in storedCard){
            const addedCompany = companies.find( company =>company.id == id)
            savedCart.push(addedCompany);
        }
        setAppliedJobs(savedCart);
    },[companies])
    
    
    const [Jobs,setJobs] = useState([appliedJobs])
    
    const handleRemote = () =>{
        const remoteJob = appliedJobs.filter(appliedJob => appliedJob.jobType == "Remote");
        setAppliedJobs(remoteJob);
    }
    
    const handleOnSite = () =>{
        const onSite = appliedJobs.filter(appliedJob => appliedJob.jobType == "Onsite");
        setAppliedJobs(onSite);
    }
    return (
        <div >
            <div className='text-4xl h-52 bg-violet-100 flex justify-center items-center font-bold m-auto'>Applied Jobs</div>
            <div className='w-9/12 m-auto'>
                <div class="dropdown dropdown-end flex justify-end mt-10">
                    <label tabindex="0" className="btn m-1 p-color">Filter By</label>
                    <ul tabindex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        
                        <li onClick={handleRemote}><a>Remote</a> </li>
                        <li onClick={handleOnSite}><a>On-site</a></li>
                    </ul>
                </div>
                <div className='mt-20'>
                {
                    Jobs.map( AppliedJob => <JobContainer
                    AppliedJob={AppliedJob}
                    key= {AppliedJob.id}
                    ></JobContainer>)
                }
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;
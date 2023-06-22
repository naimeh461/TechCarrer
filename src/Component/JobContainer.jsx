import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
const JobContainer = ({AppliedJob}) => {
    const{company_logo,job_title,company_name,jobType,salary,time,location,id} =AppliedJob;
    return (
        <div className='flex border-2 border-gray-300 p-5 rounded-xl gap-5 mb-5 items-center'>
            <div className='flex w-60 h-60 bg-gray-200 text-center items-center justify-center'>
                <img src={company_logo} alt="" />
            </div>
            <div>
                <h2>{job_title}</h2>
                <h5>{company_name}</h5>
                <div className='flex gap-3'>
                <h3 className='border-2 border-violet-300 p-2 my-4 rounded-lg color font-bold'>{jobType}</h3>
                <h3 className='border-2  border-violet-300 p-2 my-4 rounded-lg color font-bold' >{time}</h3>
            </div>
            <div className='flex gap-7 mb-6'>
                <h3 className='flex gap-1 text-gray-500 items-center justify-center'><MapPinIcon className="h-5 w-5" />{location}</h3>
                <h3 className='flex gap-1 text-gray-500 items-center justify-center'><CurrencyDollarIcon className="h-5 w-5" />Salary:{salary}</h3>
            </div>
            </div>
            <button className='btn p-color ml-auto'><Link to={`/company/${id}`}>View Details</Link></button>
        </div>
    );
};

export default JobContainer;
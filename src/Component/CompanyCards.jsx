import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
const CompanyCards = ({company}) => {
    
    const{company_logo,job_title,company_name,jobType,salary,time,location,id} = company;
    {}
    return (
        <div className='border-2 border-gray-300 p-5 rounded-xl mb-3 lg:mb-0'>
            <img src={company_logo} alt="" className='h-10 mb-10'/>
            <h2 className='text-xl font-semibold mb-2'>{job_title}</h2>
            <h4 className='text-gray-500'>{company_name}</h4>
            <div className='flex gap-3'>
                <h3 className='border-2 border-violet-300 p-2 my-4 rounded-lg color font-bold'>{jobType }</h3>
                <h3 className='border-2  border-violet-300 p-2 my-4 rounded-lg color font-bold' >{time}</h3>
            </div>
            <div className='flex gap-7 mb-6'>
                <h3 className='flex gap-1 text-gray-500 items-center justify-center'><MapPinIcon className="h-5 w-5" />{location}</h3>
                <h3 className='flex gap-1 text-gray-500 items-center justify-center'><CurrencyDollarIcon className="h-5 w-5" />Salary:{salary}</h3>
            </div>
            <button className='btn p-color'><Link to={`/company/${id}`}>View Details</Link></button>
            
        </div>
    );
};

export default CompanyCards;
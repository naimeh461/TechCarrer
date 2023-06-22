import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    BanknotesIcon,
    BriefcaseIcon,
    PhoneArrowDownLeftIcon,
    EnvelopeIcon,
    MapPinIcon
  } from '@heroicons/react/24/outline'
import { addToDb } from '../utilities/fakedb';
const CompanyDetails = () => {
    const company = useLoaderData();
    
const handleAddToDb=(id)=>{
        addToDb(id)
    }
    const {job_description,job_responsibility,educational_requirements,experiences,salary,job_title,location,id}= company
    const {email,phone} = company.contact_information
    return (
        <div>
            <div className='text-4xl h-52 bg-violet-100 flex justify-center items-center font-bold m-auto'>Job Details</div>
            <div className='m-auto lg:grid grid-cols-3 mt-10 justify-center  w-8/12'>
                <div className='col-span-2 leading-8'>
                    <h5 className='font-bold mb-3'>Job Description : <span className='font-normal text-gray-400'>{job_description}</span></h5>
                    <h5 className='font-bold mb-3'>Job Responsibility : <span className='font-normal text-gray-400'>{job_responsibility}</span></h5>
                    <h5 className='font-bold mb-3'>Educational Requirements: <br /> <span className='font-normal text-gray-400'>{educational_requirements}</span></h5>
                    <h5 className='font-bold mb-3'>Experiences: <span className='font-normal text-gray-400'>{experiences}</span></h5>
                </div>
                <div>
                    <div className=' bg-violet-100 p-5 rounded-md'>
                        <h4 className='font-bold text-lg mb-2 '>Job Details</h4> <hr class="h-px bg-gray-200 border-0 dark:bg-gray-500 mb-6"></hr>
                        <h4 className='mt-2 font-semibold flex items-center gap-3'><BanknotesIcon className="h-4 w-4 text-violet-500" />Salary : <span className=' text-gray-500'>{salary}</span></h4>
                        <h4 className='mt-2 font-semibold flex items-center gap-3'><BriefcaseIcon className="h-4 w-4 text-violet-500" /> Job Title : <span  className=' text-gray-500'>{job_title}</span></h4>
                        <h4 className='font-bold text-lg mb-2 mt-8 '>Contact Information</h4> <hr class="h-px bg-gray-200 border-0 dark:bg-gray-500 mb-6"></hr>
                        <h4 className='mt-2 font-semibold flex items-center gap-3'><PhoneArrowDownLeftIcon className="h-4 w-4 text-violet-500" />Phone : <span className=' text-gray-500'>{phone}</span></h4>
                        <h4 className='mt-2 font-semibold flex items-center gap-3'><EnvelopeIcon className="h-4 w-4 text-violet-500" />Email : <span className=' text-gray-500'>{email}</span></h4>
                        <h4 className='mt-2 font-semibold flex items-center gap-3'><MapPinIcon className="h-4 w-4 text-violet-500" />Address : <span className=' text-gray-500'>{location}</span></h4>
                    </div>
                    <button  onClick={()=> handleAddToDb(id)} className='btn p-color w-full flex justify-center mt-10 '>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default CompanyDetails;
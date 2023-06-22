import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CardsCategory from './CardsCategory';
import CompanyCards from './CompanyCards';

const Home = () => {
   

    const companiesData = useLoaderData();
    const [companies,setCompanies] = useState(true)
    const newCompanies = companies ? companiesData.slice(0,4) : companiesData ;
    const handleSeeMore = () => {
        setCompanies(false);
    }
    return (
        <div className=''>
            <div className=' bg-violet-100'>
                <div className='lg:flex lg:flex-row-reverse justify-between items-center w-10/12 m-auto pt-10'>
                <img src="assets/All Images/P3OLGJ1 copy 1.png" alt="" />
                    <div className='text-left'>
                        <h2 className='home-title text-7xl font-bold'>One Step <br /> Closer To Your  <br /><span className='color'>Dream Job</span></h2>
                        <h5 className='text-zinc-400 my-7'>Explore thousands of job opportunities with <br /> all the information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</h5>
                        <button className='btn p-color'>Get Started</button>
                    </div>
                    
                </div>
            </div>
            {/* Job Category section Start */}
            <div className='mt-60 mb-60 text-center '>
                <h1 className='text-5xl mb-5 w-9/12 m-auto lg:w-full'>Job Category List</h1>
                <h5 className='w-9/12 lg:w-full m-auto'>Explore thousands of job opportunities with all the information you need. Its your future</h5>
                <CardsCategory></CardsCategory>
            </div>
            
            {/* Job Category section End */}

            {/* Featured Jobs section Start */}
            <div className='mt-40 mb-10 '>
            <h1 className='text-5xl mb-10 m-auto text-center '>Featured Jobs</h1>
                <div className='w-8/12 lg:grid lg:grid-cols-2 m-auto gap-5'>
                    
                {
                        newCompanies.map(company => <CompanyCards
                        company={company}
                        key={company.id}
                        
                        >
                        </CompanyCards>)
                }
                
                </div>
                <div className='flex justify-center mt-8'>
                    <button className='btn p-color  ' onClick={handleSeeMore}>See more</button>
                </div>
            </div>
            {/* Featured Jobs section End */}
        </div>
    );
};

export default Home;
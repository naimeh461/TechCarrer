import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
    BoltIcon,
    Bars3BottomRightIcon,
    XMarkIcon,
  } from '@heroicons/react/24/solid'
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <nav className='header-container flex justify-center  bg-violet-100'>
            <div className='justify-between w-10/12 my-7 items-center hidden lg:flex'>
                <div>
                    <h2 className='text-3xl text-gray font-bold header-title'>TechCareer</h2>
                </div>
                <div className='link-container '>
                    <NavLink to="/" className={({isActive}) => (isActive ? "active" : "default")}>Home</NavLink>
                    <NavLink to="/statistics" className={({isActive}) => (isActive ? "active" : "default")}>Statistics</NavLink>
                    <NavLink to="/applied_job" className={({isActive}) => (isActive ? "active" : "default")}>Applied Jobs</NavLink>
                    <NavLink to="/blog" className={({isActive}) => (isActive ? "active" : "default")}>Blog</NavLink>
                </div>
                <button className='btn p-color'>Start Applying</button>
            </div>
             {/* Mobile Navbar Section */}
            <div className='lg:hidden flex flex-grow justify-between mx-2'>
              {/* Dropdown Open Button */}
              <Link to='/' >
                    <span className='ml-2 text-xl font-bold text-gray-800 uppercase'>TechCareer</span>
            </Link>
                <button
                    aria-label='Open Menu'
                    title='Open Menu'
                    onClick={() => setIsMenuOpen(true)}
                >
                    <Bars3BottomRightIcon className='w-5 text-gray-600' />
                </button>
          {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                {/* Logo & Button section */}
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link to='/' className='inline-flex items-center'>
                      <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                        TechCareer
                      </span></Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className='w-5 text-gray-600' />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className='space-y-4'>
                        <NavLink to="/" className={({isActive}) => (isActive ? "active" : "default")}>Home</NavLink>
                        <NavLink to="/statistics" className={({isActive}) => (isActive ? "active" : "default")}>Statistics</NavLink>
                        <NavLink to="/applied_job" className={({isActive}) => (isActive ? "active" : "default")}>Applied Jobs</NavLink>
                        <NavLink to="/blog" className={({isActive}) => (isActive ? "active" : "default")}>Blog</NavLink>      
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
        </nav>
    );
};

export default Header;
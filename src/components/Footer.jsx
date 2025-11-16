import React from 'react'
import logo from '../asset/eco_logo.png'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <div className='bg-color'>
 <footer className=" rounded-lg shadow-sm dark:bg-gray-900">
    <div className="w-full mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between mx-[20px]">         
  <a className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={logo} className="h-10" alt=" Logo" />
                <span className="self-center lg:text-2xl md:text-[18px] text-sm font-semibold text whitespace-nowrap dark:text-white">Eco Track</span>
            </a>
                              
            <ul className="flex flex-wrap items-center mb-6 font-medium text sm:mb-0 dark:text-gray-400">
                <li>
                    <Link className="hover:underline me-4 md:me-6" to={'/'}>Home</Link>
                </li>
                <li>
                    <Link className="hover:underline me-4 md:me-6" to={'/all-issues'}>issues</Link>
                </li>
                <li>
                    <Link className="hover:underline me-4 md:me-6" to={'/my-contribution'}>Contribution</Link>
                </li>
            </ul>
            
        </div>
        <div>
              <p className='text-gray-300 lg:text-[17px] text-sm pt-2  mx-[20px]'> Eco Track is a Community Cleanliness & Issue Reporting Portal.
                </p>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text sm:text-center dark:text-gray-400">© 2025 - All Rights Reserved by Eco Track.</span>
    </div>
</footer>


    </div>
  )
}

export default Footer
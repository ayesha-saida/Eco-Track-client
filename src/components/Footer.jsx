import React from 'react'
import logo from '../asset/eco_logo.png'

const Footer = () => {
  return (
    <div className='bg-color'>
 <footer className=" rounded-lg shadow-sm dark:bg-gray-900 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">         
  <a className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={logo} className="h-10" alt=" Logo" />
                <span className="self-center text-2xl font-semibold text whitespace-nowrap dark:text-white">Eco Track</span>
            </a>
                              
            <ul className="flex flex-wrap items-center mb-6 font-medium text sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <div>
              <p className='text-[#7c9492] pt-2'> Eco Track is a Community Cleanliness & Issue Reporting Portal.
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
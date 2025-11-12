import React from 'react'
import { Link } from 'react-router'

const ErrorPage = () => {
  return (
      <div className='w-11/12 h-auto min-h-screen'>
      <div className=' text-center p-[150px] '>
        <h1 className='text-6xl'>404</h1>
        <p className='text-xl'>Page not found</p>
        <Link to={'/'} className='btn button-bg mt-4'>Back to Home Page</Link>
      </div>
    </div>
  )
}

export default ErrorPage
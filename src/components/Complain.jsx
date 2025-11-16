import React from 'react'
import { useLoaderData } from 'react-router'
import IssueCard from './IssueCard'

const Complain = () => {
    const data = useLoaderData()
 console.log(data)

 const latestSix = data
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .slice(0, 6);

  return (
   <div className='w-11/12 mx-auto'> 
    <div className='flex justify-center items-center'>
   <h1 className='lg:text-3xl text-xl font-bold text-center text bg-color p-4 rounded'>Recent Complaints</h1>
    </div>
     <div className="grid 
  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6 px-4 sm:px-6 lg:px-16 mx-auto w-full lg:w-11/12">
     {latestSix.map(issue => (
       <IssueCard key={issue._id} issue={issue} />
))}

    </div>
    </div>
  )
}

export default Complain
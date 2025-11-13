import React from 'react'
import { Link, useLoaderData } from 'react-router'
import IssueCard from '../components/IssueCard'
 

const All_Issues = () => {
  const data = useLoaderData()
console.log(data)
  return (
   <div className='w-11/12 mx-auto'>
     <div className='grid grid-cols-3 lg:grid-cols-4 gap-3'>
{data.map((issue) => <IssueCard key={issue._id} issue={issue}> </IssueCard> )}
    </div>
   </div>
  )
}

export default All_Issues
import React from 'react'
import DetailCard from '../components/DetailCard'
import ContributionTable from '../components/ContributionTable'
import { useLoaderData, useParams } from 'react-router'

const IssueDetails = () => {
 const data = useLoaderData()
 const issue = data.result
 //console.log(issue)
 
  return (
  <div className=' w-11/12 mx-auto'> 
   <DetailCard issue={issue}></DetailCard>
      <div className='flex justify-center items-center py-5'>
   <h1 className='lg:text-2xl text-xl font-bold text-center text bg-color p-4 rounded'>People who have already Contributed to this issue</h1>
    </div>
   <ContributionTable></ContributionTable>   
  </div>

  )
}

export default IssueDetails
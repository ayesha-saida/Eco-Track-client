import React from 'react'
import DetailCard from '../components/DetailCard'
import ContributionTable from '../components/ContributionTable'
import { useLoaderData, useParams  } from 'react-router'

const IssueDetails = () => {
  const {id} = useParams()
 const { issues, contributions }= useLoaderData()
 const issue = issues.result
 //console.log(issue )
 //const contribute = contributions

   // Filter contributions that match this issueId or the URL id
  const filteredContributions = (contributions  || []).filter(
    (contribution) => contribution.issueId === id )
  
  return (
  <div className=' w-11/12 mx-auto'> 
   <DetailCard issue={issue}></DetailCard>
      <div className='flex justify-center items-center py-5'>
   <h1 className='lg:text-2xl text-xl font-bold text-center text bg-color p-4 rounded'>People who have already Contributed to this issue</h1>
    </div>
    
     <div className='py-4'>
     {filteredContributions.length > 0 ? ( <table className="table border-collapse border border-gray-400 w-full">
        <thead>
          <tr className="text-lg text-center">
            <th className="border border-gray-300">Image</th>
            <th className="border border-gray-300">Name</th>
            <th className="border border-gray-300">Contribution Amount</th>
          </tr>
        </thead>
        <tbody className="text-center">
            {  filteredContributions.map((info) => <ContributionTable key={info._id} items={info}></ContributionTable> )  }
        </tbody>
      </table>) : (
          <p className="text-center text-xl py-6">
            No one has contributed to this issue yet.
          </p>
        )}
    </div>
    
  </div>

  )
}

export default IssueDetails
import React, { use } from 'react'
import MyContributionTable from '../components/MyContributionTable'
import { useLoaderData } from 'react-router'
import { AuthContext } from '../provider/AuthProvider'

const MyContribution = () => {
       const {user} = use(AuthContext)
   const { issues, contributions }= useLoaderData()
  
   // Filter contributions that matched with the logged in user email 
    const filteredContributions = (contributions  || []).filter(
      (contribution) => contribution.email === user.email )

      // Map total contributions with their issue { _id }
const contributionsWithIssue = filteredContributions.map((contribution) => {
  const issue = issues.find((i) => i._id === contribution.issueId);
  return {
    ...contribution,
    issueTitle: issue?.title || "Unknown",
    category: issue?.category || "Unknown",
  };
});

  return (
       <div className= 'w-11/12 mx-auto'>
      <h2 className='text-xl text-center py-4'>My Total Cleanup Contributions</h2>
   
          <div className='py-4'>
       {filteredContributions.length > 0 ?
  (  <table className="table border-collapse border border-gray-400 w-full">
        <thead>
          <tr className="text-lg text-center">
            <th className="border border-gray-300">Issue Title</th>
            <th className="border border-gray-300">Category</th>
            <th className="border border-gray-300">Paid Amount</th>
            <th className="border border-gray-300">Date</th>
          </tr>
        </thead>
          {contributionsWithIssue.map( (info) => ( <MyContributionTable key={info._id} items={info} /> )     )}

      </table> ) :  (
          <p className="text-center text-xl py-6 text-red-500 font-semibold ">
            No contribution has done yet.
          </p>
        )   }    
    </div>

      </div>

  )
}

export default MyContribution
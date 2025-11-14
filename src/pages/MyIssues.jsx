import React, { use } from 'react'
import MyIssueTable from '../components/MyIssueTable'
import { useLoaderData } from 'react-router'
import { AuthContext } from '../provider/AuthProvider'

const MyIssues = () => {
  const data = useLoaderData()
  const {user} = use(AuthContext)

  const filteredIssue = data.filter(issue => issue.email === user.email) 

  return (
    <>
    <div className= 'w-11/12 mx-auto'>
      <h2 className='text-xl text-center py-4'>Submitted Issue</h2>

          <div className='py-4'>
  {filteredIssue.length > 0 ?  ( <table className="table border-collapse border border-gray-400 w-full">
        <thead>
          <tr className="text-lg text-center">
            <th className="border border-gray-300">Issue Title</th>
            <th className="border border-gray-300">Update Issue</th>
            <th className="border border-gray-300">Delete Issue</th>
          </tr>
        </thead>
          <MyIssueTable></MyIssueTable>
      </table> ) : (
          <p className="text-center text-xl py-6">
            No contribution has done yet.
          </p>) }        
    </div>

      </div>
</>
  )
}

export default MyIssues

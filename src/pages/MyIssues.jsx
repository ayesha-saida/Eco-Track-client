import React from 'react'
import MyIssueTable from '../components/MyIssueTable'
import { useLoaderData } from 'react-router'

const MyIssues = () => {

  return (
    <div className= 'w-11/12 mx-auto'>
      <h2 className='text-xl text-center py-4'>Submitted Issue</h2>
      
      <div>
          <div className='py-4'>
    <table className="table border-collapse border border-gray-400 w-full">
        <thead>
          <tr className="text-lg text-center">
            <th className="border border-gray-300">Issue Title</th>
            <th className="border border-gray-300">Update Issue</th>
            <th className="border border-gray-300">Delete Issue</th>
          </tr>
        </thead>

          <MyIssueTable></MyIssueTable>

      </table>         
    </div>

      </div>
  </div>
  )
}

export default MyIssues
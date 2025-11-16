import { useState } from 'react'
import { useLoaderData } from 'react-router'
import IssueCard from '../components/IssueCard'
 
const All_Issues = () => {
  const data = useLoaderData()
 //console.log(data)
const [category, setCategory] = useState(null)
const [status, setStatus] = useState(null)

  // **Filtered Data**
  const filteredData = data.filter(issue => {
    const categoryMatch = category ? issue.category === category : true
    const statusMatch = status ? issue.status.toLowerCase() === status : true
    return categoryMatch && statusMatch
  })

  return (
   <div className='w-11/12 mx-auto'>
    <h1 className='text-3xl text-center font-semibold py-5'>All latest Issues</h1>

<div className='flex justify-center items-center space-x-4 py-5'>

<div className="dropdown dropdown-left dropdown-center"> {/*Sort category wise*/}
  <div tabIndex={0} role="button" className="btn m-1 button-bg"> 
    {category ? category : "Select Category"}
    </div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={() => setCategory("Garbage")}>Garbage</a></li>
    <li><a onClick={() => setCategory("Illegal Construction")}>Illegal Construction</a></li>
    <li><a onClick={() => setCategory("Broken Public Property")}>Broken Public Property</a></li>
    <li><a onClick={() => setCategory("Road Damage")}>Road Damage</a></li>
    <li><a onClick={() => setCategory("")} className="text-red-500">Clear Filter</a></li>
  </ul>
</div>

<div className="dropdown dropdown-right dropdown-center"> {/*Sort status wise*/}
  <div tabIndex={0} role="button" className="btn m-1 button-bg"> 
    {status ? status : "Status"}
  </div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={() => setStatus("ongoing")}>Ongoing</a></li>
    <li><a onClick={() => setStatus("resolved")}>Resolved</a></li>
    <li><a onClick={() => setStatus("")} className="text-red-500">Clear Filter</a></li>
  </ul>
</div>
</div>

     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {filteredData.length ? (
          filteredData.map(issue => (
            <IssueCard key={issue._id} issue={issue} />
          ))
        ) : (
          <p className='text-center col-span-3 text-red-500 font-semibold py-4'>
            No issues matched with the selected filters.
          </p>
        )}
      </div>
   </div>
  )
}

export default All_Issues
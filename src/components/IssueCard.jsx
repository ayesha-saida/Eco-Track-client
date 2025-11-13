import React from 'react'
import { Link } from 'react-router';

 const IssueCard = ({issue}) => {
 const {_id, title, image, category, location, amount} = issue;

       return (
   <div className="lg:py-4 py-2  mb-3 rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
         <img
           className="w-full h-48 object-cover rounded"
           src={image}
           alt={title}
         />
         <div className="p-5">
           <h2 className="lg:text-xl font-semibold text-gray-800">{title}</h2>
           <p className="text-sm text-gray-500 mt-1">{ category}</p>
           <div className="flex lg:flex-row flex-col justify-between lg:items-center mt-3 lg:space-y-0 space-y-2">
             <span className="text-gray-600 text-sm">
               📍{location}
             </span>
             <span className="text-green-600 font-semibold">
               {amount} Tk
             </span>
           </div>
           <Link to={`/issue-details/${_id}`} issues={issue}
             className="btn  mt-4 w-full bg-blue-600 text-white lg:text-lg text-sm lg:py-2 py-6 rounded-md hover:bg-blue-700 transition-colors duration-200"
           >
             See Details
           </Link>
         </div>
       </div>
  )
}
export default IssueCard
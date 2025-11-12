import React from 'react'
import { Link } from 'react-router'

const All_Issues = () => {
  const onDetailsClick = () => {
    console.log('detail click')
  }
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
      <img
        className="w-full h-48 object-cover"
        src='image'
        alt={'title'}
      />
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800">{'title'}</h2>
        <p className="text-sm text-gray-500 mt-1">{'category'}</p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-gray-600 text-sm">
            📍 {'location'}
          </span>
          <span className="text-green-600 font-semibold">
            ${'amount'}
          </span>
        </div>
        <Link to={'/issue-details'}
          onClick={onDetailsClick}
          className=" btn mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          See Details
        </Link>
      </div>
    </div>
  )
}

export default All_Issues
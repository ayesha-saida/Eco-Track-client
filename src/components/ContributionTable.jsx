import React from 'react'

const ContributionTable = () => {
  return (
    <div className="overflow-x-auto">
 <div className='py-3'>
     <table className="table border-collapse border border-gray-400">
    {/* head */}
    <thead>
      <tr className=' text-lg text-center'>
        <th className='border border-gray-300'>Image</th>
        <th className='border border-gray-300 '>Name</th>
        <th className='border border-gray-300'>Contribution Amount</th>
      </tr>
    </thead>
    <tbody className='text-center'>
      {/* row 1 */}
      <tr>
        <td className='border border-gray-300'>
              <div className="mask mask-squircle ">
                <img
                className='h-full w-full'
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
        </td>
        <td className='border border-gray-300'>
           <div>
              <p className="text-lg font-semibold ">Joe</p>
            </div>
        </td>
        <td className='border border-gray-300'>
          <span className="badge badge-ghost badge-sm text-lg">200 Tk</span>
        </td>

      </tr>
      {/* row 2 */}
      <tr>
        <td className='border border-gray-300'>
              <div className="mask mask-squircle">
                <img
                  className='h-full w-full'
                  src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                  alt="Avatar Tailwind CSS Component" />
          </div>
        </td>
        <td className='border border-gray-300'> 
            <div>
              <p className="text-lg font-semibold">Brice Swyre</p>
            </div>
        </td>
        <td className='border border-gray-300'>
            <span className='badge badge-ghost badge-sm text-lg'>50 Tk</span>
            </td>
      </tr>
      {/* row 3 */}
      <tr>
        <td className='border border-gray-300'>
              <div className="mask mask-squircle">
                <img
                  className='h-full w-full'
                  src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
        </td>
        <td className='border border-gray-300'>
          <div>
              <p className="text-lg font-semibold">Marjy Ferencz</p>
            </div>
        </td>
        <td className='border border-gray-300'>
            <span className='badge badge-ghost badge-sm text-lg'>500 Tk</span>
            </td>
      </tr>
    </tbody>
  </table>
 </div>

</div>
  )
}

export default ContributionTable
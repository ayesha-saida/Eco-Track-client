import React, { use } from 'react'
import { AuthContext } from '../provider/AuthProvider'

//This is contribution table is for total users contribution on a specific issue
const ContributionTable = ( {items} ) => {
    const {amount, email, name} = items
    const {user} = use(AuthContext)

   const photoURL =
    user?.email === email
      ? user.photoURL
      : "https://img.daisyui.com/images/profile/demo/2@94.webp"; 

  return (  
 <tr>
        <td className='border border-gray-300'>
              <div className="mask mask-squircle ">
                <img
                className='h-full w-full'
                  src={photoURL}
                  alt="Avatar Tailwind CSS Component" />
              </div>
        </td>
        <td className='border border-gray-300'>
           <div>
              <p className="text-lg font-semibold ">{name}</p>
            </div>
        </td>
        <td className='border border-gray-300'>
          <span className="badge badge-ghost badge-sm text-lg">{amount}</span>
        </td>

      </tr>
  )
}

export default ContributionTable
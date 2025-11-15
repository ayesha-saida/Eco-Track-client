import { use } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import { useLoaderData } from 'react-router'


const MyContributionTable = ({items}) => {
     const {issueTitle, category, amount, date} = items

  return (
    <>
 <tbody className="text-center">
            <tr>
              <td className="border border-gray-300">
                <p className="text-center text-xl font-semibold">
                { issueTitle }
                </p>
              </td>

              <td className="border border-gray-300">
               { category}
              </td>

              <td className="border border-gray-300">
               {amount}  
              </td>

              <td className="border border-gray-300">
               {new Date(date).toLocaleDateString()} 
              </td>
            </tr>

    </tbody> 
  </>
  )
}

export default MyContributionTable
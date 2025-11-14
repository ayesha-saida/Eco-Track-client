import { use } from 'react'
import UpdateIssue from './UpdateIssue'
import DeleteIssue from './DeleteIssue'
import { useLoaderData } from 'react-router'
import { AuthContext } from '../provider/AuthProvider'

const MyIssueTable = () => {
  const {user} = use(AuthContext)
  const data = useLoaderData()
 // const {email} = data
  //console.log(data)

 const handleDelete = async (id) => {
  // your API call here…
  console.log("Deleting issue:", id)
}


 return (
  <>
    <tbody className="text-center">
      {data.filter(issue => issue.email === user?.email).length > 0 ? (
        data
          .filter(issue => issue.email === user?.email)
          .map(issue => (
            <tr key={issue._id || issue.title}>
              <td className="border border-gray-300">
                <p className="text-center text-xl font-semibold">
                  {issue.title}
                </p>
              </td>

              <td className="border border-gray-300">
                <UpdateIssue key={issue._id} issueData={issue} />
              </td>

              <td className="border border-gray-300">
                <DeleteIssue issueId={issue._id}  onDelete={handleDelete} />
              </td>
            </tr>
          ))
      ) : (
        <tr>
          <td colSpan="3" className="text-center p-4 text-red-500">
            No issue found
          </td>
        </tr>
      )}
    </tbody>
  </>
);



}

export default MyIssueTable
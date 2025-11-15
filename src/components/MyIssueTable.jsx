import { use } from 'react'
import UpdateIssue from './UpdateIssue'
import DeleteIssue from './DeleteIssue'
import { useLoaderData, useNavigate} from 'react-router'
import { AuthContext } from '../provider/AuthProvider'

const MyIssueTable = () => {
  const {user} = use(AuthContext)
  const data = useLoaderData()
   //console.log(data)
 const navigate = useNavigate()

const handleDelete = async(id) => {
   fetch(`http://localhost:3000/issues/${id}`, {
     method: "DELETE",
  headers: {
     "Content-Type": "application/json",
  }
 }).then(res => res.json())
 .then(data => {
     console.log(data)  

    navigate('/all-issues')

 })
 .catch(err => {
     console.log(err)
 })

  //console.log("Deleting issue:", id)
}

 return (
  
        data
          .filter(issue => issue.email === user?.email)
          .map(issue => (
            <tr key={issue._id || issue.title}>
              <td className="border border-gray-300">
                <p className="text-center text-xl font-semibold">
                  {issue.title}
                </p>
              </td>

              <td className="border border-gray-300  text-center">
                <UpdateIssue key={issue._id} issueData={issue} />
              </td>

              <td className="border border-gray-300 text-center">
              <DeleteIssue issueId={issue._id}  onDelete={handleDelete} />  
              </td>
            </tr> ))

)



}

export default MyIssueTable
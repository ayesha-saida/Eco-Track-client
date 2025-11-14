import {  useState } from 'react'
import { successToast } from './ToastContainer';
import Loading from './Loading';

const UpdateIssue = ({issueData}) => {
 const [status, setStatus] = useState("ongoing");
 const {_id, title, category, description, amount} = issueData
  //console.log(issueData)
   const modalId = `update_modal_${_id}`
  const [loading, setLoading] = useState(false);
  const closeModal = () => {
    document.getElementById(modalId).close();
  };

  const handleUpdate = (e)=> {
 e.preventDefault()
  setLoading(true);
  
const formData = {
  title: e.target.title.value,
  category : e.target.category.value,
  description : e.target.description.value,
  amount : e.target.amount.value,
}
 //console.log(formData)

fetch(`http://localhost:3000/issues/${_id}`, {
    method: "PUT",
 headers: {
    "Content-Type": "application/json",
 }, 
 body: JSON.stringify(formData)
}).then(res => res.json())
.then(data => {
    console.log(data)
    successToast('Issue updated')
     e.target.reset()   
     closeModal();   
        
    setTimeout(() => {
        window.location.reload(); 
      }, 500); // optional delay for toast animation
})
.catch(err => {
    console.log(err)
}) 
.finally(() => {
        setLoading(false); 
      });

  }
  return (
    <div>
   <button className="btn  button-bg" onClick={()=>document.getElementById(modalId).showModal()}>Update Issue</button>
<dialog id={modalId} className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Update your issue </h3>
    
    <div className="modal-action">
      <form method="dialog">
        <button className="btn">Close</button>
      </form>
    </div>

    <div className='text-gray-900'> 
        <form onSubmit={handleUpdate} className=" border p-4 rounded-lg">
        <h1 className='p-2 text-2xl text-center'>Add New Issue</h1>

   {/* Issue Title */}
    <div className="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">title</label>
    <input type="text"  name="title" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" defaultValue={title}  required />
  </div>

  {/* Category */}
   <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
          <select name="category"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            required
          >
            <option defaultValue={category}>{category}</option>
            <option value="Garbage">Garbage</option>
            <option value="Illegal Construction">Illegal Construction</option>
            <option value="Broken Public Property">Broken Public Property</option>
            <option value="Road Damage">Road Damage</option>
          </select>
        </div>

         {/*  Amount */}
    <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
          <input         
            type="number"
           name='amount'
           defaultValue={amount}           
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          />
        </div>

   {/* Description */}
  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
    <textarea name="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={description}  required />
  </div>
    
      {/* Status */}
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
    <option value="ongoing">Ongoing</option>
    <option value="resolved">Resolved</option>
  </select>
        </div>

  <button type="submit"  disabled={loading} // Disabled while loading 
   className="btn text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center">
    
    {loading ?   <Loading /> : "Update Issue"}
                 
   </button>
</form>
    </div>

  </div>
</dialog>
    </div>
    
  )
}

export default UpdateIssue
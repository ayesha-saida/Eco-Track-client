import React, { use, useState } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import { successToast } from '../components/ToastContainer'
import Loading from '../components/Loading'

const AddIssues = () => {
  const {user} = use(AuthContext)
  const [status, setStatus] = useState("ongoing");
  const [loading, setLoading] = useState(false);
  const closeModal = () => {
    document.getElementById(modalId).close();
  };

const handleSubmit = (e) => {
 e.preventDefault()
setLoading(true);

 const formData = {
     title : e.target.title.value,
  category : e.target.category.value,
  location : e.target.location.value,
  description : e.target.description.value,
  image : e.target.image.value,
 amount: e.target.amount.value,
  email: user.email,
   date: new Date().toISOString().split("T")[0], // only YYYY-MM-DD
}
 //console.log(formData)

  fetch('http://localhost:3000/issues', {
    method: "POST",
 headers: {
    "Content-Type": "application/json",
 }, 
 body: JSON.stringify(formData)
}).then(res => res.json())
.then(data => {
    console.log(data)
    successToast('Issue successfully added!')
     e.target.reset() // Clears the form
      closeModal();  // Auto-close modal
        
    setTimeout(() => {
        window.location.reload(); // Reload page after success
      }, 500); 
})
.catch(err => {
    console.log(err)
}) .finally(() => {
        setLoading(false); 
      });


 }
  return (
    <div className='max-w-sm mx-auto'>
      <div className='py-6 '>
        <form onSubmit={handleSubmit} className=" border p-4 rounded-lg">
        <h1 className='p-2 text-2xl text-center'>Add New Issue</h1>

   {/* Issue Title */}
    <div className="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
    <input type="text"  name="title" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder='issue title' required />
  </div>

  {/* Category */}
   <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
          <select name="category"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            required
          >
            <option value="">Select Category</option>
            <option value="Garbage">Garbage</option>
            <option value="Illegal Construction">Illegal Construction</option>
            <option value="Broken Public Property">Broken Public Property</option>
            <option value="Road Damage">Road Damage</option>
          </select>
        </div>

          {/* Location */}
   <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
          <input        
            type="text"
            name='location'
            placeholder="Location"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            required
          />
        </div>

   {/* Description */}
  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
    <textarea name="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder="Describe the issue" required />
  </div>

 {/* Image */}
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image URL</label>
          <input       
            type="url"
             name='image'
            placeholder="Image URL"
            className="col-span-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          />
        </div>
  
     {/* Suggested Fix Amount */}
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Suggested Fix Budget</label>
          <input         
            type="number"
           name='amount'
            placeholder="Enter amount"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          />
        </div>

    {/* Status */}
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
           <select value={status} onChange={(e) => setStatus(e.target.value)}>
    <option value="ongoing">Ongoing</option>
    <option value="resolved">Resolved</option>
  </select>
        </div>
   

         {/* Email (current-user mail) */}
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input
            type="email"
            value={user.email}
            readOnly
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          />
        </div>

       <button type="submit"  disabled={loading}  
   className="btn text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center">
    
    {loading ?   <Loading /> : "Add Issue"}
                 
   </button>
  
</form>
    </div>
    </div>
  )
}
export default AddIssues
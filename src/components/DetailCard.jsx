import React, { use } from 'react'
import garbage from '../asset/garbage_in_public.png'
import { AuthContext } from '../provider/AuthProvider'
import { successToast } from './ToastContainer'

const DetailCard = ({issue}) => {
     const {user} = use(AuthContext)
 const {_id,title, category, location, description, image, amount, date} = issue;
  const handleContribution = (e) => {
  e.preventDefault()

const formData = {
     issueId: _id,
      amount: e.target.amount.value,
      name: e.target.name.value,
     email: user.email,
   phone: e.target.phone.value,
 address: e.target.address.value,
   date: new Date(),
   additional: e.target.additional.value
}
  console.log('form data before sending',formData)
  fetch('http://localhost:3000/my-contribution', {
  method: "POST",
  headers: {
     "Content-Type": "application/json",
  }, 
  body: JSON.stringify(formData)
 }).then(res => res.json())
 .then(data => {
     console.log(data)
     successToast('Thanks for your Contribution 🎉')
      e.target.reset() // Clears the form
 })
 .catch(err => {
     console.log(err)
 }) 
    }

  return (
    <div className='py-4 flex justify-center items-center'> 
        <a href="#" className="flex flex-col items-center bg-neutral-primary-soft p-6 focus:outline-2 outline-sky-500 outline-offset-2 rounded  shadow-lg md:flex-row md:max-w-xl md:flex-row md:max-w-xl">
   <div>
    <img className="object-cover w-full rounded  h-64 md:h-auto md:w-48 mb-4 md:mb-0" src={image} alt={title} />
    </div> 
    <div className="flex flex-col justify-between md:p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-heading">{title}</h5>
           <p className="text-sm text-gray-500 mt-1">{category}</p>
           <div className="flex lg:flex-row flex-col justify-between lg:items-center mt-3 lg:space-y-0 space-x-4  ">
             <span className="text-gray-600 text-sm">
               📍{location}
             </span>
             <span className="text-green-600 font-semibold">
               {amount} Tk
             </span>
           </div>
        <p className="mb-6 py-2 text-body">{description}</p>
          <p className="text-sm text-gray-500 pb-2 mt-1">Uploaded on: {date}</p>
        <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
  <button className="button-bg p-2 btn rounded-lg" onClick={()=>document.getElementById('modal_1').showModal()}>Contribute</button>
  <dialog id="modal_1" className="modal">
  
  <div className="modal-box">
    <h3 className="font-bold text-lg">Please  fill in the form to Contribute</h3>

    <div className="modal-action flex-col">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>

  <div className='text-gray-900'>  
   <form onSubmit={handleContribution} className='flex flex-col justify-start items-start space-y-2'>
 
  {/*Issue Title */}
  <label className="label">Issue Title</label>
  <input  type="text" className="input" value={title} readOnly required />

  {/* Amount */}
          <label className="label">Amount</label>
          <input         
            type="number"
           name='amount'
            placeholder="Enter amount"
            className="input"
          />

 {/*Contributor name */}
 <label className="label">Your Name</label>
  <input name='name' type="text" className="input" placeholder="Enter your Name" required />

    {/* Email (current-user mail) */}
    <label className="label">Email</label>
    <input type="email" value={user.email} readOnly className="input" />
         
{/*Contact number */}
  <label className="label">Contact Number</label>
  <input name='phone' type="number" className="input" placeholder="Enter your Contact Number" required />

{/* Address */}
    <label  className="label">Address</label>
    <textarea name="address" rows="2" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder="Enter your Address" required />

{/* Additional Information */}
    <label  className="label">Your message</label>
    <textarea name="additional" rows="2" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder="You can share your thoughts with us or any suggestion" required />
       
       <button type='submit' className="btn bg-[#8aeb60] mt-4">Submit</button>
        </form>
        </div>
     
    
    </div>
  </div>
</dialog>
    </div> 
          

    </div>
</a>
    </div>
  )
}

export default DetailCard
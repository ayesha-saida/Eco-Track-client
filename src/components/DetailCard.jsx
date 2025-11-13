import React, { use } from 'react'
import garbage from '../asset/garbage_in_public.png'
import { AuthContext } from '../provider/AuthProvider'

const DetailCard = () => {
     const {user} = use(AuthContext)
    const handleContribution = () => {
        console.log('contribute')
    }
  return (
    <div className='py-4 flex justify-center items-center'> 
        <a href="#" className="flex flex-col items-center bg-neutral-primary-soft p-6 focus:outline-2 outline-sky-500 outline-offset-2 rounded  shadow-lg md:flex-row md:max-w-xl md:flex-row md:max-w-xl">
    <img className="object-cover w-full rounded  h-64 md:h-auto md:w-48 mb-4 md:mb-0" src={garbage} alt="" />
    <div className="flex flex-col justify-between md:p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-heading">title</h5>
           <p className="text-sm text-gray-500 mt-1">category</p>
           <div className="flex lg:flex-row flex-col justify-between lg:items-center mt-3 lg:space-y-0 space-x-4  ">
             <span className="text-gray-600 text-sm">
               📍location
             </span>
             <span className="text-green-600 font-semibold">
               amount Tk
             </span>
           </div>
        <p className="mb-6 py-2 text-body">description</p>
          <p className="text-sm text-gray-500 pb-2 mt-1">Uploaded on: </p>
        <div>
            <button type="button" className="btn button-bg inline-flex items-center rounded-lg w-auto  box-border shadow  font-medium leading-5  text-sm px-4 py-2.5 focus:outline-none">
                 <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="button-bg" onClick={()=>document.getElementById('modal_1').showModal()}>Contribute</button>
<dialog id="modal_1" className="modal">
  <div className="modal-box">
 {  /* <h3 className="font-bold text-lg">Hello!</h3> 
 <p className="py-4">Please  fill in the form to Contribute</p>*/}
    <h3 className="font-bold text-lg">Please  fill in the form to Contribute</h3>

    <div className="modal-action flex-col">
        <div className='text-gray-900'>    <form onSubmit={handleContribution} className='flex flex-col justify-start items-start space-y-2'>
            <label className="label">Issue Title</label>
  <input name='title' type="text" className="input" placeholder="Enter your Name" required />

    
          <label className="label">Email</label>
          <input
            type="email"
            value={user.email}
            readOnly
            className="input"
          />
         

  <label className="label">URL</label>
  <input name='photoURL' type="text" className="input" placeholder="Enter your image URL for your profile" required />

  <label className="label">Password</label>
  <input name='password' type="password" className="input" placeholder="Password" required />
        </form>
        </div>
     
      <form method="dialog" className='flex justify-end items-end'>
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div> 
            </button>
        </div>
    </div>
</a>
    </div>
  )
}

export default DetailCard
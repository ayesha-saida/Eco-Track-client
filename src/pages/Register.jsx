import React, { useState } from 'react'
import { Link, Navigate } from 'react-router';
import  {FcGoogle}  from "react-icons/fc";
import auth from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { successToast } from '../components/ToastContainer';

const provider = new GoogleAuthProvider();

const Register = () => {
  const [user, setUser] = useState(null)
const handleRegister = (e) => {
    e.preventDefault()
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

  console.log({name,photoURL, email, password})
  
     /* password validation */
   const regExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()\-_=+])[A-Za-z\d@$!%*?&#^()\-_=+]{6,}$/;

    console.log(regExp.test(password));

    if (!regExp.test(password)) {
     alert(
        "Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character"
      );
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
  .then((res) => {
    const user = res.user
    /* update profile before setting user*/
    updateProfile(auth.currentUser, {
  displayName: name, photoURL: photoURL
}).then(() => {
    setUser({...user, displayName: name, photoURL: photoURL})
}).catch((error) => {
 console.log(error)
 
});
    
   console.log(res)
   successToast('signup successfull')
   
  })
  .catch((error) => {
    console.log(error)
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });

  } 
  const handleGoogleSignIn = () => {
   signInWithPopup(auth, provider)
  .then((result) => {
    
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    //const user = result.user;
    console.log(result)
   
  }).catch((error) => {
    console.log(error)
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
  }
  return (
    <div className='min-h-screen mx-auto'>
    {user?  <Navigate to={'/'} /> : ( <form onSubmit={handleRegister} className='flex flex-col justify-center items-center pt-[50px] text-[#014036]'>  
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

  <div>
 <legend className="text-center text-lg text-[#014036]">Register your Account</legend>
     </div>
  <label className="label">Name</label>
  <input name='name' type="text" className="input" placeholder="Enter your Name" required />

  <label className="label">Email</label>
  <input name='email' type="email" className="input" placeholder="Enter your Email" required />

  <label className="label">URL</label>
  <input name='photoURL' type="text" className="input" placeholder="Enter your image URL for your profile" required />

  <label className="label">Password</label>
  <input name='password' type="password" className="input" placeholder="Password" required />
  <button type='submit' className="btn bg-[#8aeb60] mt-4">Register</button>
<p className='text-center text-gray-500'>or</p>
 <button
          onClick={handleGoogleSignIn}
          className="btn bg-white rounded-full text-black border-[#e5e5e5]"
        >
         <FcGoogle />
          Register with Google
        </button>
  <p className='pt-2 text-center'>Already have an account? <Link to={'/login'} className='underline hover:text-blue-500'> Login </Link> </p>
</fieldset>
</form>)}
    </div>
  )
}

export default Register
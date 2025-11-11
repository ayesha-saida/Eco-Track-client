import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, Navigate } from 'react-router';
import auth from '../firebase/firebase.config';
import { FcGoogle } from 'react-icons/fc';
import { defaultToast, successToast } from '../components/ToastContainer';

 const provider = new GoogleAuthProvider();

const Login = () => {
    const [user, setUser] = useState(null) 
 const handleLogin = (e) => {
      e.preventDefault()
      const email = e.target.email.value;
      const password = e.target.password.value;
  
    console.log({ email, password})
  
  signInWithEmailAndPassword(auth, email, password)
   .then((res) => {
     const user = res.user
 setUser(user)
  successToast('Login successfull')
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
    const user = result.user
    /* update profile before setting user*/
    updateProfile(auth.currentUser, {
  displayName: user.displayName, photoURL: user.photoURL
}).then(() => {
    setUser({...user, displayName: user.displayName, photoURL: user.photoURL})
}).catch((error) => {
 console.log(error)
});
   successToast('signup successfull')
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log(result)
   
  }).catch((error) => {
    console.log(error)
    const errorCode = error.code;
    const errorMessage = error.message;
    defaultToast(errorMessage)
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
  }   
  if (user) return <Navigate to="/" />;
  return (
    <div className='min-h-screen mx-auto'>
<form onSubmit={handleLogin} className='flex flex-col justify-center items-center pt-[50px] text-[#014036]'> 
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend text-[#014036]">Login</legend>

  <label className="label">Email</label>
  <input name='email' type="email" className="input" placeholder="Email" />

  <label className="label">Password</label>
  <input name='password' type="password" className="input" placeholder="Password" />
 <button type='submit' className="btn bg-[#8aeb60] mt-4">Login</button>
  <p className='text-center text-gray-500'>or</p>
   <button
            onClick={handleGoogleSignIn}
            className="btn bg-white rounded-full text-black border-[#e5e5e5]"
          >
           <FcGoogle />
            Login with Google
          </button>
  <p className='pt-2 text-center'>Don't have an account? <Link to={'/register'} className='underline hover:text-blue-500'> Register </Link> </p>
</fieldset>
</form>
    </div>
  )
}

export default Login
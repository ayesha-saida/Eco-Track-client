import { use } from 'react'
import { Link, useNavigate } from 'react-router';
import  {FcGoogle}  from "react-icons/fc";
import auth from '../firebase/firebase.config';
import { signInWithPopup,  } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { defaultToast, successToast } from '../components/ToastContainer';
import { AuthContext } from '../provider/AuthProvider';

const provider = new GoogleAuthProvider();

const Register = () => {
  const {createUser, updateUserProfile} = use(AuthContext)
  const navigate = useNavigate();

 const handleRegister = async(e) => {
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
try { 
   await createUser( email, password)

  await updateUserProfile(name,photoURL) 
 
   successToast('Registration successfull!')  
   navigate('/');
  }

  catch(e)  {
    console.log(e)
    const errorCode = e.code;
    const errorMessage = e.message;
     if (errorCode === "auth/email-already-in-use") {
          defaultToast(
            "User already exists in the database"
          );
        } else if (errorCode === "auth/weak-password") {
         defaultToast("You have to provide atleast 6 digit password");
        } else if (errorCode === "auth/invalid-email") {
         defaultToast("Invalid email format. Please check your email.");
        } else if (errorCode === "auth/user-not-found") {
          defaultToast("User not found. Please sign up first.");
        } else if (errorCode === "auth/wrong-password") {
          defaultToast("Wrong password. Please try again.");
        } else if (errorCode === "auth/user-disabled") {
         defaultToast("This user account has been disabled.");
        } else if (errorCode === "auth/too-many-requests") {
          defaultToast("Too many attempts. Please try again later.");
        } else if (errorCode === "auth/operation-not-allowed") {
          defaultToast("Operation not allowed. Please contact support.");
        } else if (errorCode === "auth/network-request-failed") {
          defaultToast("Network error. Please check your connection.");
        } else if (errorCode === "auth/email-already-in-use") {
        defaultToast("User already exists in the database");
      } else {
          defaultToast(errorMessage || "An unexpected error occurred.");
        }
  };
}
  const handleGoogleSignIn = () => {
    if (auth.currentUser) {
    alert("You are already logged in!");
    return; // stop further execution
  }
  
    signInWithPopup(auth, provider)
      .then((result) => {
        successToast("Registration successful with Google");
        navigate("/");
        console.log(result)
      })
      .catch((error) => {
        console.error(error);
        defaultToast(error.message);
      });
  };

  return (
    <div className='min-h-screen mx-auto'>
    <form onSubmit={handleRegister} className='flex flex-col justify-center items-center pt-[50px] text-[#014036]'>  
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
  <button type='submit' className="btn button-bg mt-4">Register</button>
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
</form>
    </div>
  )
}

export default Register
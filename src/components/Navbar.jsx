import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import auth from '../firebase/firebase.config';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { successToast } from './ToastContainer';

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
 
  const handleLogout = () => {
    signOut(auth).then(() => {
  successToast('Logout successful')
}).catch((error) => {
  console.log(error)
});
  }
  return (
        <div className="navbar shadow-sm bg-color text">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow">
            {user? (<> <li> <Link to={'/'}>Home</Link> </li>
        <li><Link to={'/issues'}>Issues</Link></li>
        <li><Link to={'/all-issues'}>All Issues</Link></li>
        <li><Link to={'/add-issues'}>Add Issues</Link></li>
        <li><Link to={'/my-issues'}> My Issues </Link></li>
        <li><Link to={'/my-contribution'}>My Contribution </Link></li> </>) :  (<> <li> <Link to={'/'}>Home</Link> </li>
        <li><Link to={'/issues'}>Issues</Link></li> </>) }
      </ul>     
    </div>
    <a className="btn btn-ghost text-2xl">Eco Track</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-lg">
        {user? (<> <li> <Link to={'/'}>Home</Link> </li>
        <li><Link to={'/issues'}>Issues</Link></li>
        <li><Link to={'/all-issues'}>All Issues</Link></li>
        <li><Link to={'/add-issues'}>Add Issues</Link></li>
        <li><Link to={'/my-issues'}> My Issues </Link></li>
        <li><Link to={'/my-contribution'}>My Contribution </Link></li> </>) :  (<> <li> <Link to={'/'}>Home</Link> </li>
        <li><Link to={'/issues'}>Issues</Link></li> </>) }
    </ul>
  </div>
  <div className="navbar-end space-x-2 ">
{user? ( <>  <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Profile"
            src={user?.photoURL? user.photoURL : "https://img.icons8.com/?size=100&id=NcQNyxjmHvuB&format=png&color=000000" }  />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a className='btn button-bg justify-center text-lg text-[#014036] text-center' onClick={handleLogout}>Logout</a></li>
      </ul>
      </div>
    </> ) : (  <>  <Link to={'/login'} className="btn shadow-none border-none button-bg"> Login</Link>
    <Link to={'/register'} className="btn shadow-none border-none button-bg">  Register</Link> </> ) } 

  </div>
</div>

  )
}

export default Navbar
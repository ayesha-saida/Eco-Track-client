import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import auth from '../firebase/firebase.config';
import { onAuthStateChanged } from 'firebase/auth';

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

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
        <li><a>Home</a></li>
        <li><a>Issues</a></li>
        <li><a>All Issues</a></li>
        <li><a>Add Issues</a></li>
        <li><a> My Issues </a></li>
        <li><a>My Contribution </a></li>
      </ul>     
    </div>
    <a className="btn btn-ghost text-2xl">Eco Track</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-lg">
           <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/issues'}>Issues</Link></li>
        <li><Link to={'/all-issues'}>All Issues</Link></li>
        <li><Link to={'/add-issues'}>Add Issues</Link></li>
        <li><Link to={'/my-issues'}> My Issues </Link></li>
        <li><Link to={'/my-contribution'}>My Contribution </Link></li>
    </ul>
  </div>
  <div className="navbar-end space-x-2 ">
{user? (<Link to={'/my-profile'} tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={` ${user? user.photoURL : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" }`}  />
        </div>
      </Link> ) : (  <>  <Link to={'/login'} className="btn shadow-none border-none button-bg"> Login</Link>
    <Link to={'/register'} className="btn shadow-none border-none button-bg">  Register</Link> </> ) } 

  </div>
</div>

  )
}

export default Navbar
import  { use} from 'react'
import { Link, NavLink } from 'react-router'
import { successToast } from './ToastContainer';
import logo from '../asset/eco_logo.png'
import { AuthContext } from '../provider/AuthProvider';
import ThemeChange from './ThemeChange';

const Navbar = () => {
const {user, signOutUser } = use(AuthContext);
 
  const handleLogout = () => {
     signOutUser().then(() => {
  successToast('Logout successful')
}).catch((error) => {
  console.log(error)
});
  }
 // console.log(user)

  const linkClass = ({ isActive }) =>
  isActive ? 'underline' : '';

  return (
        <div className="navbar shadow-sm bg-color text nav">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow">
            {user? (<> <li className='text-[#014036]'> <NavLink to={'/'} className={linkClass}>Home</NavLink> </li>
        <li className='text-[#014036]'><NavLink to={'/all-issues'} className={linkClass}>All Issues</NavLink></li>
        <li className='text-[#014036]'><NavLink to={'/add-issues'} className={linkClass}>Add Issues</NavLink></li>
        <li className='text-[#014036]'><NavLink to={'/my-issues'} className={linkClass}> My Issues </NavLink></li>
        <li className='text-[#014036]'><NavLink to={'/my-contribution'} className={linkClass}>My Contribution </NavLink></li> </>) :  
        (  <> <li className='text-[#014036]'> <NavLink to={'/'} className={linkClass}>Home</NavLink> </li>
        <li className='text-[#014036]'><NavLink to={'/all-issues'} className={linkClass}>Issues</NavLink></li> </>) }
      </ul>     
    </div>
  <div className="flex items-center space-x-3">
  <img src={logo} alt="logo" className="w-10 lg:w-12 lg:ml-7 " />
  <p className="font-semibold lg:text-2xl md:text-[18px] text-sm">Eco Track</p>
</div>

   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-lg">
        {user? (<> <li> <NavLink to={'/'} className={linkClass}>Home</NavLink> </li>
        <li><NavLink to={'/all-issues'} className={linkClass}>All Issues</NavLink></li>
        <li ><NavLink to={'/add-issues'} className={linkClass}>Add Issues</NavLink></li>
        <li ><NavLink to={'/my-issues'} className={linkClass}> My Issues </NavLink></li>
        <li><NavLink to={'/my-contribution'} className={linkClass}>My Contribution </NavLink></li> </>) : 
         (<> <li> <NavLink to={'/'} className={linkClass}>Home</NavLink> </li>
        <li><NavLink to={'/all-issues'} className={linkClass}>Issues</NavLink></li> </>) }
    </ul>
  </div>
  <div className="navbar-end space-x-2 ">
    <ThemeChange></ThemeChange>
{user? ( <>  <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Profile"
            src={user? user.photoURL : "https://img.icons8.com/?size=100&id=NcQNyxjmHvuB&format=png&color=000000" }  />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a className='btn button-bg justify-center text-lg text-[#014036] text-center' onClick={handleLogout}>Logout</a></li>
      </ul>
      </div>
    </> ) : (  <>  <NavLink to={'/login'} className="btn shadow-none border-none button-bg lg:mr-4 "> Login</NavLink>
    <NavLink to={'/register'} className="btn shadow-none border-none button-bg lg:mr-6 mr-2">  Register</NavLink> </> ) } 
  </div>
</div>

  )
}

export default Navbar
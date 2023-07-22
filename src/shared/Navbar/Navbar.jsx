import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
// import { AuthContext } from '../provider/AuthProvider';
// import { AiOutlineShoppingCart } from "react-icons/ai" 
 
function Navbar() {
  // const { user, logOut } = useContext(AuthContext);
 

//   const handleLogOut = () => {
//     logOut()
//         .then(() => { })
//         .catch(error => console.log(error));
// }
const navMenu = <>
       <li>  
            <NavLink
                    to='/'
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "text-[#5BD9B3]"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    Home
                  </NavLink>
                  
            </li>
            <li  className='ml-4'>
            <NavLink
              to='/college'
              aria-label='college'
              title='college'
              className={({ isActive }) => (isActive ? 'text-[#5BD9B3]' : 'default')}
            >
              College
            </NavLink>
            </li>
         
           
</>


  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {navMenu}
        </ul>
      </div>
      <Link to="/" ><h1>MI College</h1> </Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className=" font-semibold menu-horizontal px-1">
      {navMenu}
            
      </ul>
    </div>
    <div className="navbar-end  ">
  
      {/* {
            user ? <>
            <Link to="/dashboard"><h1>Dashboard</h1></Link>
           
                <button onClick={handleLogOut} className="btn bg-[#5BD9B3] text-white hover:bg-[#55e2b8]">LogOut</button>
            <div className="w-10 rounded-full">
                  <img width={100} height={100} src={user?.photoURL}/>
                   
            </div>
             

            </> : <>
            <Link to='/login' className="btn bg-[#5BD9B3] text-white hover:bg-[#55e2b8]">Login</Link>
            </>
        } */}
        <Link to='/login' className="btn bg-[#5BD9B3] text-white hover:bg-[#55e2b8]">Login</Link>
  
    </div>
    
      

  </div>
  )
}

export default Navbar
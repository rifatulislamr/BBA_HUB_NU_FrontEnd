import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {

    const {user,logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
         logOut()
         .then(() =>{})
         .catch(error => console.log(error));
    }
 
    const navOptions = 
    <>
  
        <li className="font-bold"><Link to="/">HOME</Link></li>
        <li className="font-bold"><Link to="/service">SERVICES</Link></li>
        <li className="font-bold"><Link to="/course">COURSES</Link></li>
        <li className="font-bold"><Link to='/about'>ABOUT US</Link></li>
        <li className="font-bold uppercase"><Link to='/secret'>secret</Link></li>
        <li className="font-bold uppercase"><Link to='/dashboard/userHome'>User home</Link></li>

        
        {
            user? <>
            <span>{user?.displayName}</span>
            <button onClick={handleLogOut} className="ring ring-yellow-500 px-4 rounded-3xl   btn-ghost">LogOut</button>
            </> : <>
            <li className="font-bold"><Link to='/login'>LOGIN</Link></li>
            </>
        }
    
        
        
    </>

    return (
        <>
            <div className="rounded-3xl  navbar fixed z-10 bg-opacity-50 max-w-screen-xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-3xl"><span className="text-rose-700">BBA </span><span className="text-amber-400">H<span className="text-zinc-50">U</span>B</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                   
                </div>
            </div>
        </>
    );
};

export default NavBar;
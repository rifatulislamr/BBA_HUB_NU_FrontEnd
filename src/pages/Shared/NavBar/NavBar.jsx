// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../../providers/AuthProvider";
// import { FaUser } from "react-icons/fa6";
// import useAdmin from "../../../hooks/useAdmin";




// const NavBar = () => {

//     const { user, logOut } = useContext(AuthContext);
//     const [isAdmin] = useAdmin();

//     const handleLogOut = () => {
//         logOut()
//             .then(() => { })
//             .catch(error => console.log(error));
//     }

//     const navOptions =
//         <>

//             <li className="font-bold"><Link to="/">HOME</Link></li>
//             <li className="font-bold"><Link to="/service">SERVICES</Link></li>
//             <li className="font-bold"><Link to="/course">COURSES</Link></li>
//             <li className="font-bold"><Link to='/about'>ABOUT US</Link></li>

//             {/* <li className="font-bold uppercase"><Link to='/dashboard/userHome'>User home</Link></li> */}


//             {/* {
//             user? <>
//            <li className="font-bold uppercase"><Link to='/dashboard/userHome'> <span>{user?.displayName}</span></Link></li>
//             <button onClick={handleLogOut} className="ring ring-yellow-500 px-4 rounded-3xl   btn-ghost">LogOut</button>
//             </> : <>
//             <li className="font-bold"><Link to='/login'>LOGIN</Link></li>
//             </>
//         } */}


//             {
//                 user ? <>
//                     <li className="font-bold uppercase"><Link to='/secret'>All  Classes</Link></li>
//                     <div className="dropdown">
//                         <label tabIndex={0} className="btn m-1 text-black bg-gradient-to-r from-red-500 to-yellow-500 hover:from-green-500 hover:to-blue-500 gap-2"><FaUser className="text-green-300"></FaUser>Profile</label>
//                         <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100  rounded-box w-52 ">
//                             <li className="font-bold uppercase text-white-600"><Link to={isAdmin ? '/dashboard/adminHome' : '/dashboard/userHome'}> <span>{user?.displayName}</span></Link></li>
//                             <li><button onClick={handleLogOut} className=" mt-2 px-4 rounded-3xl  text-white border-2 border-sky-500  btn-ghost bg-red-600">LogOut</button></li>
//                         </ul>
//                     </div>


//                 </> : <>
//                     <li className="font-bold"><Link to='/login'>LOGIN</Link></li>
//                 </>
//             }





//         </>

//     return (
//         <>
//             <div className="rounded-3xl  navbar fixed z-10 bg-opacity-50 max-w-screen-xl bg-black text-white">
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <label tabIndex={0} className="btn btn-ghost lg:hidden">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                         </label>
//                         <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
//                             {navOptions}
//                         </ul>
//                     </div>
//                     <Link to="/" className="btn btn-ghost normal-case text-3xl"><span className="text-rose-700">BBA </span><span className="text-amber-400">H<span className="text-zinc-50">U</span>B</span></Link>
//                 </div>
//                 <div className="navbar-center hidden lg:flex">
//                     <ul className="menu menu-horizontal px-1">
//                         {navOptions}
//                     </ul>
//                 </div>
//                 <div className="navbar-end">

//                 </div>
//             </div>
//         </>
//     );
// };

// export default NavBar;

// import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../../providers/AuthProvider";
// import { FaUser } from "react-icons/fa6";
// import useAdmin from "../../../hooks/useAdmin";

// const NavBar = () => {
//     const { user, logOut } = useContext(AuthContext);
//     const [isAdmin] = useAdmin();
//     const [isNavOpen, setIsNavOpen] = useState(false);

//     const handleLogOut = () => {
//         logOut()
//             .then(() => { })
//             .catch(error => console.log(error));
//     }

//     const toggleNav = () => {
//         setIsNavOpen(!isNavOpen);
//     }

//     const closeNav = () => {
//         setIsNavOpen(false);
//     }

//     const navOptions = (
//         <>
//             <li className="font-bold"><Link to="/">HOME</Link></li>
//             <li className="font-bold"><Link to="/service">SERVICES</Link></li>
//             <li className="font-bold"><Link to="/course">COURSES</Link></li>
//             <li className="font-bold"><Link to='/about'>ABOUT US</Link></li>

//             {user ? (
//                 <>
//                     <li className="font-bold uppercase"><Link to='/secret'>Your COURSES</Link></li>
//                     <div className="dropdown">
//                         <label tabIndex={0} className="btn m-1 text-black bg-gradient-to-r from-red-500 to-yellow-500 hover:from-green-500 hover:to-blue-500 gap-2">
//                             <FaUser className="text-green-300"></FaUser>Profile
//                         </label>
//                         <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 ">
//                             <li className="font-bold uppercase text-white-600">
//                                 <Link to={isAdmin ? '/dashboard/adminHome' : '/dashboard/userHome'}>
//                                     <span>{user?.displayName}</span>
//                                 </Link>
//                             </li>
//                             <li>
//                                 <button onClick={handleLogOut} className="mt-2 px-4 rounded-3xl text-white border-2 border-sky-500 btn-ghost bg-red-600">
//                                     LogOut
//                                 </button>
//                             </li>
//                         </ul>
//                     </div>
//                 </>
//             ) : (
//                 <li className="font-bold"><Link to='/login'>LOGIN</Link></li>
//             )}
//         </>
//     );

//     return (
//         <>
//             <div className="rounded-3xl navbar fixed z-10 bg-opacity-50 max-w-screen-2xl bg-black text-white">
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                     <label
//                             tabIndex={0}
//                             className="btn btn-circle swap swap-rotate  lg:hidden"
//                             onClick={toggleNav}
//                         >

//                             {/* <svg xmlns="http://www.w3.org/2000/svg" className="swap-off h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//                             </svg> */}
//                             <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>

//                         </label>
//                         {isNavOpen && (
//                             <button
//                                 className="btn btn-ghost lg:hidden"
//                                 onClick={closeNav}
//                             >

//                                 {/* <svg xmlns="http://www.w3.org/2000/svg" className="swap-on h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                                 </svg> */}
//                                 <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
//                             </button>
//                         )}
//                         <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
//                             {navOptions}
//                         </ul>
//                     </div>
//                     <Link to="/" className="btn btn-ghost normal-case text-3xl">
//                         <span className="text-rose-700">BBA </span><span className="text-amber-400">H<span className="text-zinc-50">U</span>B</span>
//                     </Link>
//                 </div>
//                 <div className="navbar-center hidden lg:flex">
//                     <ul className="menu menu-horizontal px-1">
//                         {navOptions}
//                     </ul>
//                 </div>
//                 <div className="navbar-end">
//                     {/* ... (existing navbar-end content) */}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default NavBar;


//final code:

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaCartPlus, FaUser } from "react-icons/fa6";
import useAdmin from "../../../hooks/useAdmin";
import useCourseCart from "../../../hooks/useCourseCart";


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [courseCart] = useCourseCart();
    const [isAdmin] = useAdmin();
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

    const closeNav = () => {
        setIsNavOpen(false);
    }

    const navOptions = (
        <>
            <li className="font-bold"><Link to="/">HOME</Link></li>
            <li className="font-bold"><Link to="/service">SERVICES</Link></li>
            <li className="font-bold"><Link to="/course">COURSES</Link></li>
            <li className="font-bold"><Link to='/about'>ABOUT US</Link></li>
            <li>
                <Link to={user? '/dashboard/myCourseCart' : '/login'}>
                    <button className=" btn font-bold space-x-4 bg-slate-950">
                       <span className="text-2xl text-yellow-400"><FaCartPlus></FaCartPlus></span> 
                        <div className="badge badge-secondary text-xl">+{courseCart?.length || 0 }</div>
                    </button>
                </Link>
            </li>

            {user ? (
                <>
                    <li className="font-bold uppercase"><Link to='/secret'>Your COURSES</Link></li>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn m-1 text-black bg-gradient-to-r from-red-500 to-yellow-500 hover:from-green-500 hover:to-blue-500 gap-2">
                            <FaUser className="text-green-300"></FaUser>Profile
                        </label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 ">
                            <li className="font-bold uppercase text-white-600">
                                <Link to={isAdmin ? '/dashboard/adminHome' : '/dashboard/userHome'}>
                                    <span>{user?.displayName}</span>
                                </Link>
                            </li>
                            <li>
                                <button onClick={handleLogOut} className="mt-2 px-4 rounded-3xl text-white border-2 border-sky-500 btn-ghost bg-red-600">
                                    LogOut
                                </button>
                            </li>
                        </ul>
                    </div>
                </>
            ) : (
                <li className="font-bold"><Link to='/login'>LOGIN</Link></li>
            )}
        </>
    );

    const handleMobileNavToggle = () => {
        setMobileNavOpen(!isMobileNavOpen);
    };

    return (
        <>
            <div className="rounded-3xl navbar fixed z-10 bg-opacity-50 max-w-screen-2xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        {/* <label
                            tabIndex={0}
                            className="btn btn-circle swap swap-rotate  lg:hidden"
                            onClick={toggleNav}
                        >
                        
                            <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
  
                        </label> */}
                        <label className="btn btn-circle swap swap-rotate lg:hidden">
                            <input type="checkbox" checked={isMobileNavOpen} onChange={handleMobileNavToggle} />
                            <div className="hamburger-icon">
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                                </svg>

                            </div>
                        </label>


                        <ul className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52 ${isMobileNavOpen ? '' : 'hidden'}`}>
                            {navOptions}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-3xl">
                        <span className="text-rose-700">BBA </span><span className="text-amber-400">H<span className="text-zinc-50">U</span>B</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* ... (existing navbar-end content) */}
                </div>
            </div>
        </>
    );
};

export default NavBar;



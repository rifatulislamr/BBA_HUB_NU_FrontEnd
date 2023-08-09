import { Link, Outlet } from "react-router-dom";
import { FaEnvelopeOpenText, FaUser, FaWallet,FaVideoSlash } from "react-icons/fa6";
import { FaDollarSign, FaHome, FaUsers } from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";



const Dashboard = () => {
  // TODO: load data from the server to have dynamic isAdmin based on Data 

  // const isAdmin = true;
  const [isAdmin] = useAdmin();
 


  return (
    <div className="drawer drawer-mobile bg-slate-700">

      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center ">
       
        <Outlet></Outlet>

        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden mt-4 bg-teal-600">Open Dashboard</label>

      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-6 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}

          {
            isAdmin? <>

             <li className="text-white text-bold"><Link to='/dashboard/userHome'><FaUser></FaUser>Admin Home</Link></li>
          <li className="text-white text-bold"><Link to='/dashboard/userHome'><FaVideoSlash></FaVideoSlash>Add Videos</Link></li>
          <li className="text-white text-bold"><Link to='/dashboard/userHome'><FaDollarSign></FaDollarSign>Payment Dashboard</Link></li>
          <li className="text-white text-bold"><Link to='/dashboard/allUsers'><FaUsers></FaUsers>User Management</Link></li>
            
            </>:<>
            <li className="text-white text-bold"><Link to='/dashboard/userHome'><FaUser></FaUser>User Home</Link></li>
          <li className="text-white text-bold"><Link to='/dashboard/userHome'><FaWallet></FaWallet>Payment Method</Link></li>
          <li className="text-white text-bold"><Link to='/dashboard/userHome'><FaEnvelopeOpenText></FaEnvelopeOpenText> Reviews</Link></li>

            </>
          }
          
          {/* <li className="text-white text-bold"><Link to='/dashboard/userHome'><FaUser></FaUser>User Home</Link></li>
          <li className="text-white text-bold"><Link to='/dashboard/userHome'><FaWallet></FaWallet>Payment Method</Link></li>
          <li className="text-white text-bold"><Link to='/dashboard/userHome'><FaWallet></FaWallet>Your Courses</Link></li>
          <li className="text-white text-bold"><Link to='/dashboard/userHome'><FaEnvelopeOpenText></FaEnvelopeOpenText> Reviews</Link></li> */}

          <div className="divider"></div>



          <li className="text-white text-bold"><Link to='/'><FaHome></FaHome>Home</Link></li>
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;
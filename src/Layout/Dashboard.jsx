import { Link, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
         
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Dashboard</label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li className="text-white text-bold"><a>User Profile</a></li>
            <li><a>Sidebar Item 1</a></li>
            <li><Link to='/'>Home</Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;
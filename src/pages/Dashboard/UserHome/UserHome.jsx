import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import ProfileImg from '../../../../src/assets/home/profileimg.png'
import { Helmet } from "react-helmet-async";



const UserHome = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
             <Helmet>
                <title>BBA HUB | Users home </title>
            </Helmet>
        
    <img className="relative " src={ProfileImg} alt="" />
       <h1 className="uppercase text-white font-extrabold mt-5 ">UserName : <span className="text-red-400">{user?.displayName}</span> </h1>
       <h1 className="uppercase text-white font-extrabold mt-5 mb-4">Email : <span className="lowercase text-red-400">{user?.email}</span> </h1>
       

        
            
        </div>
    );
};

export default UserHome;
import React, { useContext } from 'react';
import { AuthContext } from '../../../../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import ProfileImg from '../../../../../src/assets/home/profileimg.png'

const AdminHome = () => {
    const { user } = useContext(AuthContext);
    
    return (
        <div className=' w-full text-center  mt-10'>
            <Helmet>
                <title>BBA HUB | Admin home </title>
            </Helmet>
            <h1 className=' mb-10 text-5xl   '> Welcome Back <br></br> <span className="uppercase  text-4xl ">{user?.displayName}</span></h1>
            <img className='block mx-auto' src={ProfileImg} alt="" />
            <h1 className="  font-extrabold mt-5 ">UserName : <span className='text-white uppercase'>{user?.displayName}</span> </h1>
            <h1 className="  font-extrabold mt-5 mb-4">Email : <span className='text-white'>{user?.email}</span> </h1>


        </div>
    );
};

export default AdminHome;


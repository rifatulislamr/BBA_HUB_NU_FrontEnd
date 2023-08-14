import React, { useContext } from 'react';
import { AuthContext } from '../../../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const BbaCourseListView2 = ({ item }) => {
    const { user } = useContext(AuthContext);
    const { name, price  } = item;
    return (

        <div className="flex space-x-2 bg-gradient-to-r from-cyan-800 to--800 rounded-3xl">
            {
                user ? <>
                    <Link to='/dashboard/userPayment'>
                        <h3 className="uppercase text-xl mt-10 font-bold  py-2 px-4  text-green-400 "><li className='mx-3'>{name}</li></h3>
                        <p className="text-3xl font-bold py-4 ml-8">৳ {price}</p>
                    </Link>
                </> : <>
                    <Link to='/login'>
                        <h3 className="uppercase text-xl mt-10 font-bold  py-2 px-4  text-green-400 "><li className='mx-3'>{name}</li></h3>
                        <p className="text-3xl font-bold py-4 ml-8">৳ {price}</p>
                    </Link>
                </>
            }
        </div>



    );
};

export default BbaCourseListView2;
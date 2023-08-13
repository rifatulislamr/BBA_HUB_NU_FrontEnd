import React, { useContext } from 'react';
import { AuthContext } from '../../../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const BbaCourseListView2 = ({ item }) => {
    const { user } = useContext(AuthContext);
    const { name } = item;
    return (

        <div className="flex space-x-2 mx-4">
            {
                user ? <>
                    <Link to='/dashboard/userPayment'>
                        <h3 className="uppercase text-xl mt-10 font-bold border border-green-500 rounded-xl py-2 px-4  text-green-400 "><li className='mx-3'>{name}</li></h3>
                    </Link>
                </> : <>
                    <Link to='/login'>
                        <h3 className="uppercase text-xl mt-10 font-bold border border-red-500 rounded-xl py-2 px-4  text-green-400 "><li className='mx-3'>{name}</li></h3>
                    </Link>
                </>
            }
        </div>



    );
};

export default BbaCourseListView2;
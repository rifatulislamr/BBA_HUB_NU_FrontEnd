import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";


const BbaCourseListView = ({ item }) => {
    const { user } = useContext(AuthContext);
    const { name, price } = item;
    return (

        // div class: 
        <div className="flex space-x-2 bg-gradient-to-r from-cyan-800 to--800 rounded-3xl">
            {user ? <>



                <Link to='/dashboard/userPayment'>

                    <div>
                        <h3 className="uppercase text-xl mt-10 font-bold  py-2 px-4  text-green-400 "><li className='mx-3'>{name}</li></h3>
                        <p className="text-3xl font-bold py-2 ml-8">৳ {price}</p>
                        <button className="btn  border-0 border-b-4 mt-4 ml-4 mb-4  bg-blue-900 ">Purchase</button>
                    </div>


                  

                </Link>


            </> : <>

                <Link to='/login'>

                <div>
                        <h3 className="uppercase text-xl mt-10 font-bold  py-2 px-4  text-green-400 "><li className='mx-3'>{name}</li></h3>
                        <p className="text-3xl font-bold py-2 ml-8">৳ {price}</p>
                        <button className="btn  border-0 border-b-4 mt-4 ml-4 mb-4  bg-blue-900 ">Purchase</button>
                    </div>
                </Link>

            </>

            }
        </div>







    );
};

export default BbaCourseListView;
// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../../../providers/AuthProvider";


// const BbaCourseListView = ({ item }) => {
//     const { user } = useContext(AuthContext);
//     const { name, price } = item;
//     return (

//         // div class: 
//         <div className="flex space-x-2 bg-gradient-to-r from-cyan-800 to--800 rounded-3xl">
//             {user ? <>

//                 <Link to='/dashboard/userPayment'>

//                     <div>
//                         <h3 className="uppercase text-xl mt-10 font-bold  py-2 px-4  text-green-400 "><li className='mx-3'>{name}</li></h3>
//                         <p className="text-3xl font-bold py-2 ml-8">৳ {price}</p>
//                         <button className="btn  border-0 border-b-4 mt-4 ml-4 mb-4  bg-blue-900 ">Purchase</button>
//                     </div>

//                 </Link>
//             </> : <>
//                 <Link to='/login'>

//                     <div>
//                         <h3 className="uppercase text-xl mt-10 font-bold  py-2 px-4  text-green-400 "><li className='mx-3'>{name}</li></h3>
//                         <p className="text-3xl font-bold py-2 ml-8">৳ {price}</p>
//                         <button className="btn  border-0 border-b-4 mt-4 ml-4 mb-4  bg-blue-900 ">Purchase</button>
//                     </div>
//                 </Link>

//             </>

//             }
//         </div>

//     );
// };

// export default BbaCourseListView;


import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";

const BbaCourseListView = ({ item }) => {
    const { user } = useContext(AuthContext);
    const { name, price } = item;

    return (
        <div className="flex flex-col md:flex-row bg-gradient-to-r from-cyan-800 to-cyan-900 rounded-3xl p-4 space-y-4 md:space-y-0 md:space-x-4">
            {/* Check if user is logged in */}
            {user ? (
                // If logged in, show the course content
                <Link to='/dashboard/userPayment'>
                    <div className="w-full md:w-1/2 lg:w-1/3">
                        <h3 className="uppercase text-xl md:text-2xl font-bold py-2 px-4 text-green-400">{name}</h3>
                        <p className="text-3xl md:text-4xl font-bold ml-8">৳ {price}</p>
                        <button className="btn border-0 border-b-4 mt-2 bg-blue-900">Purchase</button>
                    </div>
                </Link>
            ) : (
                // If not logged in, provide a login link
                <Link to='/login'>
                    <div className="w-full md:w-1/2 lg:w-1/3">
                        <h3 className="uppercase text-xl md:text-2xl font-bold py-2 px-4 text-green-400">{name}</h3>
                        <p className="text-3xl md:text-4xl font-bold ml-8">৳ {price}</p>
                        <button className="btn border-0 border-b-4 mt-2 bg-blue-900">Purchase</button>
                    </div>
                </Link>
            )}
        </div>
    );
};

export default BbaCourseListView;

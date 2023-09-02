// // import SectionTitle from '../../../components/SectionTitle/SectionTitle';
// // import useCourseCart from '../../../hooks/useCourseCart';

// // const MyCourseCart = () => {
// //     const [courseCart] = useCourseCart();
// //     console.log(courseCart);
// //     const total = courseCart.reduce((sum, item) => item.price + sum, 0)
// //     return (
// //         <div className='w-full'>
// //             <SectionTitle heading="Course Cart"></SectionTitle>
// //             <div className='text-center'>
// //                 <h3 className='text-3xl'>Total Items: {courseCart.length}</h3>
// //                 <h3 className='text-3xl'>Total Price: {total}</h3>
// //             </div>

// //         </div>
// //     );
// // };

// // export default MyCourseCart;


// import SectionTitle from '../../../components/SectionTitle/SectionTitle';
// import useCourseCart from '../../../hooks/useCourseCart';

// const MyCourseCart = () => {
//     const [courseCart] = useCourseCart();
//     console.log(courseCart);
//     const total = courseCart.reduce((sum, item) => {
//         const price = Number(item.price);
//         return price + sum;
//     }, 0);
//     return (
//         <div className=''>
//             <SectionTitle heading="Course Cart"></SectionTitle>
//             <div className='uppercase font-semibold flex justify-evenly h-[60px] items-center'> 
//                 <h3 className='text-2xl'>Total Items: {courseCart.length}</h3>
//                 <h3 className='text-2xl'>Total Price: {total}</h3>
//                 <button className='btn btn-success btn-sm'>All pay</button>

//             </div>

//             <div className="overflow-x-auto">
//                 <table className="table">
//                     {/* head */}
//                     <thead>
//                         <tr>
//                             <th>#</th>
//                             <th>Course</th>
//                             <th>Course Name</th>
//                             <th>Price</th>
//                             <th>Payment</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             courseCart.map((item, index) =>  <tr
//                             key={item._id}>
//                                 <th>
//                                     {index +1}
//                                 </th>
//                                 <td>
//                                     <div className="flex items-center">

//                                         <div>
//                                             <div className="font-bold">{item.name}</div>

//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td>
//                                     Zemlak, Daniel and Leannon

//                                 </td>
//                                 <td>Purple</td>
//                                 <td>
//                                     <button className="btn btn-success btn-sm">Pay</button>
//                                 </td>
//                                 <td>
//                                     <button className="btn btn-ghost bg-red-600 text-white">Delete</button>
//                                 </td>
//                             </tr>)
//                         }


//                     </tbody>


//                 </table>
//             </div>

//         </div>
//     );
// };

// export default MyCourseCart;  


import { FaTrashAlt } from 'react-icons/fa';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useCourseCart from '../../../hooks/useCourseCart';
import './MyCourseCart.css'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const MyCourseCart = () => {
    const [courseCart, refetch] = useCourseCart();
    console.log(courseCart);
    // how does reduce work!!!
    const total = courseCart.reduce((sum, item) => {
        const price = Number(item.price);
        return price + sum;
    }, 0);

    const handleDelete = item =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/carts/${item._id}`, {
                method: 'DELETE'
              })
              .then(res => res.json())
              .then(data =>{
                if (data.deletedCount>0){
                    refetch()
                    Swal.fire(
                        'Deleted!',
                        'Your Course has been deleted from Cart.',
                        'success'
                      )
                }
              })
            }
          })

    }





    return (
        <div>
            <SectionTitle heading="Course Cart"></SectionTitle>
            <div className='uppercase font-semibold flex justify-evenly h-[60px] items-center'>
                <h3 className='text-[18px]'>Total Items: {courseCart.length}</h3>
                <h3 className='text-[18px]'>Total Price: {total}</h3>
                <Link to='/dashboard/userPayment'>
                <button className='btn btn-success btn-sm'> pay</button>
                </Link>

            </div>

            <div className="table-responsive">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Course Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courseCart.map((item, index) => (
                            <tr key={item._id}>
                                <th>{index + 1}</th>

                                <td>
                                    <div className='flex items-center space-x-3 long-text long-text'>
                                        {item.name}
                                    </div>
                                </td>
                                <td className='text-end'> ৳ {item.price}</td>

                                <td>
                                    <button onClick={()=> handleDelete(item)} className="btn btn-ghost bg-red-600 text-white">
                                            <FaTrashAlt /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCourseCart;













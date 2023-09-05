import { useContext, useEffect, useState } from "react";
import './CourseITem.css'
import { AuthContext } from '../../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useCourseCart from "../../../hooks/useCourseCart";

const CourseITem = ({ item }) => {
    const { user } = useContext(AuthContext);
    const [, refetch] = useCourseCart();
    const { name, price,_id } = item;
    const navigate = useNavigate();
    const location = useLocation();
    const [hasAdded, setHasAdded] = useState (false);

    useEffect(() => {
        // Check if the user has added the current cart item when the component mounts
        const cartItems = JSON.parse(localStorage.getItem('courseCart')) || [];
        const courseInCart = cartItems.find(item => item.courseCategory === _id);
        setHasAdded(!!courseInCart);
    }, [_id]);

    const handleAddToVideoCart = item => {
        console.log(item);
        if (user && user.email) {
            if (hasAdded) {
                Swal.fire({
                    icon: 'info',
                    title: 'This Course is already add to cart',
                    text: 'Please Choose Another Course.',
                });
            } else {
                const courseCatItem = { courseCategory: _id, name, price, email: user.email };
                fetch('http://localhost:5000/carts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(courseCatItem),
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            refetch ();
                            setHasAdded(true);
                            // Store the cart item in Local Storage
                            const cartItems = JSON.parse(localStorage.getItem('courseCart')) || [];
                            cartItems.push(courseCatItem);
                            localStorage.setItem('courseCart', JSON.stringify(cartItems));

                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Your Course added to Cart',
                                showConfirmButton: false,
                                timer: 1500,
                            });
                        }
                    });
            }
        } else {
            Swal.fire({
                title: 'Please login to Purchase the course',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!',
            }).then(result => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    };

    return (
        <div className="flex flex-col md:flex-row bg-gradient-to-r from-cyan-800 to-cyan-950 rounded-3xl p-4 space-y-4 md:space-y-0 md:space-x-4">
            <div className="w-full md:w-1/2 lg:w-1/3">
                <h3 className="uppercase text-xl md:text-2xl font-bold py-2 px-4 text-green-400">{name}</h3>
                <p className="text-3xl md:text-4xl font-bold ml-8">৳ {price}</p>
                <button onClick={() => handleAddToVideoCart(item)} className="btn border-0 border-b-4 mt-2 bg-blue-900">
                    {hasAdded ? 'Add To Cart' : 'Purchase'}
                </button>
            </div>
        </div>
    );
};

export default CourseITem;
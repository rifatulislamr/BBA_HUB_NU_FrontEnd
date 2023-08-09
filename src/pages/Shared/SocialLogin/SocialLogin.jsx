import React, { useContext } from 'react';
import {  FaGoogle } from 'react-icons/fa6';
import { AuthContext } from '../../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSingIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);

                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }

                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)


                })
                    .then((res) => res.json())
                    .then(() => {
                        navigate(from, { replace: true });


                    })




            })
    }

    return (
        <div>
            <div className="divider"></div>
            <div className='w-full text-center my-4 space-x-5 '>
                <button onClick={handleGoogleSingIn} className="btn btn-circle btn-outline text-xl text-[#ea4335]">
                    <FaGoogle></FaGoogle>
                </button>
                

            </div>
        </div>
    );
};

export default SocialLogin;
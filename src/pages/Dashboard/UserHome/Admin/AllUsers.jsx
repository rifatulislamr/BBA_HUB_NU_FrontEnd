import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa"; // Corrected import statement
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import './AllUsers.css';

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users');
        return res.data;
    });

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => res.data)
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is now an Admin!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(err => {
                console.log(err);
                alert("Error happened");
            });
    }

    const handleDelete = user => {
        axiosSecure.delete(`/users/${user._id}`)
            .then(res => res.data)
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} has been deleted.`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(err => {
                console.log(err);
                alert("Error happened");
            });
        }
    return (
        <div>
            <Helmet>
                <title>BBA HUB | All users </title>
            </Helmet>

            <h3 className="text-3xl font-semibold overflow-x-auto text-center mb-2 mt-10">Total Users: {users.length}</h3>

            <div className="table-responsive">
                <table className="table table-compact">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr  key={user._id}>
                                    <th>{index + 1}</th>
                                    <td className='long-text' >{user.name}</td>
                                    <td className='long-text'>{user.email}</td>
                                    <td>
                                        {
                                            user?.role === 'admin' ? 'admin' : (
                                                <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-orange-600 text-white">
                                                    <FaUserShield />
                                                </button>
                                            )
                                        }
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600 text-white">
                                            <FaTrashAlt />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;


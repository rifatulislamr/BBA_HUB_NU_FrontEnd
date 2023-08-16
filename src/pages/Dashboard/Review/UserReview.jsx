import React, { useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Swal from 'sweetalert2';


const UserReview = () => {
    ;
    const [name, setName] = useState('');
    const [details, setDetails] = useState('');
    const [rating, setRating] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        

        const reviewData = {
            name,
            details,
            rating,
        };

        // Send a POST request to the backend
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewData),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.message);
            Swal.fire({
               position: 'top-end',
                        icon: 'success',
                        title: 'Review Submitted!',
                        showConfirmButton: false,
                        timer: 1500
            });
            setName('');
            setDetails('');
            setRating(0);
            
            
        })
        .catch(error => {
            console.error('Error submitting review:', error);
            // Handle error cases
        });
    };

    return (
        <div className='w-full px-20'>
            <SectionTitle heading="User review" />
            <form onSubmit={handleSubmit}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Input your name*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Comment</span>
                    </label>
                    <textarea
                        className="textarea textarea-bordered h-24"
                        placeholder="Bio"
                        value={details}
                        onChange={event => setDetails(event.target.value)}
                    ></textarea>
                </div>

                <div className='mt-4 mb-4'>
                    <label className="label">
                        <span className="label-text text-2xl">Your Rating</span>
                    </label>
                    <div className="rating">
                        {[1, 2, 3, 4, 5].map(value => (
                            <input
                                key={value}
                                type="radio"
                                name="rating"
                                value={rating}
                                onChange={() => setRating(value)}
                                checked={rating === value}
                                className="mask mask-star-2 bg-orange-400"
                            />
                        ))}
                    </div>
                </div>

                <div>
                    <input className="btn btn-primary mt-2" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default UserReview;

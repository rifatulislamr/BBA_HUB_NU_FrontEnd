import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const UserReview = () => {
    return (
        <div className='w-full px-20'>
            <SectionTitle heading="User review"></SectionTitle>
            <form>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Input your name*</span>

                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Comment</span>

                    </label>
                    <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

                </div>
                <div className='mt-4 mb-4'>
                <label className="label">
                        <span className="label-text text-2xl">Your Rating</span>

                    </label>
                <div className="rating">
                    
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
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
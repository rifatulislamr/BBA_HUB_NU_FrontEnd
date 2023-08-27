import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import CoverPageShare from '../Shared/CoverPageShare/CoverPageShare';
import courseImg from '../../assets/menu/banner3.jpg';

const ResetPassword = ({ resetPassword }) => {
    const [email, setEmail] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      resetPassword(email);
    };
  
    return (
        <>
        <Helmet>
        <title>BBA HUB | Forget Password</title>
      </Helmet>
      <CoverPageShare img={courseImg} title= "Forget Password" ></CoverPageShare>
        <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-xl">Email</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-2">
          <input className="btn btn-primary" type="submit" value="Reset Password" />
        </div>
      </form>
    
        </>
      );
    };

export default ResetPassword;
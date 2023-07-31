import { useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";




const SignUp = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const {createUser, updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = data => {

    console.log(data)
    createUser(data.email,data.password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
      .then(() =>{
          console.log('user profile info updated')
          reset();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'User Created successfully',
            showConfirmButton: false,
            timer: 2000
          });
          navigate('/');
      })
      .catch(error => console.log(error))

    })
  
  };


    useEffect(() => {
        // Scroll to the top-left corner (0,0) when the HomePage component is mounted
        window.scrollTo(0, 0);
      }, []);
    return (
      <>
      <Helmet>
                <title>BBA HUB | Sign Up </title>
            </Helmet>


       <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse mt-20">
    <div className="text-center md:w-1/2 lg:text-center">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
      {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
          {errors.name && <span className="text-rose-600">Name is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" {...register("photoURL", { required: true })}  placeholder="Photo URL" className="input input-bordered" />
          {errors.photoURL && <span className="text-rose-600">Photo URL is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
          {errors.email && <span className="text-rose-600">Email is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password", { required: true,
             minLength: 6,
              maxLength:20,
              pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
              })} placeholder="password" className="input input-bordered" />
          {errors.password?.type === 'minLength' && <span className="text-rose-600">Password must be 6 characters!</span>}
          {errors.password?.type === 'maxLength' && <span className="text-rose-600">Password must less than 20 characters!</span>}
          {errors.password?.type === 'pattern' && <span className="text-rose-600">Password must have one upper case, one lower case, one number and one special character!</span>}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-pink-400 text-bold">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Sign Up" />
        </div>
        <p className="text-center"><small>Already have an Account <br/> <Link className="text-pink-600" to="/login"> Please Login</Link></small></p>
      </form>
    </div>
  </div>
</div>
      </>
             
           

      
        
        
    );
};

export default SignUp;
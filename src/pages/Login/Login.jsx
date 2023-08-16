import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
// import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";


const Login = () => {
  useEffect(() => {
    // Scroll to the top-left corner (0,0) when the HomePage component is mounted
    window.scrollTo(0, 0);
  }, []);

  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const Navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  // useEffect( () =>{
  //   loadCaptchaEnginge(6); 
  // },[])



  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: 'User Login Successful',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'

          }
        });
        Navigate(from, { replace: true });


      })
  }

//   const handleKeypress = e => {
//     //it triggers by pressing the enter key
//   if (e.keyCode === 13) {
//     handleLogin();
//   }
// };

  // const handleValidateCaptcha = (e) =>{
  //     const user_captcha_value = e.target.value;
  //     if(validateCaptcha(user_captcha_value)){
  //       setDisabled(false);

  //     }
  //     else{

  //           setDisabled(true);  
  //     }

  // }


  return (
    <>
      <Helmet>
        <title>BBA HUB | Login </title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col md:flex-row-reverse mt-14 w-[100%]  justify-start">
          <div className="text-center md:w-1/2 lg:text-center mx-10">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div >
          <div className="card  shadow-2xl bg-base-100">
            <form onSubmit={handleLogin}  className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-xl">Email</span>
                </label>
                <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-xl">Password</span>
                </label>
                <input type="password" name="password" placeholder="Enter Your Password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover text-pink-600">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  
                  {/* <LoadCanvasTemplate /> */}
                </label>
                {/* <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the text above" className="input input-bordered" /> */}
                {/* <button  className="btn btn-outline btn-xs mt-2">Validate</button> */}
              </div>
              <div className="form-control mt-2">
                {/* disabled={disabled} */}
                <input className="btn btn-primary" type="submit" value="Login" />
                <p className="text-center mt-2"><small>New Here? <Link className="text-pink-600 text-bold" to="/signUp">Create A New Account</Link></small></p>
                <SocialLogin></SocialLogin>

              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  );
};

export default Login;
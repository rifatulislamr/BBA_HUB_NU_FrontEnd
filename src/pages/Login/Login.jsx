import { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  useEffect(() => {
    // Scroll to the top-left corner (0,0) when the HomePage component is mounted
    window.scrollTo(0, 0);
  }, []);

  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const {signIn} = useContext(AuthContext);

  useEffect( () =>{
    loadCaptchaEnginge(6); 
  },[])



    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
        })
      }

      const handleValidateCaptcha = () =>{
          const user_captcha_value = captchaRef.current.value;
          if(validateCaptcha(user_captcha_value)){
            setDisabled(false);

          }
          else{

                setDisabled(true);  
          }

      }


    return (
        <div>
             <Helmet>
                <title>BBA HUB | Login </title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200 ">
  <div className="hero-content flex-col md:flex-row-reverse mt-14 ">
    <div className="text-center md:w-1/2 lg:text-center">
      <h1 className="text-5xl font-bold">Login now!</h1>
      {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
    </div>
    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
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
          <LoadCanvasTemplate />
          </label>
          <input type="text" name="captcha" ref={captchaRef} placeholder="type the text above" className="input input-bordered" />
          <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs mt-2">Validate</button>
        </div>
        <div className="form-control mt-2">
          <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
          <p className="text-center mt-2"><small>New Here? <Link className="text-pink-600 text-bold" to="/signUp">Create A New Account</Link></small></p>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;
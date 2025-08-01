import Lottie from "lottie-react";
import React, { use } from "react";
import registerLottie from '../../assets/lootties/register.json'
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router";

const Register = () => {
  const { createUser, signInWithGoogle} = use(AuthContext);
  const handleSigninWithGoogle = () =>{
    signInWithGoogle()
    .then(result => {
      console.log(result.user);
    })
    .catch(error => {
      console.log(error);
    })
  }
  const handleRegister = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email , password);
    createUser(email , password)
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    })
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie style={{width:'300px', height: 'full'}} animationData={registerLottie} loop={true}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-4xl font-bold">Register now!</h1>
            <form onSubmit={handleRegister} className="fieldset">
              <label className="label">Email</label>
              <input name="email" type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input name="password" type="password" className="input" placeholder="Password" />
              <button className="btn btn-neutral mt-4">Register</button>
            </form>
            <div className="divider">OR</div>
            <button onClick={handleSigninWithGoogle} className="btn bg-white text-black border-[#e5e5e5]">
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              SignUp with Google
            </button>
            <p>Do you have an account ? Please <Link className="btn btn-link " to="/signIn">Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

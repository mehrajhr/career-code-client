import Lottie from "lottie-react";
import React, { use } from "react";
import registerLottie from '../../assets/lootties/register.json'
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router";

const Register = () => {
  const { createUser} = use(AuthContext);
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
            <p>Do you have an account ? Please <Link className="btn btn-link " to="/signIn">Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

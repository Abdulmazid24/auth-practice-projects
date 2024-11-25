import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const handleSignUp = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);
  };
  return (
    <div className="hero border-2 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
        </div>
        <div className="card  w-full max-w-sm shrink-0 border-2 bg-red-50">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover font-bold"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-4">
              <button className="btn bg-violet-700 font-bold text-white border-2">
                Sign Up
              </button>
            </div>
          </form>
          <div>
            <p className="font-medium pb-4 px-8">
              New to this website ? Please{' '}
              <Link to={'/login'} className="text-purple-900 font-bold ml-2">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

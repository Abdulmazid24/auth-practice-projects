import { Link } from 'react-router-dom';

const Login = () => {
  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };
  return (
    <div className="hero border-2 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card  w-full max-w-sm shrink-0 border-2 bg-red-50">
          <form onSubmit={handleLogin} className="card-body">
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
            <div className="form-control mt-6">
              <button className="btn bg-violet-700 font-bold text-white border-2">
                Login
              </button>
            </div>
          </form>
          <div>
            <p className="font-medium py-8 px-8">
              New to this website ? Please{' '}
              <Link to={'/SignUp'} className="text-purple-900 font-bold ml-2">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

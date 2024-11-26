import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  console.log();
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        alert('User Sign out successfully');
      })
      .catch(error => {
        alert(error.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/login'}>Login</NavLink>
      </li>
      <li>
        <NavLink to={'/signUp'}>Sign Up</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Auth</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <span>{user?.email}</span>
            <a onClick={handleSignOut} className="btn text-red-700 border-2">
              Sign Out
            </a>
          </>
        ) : (
          <Link
            className="px-3 py-2 border-2 rounded-lg font-semibold"
            to={'/login'}
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

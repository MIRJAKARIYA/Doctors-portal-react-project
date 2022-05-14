import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { GrMenu } from "react-icons/gr";
import { BsLayoutSidebarInset } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
const Navbar = () => {
  const [user] = useAuthState(auth);
  const location = useLocation();
  const logOut = () =>{
    signOut(auth)
    localStorage.removeItem('accessToken');
  }
  return (
    <div className="navbar">
      <div className="flex-1">
        <div className="dropdown dropdown-start">
          <label
            tabIndex="0"
            className="btn btn-ghost md:hidden btn-circle avatar text-xl"
          >
            <GrMenu></GrMenu>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/home" className="justify-between">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/appoinment">Appoinment</Link>
            </li>
            <li>
              <Link to="/reviews">Reviews</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
            {
              user && <li>
                <Link to='/dashboard'>Dashboard</Link>
              </li>
            }
            <li>
              {user ? (
                <button onClick={logOut}>Sign Out</button>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
          </ul>
        </div>
        <Link to="/home" className="text-[18px] text-xl ml-[21px] md:ml-[80px]">
          Doctors Portal
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div className="hidden md:block">
            <Link to="/home" className="btn btn-ghost">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost">
              About
            </Link>
            <Link to="/appoinment" className="btn btn-ghost">
              Appoinment
            </Link>
            <Link to="/reviews" className="btn btn-ghost">
              Reviews
            </Link>
            <Link to="/contactus" className="btn btn-ghost">
              Contact Us
            </Link>
            {user && (
              <Link to="/dashboard" className="btn btn-ghost">
                Dashboard
              </Link>
            )}
            {user ? (
              <button className="btn btn-ghost" onClick={logOut}>
                Sign Out
              </button>
            ) : (
              <Link className="btn btn-ghost" to="/login">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
      {
        location.pathname.includes('dashboard') && <label
        tabIndex="0"
        htmlFor="my-drawer-2"
        className="btn btn-ghost md:hidden btn-circle avatar text-xl"
      >
        <BsLayoutSidebarInset></BsLayoutSidebarInset>
      </label>
      }
    </div>
  );
};

export default Navbar;

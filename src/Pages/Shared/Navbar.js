import React from "react";
import { GrMenu } from "react-icons/gr";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="flex-1">
        <Link to='/home' className="text-[18px] text-xl ml-[21px] md:ml-[80px]">
          Doctors Portal
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div className="hidden md:block mr-[80px]">
            <Link to='/home' className="mr-[30px]">Home</Link>
            <Link to='/about' className="mr-[30px]">About</Link>
            <Link to='/appoinment' className="mr-[30px]">Appoinment</Link>
            <Link to='/reviews' className="mr-[30px]">Reviews</Link>
            <Link to='/contactus' className="mr-[30px]">Contact Us</Link>
            <Link to='/login'>Login</Link>
          </div>
        </div>
        <div className="dropdown dropdown-end">
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
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

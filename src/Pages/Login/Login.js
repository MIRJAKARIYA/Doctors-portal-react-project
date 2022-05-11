import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";

const Login = () => {
  return (
    <div className="max-w-[400px] mx-auto mt-[150px] card-body rounded-2xl shadow-xl">
      <h1 className="mt-[25px] text-center text-2xl font-semibold">Login</h1>
      <form className="">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="text"
            placeholder="password"
            className="input input-bordered"
          />
          <label className="label">
            <span className="label-text-alt link link-hover">
              Forgot password?
            </span>
          </label>
        </div>
        <div className="form-control mt-[5px]">
          <button type="submit" className="btn">
            Login
          </button>
        </div>
        <label className="label text-center block text-sm font-semibold">
          <span className="">New to Doctors Portal?</span>{" "}
          <Link to="/register" className="text-primary">
            Create new account
          </Link>
        </label>
        <div className="divider">OR</div>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;

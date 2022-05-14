import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();


  const [token] = useToken(user);

  let signInError;

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };


  if (error) {
    signInError = <p className="text-red-500 text-xs">{error.message}</p>;
  }

  useEffect(()=>{
    if(token){
        navigate(from,{replace:true});
    }
  },[token,navigate,from]);

  return (
    <div className="flex justify-center screen h-screen items-center">
      <div className="max-w-[400px] card-body rounded-2xl shadow-xl">
        <h1 className="mt-[25px] text-center text-2xl font-semibold">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Provide a valid email",
                },
              })}
            />
            {errors.email?.type === "required" && (
              <small className="text-red-700">{errors.email.message}</small>
            )}
            {errors.email?.type === "pattern" && (
              <small className="text-red-700">{errors.email.message}</small>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                maxLength: {
                  value: 10,
                  message: "Password can not be greater then 10 characters",
                },
              })}
            />
            {errors.password?.type === "required" && (
              <small className="text-red-700">{errors.password.message}</small>
            )}
            {errors.password?.type === "minLength" && (
              <small className="text-red-700">{errors.password.message}</small>
            )}
            {errors.password?.type === "maxLength" && (
              <small className="text-red-700">{errors.password.message}</small>
            )}
            <label className="label">
              <span className="label-text-alt link link-hover">
                Forgot password?
              </span>
            </label>
          </div>

          <div className="form-control mt-[5px]">
            {loading ? (
              <button className="btn btn-square loading w-full"></button>
            ) : (
              <button type="submit" className="btn">
                Login
              </button>
            )}
            {signInError}
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
    </div>
  );
};

export default Login;

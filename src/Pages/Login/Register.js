import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useUpdateProfile } from 'react-firebase-hooks/auth';

const Register = () => {
    const navigate = useNavigate()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);

  const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({displayName:data.name});
  };
  let registerError;
  if(error){
    registerError = <p className="text-red-500 text-xs">{error.message}</p>;
  }
  useEffect(()=>{
      if(user){
          navigate('/home');
      }
  },[navigate,user])
  return (
    <div className="flex justify-center h-screen items-center">
      <div className="max-w-[400px] card-body rounded-2xl shadow-xl">
        <h1 className="mt-[25px] text-center text-2xl font-semibold">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="name"
              className="input input-bordered"
            />
            {errors.name?.type === "required" && (
              <small className="text-red-700">First name is required</small>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
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
              type="password"
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
                maxLength:{
                    value:10,
                    message:'Password can not be greater then 10 characters'
                }
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
          </div>
          {registerError}
          <div className="form-control mt-[15px]">
          {
              loading?<button className="btn btn-square loading w-full"></button>  :<button type="submit" className="btn">
                SIGN UP
              </button>
            }
          </div>
          <label className="label text-center block text-sm font-semibold">
            <span className="">Already have an account?</span>{" "}
            <Link to="/login" className="text-primary">
              Please login
            </Link>
          </label>
          <div className="divider">OR</div>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;

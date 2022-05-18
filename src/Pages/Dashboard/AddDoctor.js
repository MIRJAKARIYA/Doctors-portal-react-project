import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit, reset
  } = useForm();

  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/services").then((res) => res.json())
  );

  const imagStorageKey = '67b8708a430a135e363c0e4c015682dd';
  /*
  * 3 ways to store images
      --Third party storage(imagbb) //Free open publice storage is ok for practice project
      --your own storage in your own server(file system)
      --Database: Mongodb

    *YUP: to validate file:Search: Yup file validation for react hook form
  */
  const onSubmit = (data) => {
    console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image)
    const url = `https://api.imgbb.com/1/upload?key=${imagStorageKey}`;
    fetch(url,{
        method:'POST',
        body:formData
    })
    .then(res=> res.json())
    .then(result => {
        if(result.success){
            const img = result.data.url;
            const doctor = {
                name:data.name,
                email: data.email,
                specialty: data.specialty,
                img:img
            }
            //send to your database
            fetch('http://localhost:5000/doctor',{
                method:'POST',
                headers:{
                    'content-type':'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(doctor)
            })
            .then(res=> res.json())
            .then(inserted =>{
                if(inserted.insertedId){
                    toast.success('Doctor added successfully');
                    reset();
                }
                else{
                    toast.error('Failed to add the doctor')
                }
            })
        }
        console.log('imagebb',result)
    })
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-2xl">Add a New Doctor</h2>
      <div className="max-w-[500px] mx-auto shadow-xl p-5 rounded-xl">
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
              <span className="label-text">Specialty</span>
            </label>
            <select
              {...register("specialty")}
              className="select w-full max-w-xs input-bordered"
            >
              {services.map((service) => (
                <option key={service._id} value={service.name}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
              {...register("image", {
                required: {
                  value: true,
                  message: "Image is required",
                },
              })}
              className="input input-bordered"
            />
            {errors.image?.type === "required" && (
              <small className="text-red-700">{errors.image.message}</small>
            )}
          </div>
          <div className="form-control mt-[15px]">
            <button type="submit" className="btn">
              ADD
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;

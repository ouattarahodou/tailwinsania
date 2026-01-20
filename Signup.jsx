import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from "react-hot-toast";

const Signup = () => {

  ///////////

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const userInfo = {
      username:data.username,
      email:data.email,
      password:data.password,
    }
    await axios.post("http://localhost:4000/api/auth/register",userInfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
         toast.success("Register Successfully");
        console.log("Register Successfully");
      }
      
    }).catch((err) => {
      console.log("User already exists");
       toast.error("Error: " + err.response.data.message);
    })
  }

  /////////
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
        <form onSubmit={handleSubmit(onSubmit)}  className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md border border-gray-100">
          <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
            Signup
          </h1>

          <div className="m-5">
            <label
              htmlFor="Username "
              className="block text-gray-700 font-medium mb-2"
            >
              User Name
            </label>
            <input
              type="username"
              id="username"
              name="username"
              //onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your user name"
              required
              {...register("username", { required: true })}
            />
            {errors.username && <p className="text-sm text-red-600">This field is required</p>}
          </div>

          <div className="m-5">
            <label
              htmlFor="Email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              //onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your Email"
              required
              {...register("email", { required: true })}
            />
            {errors.email && <p className="text-sm text-red-600">This field is required</p>}
          </div>

          <div className="m-5">
            <label
              htmlFor="Password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              //onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your Password"
              required
              {...register("password", { required: true })}
            />
            {errors.password && <p className="text-sm text-red-600">This field is required</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded hover:bg-indigo-800 transition duration-200"
          >
            Register
          </button>

          <p className="text-center text-gray-600 text-sm mt-5">
            Already have an account ?{" "}
            <Link
              to="/login"
              className="text-indigo-600 hover:underline transition duration-300"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </Layout>
  );
};

export default Signup;

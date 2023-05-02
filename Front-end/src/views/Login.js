import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    axios
      .post(`http://localhost:8080/api/v1/auth/login`, {
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        console.log(res);
        navigate("/home");
        reset();
      })
      .catch(() => {});
  };

  const googleLogin = () => {
    axios
      .get(`http://localhost:8080/api/v1/auth/googlelogin`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen ">
      <div className="flex-col justify-center items-center bg-white h-[31rem] w-96 p-2 border-2 border-slate-800 shadow-lg">
        <div className="flex justify-center">
          <img
            className="h-20 w-40 cursor-pointer"
            src="logo.svg"
            alt="Logo"
          ></img>
        </div>
        {/* <p className="font-semibold text-center text-2xl">Login</p> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex-col mt-12 items-center text-sm px-8">
            <div className="flex mt-8">
              <label className="pt-1">Email : </label>
              <input
                type="email"
                placeholder="E-mail"
                className="w-52 h-8 ml-11 border-2 p-1 border-gray-300 rounded-sm"
                defaultValue=""
                {...register("email", {
                  required: true,
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  },
                })}
              />
            </div>
            {errors.email?.type === "required" && (
              <p className="text-red-500 ml-[5.3rem] pt-[0.1rem]">
                *Email is required
              </p>
            )}
            {errors.email?.type === "pattern" && (
              <p className="text-red-500 ml-[5.3rem] pt-[0.1rem]">
                *Invalid email
              </p>
            )}
            <div className="flex mt-8">
              <label className="pt-1">Password : </label>
              <input
                type="password"
                placeholder="Password"
                className="w-52 h-8 ml-5 border-2 p-1 border-gray-300 rounded-sm"
                defaultValue=""
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 8,
                  },
                })}
              />
            </div>
            {errors.password?.type === "required" && (
              <p className="text-red-500 ml-[5.3rem] pt-[0.1rem]">
                *Password is required
              </p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500 ml-[5.3rem] pt-[0.1rem]">
                *Password must be of 8 characters
              </p>
            )}
            <div className="flex flex-col justify-center items-center">
              <button
                className="text-white rounded-md h-8 w-48 mt-8 bg-red-600 text-sm"
                type="submit"
              >
                Login
              </button>
            </div>
          </div>
        </form>
        <div className="flex flex-col justify-center items-center">
          <button
            className="text-white rounded-md h-8 w-48 mt-4 bg-red-700 text-sm"
            onClick={googleLogin}
          >
            Login with Google
          </button>
          <button className="text-white rounded-md h-8 w-48 mt-4 bg-blue-700 text-sm">
            Login with Facebook
          </button>
        </div>
        <p className="font-semibold text-black mt-7 text-center  text-sm">
          If you have not Signed-up,{" "}
          <span
            onClick={() => navigate("/registration")}
            className=" text-blue-700 cursor-pointer text-sm"
          >
            Click here.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;

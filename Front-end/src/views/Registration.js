import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const Registration = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    getValues,
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    axios
      .post(`http://localhost:8080/api/v1/register/add`, {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        navigate("/login");
        reset();
      })
      .catch(() => {});
  };
  return (
    <div className="flex justify-center items-center w-screen h-screen ">
      <div className="flex-col justify-center items-center bg-white h-[36rem] w-[26rem] p-2 border-2 border-slate-800 shadow-lg">
        <div className="flex justify-center">
          <img
            className="h-20 w-40 cursor-pointer"
            src="logo.svg"
            alt="Logo"
          ></img>
        </div>
        {/* <p className="font-semibold text-center text-2xl">Login</p> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex-col mt-8 items-center text-sm px-8">
            <div className="flex mt-7">
              <label className="pt-1">Firstname : </label>
              <input
                type="text"
                placeholder="Firstname"
                className="w-52 h-8 ml-5 border-2 p-1 border-gray-300 rounded-sm"
                defaultValue=""
                {...register("firstname", { required: true })}
              />
            </div>
            {errors.firstname?.type === "required" && (
              <p
                className="text-red-500 ml-[5.3rem] pt-[0.1rem]
              "
              >
                *Firstname is required
              </p>
            )}
            <div className="flex mt-7">
              <label className="pt-1">Lastname : </label>
              <input
                type="text"
                placeholder="Lastname"
                className="w-52 h-8 ml-5 border-2 p-1 border-gray-300 rounded-sm"
                defaultValue=""
                {...register("lastname", { required: true })}
              />
            </div>
            {errors.lastname?.type === "required" && (
              <p className="text-red-500 ml-[5.3rem] pt-[0.1rem]">
                *Lastname is required
              </p>
            )}
            <div className="flex mt-7">
              <label className="pt-1">Email : </label>
              <input
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
            <div className="flex mt-7">
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
            <div className="flex mt-7">
              <label className="pt-1">Confirm : </label>
              <input
                type="password"
                placeholder="Confirm-password"
                className="w-52 h-8 ml-7 border-2 p-1 border-gray-300 rounded-sm"
                defaultValue=""
                {...register("confirmpassword", { required: true })}
              />
            </div>
            {errors.confirmpassword?.type === "required" && (
              <p className="text-red-500 ml-[5.3rem] pt-[0.1rem]">
                *Confirm password is required
              </p>
            )}
            {watch("confirmpassword") !== watch("password") &&
            getValues("confirmpassword") ? (
              <p className="text-red-500 ml-[5.3rem] pt-[0.1rem]">
                *Password does not match
              </p>
            ) : null}
            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white rounded-md h-8 w-40 mt-7 bg-red-600 text-sm"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;

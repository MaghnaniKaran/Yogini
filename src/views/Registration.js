import React from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center w-screen h-screen ">
      <div className="flex-col justify-center items-center bg-white h-[32rem] w-96 p-2 border-2 border-slate-800 shadow-lg">
        <div className="flex justify-center">
          <img
            className="h-20 w-40 cursor-pointer"
            src="logo.svg"
            alt="Logo"
          ></img>
        </div>
        {/* <p className="font-semibold text-center text-2xl">Login</p> */}
        <div className="flex-col mt-8 items-center text-sm px-8">
          <div className="flex mb-5">
            <label className="pt-1">Firstname : </label>
            <input
              type="text"
              placeholder="Firstname"
              className="w-52 h-8 ml-5 border-2 p-1 border-gray-300 rounded-sm"
              value=""
              onChange=""
            />
          </div>
          <div className="flex mb-5">
            <label className="pt-1">Lastname : </label>
            <input
              type="text"
              placeholder="Lastname"
              className="w-52 h-8 ml-5 border-2 p-1 border-gray-300 rounded-sm"
              value=""
              onChange=""
            />
          </div>
          <div className="flex mb-5">
            <label className="pt-1">Email : </label>
            <input
              type="email"
              placeholder="E-mail"
              className="w-52 h-8 ml-11 border-2 p-1 border-gray-300 rounded-sm"
              value=""
              onChange=""
            />
          </div>
          <div className="flex mb-5">
            <label className="pt-1">Password : </label>
            <input
              type="password"
              placeholder="Password"
              className="w-52 h-8 ml-5 border-2 p-1 border-gray-300 rounded-sm"
              value=""
              onChange=""
            />
          </div>
          <div className="flex mb-5">
            <label className="pt-1">Confirm : </label>
            <input
              type="password"
              placeholder="Confirm-password"
              className="w-52 h-8 ml-7 border-2 p-1 border-gray-300 rounded-sm"
              value=""
              onChange=""
            />
          </div>
          <div className="flex justify-center">
            <button
              className="text-white rounded-md h-8 w-40 my-6 bg-red-500 text-sm"
              onClick={() => {
                navigate("/login");
              }}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;

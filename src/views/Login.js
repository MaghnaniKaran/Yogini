import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center w-screen h-screen ">
      <div className="flex-col justify-center items-center bg-white h-96 w-80 p-2 border-2 border-slate-800 shadow-lg">
        <div className="flex justify-center">
          <img
            className="h-20 w-40 cursor-pointer"
            src="logo.svg"
            alt="Logo"
          ></img>
        </div>
        {/* <p className="font-semibold text-center text-2xl">Login</p> */}
        <div className="flex-col mt-8 items-center">
          <div className="flex">
            <label>Email : </label>
            <input
              type="email"
              placeholder="  E-mail"
              className="w-52 h-8 ml-9 mb-6 border-2 border-gray-300 rounded-sm"
              value=""
              onChange=""
            />
          </div>
          <div className="flex">
            <label>Password : </label>
            <input
              type="password"
              placeholder="  Password"
              className="w-52 h-8 ml-2 mb-6 border-2 border-gray-300 rounded-sm"
              value=""
              onChange=""
            />
          </div>
          <div className="flex justify-center">
            <button
              className="text-white rounded-md h-8 w-40 my-6 bg-red-500 text-sm"
              onClick=""
            >
              Login
            </button>
          </div>
          <p className="font-semibold text-black mt-10 text-center">
            If you have not Signed-up,{" "}
            <span
              onClick={() => navigate("/home")}
              className=" text-blue-700 cursor-pointer"
            >
              Click here.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import { useNavigate } from "react-router-dom";
import Mobilenav from "./Mobilenav";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-20 flex justify-evenly bg-transparent">
        <div>
          <img
            className="h-20 w-40 cursor-pointer"
            src="logo.svg"
            alt="Logo"
            onClick={() => navigate("/home")}
          ></img>
        </div>

        <div className="flex space-x-5 py-6 invisible md:visible">
          <p className="cursor-pointer" onClick={() => navigate("/home")}>
            Home
          </p>
          <p className="cursor-pointer" onClick={() => navigate("/about")}>
            Get to Know Yogini
          </p>
          <p className="cursor-pointer" onClick={() => navigate("/contact")}>
            Contact
          </p>
        </div>
        <div className="py-6 invisible md:visible">
          <p>
            Are you a member ?{" "}
            <span
              className="font-medium cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </div>

        {/* mobile view */}
        <div className="visible md:invisible p-4">
          {/* <i className="fi fi-br-menu-burger text-2xl cursor-pointer"></i> */}
          <Mobilenav />
        </div>
      </div>
  );
};

export default Header;

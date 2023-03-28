import React from "react";
import { useNavigate } from "react-router-dom";
import Mobilenav from "./Mobilenav";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen">
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
        <div className="visible md:invisible p-4 ">
          {/* <i className="fi fi-br-menu-burger text-2xl cursor-pointer"></i> */}
          <Mobilenav />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 bg-transparent">
        <div></div>
        <div className="max-md:py-40 max-md:px-20 md:pr-16 md:pl-3 ">
          <div className="my-20 md:my-64">
            <p className="font-bold text-xl md:text-6xl">
              This is birth of a new story.
              <span className="font-bold text-lg md:text-4xl">
                Your mind, body and spiritual revolution.
              </span>
            </p>
            <p className="text-sm md:text-xl mt-10">
              Welcome to our online forum! We are thrilled to have you here. We
              believe that yoga is more than just a physical practice. It's a
              way of life that encompasses the mind, body, and spirit. Our
              classes are designed to help you achieve balance, strength, and
              flexibility while cultivating inner peace and mindfulness. We
              offer a variety of styles for all levels, from gentle restorative
              to dynamic vinyasa flow. Join us on the mat to experience the
              transformative power of yoga and connect with a supportive
              community of like-minded individuals.
            </p>
          </div>
        </div>
      </div>

      <div className="w-screen h-11 flex justify-evenly bg-transparent">
        <div className="flex py-4 justify-center">
          <p className="text-xs">&copy; All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

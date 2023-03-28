import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div>
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-2 p-20 md:py-32 justify-around md:px-28">
        <div>
          <div className="md:my-16">
            <p className="text-xl md:text-5xl font-semibold mb-10">Hello,</p>
            <p className="text-2xl md:text-6xl font-semibold mb-12">
              What's on your mind?
            </p>
            <p className="text-lg mb-4">
              Feel free to share any of your queries or feedback, we will be
              glad to hear you out.
            </p>
          </div>
          <div className="mb-4">
            <p className="text-2xl md:text-3xl font-semibold mb-2">
              Contact Details :{" "}
            </p>
            <p className="text-lg md:text-xl">Mobile - 052555</p>
            <p className="text-lg md:text-xl">Email - info@yogini.com</p>
          </div>
        </div>

        <div className="max-md:mt-10 md:ml-20 md:py-20 w-full ">
          <input
            type="text"
            placeholder="Name"
            className="w-full md:w-3/4 h-10 mb-8 border-2 p-2 border-gray-300 rounded-md"
            value=""
            onChange=""
          />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full md:w-3/4 h-10 mb-8 border-2 p-2 border-gray-300 rounded-md"
            value=""
            onChange=""
          />
          <input
            type="text"
            placeholder="Contact-No"
            className="w-full md:w-3/4 h-10 mb-8 border-2 p-2 border-gray-300 rounded-md"
            value=""
            onChange=""
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="w-full md:w-3/4 border-2 p-2 border-gray-300 rounded-md"
            value=""
            onChange=""
          />
          <div>
            <button
              className="text-white rounded-md text-md  p-2 mt-7 w-32 bg-red-500"
              onClick=""
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;

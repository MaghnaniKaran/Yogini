import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="w-screen h-screen">
      <Header />
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

      <Footer />
    </div>
  );
};

export default Home;

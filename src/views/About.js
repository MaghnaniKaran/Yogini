import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 py-16">
        <div className="flex justify-center items-center max-md:px-20">
          <img src="yogini.jpg" alt="..." className="h-auto md:w-96" />
        </div>

        <div className="max-md:px-20 max-md:py-10 md:pr-24 md:pl-3">
          {/*   */}
          <div className="md:mb-10">
            <p className="font-bold text-lg md:text-4xl">Hi !</p>
            <p className="font-bold text-xl md:text-6xl mt-2">I'm Liz,</p>
            <p className="text-md dm:text-lg mt-4">
              I believe that yoga is more than just a physical practice. It's a
              way of life that encompasses the mind, body, and spirit. Our
              classes are designed to help you achieve balance, strength, and
              flexibility while cultivating inner peace and mindfulness. We
              offer a variety of styles for all levels, from gentle restorative
              to dynamic vinyasa flow. Join us on the mat to experience the
              transformative power of yoga and connect with a supportive
              community of like-minded individuals.
            </p>
          </div>

          <div className="mb-10">
            <p className="text-md md:text-xl mt-2">
              A yogini can help someone achieve physical and mental well-being
              through the practice of yoga. Physically, practicing yoga
              regularly can help improve strength, flexibility, and balance,
              leading to better overall health and reduced risk of injury. A
              yogini can also guide someone through specific yoga postures and
              movements that target specific areas of the body, such as the
              back, neck, or hips, to relieve pain and stiffness. Mentally,
              practicing yoga can help reduce stress, anxiety, and depression. A
              yogini can teach someone specific breathing techniques and
              meditation practices that promote relaxation, focus, and inner
              peace. Yoga also encourages self-awareness and mindfulness,
              helping someone become more present in the moment and less caught
              up in worries and distractions. In addition, a yogini can help
              someone develop a deeper spiritual connection with themselves and
              the world around them. Through the practice of yoga, someone can
              tap into their inner strength, compassion, and wisdom, leading to
              greater happiness and fulfillment in their lives. Overall, a
              yogini can offer a holistic approach to health and well-being that
              can have transformative effects on someone's physical, mental, and
              spiritual health.
            </p>
          </div>

          <div>
            <button
              className="text-black font-semibold rounded-md text-md border-2 border-black p-2 mt-4 "
              onClick=""
            >
              More About Liz
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;

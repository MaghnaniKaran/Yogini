import { React } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useForm } from "react-hook-form";
import axios from "axios";

const Contact = () => {
  // const [success, setSuccess] = useState(true);
  // const [error, setError] = useState(true);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    axios
      .post(`http://localhost:8080/api/v1/contact/add`, {
        name: data.name,
        email: data.email,
        contact_no: data.contact_no,
        msg: data.msg,
      })
      .then((res) => {
        // setSuccess(false);
        console.log(res);
        reset();
      })
      .catch(() => {
        // setError(false);
      });
  };
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="max-md:mt-10 md:ml-20 md:py-[3.5rem] w-full ">
            <input
              type="text"
              placeholder="Name"
              className="w-full md:w-3/4 h-10 mt-8 border-2 p-2 border-gray-300 rounded-md"
              defaultValue=""
              {...register("name", { required: true })}
            />
            {errors.name?.type === "required" && (
              <p className="text-red-500 pt-[0.1rem]">*Name is required</p>
            )}
            <input
              type="email"
              placeholder="E-mail"
              className="w-full md:w-3/4 h-10 mt-8 border-2 p-2 border-gray-300 rounded-md"
              defaultValue=""
              {...register("email", {
                required: true,
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                },
              })}
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500 pt-[0.1rem]">*Email is required</p>
            )}
            {errors.email?.type === "pattern" && (
              <p className="text-red-500 pt-[0.1rem]">*Invalid email</p>
            )}

            <input
              type="text"
              placeholder="Contact"
              className="w-full md:w-3/4 h-10 mt-8 border-2 p-2 border-gray-300 rounded-md"
              defaultValue=""
              {...register("contact_no", { required: true })}
            />
            {errors.contact_no?.type === "required" && (
              <p className="text-red-500 pt-[0.1rem]">*Contact is required</p>
            )}
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full mt-8 md:w-3/4 border-2 p-2 border-gray-300 rounded-md"
              defaultValue=""
              {...register("msg", { required: true })}
            />
            {errors.msg?.type === "required" && (
              <p className="text-red-500 pt-[0.1rem]">*Messasge is required</p>
            )}
            <div>
              <button
                className="text-white rounded-md text-md  p-2 mt-7 w-32 bg-red-600"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>

      <Footer />

      <div
        id="toast-success"
        className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
        role="alert"
      >
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Check icon</span>
        </div>
        <div className="ml-3 text-sm font-normal">
          Message sent successfully.
        </div>
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          data-dismiss-target="#toast-success"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Contact;

import { ReactElement } from "react";
import { Login } from "../Login";

export const SignUp = (): ReactElement => {
  return (
    <>
      <div className="min-h-screen  text-gray-800 antialiased px-4 py-6 flex flex-col justify-center sm:py-1">
        <div className="relative py-3 sm:max-w-xl mx-auto text-center">
        <span className="text-2xl font-light">SignUp</span>
          <div className="relative mt-2 bg-white shadow-md sm:rounded-lg text-left">

            <div className="py-6 px-8 ">
              <input
                type="text"
                placeholder="FIRST NAME "
                className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-green-600 rounded-md"
              />

              <input
                type="text"
                placeholder="LAST NAME"
                className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-green-600 rounded-md"
              />

              <input
                type="text"
                placeholder="EMAIL ADDRESS"
                className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-green-600 rounded-md"
              />

              <input
                type="password"
                placeholder="PASSWORD"
                className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-green-600 rounded-md"
              />

              <div className="flex justify-center">
                <button className="mt-4 w-full bg-green-500 text-white py-2 px-6 rounded-lg">
                  Continue
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>

      <Login />
    </>
  );
};

export default SignUp;

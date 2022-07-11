import { ReactElement } from "react";

export const Login = (): ReactElement => {
  return (
    <>
      <div className="min-h-screen  text-gray-800 antialiased px-4 py-6 flex flex-col justify-center sm:py-1">
        <div className="relative py-3 sm:max-w-xl mx-auto text-center">
          <span className="text-2xl font-light">Login to your Account</span>
          <div className="relative mt-2 bg-white shadow-md sm:rounded-lg text-left">
            
            <div className="py-12 px-12 ">
                
              {/* <input
                type="text"
                placeholder="USER NAME "
                className="appearance-none border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-green-600 rounded-md"
              />

              <input
                type="password"
                placeholder="PASSWORD"
                className="appearance-none border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-green-600 rounded-md"
              /> */}

              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="username"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder=""
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Username
                </label>
              </div>

              <div className="relative z-0 w-full mb-12 group">
                <input
                  type="password"
                  name="password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Password
                </label>
              </div>

              <div className="flex justify-center">
                <button className="mt-4 w-full bg-green-500 text-white py-2 px-6 rounded-lg">
                  Login
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

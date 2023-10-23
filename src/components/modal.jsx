/* eslint-disable jsx-a11y/anchor-is-valid */
//login signup page
import React from "react";

function Modal({
  show,
  setShow,
  upVisible,
  setUpVisible,
  inVisible,
  setInVisible,
}) {
  const visible = show ? "block" : "hidden";

  return (
    <div
      className={
        "w-screen h-screen bg-[#ffffff2a] absolute top-0 left-0 font-['Monteserrat',sans-serif] " +
        visible
      }
    >
      <h1
        className="absolute text-[12px] text-white right-[290px] top-[77px] cursor-pointer p-0"
        onClick={() => {
          setShow(!show);
        }}
      >
        X
      </h1>
      <div className="bg-white w-[780px] h-[480px] rounded-xl m-auto left-0 right-0 top-20 flex absolute shadow-2xl">
        {inVisible && (
          <div
            className={"absolute left-0 w-1/2 h-full bg-white "}
            id="signincontainer"
          >
            <form className="flex flex-col items-center justify-center h-full px-10 text-center">
              <h1 className="text-3xl font-bold">Sign in</h1>
              <div className="flex my-5">
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 mx-1 text-base border border-gray-300 rounded-full"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 mx-1 text-base border border-gray-300 rounded-full"
                >
                  <i class="fab fa-google-plus-g"></i>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 mx-1 text-base border border-gray-300 rounded-full"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
              <p className="text-base ">or use your account</p>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 my-2 border-none rounded"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 my-2 border-none rounded"
              />
              <a href="#" className="my-1 text-xs">
                Forgot your password?
              </a>
              <button className="px-12 py-3 my-2 border rounded-3xl border-slate-800">
                Sign In
              </button>
            </form>
          </div>
        )}
        {inVisible && (
          <div
            className={"absolute right-0 z-10 w-1/2 h-full bg-orange-400 "}
            id="overlaysignin"
          >
            <div className="flex flex-col items-center justify-center h-full text-center px-14">
              <h1 className="text-3xl font-bold ">Hello, Friend!</h1>
              <p className="my-3 text-base">
                Enter your personal details and start journey with us
              </p>
              <button
                onClick={() => {
                  setInVisible(false);
                  setUpVisible(true);
                }}
                className="px-12 py-3 mt-2 border rounded-3xl border-slate-800"
                id="signup"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}

        {upVisible && (
          <div
            className={"absolute left-0 z-10 w-1/2 h-full bg-orange-400"}
            id="overlaysignup"
          >
            <div className="flex flex-col items-center justify-center h-full text-center px-14">
              <h1 className="text-3xl font-bold ">Welcome Back!</h1>
              <p className="my-3 text-base">
                To keep connected with us please login with your personal info
              </p>
              <button
                onClick={() => {
                  setInVisible(true);
                  setUpVisible(false);
                }}
                className="px-12 py-3 mt-2 border rounded-3xl border-slate-800"
                id="signin"
              >
                Sign In
              </button>
            </div>
          </div>
        )}
        {upVisible && (
          <div
            className={"absolute right-0 w-1/2 h-full bg-white"}
            id="signupcontainer"
          >
            <form className="flex flex-col items-center justify-center h-full px-10 text-center">
              <h1 className="text-3xl font-bold">Create Account</h1>
              <div className="flex my-5">
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 mx-1 text-base border border-gray-300 rounded-full"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 mx-1 text-base border border-gray-300 rounded-full"
                >
                  <i className="fab fa-google-plus-g"></i>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 mx-1 text-base border border-gray-300 rounded-full"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <p className="text-base ">or use your email for registration</p>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 my-2 border-none rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 my-2 border-none rounded"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 my-2 border-none rounded"
              />
              <button className="px-12 py-3 my-2 border rounded-3xl border-slate-800">
                Sign Up
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;

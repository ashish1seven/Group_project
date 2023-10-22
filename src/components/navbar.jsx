/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Modal from "./modal";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [show, setShow] = useState(false);
  
  const toggleInput = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div>
      <nav className="fixed flex items-center justify-between w-screen h-16 px-10 text-white bg-slate-900">
        <a
          className="px-3 py-1 text-2xl font-bold text-orange-400 duration-500 rounded hover:scale-125 font-['Monteserrat',sans-serif]"
          href=""
        >
          Meet Junction
        </a>
        <div className="flex ">
          <button
            className="px-2 py-1 mx-1 duration-500 rounded bg-slate-800 text-slate-400 "
            href=""
            onClick={toggleInput}
          >
            <i class="fi fi-br-search"></i>
          </button>
          {isExpanded && (
            <input
              className="pl-1 ml-1 duration-500 ease-linear border-none rounded bg-slate-800 text-slate-400"
              type="text"
              placeholder="Search..."
              autoFocus
              onBlur={toggleInput}
            />
          )}
        </div>

        <div className="flex items-center">
          <a
            className="px-5 py-1 mx-3 duration-500 rounded bg-slate-800 text-slate-400 hover:scale-125"
            href=""
          >
            Find Events
          </a>
          <a
            className="px-5 py-1 mx-3 duration-500 rounded bg-slate-800 text-slate-400 hover:scale-125"
            href=""
          >
            Create Events
          </a>
          <button
            onClick={() => {
              setShow(!show);
            }}
            className="px-5 py-1 mx-2 font-medium duration-500 border rounded text-slate-400 border-slate-500 hover:scale-110"
          >
            Log In
          </button>
          <button
            onClick={() => {
              setShow(!show);
            }}
            className="px-5 py-1 mx-2 font-medium duration-500 border rounded bg-slate-700 text-slate-100 border-slate-500 hover:scale-110"
          >
            Sign Up
          </button>
        </div>
      </nav>
      <Modal show={show} setShow={setShow} />
    </div>
  );
};

export default Navbar;

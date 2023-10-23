/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Modal from "./modal";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [show, setShow] = useState(false);
  const [upVisible, setUpVisible] = useState(false);
  const [inVisible, setInVisible] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  
  const toggleInput = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setIsDropdownVisible(false);
  };
  
  return (
    <div>
      <nav className="fixed flex items-center justify-between w-screen h-16 px-10 text-white bg-slate-900">
        <a
          className="px-6 py-1 text-xl font-bold text-orange-400 duration-500 rounded hover:scale-125 font-['Monteserrat',sans-serif]"
          href=""
        >
          Connect <br /> Junction
        </a>
        <div className="flex ">
          <button
            className="px-2 py-1 mx-1 rounded bg-slate-800 text-slate-400 "
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

        <div className="relative flex items-center">
          <a
            className="px-5 py-1 mx-3 duration-500 rounded bg-slate-800 text-slate-400 hover:scale-125"
            href=""
          >
            Find Events
          </a>
          <div onMouseEnter={toggleDropdown} onMouseLeave={closeDropdown}>
            <button
              className="px-5 py-1 mx-3 duration-500 rounded bg-slate-800 text-slate-400 hover:scale-110"
              href=""
              id="create-event"
            >
              Create Events
            </button>
            {isDropdownVisible && (
              <div
                className={`absolute z-10 flex flex-col w-32 h-16 px-3 py-1 border rounded shadow-lg justify-evenly left-40 top-9`}
              >
                <a href="#" className="">
                  Local Event
                </a>
                <a href="#">E-Event</a>
              </div>
            )}
          </div>
          <button
            onClick={() => {
              setShow(!show);
              setInVisible(true);
              setUpVisible(false);
            }}
            className="px-5 py-1 mx-2 font-medium duration-500 border rounded text-slate-400 border-slate-500 hover:scale-110"
          >
            Log In
          </button>

          <button
            onClick={() => {
              setShow(!show);
              setInVisible(false);
              setUpVisible(true);
            }}
            className="px-5 py-1 mx-2 font-medium duration-500 border rounded bg-slate-700 text-slate-100 border-slate-500 hover:scale-110"
          >
            Sign Up
          </button>
          <button className="px-2 py-1 mx-1 duration-300 rounded hover:scale-110 bg-slate-800 text-slate-400">
            <p className="origin-center rotate-[-45deg]">
              <i className=" fi fi-ss-moon"></i>
            </p>
            {/* <i class="fi fi-ss-brightness"></i> */}
          </button>
        </div>
      </nav>
      <Modal
        show={show}
        setShow={setShow}
        upVisible={upVisible}
        setUpVisible={setUpVisible}
        inVisible={inVisible}
        setInVisible={setInVisible}
      />
    </div>
  );
};

export default Navbar;

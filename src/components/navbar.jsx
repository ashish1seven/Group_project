/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Modal from "./modal";
import { Link } from "react-router-dom";
import Logo from "../Images/logo.png"

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
    <>
      <nav className=" flex items-center justify-between w-screen h-16 px-10 text-white bg-transparent">
        <Link
          className="relative flex px-6 py-1 text-lg font-bold duration-500 hover:scale-110"
        >
          <img
            src={Logo}
            alt=""
            className="h-12"
          />
        </Link>
        <div className="flex ">
          <button
            className="px-2 py-1 mx-1 text-white bg-transparent rounded "
            href=""
            onClick={toggleInput}
          >
            <i class="fi fi-br-search"></i>
          </button>
          {isExpanded && (
            <input
              className="pl-1 ml-1 text-white duration-500 ease-linear border-none rounded outline-none bg-gray-400/20"
              type="text"
              placeholder="Search Events"
              autoFocus
              onBlur={toggleInput}
            />
          )}
        </div>

        <div className="relative flex items-center">
          <Link
            className="px-5 py-1 mx-3 font-semibold text-white duration-500 rounded hover:scale-110"
             to={`/find`}
          >
            Find Events
          </Link>
          <div onMouseEnter={toggleDropdown} onMouseLeave={closeDropdown} className='relative'>
            <button
              className="px-5 py-1 mx-3 font-semibold text-white duration-500 rounded hover:scale-110"
              href=""
              id="create-event"
            >
              <Link to={`/create`}>
                Create Event
                </Link>
            </button>
            {isDropdownVisible && (
              <div
                className={`absolute z-10 flex flex-col w-32 h-16 px-3 py-1 border rounded shadow-lg justify-evenly left-4 top-8`}
              >
                <Link to={`#`}>Local Event</Link>
                <Link to={`#`}>E-Event</Link>
              </div>
            )}
          </div>
          <button
            onClick={() => {
              setShow(!show);
              setInVisible(true);
              setUpVisible(false);
            }}
            className="px-5 py-1 mx-2 font-semibold text-white duration-500 border rounded hover:scale-110"
          >
            Log In
          </button>

          <button
            onClick={() => {
              setShow(!show);
              setInVisible(false);
              setUpVisible(true);
            }}
            className="px-5 py-1 mx-2 font-medium duration-500 bg-pink-600 border rounded text-slate-100 hover:scale-110"
          >
            Sign Up
          </button>
          <button className="px-2 py-1 mx-1 text-white duration-300 bg-transparent border rounded hover:scale-110">
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
    </>
  );
};

export default Navbar;

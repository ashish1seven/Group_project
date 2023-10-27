import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div>
      <footer className="h-[500px] w-full bg-[#1A1831] text-white py-8 px-[170px]">
        <div className="flex items-center mb-5">
          <p className="font-semibold mr-5">Create your own Connect group.</p>
          <Link className="border-2 p-2 rounded-md font-semibold hover:bg-white hover:text-black">
            <button>Get Started</button>
          </Link>
        </div>
        <div className="border-t-[1px] border-white/40 py-5 flex w-full h-[200px] justify-start">
          <div className="mr-[250px]">
            <ul className="">
              <li className="text-lg font-semibold">Your Account</li>
              <li>
                <Link to="#" className="text-sm hover:font-bold">
                  Sign up
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm hover:font-bold">
                  Log in
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm hover:font-bold">
                  Help
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm hover:font-semibold">
                  Become an Affiliate
                </Link>
              </li>
            </ul>
          </div>
          <div className="mr-[250px]">
            <ul className="">
              <li className="text-lg font-semibold">Discover</li>
              <li>
                <Link to="#" className="text-sm hover:font-bold">
                  Groups
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm hover:font-bold">
                  Calendar
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm hover:font-bold">
                  Topics
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm hover:font-bold">
                  Cities
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm  hover:font-bold">
                  Online Events
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm  hover:font-bold">
                  Local Guides
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm  hover:font-bold">
                  Make Friends
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="">
              <li className="text-lg font-semibold">Meetup</li>
              <li>
                <Link to="#" className="text-sm  hover:font-bold">
                  About
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm  hover:font-bold">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm  hover:font-bold">
                  Meetup Pro
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm  hover:font-bold">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm  hover:font-bold">
                  Apps
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm  hover:font-bold">
                  Podcast
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

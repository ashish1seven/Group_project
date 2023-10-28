import React from "react";
import bgImg from "../Images/pexels-ronê-ferreira-2735037.jpg";
import Footer from "../components/Footer";
const Findevents = () => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center h-[90vh] w-screen "
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundPosition: "top",
          backgroundSize: "contain",
          backgroundAttachment: "fixed",
          backgroundRepeat:"no-repeat"
        }}
      >
        <h1 className="pb-10 text-7xl text-center text-white font-semibold font-['Monteserrat',sans-serif]">
          Discover
        </h1>
        <div className="rounded-3xl overflow-hidden border-black border">
          <input
            type="text"
            placeholder="Search"
            className="h-12 pl-3 w-80 bg-transparent outline-0"
          />
          <select
            name=""
            id=""
            className="h-12  w-80 pl-3 mr-3 border-l-2 font-medium bg-transparent border-gray-800 text-gray-400 outline-0"
          >
            <option className="text-black">All Categories</option>
            <option className="text-black">Dancing</option>
            <option className="text-black">Playing</option>
          </select>
        </div>
        <div className="rounded-3xl overflow-hidden border-black border mt-4 bg-transparent">
          <input
            type="text"
            placeholder="Location or ZIP-code"
            className="h-12 pl-3 w-80 bg-transparent outline-0"
          />
          <select
            name=""
            id=""
            className="h-12  w-80 pl-3 mr-3 border-l-2 font-medium text-gray-400 bg-transparent border-gray-800 outline-0"
          >
            <option className="font-medium text-black">
              Within any distance
            </option>
            <option className="font-medium text-black">Within 10 miles</option>
            <option className="font-medium text-black">Within 25 miles</option>
            <option className="font-medium text-black">Within 50 miles</option>
            <option className="font-medium text-black">Within 100 miles</option>
          </select>
        </div>
        <button
          type="button"
          className="px-10 py-2 border mt-4 rounded-3xl font-semibold font-['Monteserrat',sans-serif] text-white border-black"
        >
          SEARCH
        </button>
      </div>
      <div>
      <div>
      <Footer />
    </div>
      </div>
    </>
  );
};

export default Findevents;

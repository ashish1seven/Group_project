import React, { useState } from "react";
import bgImg from "../Images/pexels-ronê-ferreira-2735037.jpg";

const Findevents = () => {
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");

  const cityChange = (event) => {
    setCity(event.target.value);
  };

  const categoryChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <>
      <div className="flex w-screen justify-between h-screen">
        <div className="flex flex-col justify-center p-12 ">
          <h1 className="text-5xl">
            Events in{" "}
            <span>
              <u>{city.charAt(0).toUpperCase() + city.slice(1)}</u>
            </span>
          </h1>
        </div>
        <div
          className="flex flex-col items-center justify-center h-[90%] w-[66%] "
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundPosition: "top",
            backgroundSize: "contain",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="pb-10 text-7xl text-center text-white font-semibold font-['Monteserrat',sans-serif]">
            Discover
          </h1>
          <div className="overflow-hidden border border-black rounded-3xl">
            <input
              type="text"
              placeholder="Search"
              className="h-12 pl-3 bg-transparent w-80 outline-0"
              id="city"
              value={city}
              onChange={cityChange}
            />
            <select
              name=""
              id="category"
              value={category}
              onChange={categoryChange}
              className="h-12 pl-3 mr-3 font-medium text-gray-400 bg-transparent border-l-2 border-gray-800 w-80 outline-0"
            >
              <option className="text-black">All Categories</option>
              <option className="text-black">Dancing</option>
              <option className="text-black">Playing</option>
            </select>
          </div>
          <button
            type="button"
            onClick={() => console.log("Clicked", city, category)}
            className="px-10 py-2 border mt-4 rounded-3xl font-semibold font-['Monteserrat',sans-serif] text-white border-black"
          >
            SEARCH
          </button>
        </div>
      </div>
      <div>
        <h1 className="mt-9 text-5xl ">
          Popular for{" "}
          <span>
            <u>{category}</u>
          </span>
        </h1>
      </div>
    </>
  );
};

export default Findevents;

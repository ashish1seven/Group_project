import React, { useState } from "react";
import bgImg from "../Images/pexels-ronê-ferreira-2735037.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
const Findevents = () => {
  const [city, setCity] = useState("Bangalore");
  const [category, setCategory] = useState("");
  const [cityInput, setCityInput] = useState("");
  // const [categoryInput, setCategoryInput] = useState("");

  const cityChange = (event) => {
    setCityInput(event.target.value);
  };

  // const categoryChange = (event) => {
  //   setCategoryInput(event.target.value);
  // };

  const handleSearch = () => {
    setCity(cityInput);
    setCityInput("");
    // setCategory(categoryInput);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div
        className="h-[85vh] w-screen"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <Navbar />
        <div className="mt-40 px-[150px] flex flex-col items-center ">
          <h1 className="mb-10 text-7xl text-center text-white font-semibold font-['Monteserrat',sans-serif]">
            Discover
          </h1>
          <div className="overflow-hidden w-80 border border-white rounded-3xl">
            <input
              type="text"
              placeholder="Search City"
              className="h-12 pl-3 text-white   w-80 outline-0 placeholder:text-white bg-gray-400/20"
              id="city"
              value={cityInput}
              onChange={cityChange}
              onKeyDown={handleKeyDown}
            />
            {/* <select
            name=""
            id="category"
            value={categoryInput}
            onChange={categoryChange}
            className="h-12 pl-3 mr-3 font-medium text-gray-400 bg-transparent border-l-2 border-gray-800 w-80 outline-0"
          >
            <option className="text-black">All Categories</option>
            <option className="text-black">Dancing</option>
            <option className="text-black">Playing</option>
          </select> */}
          </div>
          <button
            type="button"
            onClick={handleSearch}
            className="px-10 py-2 border mt-4 rounded-3xl font-semibold font-['Monteserrat',sans-serif] text-white border-white"
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
      <div></div>

      <p className="m-6 text-3xl ml-44">
        Events in{" "}
        <span className="text-6xl">
          <u>{city.charAt(0).toUpperCase() + city.slice(1)}</u>
        </span>
      </p>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Findevents;

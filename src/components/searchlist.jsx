import React from "react";
import Card from "./card";
import { searchData } from "../data";
import { useDarkMode } from "../darkmodecontext";

let displayData = searchData;

function Searchlist({ city }) {
  const { darkMode } = useDarkMode();
  const matchingData = displayData.find(data => data.title.toLowerCase() === city.toLowerCase());

  if (matchingData) {
    return (
      <div className={`${darkMode ? "dark" : ""}`}>
        <div className="flex flex-wrap m-auto w-[1300px] justify-evenly items-center dark:bg-slate-900 mb-5">
          <Card data={matchingData} />
        </div>
      </div>
    );
  } else {
    return (
      <div className={`${darkMode ? "dark" : ""}`}>
        <div className="flex flex-wrap m-auto w-[1300px] justify-center items-center dark:bg-slate-900 mb-10">
          <h1 className="text-3xl ">No matching events found</h1>
        </div>
      </div>
    );
  }
}
export default Searchlist;

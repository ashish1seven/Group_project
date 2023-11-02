import React from "react";
import Card from "./card";
import { searchData } from "../data";
import { useDarkMode } from "../darkmodecontext";

let displayData = searchData;

function Searchlist({ city }) {
  const { darkMode } = useDarkMode();
  for (let i = 0; i < displayData.length; i++) {
    
    if (displayData[i].title === city) {
      return (
        <div className={`${darkMode ? "dark" : ""}`}>
        <div className="flex flex-wrap m-auto w-[1300px] justify-evenly items-center dark:bg-slate-900">
          <Card data={searchData[i]} />
          </div>
        </div>
      );
    }
  }
  
}
export default Searchlist;

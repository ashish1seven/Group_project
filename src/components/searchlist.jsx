import React from "react";
import Card from "./card";
import { searchData } from "../data";

let displayData = searchData;

function Searchlist({ city }) {
    console.log(city)
  for (let i = 0; i < displayData.length; i++) {
    if (displayData[i].title === city) {
      return (
        <div className="flex flex-wrap m-auto w-[1300px] justify-evenly items-center">
          <Card data={searchData[i]} />       
        </div>
      );
    }
  }
  
}

export default Searchlist;

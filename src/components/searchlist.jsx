import React from "react";
import Card from "./card";
import { searchData } from "../data";

let displayData = searchData;

function Searchlist({ city, setCity }) {
    console.log(city)
  for (let i = 0; i < displayData.length; i++) {
    
    if (displayData[i].title === city) {
      return (
        <div className="flex flex-wrap m-6 w-[1200px] flex-row">
          <Card data={searchData[i]} />
        </div>
      );
    }
  }
  
}

export default Searchlist;

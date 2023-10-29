import React from "react";

function Card({ data }) {
  // console.log(data.cardSet[0])
  return (
    <div className="p-5 m-3 border-2 rounded-lg h-72 w-96">
      <img src={data.cardSet[0].image} className="w-full h-44" alt="" />
    
      <h4>{data.cardSet[0].date}</h4>
      <h1>{data.cardSet[0].title}</h1>
      <p>{data.cardSet[0].description}</p>
      <p>{data.cardSet[0].venue}</p>
      <p>{data.cardSet[0].organizer}</p>
    </div>
  );
}

export default Card;

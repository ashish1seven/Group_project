import React from "react";

function Card({ data }) {
  return (
    <div className="p-5 m-3 border-2 rounded-lg h-72 w-96">
      <img src={data.cardSet.img} className="w-full h-44" alt="" />
      <h4>{data.cardSet.date}</h4>
      <h1>{data.cardSet.title}</h1>
      <p>{data.cardSet.description}</p>
      <p>{data.cardSet.venue}</p>
      <p>{data.cardSet.organizer}</p>
    </div>
  );
}

export default Card;

import React from "react";

function Card({ data }) {
  // console.log(data.cardSet[0])
  
  return (
    <div>
      {data.cardSet.map((v, i) => (
        <div key={i} className="p-5 m-3 border-2 rounded-lg h-72 w-96">
          <img src={v.image} className="w-full h-44" alt="" />
          <h4>{v.date}</h4>
          <h1>{v.title}</h1>
          <p>{v.description}</p>
          <p>{v.venue}</p>
          <p>{v.organizer}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;

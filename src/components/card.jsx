import React from "react";

function Card({ data }) {
  // console.log(data.cardSet[0])
  
  return (
    <div className="flex justify-center flex-wrap">
      {data.cardSet.map((v, i) => (
        <div key={i} className="m-3 border-2 rounded-lg h-96 w-96">
          <img src={v.image} className="w-full h-44 rounded-md" alt="" />
          <div className="p-4 h-40 flex flex-col justify-evenly">
          <h4 className="text-[#333333] text-sm">{v.date}</h4>
          <h1 className="font-bold text-2xl">{v.title}</h1>
          {/* <p>{v.description}</p> */}
          <p className="text-[#333333] text-sm">{v.organizer} ,{v.venue}</p>
          </div>
          <div className="text-xl h-12 flex justify-evenly">
          <i className="fi fi-br-paper-plane-top"></i>
          <i className="fi fi-sr-users"></i>
          <i className="fi fi-br-square-poll-vertical"></i>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;

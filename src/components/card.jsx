import React from "react";

function Card({ data }) {
  // console.log(data.cardSet[0])
  
  return (
    <div className="flex flex-wrap items-center justify-between w-full">
      {data.cardSet.map((v, i) => (
        <div key={i} className="m-3 border-2 rounded-lg h-96 w-96">
          <img src={v.image} className="w-full rounded-md h-44 border-none outline-none" alt="" />
          <div className="flex flex-col h-40 p-4 justify-evenly">
            <h4 className="text-[#333333] text-sm">{v.date}</h4>
            <h1 className="text-2xl font-bold">{v.title}</h1>
            {/* <p>{v.description}</p> */}
            <p className="text-[#333333] text-sm">
              {v.organizer} ,{v.venue}
            </p>
          </div>
          <div className="flex h-12 text-xl justify-evenly">
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

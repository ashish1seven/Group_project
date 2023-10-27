import React from "react";



const Findevents = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-24 ">
        <h1 className="pb-10 text-6xl text-center">Discover</h1>
        <div className="rounded-3xl overflow-hidden border-black border">
          <input type="text" placeholder="Search" className="h-12 pl-3 w-80 " />
          <select name="" id="" className="h-12  w-80 pl-3 mr-3 border-l-2">
            <option disabled className="font-medium">
              All Categories
            </option>
            <option value="">Dancing</option>
            <option value="">Playing</option>
          </select>
        </div>
        <div className="rounded-3xl overflow-hidden border-black border mt-4">
          <input type="text" placeholder="Location or ZIP-code" className="h-12 pl-3 w-80 " />
          <select name="" id="" className="h-12  w-80 pl-3 mr-3 border-l-2">
            <option className="font-medium">Within any distance</option>
            <option className="font-medium">Within 10 miles</option>
            <option className="font-medium">Within 25 miles</option>
            <option className="font-medium">Within 50 miles</option>
            <option className="font-medium">Within 100 miles</option>
          </select>
        </div>
        <button type="button" className="px-10 py-2 border mt-4 rounded-3xl font-semibold border-black">SEARCH</button>
      </div>
    </>
  );
};

export default Findevents;

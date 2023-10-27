import React from "react";
import bgImg from "../Images/pexels-wendy-wei-1306791.jpg";

const Createevents = () => {
  return (
    <div
        className="flex flex-col items-center justify-center h-[90vh] w-screen"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundPosition: "top",
          backgroundSize: "contain",
          backgroundAttachment: "fixed",
          backgroundRepeat:"no-repeat"
        }}
    >
      <button className="px-10 py-2 text-white border-4 rounded-3xl relative top-[240px] bg-red-500">Get Started for Free</button>
      </div>
  );
};

export default Createevents;

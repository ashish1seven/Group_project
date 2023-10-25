import React from "react";
import { Link } from "react-router-dom";

const Createevents = () => {
  return (
    <div>
      <Link to={`create/`}>
        <h1 className="text-5xl text-white">Create Events</h1>
      </Link>
    </div>
  );
};

export default Createevents;

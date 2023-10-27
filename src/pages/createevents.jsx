import React, { useState } from "react";
import bgImg from "../Images/pexels-wendy-wei-1306791.jpg";
import Modal from "../components/modal";

const Createevents = () => {
  const [show, setShow] = useState(false);
  const [upVisible, setUpVisible] = useState(false);
  const [inVisible, setInVisible] = useState(false);

  return (
    <div
      className="flex flex-col items-center justify-center h-[90vh] w-screen"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: "top",
        backgroundSize: "contain",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <button
        onClick={() => {
          setShow(!show);
          setInVisible(false);
          setUpVisible(true);
        }}
        className="px-10 py-2 text-white border-4 rounded-xl relative top-[240px] bg-red-500"
      >
        Get Started for Free
      </button>
      <Modal
        show={show}
        setShow={setShow}
        upVisible={upVisible}
        setUpVisible={setUpVisible}
        inVisible={inVisible}
        setInVisible={setInVisible}
      />
    </div>
  );
};

export default Createevents;

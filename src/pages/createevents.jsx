import React, { useState } from "react";
import bgImg from "../Images/pexels-wendy-wei-1306791.jpg";
import Modal from "../components/modal";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
const Createevents = () => {
  const [show, setShow] = useState(false);
  const [upVisible, setUpVisible] = useState(false);
  const [inVisible, setInVisible] = useState(false);

  return (
    <>
      <div
        className="h-[90vh] w-screen flex flex-col items-center "
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <Navbar />
        <button
          onClick={() => {
            setShow(!show);
            setInVisible(false);
            setUpVisible(true);
          }}
          className="px-10 py-2 text-white border-4 rounded-xl relative top-[240px] w-80 bg-red-500"
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
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Createevents;

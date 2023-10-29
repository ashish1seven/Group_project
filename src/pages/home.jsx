import React from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import Work from "../components/Work";
import bgImg from "../Images/header-back.jpeg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="h-screen w-screen">
        <div
          className="h-[90vh] w-screen"
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        >
          <Navbar />
          <div className="h-full w-full flex items-center flex-col justify-start text-white font-bold tracking-wide ">
            <div className="text-6xl text-center mt-40 mb-10">
            <h1 className="mb-4">Start your group.</h1>
            <h1 className="mb-5">Meet your tribe.</h1>
            <p className="text-[28px] mb-5 font-normal">We provide the platform. Just Connect</p>
            </div>
            <div className="flex justify-center">
            <Link className="border-2 border-[#FF0079] mr-5 w-[150px] text-center p-2 rounded-md font-bold bg-[#FF0079] hover:bg-[#FF0079]/80">
            <button>Discover</button>
          </Link>
            <Link className="border-2 p-2 rounded-md text-center w-[150px] font-bold hover:bg-white hover:text-black">
            <button>Create Group</button>
          </Link>
            </div>
          </div>
        </div>
        <div className="h-[400px] mt-10">
          <h1 className="text-pink-700 text-2xl font-semibold text-center">
            Discover Experiences
          </h1>
          <p className="text-center text-[#333333] text-lg mt-5">
            This site is for everyone. Choose from thousands of interests to
            find local like-minded people and groups.
          </p>
          <Categories />
        </div>
        <section className="h-[700px] w-full mb-5">
          <div className="h-10 text-2xl font-semibold text-center ">
            <span className="border-b-[3px] border-[#FF0079] pb-2 ">
              How It Works
            </span>
          </div>
          <Work />
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Home;

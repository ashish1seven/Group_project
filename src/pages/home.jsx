import React from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import Work from "../components/Work";
import bgImg from "../Images/header-back.jpeg";
import { Link } from "react-router-dom";
import { useDarkMode } from "../darkmodecontext";

const Home = () => {
  const { darkMode } = useDarkMode();
  return (
    <>
      <div className={`${darkMode ? "dark" : ""}`}>
        <div className={`w-screen dark:bg-slate-900 `}>
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
            <div className="flex flex-col items-center justify-start w-full h-full font-bold tracking-wide text-white dark:text-black ">
              <div className="mt-40 mb-10 text-6xl text-center">
                <h1 className="mb-4">Start your group.</h1>
                <h1 className="mb-5">Connect your vibe.</h1>
                <p className="text-[28px] mb-5 font-normal">
                  We provide the platform. Just Connect
                </p>
              </div>
              <div className="flex justify-center">
                <Link
                  className="border-2 border-[#FF0079] mr-5 w-[150px] text-center p-2 rounded-md font-bold bg-[#FF0079] hover:bg-[#FF0079]/80 dark:text-black"
                  to={"/findevents"}
                >
                  <button>Discover</button>
                </Link>
                <Link
                  to={`/creategroup`}
                  className="border-2 p-2 rounded-md text-center w-[150px] font-bold hover:bg-white hover:text-black dark:text-black dark:border-black dark:hover:text-white dark:hover:bg-black"
                >
                  <button>Create Group</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="h-[400px] mt-10 dark:bg-slate-900">
            <h1 className="text-2xl font-semibold text-center text-pink-700">
              Discover Experiences
            </h1>
            <p className="text-center text-[#333333] text-lg mt-5">
              This site is for everyone. Choose from thousands of interests to
              find local like-minded people and groups.
            </p>
            <Categories />
          </div>
          <section className="h-[700px] w-full mb-5 dark:bg-slate-900">
            <div className="h-10 text-2xl font-semibold text-center ">
              <span className="border-b-[3px] border-[#FF0079] pb-2 ">
                How It Works
              </span>
            </div>
            <Work />
          </section>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;

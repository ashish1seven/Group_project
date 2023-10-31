import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import msg from "../Images/msg.png";
import app from "../Images/app.png";
import growth from "../Images/growth.png";
import offset from "../Images/offset.png";
import google from "../Images/downloadGoogle.svg";
import apple from "../Images/downloadApple.svg";
import Logo from "../Images/Favicon.png";
const benefits = [
  {
    id : 1,
    title: 'Reach New People',
    description: 'Connect with people in your area who are curious about the things you love.',
    logo: msg,
  },
  {
    id : 2,
    title: 'An App for Organizing',
    description: 'Chat with attendees, take attendance, and make updates to your events with the Meetup for Organizers app.',
    logo: app,
  },
  {
    id : 3,
    title: 'Continuous Growth',
    description: "We'll keep promoting your group throughout our network so it continues to grow.",
    logo: growth,
  },
  {
    id : 4,
    title: 'Offset Costs',
    description: 'Get support from your group members with member dues, event fees, or our fundraising tools.',
    logo: offset,
  },
]
const features = [
  {
    id : 1,
    title: 'Build lasting friendships',
    description: 'Spark new friendships. Start a group to meet people who are new in town or longtime locals. Enjoy nightlife, happy hours, game nights, music, and more.',
    logo: 'https://www.meetup.com/_next/image/?url=%2Fimages%2Fhow-to-group-start%2Ffriendship.webp&w=1920&q=75',
  },
  {
    id : 2,
    title: 'Build healthy habits',
    description: 'What are your health goals this year? Start a group to practice yoga, meditate, eat better, play a sport, run, hike, bike, and meet your goals together.',
    logo: 'https://www.meetup.com/_next/image/?url=%2Fimages%2Fhow-to-group-start%2Fyoga.webp&w=1920&q=75',
  },
  {
    id : 3,
    title: 'Build a network for career success',
    description: "From real estate and cryptocurrency to entrepreneurship and business development, there are people who share your professional interests on Meetup. Start a group and get connected.",
    logo: 'https://www.meetup.com/_next/image/?url=%2Fimages%2Fhow-to-group-start%2Fcareer.webp&w=1920&q=75',
  },
  {
    id : 4,
    title: 'Prioritize your passions',
    description: 'Meet people who share your love for art, crafts, writing, dancing, photography, language, or music. Teach lessons or start a culture exchange when you create a group.',
    logo: 'https://www.meetup.com/_next/image/?url=%2Fimages%2Fhow-to-group-start%2Farts.webp&w=1920&q=75',
  },
]
const Creategroup = () => {
  return (
    <>
      <div
        className=" h-[85vh] text-white px-52 py-44 text-center"
        style={{
          backgroundImage:
            "url('https://modulescomposer.s3.us-east-2.amazonaws.com/eventpro/header.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <img src={logo} alt="" className="h-16 m-auto mb-10" />
        <h1 className="mb-4 text-4xl font-bold">
          Connect: The App That Links Hearts and Minds
        </h1>
        <p className="mb-10 text-xl ">
          Your New Community Awaits on Connect. Join millions in making real
          connections over shared interests. Start your group today.
        </p>
        <Link
          className="border-2 text-white border-[#FF0079] mr-5 w-[150px] text-center p-2 rounded-md font-bold bg-[#FF0079] hover:bg-[#FF0079]/80"
          to={"/start"}
          target="_blank"
        >
          <button>Start a group</button>
        </Link>
      </div>
      <section className="w-screen mb-10">
        <h1 className="my-8 text-4xl font-bold text-center">
          <span className="text-[#FF0079]">Connect</span> makes it easy to build
          a community
        </h1>
        <div className="flex items-center justify-evenly ">
          {benefits.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-col items-center w-[220px] h-[200px] justify-evenly"
              >
                <img src={item.logo} alt="" className="h-10 rounded-lg" />
                <h1 className="text-xl font-bold text-center ">{item.title}</h1>
                <p className="text-sm text-center"> {item.description} </p>
                <Link
                  to={"/start"}
                  target="_blank"
                  className="text-[#FF0079] font-semibold text-sm"
                >
                  <button>START NOW</button>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
      <section className="bg-[#F5DEB3]/80 p-10">
        <h1 className="my-3 text-4xl font-bold text-center">
          Make 2023 your year with{" "}
          <span className="text-[#FF0079]">Connect!</span>{" "}
        </h1>
        <p className="mb-12 text-sm text-center">
          Quickly make new friends with over 60 million users, <br /> all here
          to connect over shared interests, build professional networks, and
          have a blast.
        </p>
        <div className="flex flex-wrap items-center justify-evenly ">
          {features.map((item) => {
            return (
              <Link key={item.id}>
                <div className="h-[450px] w-[300px] shadow-2xl mb-10 bg-white">
                  <div
                    className="h-[250px] w-full"
                    style={{
                      backgroundImage: `url(${item.logo})`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <div className="flex flex-col items-start p-4 justify-evenly">
                    <h1 className="text-[#FF0079] font-bold text-lg">
                      {item.title}
                    </h1>
                    <p className="text-sm"> {item.description} </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <section className="h-[250px] flex justify-evenly p-10">
        <div className="w-[50%]">
          <h1 className="mb-3 text-2xl font-bold ">
            Find Your People in 2023.
          </h1>
          <p className="mb-10 text-lg text-left">
            Make time for your interests and connect with like-minded
            individuals. Lasting connections are made on Connect.
          </p>
          <Link
            className="border-2 text-white border-[#FF0079] mr-5 w-[150px] text-center p-2 rounded-md font-bold bg-[#FF0079] hover:bg-[#FF0079]/80"
            to={"/start"}
            target="_blank"
          >
            <button>Start today</button>
          </Link>
        </div>
        <div className="hover:scale-110">
          <img src={Logo} alt="" />
        </div>
      </section>
      <footer className="h-[400px] w-full bg-[#1A1831] text-white  px-[170px]">
        <div className="border-white/40 py-5 flex w-full h-[200px] justify-start mb-5">
          <div className="mr-56">
            <ul className="">
              <li className="text-lg font-bold">Your Account</li>
              <li>
                <Link
                  to="#"
                  className="text-sm font-semibold text-[#c4c4c4] hover:text-white"
                >
                  Sign up
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm font-semibold text-[#c4c4c4] hover:text-white"
                >
                  Log in
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm font-semibold text-[#c4c4c4] hover:text-white"
                >
                  Help
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm font-semibold text-[#c4c4c4] hover:text-white"
                >
                  Become an Affiliate
                </Link>
              </li>
            </ul>
          </div>
          <div className="mr-56">
            <ul className="">
              <li className="text-lg font-bold">Discover</li>
              <li>
                <Link
                  to="#"
                  className="text-sm font-semibold text-[#c4c4c4] hover:text-white"
                >
                  Groups
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm font-semibold text-[#c4c4c4] hover:text-white"
                >
                  Calendar
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm font-semibold text-[#c4c4c4] hover:text-white"
                >
                  Topics
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm font-semibold text-[#c4c4c4] hover:text-white"
                >
                  Cities
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm font-semibold text-[#c4c4c4] hover:text-white"
                >
                  Online Events
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm font-semibold text-[#c4c4c4] hover:text-white"
                >
                  Local Guides
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm font-semibold text-[#c4c4c4] hover:text-white"
                >
                  Make Friends
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="">
              <li className="text-lg font-bold">Connect</li>
              <li>
                <Link
                  to="#"
                  className="text-sm font-semibold text-[#c4c4c4] hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm font-semibold text-[#c4c4c4] hover:text-white"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm font-semibold text-[#c4c4c4] hover:text-white"
                >
                  Connect Pro
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm font-semibold text-[#c4c4c4] hover:text-white"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm font-semibold text-[#c4c4c4] hover:text-white"
                >
                  Apps
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm font-semibold text-[#c4c4c4] hover:text-white"
                >
                  Podcast
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="my-8">
          <h3 className="mb-4 text-lg font-medium ">Follow us</h3>
          <div className="flex justify-between w-full">
            <div className="flex items-center justify-between h-10 text-xl w-52">
              <Link>
                {" "}
                <i className="fi fi-brands-facebook"></i>
              </Link>
              <Link>
                <i className="fi fi-brands-twitter"></i>
              </Link>
              <Link>
                <i className="fi fi-brands-instagram"></i>
              </Link>
              <Link>
                <i className="fi fi-brands-youtube"></i>
              </Link>
            </div>
            <div className="flex">
              <Link className="mr-3">
                <img src={google} alt="" className="h-10 rounded-md " />
              </Link>
              <Link>
                <img src={apple} alt="" className="h-10 rounded-md" />
              </Link>
            </div>
          </div>
        </div>
        <ul className="flex items-center w-full h-8 text-sm ">
          <li className="mr-[30px] text-lg font-bold">&copy; 2023 Connect</li>
          <Link className="mr-[30px] font-semibold text-[#c4c4c4] hover:text-white">
            <li>Terms of Service</li>
          </Link>
          <Link className="mr-[30px] font-semibold text-[#c4c4c4] hover:text-white">
            <li>Privacy Policy</li>
          </Link>
          <Link className="mr-[30px] font-semibold text-[#c4c4c4] hover:text-white">
            <li>Cookie Policy</li>
          </Link>
          <Link className="font-semibold text-[#c4c4c4] hover:text-white">
            <li>Help</li>
          </Link>
        </ul>
      </footer>
    </>
  );
};

export default Creategroup;

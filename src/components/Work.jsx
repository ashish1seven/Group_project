import React from "react";
import { Link } from "react-router-dom";
import schedule from "../Images/schedule.png";
import search from "../Images/seo.png";
import organise from "../Images/organise.png";
export default function Work() {
  return (
    <>
      <div className="h-full w-[100%] px-[140px] flex flex-col justify-evenly ">
        <div className="flex items-center justify-center w-[100%]">
          <img src={schedule} alt="" className="h-28 mr-10" />
          <div className="flex flex-col items-start">
            <h1 className="text-[#FF0079] text-2xl font-medium">
              Invited to connect?
            </h1>
            <p className="text-lg ">
              If you received an invitation to attend a group event, just click
              “I'm going” to RSVP. You'll be asked to{" "}
              <Link className="text-[#FF0079]">sign up for Connect </Link>
              and the event. Please remember to stay safe. Never go to
              unfamiliar places alone and always check where you're going ahead
              of time.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-first w-full">
          <img src={search} alt="" className="h-28 mr-12" />
          <div className="flex flex-col items-start">
            <h1 className="text-[#FF0079] text-2xl font-medium">
              Searching for events to join?
            </h1>
            <p className="text-lg">
              1. <Link className="text-[#FF0079]"> Sign up for Connect. </Link>{" "}
              <br />
              2. Fill out the Interests page on your profile. <br />
              3. Find local events or wait until we notify you of a new group in
              your area matching your interests. Either way, FOMO ends here.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-[100%]">
          <img src={organise} alt="" className="h-28 mr-10" />
          <div className="flex flex-col items-start">
            <h1 className="text-[#FF0079] text-2xl font-medium">
              Looking to organize events?
            </h1>
            <p className="text-lg ">
              We are delighted to have you here! DownToMeet has been designed
              with you in mind.To get started,
              <Link className="text-[#FF0079]">sign up for Connect </Link>
              and click on "Create Group" from your account menu. If you are an
              existing group organizer coming from another site, you should find
              yourself in familiar territory. Welcome to your new home!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useState } from "react";
import logo from "../Images/Favicon.png";
import { useHistory } from "react-router-dom";
import { steps } from "../steps";

export default function Steps() {
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(4);
  const [width, setWidth] = useState((1 / total) * 100);
  const [step, setStep] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
//   let history = useHistory();


  const update_score = () => {
    if (count < total) {
      setCount(count + 1);
      setWidth(width + 100 / total);
    }
    if (step + 1 < steps.length) {
      setStep(step + 1);
    }
    else {
          alert("Your Group is Created!");
          window.location.href = "/";
      }
    setInputValue('');
    setTextareaValue("");
  };
  const prev_step = () => {
    if (count > 1) {
      setCount(count - 1);
      setWidth(((count - 1) / total) * 100);
    }
    if (step > 0) {
      setStep(step - 1);
    }
  };
  const isNextButtonEnabled = inputValue.trim() !== "" || textareaValue.trim() !== "";
  return (
    <>
      <nav className="w-screen h-20 flex items-center  p-10  justify-between">
        <div className="flex items-center font-bold text-[#FF0079] text-3xl">
          <span>CO </span>
          <img src={logo} alt="" className="h-16" /> <span>ECT</span>
        </div>
        <span className="text-sm hover:font-semibold text-black">
          Save and exit
        </span>
      </nav>
      <div className="mb-10">
        <div className="h-4 w-full bg-gray-300 mb-5">
          <div
            className="h-full bg-blue-400"
            style={{ width: width + "%" }}
          ></div>
        </div>
        <h2 className="text-center text-gray-400 text-sm">
          STEP {count} OF {total}
        </h2>
      </div>

      <section className="px-24 py-14">
        <button className="w-[150px] text-white text-center p-2 rounded-md font-bold bg-[#FF0079] mb-5"  onClick={prev_step}>Back</button>
        <div className="flex w-full justify-between">
        <div className=" w-[60%] ">
          <h1 className="font-bold text-3xl mb-5">{steps && steps[step].title ? steps[step].title : ""}</h1>
          <p className="mb-5 text-lg ">{steps && steps[step].desc}</p>
          {steps[step].type ? (
            <input className="outline-none p-3 w-[500px] rounded-lg border-black border-[1px] mb-7"
              type={steps[step].type}
              placeholder={steps[step].placeholder} value={inputValue}
              onChange={(e) => setInputValue(e.target.value)} required
            />
          ) : (
            " "
          )}
          {steps[step].text ? (
            
              <textarea
              className="border-[1px] border-black outline-none rounded-lg p-2 mb-5"
                name=""
                id=""
                placeholder={steps[step].inside}
                cols="40"
                rows="7"
                required value={textareaValue}
                onChange={(e) => setTextareaValue(e.target.value)}
              ></textarea>
            
          ) : (
            ""
          )}
           <div className=" grid grid-cols-4 gap-1 mb-5">
           {
            steps[step].categories?.map(v =>{
                return(
                   
                        <button className="text-center text-sm p-[2px] text-[#00798a] font-bold border-[#00798a] border rounded-lg">{v}</button>
                    
                )
            })
          }
           </div>
          
        </div>
        <div className="bg-blue-100/40 h-[200px] w-[350px] rounded-lg p-3">
          <div className="flex items-center mb-2">
          <img src="https://www.meetup.com/mu_static/en-US/lightning-bolt.3d154729.svg" alt="" />
          <h1 className="font-semibold ml-3 ">Tips</h1>
          </div>
          {steps[step].tip ? (
            <p className="text-lg">{steps[step].tip}</p>
          ) : (
            <div className="p-2 text-lg">
              <p className="mb-2">Questions to consider:</p>
              <ul className="list-disc ml-3">
                <li>What's the group goal?</li>
                <li>Who are you hoping to meet?</li>
                <li>What will you do at your events?</li>
              </ul>
            </div>
          )}
        </div>
        </div>
        <button
          className={`w-[150px] text-white text-center p-2 rounded-md font-bold ${isNextButtonEnabled ? 'bg-[#FF0079]' : 'bg-gray-400'} `}
          onClick={update_score}
          disabled={!isNextButtonEnabled}
        >Next</button>
      </section>
    </>
  );
}

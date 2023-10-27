import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function Categories() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="h-52 w-full flex items-center mb-10">
        <Swiper
      onSwiper={setSwiperRef}
      slidesPerView={5}
      centeredSlides={false}
      spaceBetween={10}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mt-10 h-48  text-[#FF0079]"
    >
   
        <SwiperSlide>
          <div className="h-44 w-58 shadow-2xl p-4 m-auto flex flex-col rounded-lg items-center">
            <img
              src="https://www.mastersoftwaresolutions.com/wp-content/uploads/2014/08/bnr-1.png"
              alt=""
              className="h-32 w-32"
            />
            <h2 className="text-lg font-semibold">Arts and Hobbies</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-44 w-58 shadow-2xl p-4 flex flex-col rounded-lg items-center  ">
            <img
              src="https://www.mastersoftwaresolutions.com/wp-content/uploads/2014/08/bnr-1.png"
              alt=""
              className="h-32 w-32"
            />
            <h2 className="text-lg font-semibold">Cars & Motorcycles</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-44 w-58 shadow-2xl  p-4 flex flex-col rounded-lg items-center ">
            <img
              src="https://www.mastersoftwaresolutions.com/wp-content/uploads/2014/08/bnr-1.png"
              alt=""
              className="h-32 w-32"
            />
            <h2 className="text-lg font-semibold">Education and Training</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-44 w-58 shadow-2xl  p-4 flex flex-col rounded-lg items-center ">
            <img
              src="https://www.mastersoftwaresolutions.com/wp-content/uploads/2014/08/bnr-1.png"
              alt=""
              className="h-32 w-32"
            />
            <h2 className="text-lg font-semibold">Fitness and Wellness</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-44 w-58 shadow-2xl  p-4 flex flex-col rounded-lg items-center  ">
            <img
              src="https://www.mastersoftwaresolutions.com/wp-content/uploads/2014/08/bnr-1.png"
              alt=""
              className="h-32 w-32"
            />
            <h2 className="text-lg font-semibold">Food & Drink</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-44 w-58 shadow-2xl  p-4 flex flex-col rounded-lg items-center  ">
            <img
              src="https://www.mastersoftwaresolutions.com/wp-content/uploads/2014/08/bnr-1.png"
              alt=""
              className="h-32 w-32"
            />
            <h2 className="text-lg font-semibold">Hobbies & Crafts</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-44 w-58 shadow-2xl  p-4 flex flex-col rounded-lg items-center  ">
            <img
              src="https://www.mastersoftwaresolutions.com/wp-content/uploads/2014/08/bnr-1.png"
              alt=""
              className="h-32 w-32"
            />
            <h2 className="text-lg font-semibold">Movies</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-44 w-58 shadow-2xl  p-4 flex flex-col rounded-lg items-center  ">
            <img
              src="https://www.mastersoftwaresolutions.com/wp-content/uploads/2014/08/bnr-1.png"
              alt=""
              className="h-32 w-32"
            />
            <h2 className="text-lg font-semibold">Music</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-44 w-58 shadow-2xl  p-4 flex flex-col rounded-lg items-center  ">
            <img
              src="https://www.mastersoftwaresolutions.com/wp-content/uploads/2014/08/bnr-1.png"
              alt=""
              className="h-32 w-32"
            />
            <h2 className="text-lg font-semibold">Outdoors & Adventure</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-44 w-58 shadow-2xl  p-4 flex flex-col rounded-lg items-center  ">
            <img
              src="https://www.mastersoftwaresolutions.com/wp-content/uploads/2014/08/bnr-1.png"
              alt=""
              className="h-32 w-32"
            />
            <h2 className="text-lg font-semibold">Parents & Family</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-44 w-58 shadow-2xl  p-4 flex flex-col rounded-lg items-center  ">
            <img
              src="https://www.mastersoftwaresolutions.com/wp-content/uploads/2014/08/bnr-1.png"
              alt=""
              className="h-32 w-32"
            />
            <h2 className="text-lg font-semibold">Pets & Animals</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-44 w-58 shadow-2xl  p-4 flex flex-col rounded-lg items-center  ">
            <img
              src="https://www.mastersoftwaresolutions.com/wp-content/uploads/2014/08/bnr-1.png"
              alt=""
              className="h-32 w-32"
            />
            <h2 className="text-lg font-semibold">Photography</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-44 w-58 shadow-2xl  p-4 flex flex-col rounded-lg items-center  ">
            <img
              src="https://www.mastersoftwaresolutions.com/wp-content/uploads/2014/08/bnr-1.png"
              alt=""
              className="h-32 w-32"
            />
            <h2 className="text-lg font-semibold">Religion & Beliefs</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-44 w-58 shadow-2xl  p-4 flex flex-col rounded-lg items-center  ">
            <img
              src="https://www.mastersoftwaresolutions.com/wp-content/uploads/2014/08/bnr-1.png"
              alt=""
              className="h-32 w-32"
            />
            <h2 className="text-lg font-semibold">Sports & Recreation</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-44 w-58 shadow-2xl  p-4 flex flex-col rounded-lg items-center  ">
            <img
              src="https://www.mastersoftwaresolutions.com/wp-content/uploads/2014/08/bnr-1.png"
              alt=""
              className="h-32 w-32"
            />
            <h2 className="text-lg font-semibold">Technology</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-44 w-58 shadow-2xl  p-4 flex flex-col rounded-lg items-center  ">
            <img
              src="https://www.mastersoftwaresolutions.com/wp-content/uploads/2014/08/bnr-1.png"
              alt=""
              className="h-32 w-32"
            />
            <h2 className="text-lg font-semibold">and more!</h2>
          </div>
        </SwiperSlide>
    </Swiper>
    </div>
  );
}

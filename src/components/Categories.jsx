import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Categories() {
    const [swiperRef, setSwiperRef] = useState(null);

    return (
        <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={5}
        centeredSlides={false}
        spaceBetween={10}
        navigation={true}
        modules={ [Pagination ,Navigation]}
        className='mt-10 mb-10 absolute text-[#FF0079]'>
            <SwiperSlide>
                <div className="h-44 w-60 bg-[#1d243d] p-6 flex flex-col rounded-lg items-center">
                    <img src="https://www.mastersoftwaresolutions.com/wp-content/uploads/2014/08/bnr-1.png" alt="" className='h-32 w-32'/>
                    <h2 className='text-xl font-semibold'>Arts and Hobbies</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-44 w-60 bg-[#1d243d] p-6 flex flex-col rounded-lg items-center  ">
                    <img src="https://www.mastersoftwaresolutions.com/wp-content/uploads/2014/08/bnr-1.png" alt="" className='h-32 w-32'/>
                    <h2 className='text-xl font-semibold'>Cars & Motorcycles</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-44 w-60 bg-[#1d243d] p-6 flex flex-col rounded-lg items-center ">
                    <img src="https://www.mastersoftwaresolutions.com/wp-content/uploads/2014/08/bnr-1.png" alt="" className='h-32 w-32'/>
                    <h2 className='text-xl font-semibold'>Education and Training</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-44 w-60 bg-[#1d243d] p-6 flex flex-col rounded-lg items-center ">
                    <img src="https://www.mastersoftwaresolutions.com/wp-content/uploads/2014/08/bnr-1.png" alt="" className='h-32 w-32'/>
                    <h2 className='text-xl font-semibold'>Fitness and Wellness</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-44 w-60 bg-[#1d243d] p-6 flex flex-col rounded-lg items-center  ">
                    <img src="https://www.mastersoftwaresolutions.com/wp-content/uploads/2014/08/bnr-1.png" alt="" className='h-32 w-32'/>
                    <h2 className='text-xl font-semibold'>Food & Drink</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-44 w-60 bg-[#1d243d] p-6 flex flex-col rounded-lg items-center  ">
                    <img src="https://www.mastersoftwaresolutions.com/wp-content/uploads/2014/08/bnr-1.png" alt="" className='h-32 w-32'/>
                    <h2 className='text-xl font-semibold'>Hobbies & Crafts</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-44 w-60 bg-[#1d243d] p-6 flex flex-col rounded-lg items-center  ">
                    <img src="https://www.mastersoftwaresolutions.com/wp-content/uploads/2014/08/bnr-1.png" alt="" className='h-32 w-32'/>
                    <h2 className='text-xl font-semibold'>Movies</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-44 w-60 bg-[#1d243d] p-6 flex flex-col rounded-lg items-center  ">
                    <img src="https://www.mastersoftwaresolutions.com/wp-content/uploads/2014/08/bnr-1.png" alt="" className='h-32 w-32'/>
                    <h2 className='text-xl font-semibold'>Music</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-44 w-60 bg-[#1d243d] p-6 flex flex-col rounded-lg items-center  ">
                    <img src="https://www.mastersoftwaresolutions.com/wp-content/uploads/2014/08/bnr-1.png" alt="" className='h-32 w-32'/>
                    <h2 className='text-xl font-semibold'>Outdoors & Adventure</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-44 w-60 bg-[#1d243d] p-6 flex flex-col rounded-lg items-center  ">
                    <img src="https://www.mastersoftwaresolutions.com/wp-content/uploads/2014/08/bnr-1.png" alt="" className='h-32 w-32'/>
                    <h2 className='text-xl font-semibold'>Parents & Family</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-44 w-60 bg-[#1d243d] p-6 flex flex-col rounded-lg items-center  ">
                    <img src="https://www.mastersoftwaresolutions.com/wp-content/uploads/2014/08/bnr-1.png" alt="" className='h-32 w-32'/>
                    <h2 className='text-xl font-semibold'>Pets & Animals</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-44 w-60 bg-[#1d243d] p-6 flex flex-col rounded-lg items-center  ">
                    <img src="https://www.mastersoftwaresolutions.com/wp-content/uploads/2014/08/bnr-1.png" alt="" className='h-32 w-32'/>
                    <h2 className='text-xl font-semibold'>Photography</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-44 w-60 bg-[#1d243d] p-6 flex flex-col rounded-lg items-center  ">
                    <img src="https://www.mastersoftwaresolutions.com/wp-content/uploads/2014/08/bnr-1.png" alt="" className='h-32 w-32'/>
                    <h2 className='text-xl font-semibold'>Religion & Beliefs</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-44 w-60 bg-[#1d243d] p-6 flex flex-col rounded-lg items-center  ">
                    <img src="https://www.mastersoftwaresolutions.com/wp-content/uploads/2014/08/bnr-1.png" alt="" className='h-32 w-32'/>
                    <h2 className='text-xl font-semibold'>Sports & Recreation</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-44 w-60 bg-[#1d243d] p-6 flex flex-col rounded-lg items-center  ">
                    <img src="https://www.mastersoftwaresolutions.com/wp-content/uploads/2014/08/bnr-1.png" alt="" className='h-32 w-32'/>
                    <h2 className='text-xl font-semibold'>Technology</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-44 w-60 bg-[#1d243d] p-6 flex flex-col rounded-lg items-center  ">
                    <img src="https://www.mastersoftwaresolutions.com/wp-content/uploads/2014/08/bnr-1.png" alt="" className='h-32 w-32'/>
                    <h2 className='text-xl font-semibold'>and more!</h2>
                </div>
            </SwiperSlide>
        </Swiper>

    );
}

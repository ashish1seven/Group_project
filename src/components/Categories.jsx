
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const categories = [
  {
    id : 1,
    name: 'Arts and Hobbies',
    img: ''
  },
  {
    id : 2,
    name: 'Cars & Motorcycles',
    img: ''
  },
  {
    id : 3,
    name: 'Education and Training',
    img: ''
  },
  {
    id:4,
    name:'Fitness and Wellness',
    img:''
  },
  {
    id:5,
    name:'Food & Drink',
    img:''
  },
  {
    id:6,
    name:'Hobbies & Crafts',
    img:''
  },
  {
    id:7,
    name:'Movies',
    img:''
  },
  {
    id:8,
    name:'Music',
    img:''
  },
  {
    id:9,
    name:'Outdoors & Adventure',
    img:''
  },
  {
    id:10,
    name:'Parents & Family',
    img:''
  },
  {
    id:11,
    name:'Pets & Animals',
    img:''
  },
  {
    id:12,
    name:'Photography',
    img:''
  },
  {
    id:13,
    name:'Religion & Beliefs',
    img:''
  },
  {
    id:14,
    name:'Sports & Recreation',
    img:''
  },
  {
    id:15,
    name:'Technology',
    img:''
  },
  {
    id:16,
    name:'& More!',
    img:''
  },
  
]
export default function Categories() {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={4}
      navigation={true}
      rewind = {true}
      className=" w-full my-8  text-[#FF0079]"
      
    >
      {categories.map((item)=>(
       <div className="h-56 w-full">
         <SwiperSlide key={item.id}>
          <div className="h-44 w-58 shadow-2xl  p-4 flex flex-col rounded-lg items-center  ">
         <img
             src={item.img}
             alt=""
             className="h-32 w-32"
           />
            <h2 className="text-lg font-semibold">{item.name}</h2>
          </div>
        </SwiperSlide>
       </div>
      )
      )}
    </Swiper>
  );
  }



// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useDarkMode } from "../darkmodecontext";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import arts from '../Images/id-1.png'
import car from '../Images/id-2.png'
import edu from '../Images/id-3.png'
import fitness from '../Images/id-4.png'
import food from '../Images/id-5.png'
import hobbies from '../Images/id-6.png'
import movie from '../Images/id-7.png'
import music from '../Images/id-8.png'
import adventure from '../Images/id-9.png'
import family from '../Images/id-10.png'
import pet from '../Images/id-11.png'
import photo from '../Images/id-12.png'
import religion from '../Images/id-13.png'
import sport from '../Images/id-14.png'
import tech from '../Images/id-15.png'
import more from '../Images/id-16.png'

const categories = [
  {
    id : 1,
    name: 'Arts and Hobbies',
    img: arts
  },
  {
    id : 2,
    name: 'Cars & Motorcycles',
    img: car
  },
  {
    id : 3,
    name: 'Education and Training',
    img: edu
  },
  {
    id:4,
    name:'Fitness and Wellness',
    img: fitness
  },
  {
    id:5,
    name:'Food & Drink',
    img: food
  },
  {
    id:6,
    name:'Hobbies & Crafts',
    img: hobbies
  },
  {
    id:7,
    name:'Movies',
    img: movie
  },
  {
    id:8,
    name:'Music',
    img: music
  },
  {
    id:9,
    name:'Outdoors & Adventure',
    img: adventure
  },
  {
    id:10,
    name:'Parents & Family',
    img: family
  },
  {
    id:11,
    name:'Pets & Animals',
    img: pet
  },
  {
    id:12,
    name:'Photography',
    img: photo
  },
  {
    id:13,
    name:'Religion & Beliefs',
    img: religion
  },
  {
    id:14,
    name:'Sports & Recreation',
    img: sport
  },
  {
    id:15,
    name:'Technology',
    img: tech
  },
  {
    id:16,
    name:'& More!',
    img: more
  },
  
]
export default function Categories() {
  const { darkMode } = useDarkMode();
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={4}
        navigation={true}
        rewind={true}
        className={` h-52 my-8  text-[#FF0079] dark:bg-slate-900 `}
      >
        {categories.map((item) => (
          <div className="w-full h-56">
            <SwiperSlide key={item.id}>
              <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-2xl h-44 w-58 bg-gray-300/20 ">
                <img src={item.img} alt="" className="h-24 mb-3" />
                <h2 className="text-lg font-semibold">{item.name}</h2>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
  }


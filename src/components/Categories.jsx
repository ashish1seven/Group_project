
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useDarkMode } from "../darkmodecontext";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const categories = [
  {
    id : 1,
    name: 'Arts and Hobbies',
    icon : <i className="fi fi-rs-palette text-4xl text-pink-700"></i>,
  
  },
  {
    id : 2,
    name: 'Cars & Motorcycles',
    icon : <i class="fi fi-rr-car-rear text-4xl text-pink-700"></i>,
  
  },
  {
    id : 3,
    name: 'Education and Training',
    icon: <i class="fi fi-rr-book-open-reader text-4xl text-pink-700"></i>,
   
  },
  {
    id:4,
    name:'Fitness and Wellness',
    icon : <i class="fi fi-rs-gym text-4xl text-pink-700"></i>
  },
  {
    id:5,
    name:'Food & Drink',
    icon : <i class="fi fi-rs-hamburger-soda text-4xl text-pink-700"></i>
  },
  {
    id:6,
    name:'Hobbies & Crafts',
    icon : <i class="fi fi-rs-resources text-4xl text-pink-700"></i>
  },
  {
    id:7,
    name:'Movies',
    icon: <i class="fi fi-rs-camera-movie text-4xl text-pink-700"></i>
  },
  {
    id:8,
    name:'Music',
    icon:<i class="fi fi-rs-user-music text-4xl text-pink-700"></i>
  },
  {
    id:9,
    name:'Outdoors & Adventure',
    icon:<i class="fi fi-rs-hiking text-4xl text-pink-700"></i>
  },
  {
    id:10,
    name:'Parents & Family',
    icon:<i class="fi fi-rs-family text-4xl text-pink-700"></i>
  },
  {
    id:11,
    name:'Pets & Animals',
    icon:<i class="fi fi-rs-paw text-4xl text-pink-700"></i>
  },
  {
    id:12,
    name:'Photography',
    icon:<i class="fi fi-rr-camera text-4xl text-pink-700"></i>
  },
  {
    id:13,
    name:'Religion & Beliefs',
    icon:<i class="fi fi-rs-person-praying text-4xl text-pink-700"></i>
  },
  {
    id:14,
    name:'Sports & Recreation',
    icon:<i class="fi fi-rr-basketball text-4xl text-pink-700"></i>
  },
  {
    id:15,
    name:'Technology',
    icon:<i class="fi fi-rs-laptop-code text-4xl text-pink-700"></i>
  },
  {
    id:16,
    name:'& More!',
    icon:<i class="fi fi-br-square-plus text-4xl text-pink-700"></i>
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
        className={` h-52 my-8   dark:bg-slate-900 `}
      >
        {categories.map((item) => (
          <div className="w-full h-56">
            <SwiperSlide key={item.id}>
              <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-2xl h-44 w-58 bg-gray-300/20 ">
                <span>{item.icon}</span>
                <h2 className="text-lg font-semibold text-black/70 dark:text-white">{item.name}</h2>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
  }


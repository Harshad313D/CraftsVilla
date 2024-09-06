import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Pagination } from "swiper/modules";
import "../App.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { categories } from "../data/categories";
import { useNavigate } from "react-router-dom";

function RocketDeals() {
  const navigate = useNavigate();

  // Handler for "All Categories" click
  const handleAllCategoriesClick = () => {
    navigate("/all-Products");
  };

  return (
    <div className="p-4 pt-8 ">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Our Rocket Deals
      </h1>
      <p className="mt-4 text-2xl text-gray-500  ">Handpicked for you !</p>

      <Swiper
        modules={[A11y, Pagination]}
        spaceBetween={16}
        slidesPerView="auto"
        className="mySwiper  pt-4 h-80"
        pagination={{ clickable: true }}
      >
        <SwiperSlide
          className="flex-shrink-0 w-60 h-60 flex flex-col items-center cursor-pointer hover:bg-rose-200 rounded-full"
          onClick={handleAllCategoriesClick}
        >
          <div className="w-52 h-60 flex items-center justify-center bg-gray-100 rounded-full overflow-hidden">
            <img
              src="https://via.placeholder.com/150?text=All" // Placeholder image for "All Categories"
              alt="All Categories"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="mt-2 text-gray-900 text-center font-medium text-sm">
            All Deals
          </span>
        </SwiperSlide>
        {categories.map((category) => (
          <SwiperSlide
            key={category.id}
            className="flex-shrink-0  rounded-sm  w-60 h-60 flex flex-col items-center cursor-pointer hover:bg-rose-200 "
          >
            <div className="w-60 h-60  flex items-center justify-center bg-gray-100 rounded-sm overflow-hidden">
              <img
                src={category.src}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="mt-2 text-gray-900 text-center font-medium text-sm">
              {category.name}
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default RocketDeals;

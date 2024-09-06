// src/components/Categories.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Pagination } from "swiper/modules";
import "../App.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { categories } from "../data/categories";
import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();

  // Handler for "All Categories" click
  const handleAllCategoriesClick = () => {
    navigate("/all-categories");
  };

  return (
    <div className="p-4 pt-8 ">
      <Swiper
        modules={[A11y, Pagination]}
        spaceBetween={16}
        slidesPerView="auto"
        className="mySwiper h-80 "
        pagination={{ clickable: true }}
      >
        <SwiperSlide
          className="flex-shrink-0 w-60 h-60 flex flex-col items-center cursor-pointer hover:bg-rose-200 rounded-full"
          onClick={handleAllCategoriesClick}
        >
          <div className="w-52 h-60 flex items-center justify-center bg-gray-100 rounded-full overflow-hidden">
            <img
              src="https://cdn1.plotch.io/assets/images/1702616034_Q2F0ZWdvcmllcy5wbmc=.png" // Placeholder image for "All Categories"
              alt="All Categories"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="mt-2 text-gray-900 text-center font-medium text-sm">
            All Categories
          </span>
        </SwiperSlide>
        {categories.map((category) => (
          <SwiperSlide
            key={category.id}
            className="flex-shrink-0 rounded-full  w-60 h-60 flex flex-col items-center cursor-pointer "
          >
            <div className="w-52 h-52 flex items-center justify-center  rounded-full overflow-hidden">
              <img
                src={category.src}
                alt={category.name}
                className="w-full h-full object-center "
              />
            </div>
            <span className="mt-2 text-gray-900 text-center font-semibold text-sm">
              {category.name}
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Categories;

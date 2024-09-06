import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const carouselItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Deal 1",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1532630571098-79a3d222b00d?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Deal 2",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1623697899817-2e067e4a4036?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Deal 3",
  },
  {
    id: 4,
    src: "https://cdn1.plotch.io/assets/images/1702616961_MTY5NjQwNjc0M19NaTV3Ym1jPS5wbmc=.png",
    alt: "Deal 4",
  },
  {
    id: 5,
    src: "https://cdn1.plotch.io/assets/images/1713425799_MS5wbmc=.png",
    alt: "Deal 5",
  },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = 5000;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, slideInterval);
    return () => clearInterval(interval);
  }, [slideInterval, nextSlide]);

  return (
    <div className="relative mt-10 pt-10 w-full h-[200px] md:h-[400px] lg:h-[600px] overflow-hidden">
      {/* Carousel Items */}
      <div className="relative h-full w-full  ">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-rose-800" : "bg-rose-300"
            }`}
          ></button>
        ))}
      </div>

      {/* Slider Controls */}
    </div>
  );
}

export default Carousel;

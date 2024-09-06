import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaShoppingCart,
  FaHeart,
  FaMapMarkerAlt,
  FaStore,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Header() {
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full py-4 px-6 flex items-center justify-between transition-colors duration-300 ${
        scrolling ? "backdrop-blur-md " : "bg-transparent"
      } z-10`}

      // bg-gray-800
    >
      {/* Left - Brand Name */}
      <Link to="/" className="text-2xl font-bold text-rose-600 sm:text-4xl">
        Craftsvilla
      </Link>

      {/* Center - Search Bar (Desktop Only) */}
      <div className="hidden sm:flex flex-grow mx-4">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full max-w-md p-2 border border-rose-500 rounded-full text-gray-800 bg-gray-100"
        />
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="flex items-center text-white hover:text-gray-800 sm:hidden"
      >
        {isMenuOpen ? (
          <FaTimes className="text-xl text-rose-500" />
        ) : (
          <FaBars className="text-xl text-rose-500" />
        )}
      </button>

      {/* Right - Icons and Buttons (Desktop Only) */}
      <div className="hidden sm:flex items-center space-x-4 sm:space-x-10">
        <Tooltip text="Select Location">
          <button className="flex items-center text-white hover:text-gray-800">
            <FaMapMarkerAlt className="text-xl text-rose-500" />
          </button>
        </Tooltip>

        <Tooltip text="Store">
          <button className="flex items-center text-white hover:text-gray-800">
            <FaStore className="text-xl text-rose-500" />
          </button>
        </Tooltip>

        <Tooltip text="Profile">
          <Link
            to="/profile"
            className="flex items-center text-white hover:text-gray-800"
          >
            <FaUser className="text-xl text-rose-500" />
          </Link>
        </Tooltip>

        <Tooltip text="Liked Products">
          <Link
            to="/liked-products"
            className="flex items-center text-white hover:text-gray-800"
          >
            <FaHeart className="text-xl text-rose-500" />
          </Link>
        </Tooltip>

        <Tooltip text="My Cart">
          <Link
            to="/cart"
            className="flex items-center text-white hover:text-gray-800"
          >
            <FaShoppingCart className="text-xl text-rose-500" />
          </Link>
        </Tooltip>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white shadow-lg transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } sm:hidden z-20`}
      >
        <div className="flex flex-col h-full bg-rose-600">
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <Link to="/" className="text-3xl font-bold text-white">
              Craftsvilla
            </Link>
            <button onClick={toggleMenu} className="text-rose-950 text-2xl">
              <FaTimes />
            </button>
          </div>

          {/* Search Bar in Mobile Menu */}
          <div className="p-4 border-b bg-rose-600 border-gray-200">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full p-2 border border-rose-500 rounded-full text-gray-800 bg-gray-100"
            />
          </div>

          {/* Mobile Menu Items */}
          <div className="flex flex-col pl-10 bg-rose-600 space-y-4 p-4  rounded-lg ">
            <Tooltip text="Select Location">
              <button className="flex items-center text-white hover:text-gray-800">
                <FaMapMarkerAlt className="text-2xl" />
                <h1 className="text-xl font-medium ">Location</h1>
              </button>
            </Tooltip>

            <Tooltip text="Store">
              <button className="flex items-center text-white hover:text-gray-800">
                <FaStore className="text-2xl" />
                <h1 className="text-xl font-medium ">Store</h1>
              </button>
            </Tooltip>

            <Tooltip text="Profile">
              <Link
                to="/profile"
                className="flex items-center text-white hover:text-gray-800"
              >
                <FaUser className="text-2xl" />
                <h1 className="text-xl font-medium ">Profile</h1>
              </Link>
            </Tooltip>

            <Tooltip text="Liked Products">
              <Link
                to="/liked-products"
                className="flex items-center text-white hover:text-gray-800"
              >
                <FaHeart className="text-2xl" />
                <h1 className="text-xl font-medium ">Liked Products</h1>
              </Link>
            </Tooltip>

            <Tooltip text="My Cart">
              <Link
                to="/cart"
                className="flex items-center text-white hover:text-gray-800"
              >
                <FaShoppingCart className="text-2xl" />
                <h1 className="text-xl font-medium ">My Cart</h1>
              </Link>
            </Tooltip>
          </div>
        </div>
      </div>
    </header>
  );
}

function Tooltip({ text, children }) {
  return (
    <div className="relative group">
      {children}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-black text-white text-sm rounded py-1 px-2">
        {text}
      </div>
    </div>
  );
}

export default Header;

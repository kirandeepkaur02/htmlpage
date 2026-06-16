import React, { useState } from "react";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import About from "../Pages/AboutUs"
import AuthPopup from "../Pages/AuthPopup"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  // Menu items array
  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Service", link: "/service" },
    { name: "ContactUs", link: "/contact" },
  ];

  return (
    <>
      <nav className="sticky  bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="h-20 flex items-center justify-between">

            {/* Logo */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="bg-amber-600 w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 
                flex items-center justify-center rounded-full">
                <TrendingUpIcon className="text-white text-lg sm:text-xl lg:text-2xl" />
              </div>
              <h1 className="font-bold text-2xl sm:text-3xl">
                Aero<span className="text-amber-600">Sphere</span>
              </h1>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="hover:text-amber-600 transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop Button */}
            <button onClick={() => {
              setShowPopup(true);
              setIsLogin(true)
            }}

              className="hidden md:block bg-amber-600 text-white px-7 py-2.5 rounded-xl font-semibold hover:bg-amber-700 transition">
              Register
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-3xl"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>


          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden pb-6">
              <ul className="flex flex-col gap-1 font-medium text-center text-gray-700">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.link}
                      onClick={() => setMenuOpen(false)}
                      className="block py-3 px-3 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>

              <button onClick={() => {
                setShowPopup(true);
                setIsLogin(false);
              }}

                className="block mx-auto mt-4 px-5 bg-amber-600 text-white py-3 rounded-xl font-semibold hover:bg-amber-700 transition">
                Register
              </button>
            </div>
          )}
        </div>
  </nav>
      {showPopup && (
        <AuthPopup
          closePopup={() => setShowPopup(false)}
          isLogin={isLogin}
          setIsLogin={setIsLogin} />
      )}
    </>
  );
}
export default Navbar;
import React from "react";
import footerLogo from "../assets/footerlogos.png";

const Footer = () => {
  return (
    <footer className="bg-white">
      
      {/* Top Border */}
      <div className="w-[90%] max-w-900px h-1 rounded-full bg-amber-600 mt-3 mx-auto mb-8"></div>

      {/* Footer Content */}
      <div className="px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 pb-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company Info */}
          <div className="text-center sm:text-left">
            <h2 className="text-3xl font-bold">
              Aero<span className="text-amber-600">Sphere</span>
            </h2>

            <p className="text-gray-600 mt-2">
              Where growth begins...
            </p>

            <div className="mt-8">
              <h3 className="text-lg font-semibold">
                Address :
              </h3>

              <p className="text-gray-600 text-sm mt-2 leading-7">
                4662 Benson Park,
                <br />
                Toronto, Canada
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold">
                Contact Details :
              </h3>

              <p className="text-sm text-gray-600">
                43463649342387
              </p>

              <p className="text-sm text-gray-600">
                43463649342387
              </p>

              <p className="text-sm text-gray-600">
                AeroSpace@gmail.com
              </p>
            </div>
          </div>


          {/* Services */}
          <div className="text-center sm:text-left lg:mt-10 ">
            <h3 className="text-2xl text-amber-600 mb-6">
              Services :
            </h3>

            <ul className="space-y-4 text-gray-700">
              <li>
                <a href="#" className="hover:text-amber-600 duration-300">
                  SEO
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-amber-600 duration-300">
                  Content Marketing
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-amber-600 duration-300">
                  Email Marketing
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-amber-600 duration-300">
                  Brand Development
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-amber-600 duration-300">
                  Influencer Marketing
                </a>
              </li>
            </ul>
          </div>


          {/* Products */}
          <div className="text-center sm:text-left lg:mt-10">

            <h3 className="text-2xl text-amber-600 mb-6">
              Products :
            </h3>

            <ul className="space-y-4 text-gray-700">
              <li>
                <a href="#" className="hover:text-amber-600 duration-300">
                  SEO Optimizer
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-amber-600 duration-300">
                  Content Reach Check
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-amber-600 duration-300">
                  Email/Ads Marketing
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-amber-600 duration-300">
                  Brand Identity Builder
                </a>
              </li>
            </ul>
          </div>


          {/* Legal */}
          <div className="text-center sm:text-left lg:mt-10">

            <h3 className="text-2xl text-amber-600 mb-6">
              Legal :
            </h3>

            <ul className="space-y-4 text-gray-700">
              <li>
                <a href="#" className="hover:text-amber-600 duration-300">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-amber-600 duration-300">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-amber-600 duration-300">
                  Terms & Conditions
                </a>
              </li>
            </ul>

          </div>

        </div>


        {/* Footer Logo */}
        <div className="flex justify-center lg:justify-end ">
          <img
            src={footerLogo}
            alt="Footer Logo"
            className="w-32 sm:w-40 md:w-48"
          />
        </div>

      </div>


      {/* Copyright Section */}
      <div className="bg-amber-600 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-white text-center text-sm">
            © 2026, AeroSphere.inc
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
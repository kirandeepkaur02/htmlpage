import React from 'react'
import astronaut from "../assets/Pic1.png";
import circle from "../assets/Ellipse 1 (1).png";
import dribbble from "../assets/dribbble.png";
import google from "../assets/google.png";
import yahoo from "../assets/yahoo.png";
import vector from "../assets/Vector.png";
const HeroSection = () => {
  return (
    <section className="relative bg-gray-100 overflow-hidden">
      <div className="flex flex-col lg:flex-row">

        {/* Left Content */}
        <div
          className="
        relative z-20
        flex flex-col
        py-8 px-5 sm:px-8 md:px-12
        lg:py-16 lg:pl-16
        lg:w-1/2 xl:w-[55%]
      "
        >
          {/* Badge */}
          <div
            className="
          inline-flex items-center gap-2
          bg-amber-100 text-amber-600
          rounded-xl font-semibold
          text-base sm:text-lg
          px-3 py-2
          mt-10 sm:mt-14 lg:mt-16
          w-fit
        "
          >
            <span>High Growth</span>
            <img
              src={vector}
              alt="vector"
              className="h-4 w-4"
            />
          </div>

          {/* Heading */}
          <h1 className="font-medium mt-6 sm:mt-8">
            <span className="text-2xl sm:text-3xl md:text-4xl">
              We
            </span>{" "}
            <span className="text-amber-600 text-2xl sm:text-3xl md:text-4xl">
              Simplify
            </span>{" "}
            <span className="text-2xl sm:text-3xl md:text-4xl">
              Growth
            </span>
            <br />

            <span className="text-5xl sm:text-6xl md:text-7xl">
              in
            </span>{" "}
            <span className="font-bold text-5xl sm:text-6xl md:text-7xl text-amber-600">
              Aero
            </span>
            <span className="font-bold text-5xl sm:text-6xl md:text-7xl">
              Sphere.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 sm:mt-8 text-gray-700 text-base sm:text-lg xl:text-xl max-w-md lg:max-w-xl">
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mt-5">
            <button
              className="
            bg-amber-600 text-white font-semibold
            px-5 py-2 rounded-xl
            text-base sm:text-lg xl:text-xl
            hover:scale-110 transition
          "
            >
              Get Started
            </button>

            <button
              className="
            bg-white border border-amber-600
            text-amber-600 font-semibold
            px-5 py-2 rounded-xl
            text-base sm:text-lg xl:text-xl
            hover:scale-110 transition
          "
            >
              Services
            </button>
          </div>

          {/* Partners */}
          <div className="mt-10 sm:mt-14 lg:mt-16">
            <div className="flex items-center gap-2">
              <p className="text-amber-600 text-sm sm:text-base">
                Our Partners
              </p>
              <div className="w-24 sm:w-32 h-1px bg-amber-600"></div>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-6 sm:mt-5">
              <img
                src={dribbble}
                alt="dribbble"
                className="h-4 sm:h-5 mt-2"
              />
              <img
                src={google}
                alt="google"
                className="h-4 sm:h-12 mt-2"
              />
              <img
                src={yahoo}
                alt="yahoo"
                className="h-4 sm:h-12 mt-2"
              />
            </div>
          </div>
        </div>


        {/* Right Image */}
        <div
          className="
        absolute inset-0
        flex items-center justify-center
        z-0

        lg:relative
        lg:w-1/2 xl:w-[45%]
      "
        >
          {/* Circle */}
          <img
            src={circle}
            alt="circle"
            className="
          absolute
          w-[130%]
          sm:w-full
          md:w-[90%]

          opacity-25
          lg:opacity-100
          lg:w-[90%]
          max-w-175
        "
          />

          {/* Astronaut */}
          <img
            src={astronaut}
            alt="Astronaut"
            className="
          relative
          z-10

          w-[80%]
          sm:w-[65%]
          md:w-[55%]

          opacity-20
          lg:opacity-100

          lg:w-[75%]
          xl:w-[80%]
          max-w-162.5

          drop-shadow-2xl
          animate-float
        "
          />
        </div>

      </div>
    </section>
  )
}
export default HeroSection
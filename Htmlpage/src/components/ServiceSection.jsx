import React from 'react'
import Ellipse from "../assets/Ellipse 2.png";
import astro from "../assets/pic2.png"
import Idea from "../assets/idea.png"
import people from "../assets/people.png"
import search from "../assets/Search.png"
const ServiceSection = () => {
  return (
    <div className="relative px-2 py-4 bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row">

    {/* Image Section */}
    <div 
      className="
        absolute inset-0 flex items-center justify-center 
        opacity-20 
        lg:opacity-100 lg:relative 
        lg:w-1/2 xl:w-[45%]
        mt-6 lg:mt-0 overflow-hidden
      "
    >
      <img
        src={Ellipse}
        alt="circle"
        className="
          absolute 
          w-[80%]
          sm:w-[70%]
          lg:w-full 
          max-w-lg 
          lg:max-w-none
          top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2
        "
      />

      <img
        src={astro}
        alt="Astronaut"
        className="
          relative z-10
          w-[85%]
          sm:w-[70%]
          md:w-[60%]
          lg:w-full
          max-w-sm
          sm:max-w-md
          md:max-w-lg
          lg:max-w-none
          animate-float
          drop-shadow-2xl
        "
      />
    </div>


    {/* Content Section */}
    <div
      className="
        relative z-10
        flex flex-col
        px-5 sm:px-8 md:px-12
        lg:pl-10 lg:pr-16
        py-8 sm:py-10 lg:py-16
        lg:w-1/2 xl:w-[55%]
      "
    >
      {/* Badge */}
      <div
        className="
          inline-flex items-center
          bg-amber-100 text-amber-600
          rounded-xl
          font-semibold
          text-base sm:text-lg md:text-xl lg:text-2xl
          px-4 py-2
          w-fit
          mt-4 lg:mt-8
        "
      >
        Our Services
      </div>


      {/* Heading */}
      <h1 className="mt-5 sm:mt-6 leading-tight">
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          We extend our
        </span>{" "}
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-amber-600">
          services
        </span>
        <br />

        <span className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          to
        </span>{" "}
        <span className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-amber-600">
          wide
        </span>{" "}
        <span className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          variety.
        </span>
      </h1>


      {/* Description */}
      <p
        className="
          mt-5 sm:mt-6 md:mt-8
          text-base sm:text-lg xl:text-xl
          text-gray-700
          max-w-md lg:max-w-xl
        "
      >
        Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever.
      </p>


      {/* Cards */}
      <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">

        {[
          {
            img: Idea,
            title: "Idea",
            subtitle: "Creation",
          },
          {
            img: search,
            title: "Market",
            subtitle: "Analysis",
          },
          {
            img: people,
            title: "Audience",
            subtitle: "Identity",
          },
          {
            img: Idea,
            title: "Brand",
            subtitle: "Identity",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="
              border-2 border-amber-600
              rounded-2xl
              p-4 sm:p-5
              bg-white/80
              backdrop-blur-sm
              hover:bg-amber-50
              transition
            "
          >
            <div className="flex gap-4 items-center">

              <img
                src={item.img}
                alt={item.title}
                className="w-10 h-10 sm:w-12 sm:h-12"
              />

              <div>
                <h2 className="text-xl sm:text-2xl font-semibold">
                  {item.title}
                </h2>

                <p className="text-xl sm:text-2xl font-semibold text-amber-600">
                  {item.subtitle}
                </p>
              </div>

            </div>
          </div>
           ))}

      </div>
    </div>
    </div>
</div>
   )
  }
export default ServiceSection
import React from 'react'
import circle from "../assets/Ellipse 3.png"
import astro from "../assets/pic3.png"
const Info = () => {
  return (
    <div className="relative bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto relative flex flex-col lg:flex-row items-center px-5 sm:px-8 md:px-12 lg:pl-16 lg:pr-0 py-8 sm:py-12 lg:py-16">

 {/* Text Content */}
         <div className="relative z-20 flex flex-col lg:w-1/2 xl:w-[55%] text-left">
         
      <button
        className="
          inline-flex items-center gap-3
          bg-amber-100 rounded-xl
          mt-4 sm:mt-6 lg:mt-0
          text-amber-600
          font-semibold
          text-lg sm:text-2xl lg:text-4xl
          px-5 sm:px-8 lg:px-10
          py-2 w-fit
        "
      >
        Our Reach
      </button>

       <p className="pt-4 sm:pt-5 leading-tight">
        <span className="text-xl sm:text-2xl lg:text-3xl font-semibold">
          We are
        </span>{" "}
        <span className="text-amber-600 text-xl sm:text-2xl lg:text-3xl font-semibold">
          present
        </span>
        <br />

        <span className="text-3xl sm:text-4xl lg:text-6xl font-bold">
          all over the
        </span>
        <br />

        <span className="text-amber-600 text-5xl sm:text-7xl lg:text-9xl font-bold leading-none">
          world.
        </span>
      </p>
      <p
        className="
          pt-3
          text-sm sm:text-base lg:text-lg
          text-gray-700
          leading-relaxed
          max-w-sm lg:max-w-xl
        "
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever.
      </p>
         </div> 


        {/* <!-- Image Background Mobile / Right Side Desktop --> */}
        <div
          className="
        absolute inset-0
        flex items-center justify-center
        opacity-15
        lg:opacity-100 lg:relative
        lg:w-1/2 xl:w-[45%]
        lg:justify-end
      "
        > 
            <img
        src={circle}
        alt="circle"
        className="
          absolute
          w-[80%] sm:w-[65%] lg:w-auto
          top-10 right-0
          lg:top-4 lg:right-4
        "
      />
          <img
        src={astro}
        alt="astro"
        className="
          relative z-10
          w-[85%] sm:w-[60%] md:w-[50%]
          lg:w-full
          max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none
          animate-float drop-shadow-2xl
        "
      />
        </div>
        
      </div>
    </div>
  )
}
export default Info
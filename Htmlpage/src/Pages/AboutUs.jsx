import React from 'react'
import AstrContact from '../assets/AstrContact.png'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import circle from "../assets/Ellipse 3.png";
import pic from "../assets/pic3.png";
import TestimonialSection from '../components/Testimonial';
const AboutUs = () => {
  return (
    <div className="overflow-x-hidden">
      {/* hero  section */}
      <section className="relative py-10  bg-linear-to-br from-[#fffbeb] to-[#fef3c7]">

        {/* Background Blur Circles */}
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-amber-700/5 rounded-full blur-3xl"></div>
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-amber-700/10 rounded-full blur-3xl"></div>

        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-40 md:opacity-60">
          <img
            src={AstrContact}
            alt="Astronaut in amber nebula"
            className="w-full h-full object-cover object-right md:object-center"
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/80 to-transparent z-1"></div>

        {/* Content */}
        <div className="px-4 md:px-16 max-w-7xl mx-auto relative z-10">
          <div className="text-center sm:text-left md:max-w-2xl">
            <span className="mb-5 inline-block uppercase text-sm font-semibold tracking-widest bg-amber-100 text-amber-600 px-3 py-2 rounded-xl">
              About us
            </span>
            <h1 className="text-[25px] md:text-[50px] leading-tight font-bold md:font-extrabold mb-6">
              Launching Businesses Into The Digital Universe
            </h1>
            <p className="text-stone-700 text-lg leading-relaxed mb-8">
              We combine creativity, technology, and strategy
              to help brands reach new heights. Our mission is
              to create impactful digital experiences that connect,
              engage, and drive lasting growth.
            </p>
          </div>

        </div>



      </section>

      {/* Mission & Vision  */}

      <section className="py-10 px-10 max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Mission Card */}
        <div className="glass-card bg-amber-300/10 p-5 rounded-3xl reveal flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-amber-600/10 rounded-xl flex items-center justify-center mb-8">
              <RocketLaunchIcon className="text-amber-600 text-3xl" />
            </div>

            <h2 className="font-headline-lg text-3xl text-on-surface mb-6">
              Our Mission
            </h2>

            <p className="font-body-md text-lg text-on-surface-variant leading-relaxed">
              Empowering businesses with innovative digital solutions, creative
              marketing strategies, and measurable growth. We bridge the gap
              between imagination and execution in the vast digital expanse.
            </p>
          </div>
        </div>


        {/* Vision Card */}
        <div className="glass-card bg-amber-300/10 p-5 rounded-3xl reveal flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-amber-600/10 rounded-xl flex items-center justify-center mb-8">
              <RemoveRedEyeIcon className="text-amber-600 text-3xl" />
            </div>

            <h2 className="font-headline-lg text-3xl text-on-surface mb-6">
              Our Vision
            </h2>

            <p className="font-body-md text-lg text-on-surface-variant leading-relaxed">
              To become a leading digital marketing partner that transforms brands
              through creativity, technology, and future-focused strategies. We
              aim to be the North Star for brands lost in the digital void.
            </p>
          </div>
        </div>

      </section>
      {/* info sectino */}
      <section className="relative bg-gray-100 overflow-hidden">

        <div className="max-w-7xl mx-auto relative flex flex-col lg:flex-row items-center justify-between px-5 sm:px-8 md:px-12 lg:pl-16 lg:pr-0 py-8 lg:py-16">

          {/* Background Image for Mobile & Tablet */}
          <div className="absolute inset-0 flex justify-center items-center lg:hidden opacity-20">
            <img
              src={circle}
              alt="circle"
              className="absolute w-[70%] max-w-sm"
            />
            <img
              src={pic}
              alt="Global Reach"
              className="w-[75%] max-w-xs sm:max-w-sm animate-float"
            />
          </div>

          {/* Left Content */}
          <div className="relative z-10 flex flex-col lg:w-1/2 xl:w-[55%] text-left">

            <button
              className="inline-flex items-center gap-3 bg-amber-100 rounded-xl mt-6 sm:mt-10 lg:mt-16 text-amber-600 font-semibold text-lg sm:text-2xl lg:text-4xl px-5 sm:px-8 lg:px-10 py-2 w-fit"
            >
              Our Journey
            </button>

            <p className="pt-4 sm:pt-5 leading-tight">
              <span className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                From a
              </span>{" "}
              <span className="text-amber-600 text-xl sm:text-2xl lg:text-3xl font-semibold">
                Small Idea
              </span>
              <br />

              <span className="text-3xl sm:text-4xl lg:text-6xl font-bold">
                to a Digital
              </span>
              <br />

              <span className="text-amber-600 text-3xl sm:text-5xl lg:text-7xl font-bold leading-none">
                Growth Partner.
              </span>
            </p>

            <p className="pt-3 text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed max-w-sm lg:max-w-xl">
              We started with a passion for creativity and technology. Today, we
              help businesses build strong digital identities through innovative
              strategies, data-driven marketing, and meaningful customer
              connections.
            </p>

          </div>

          {/* Right Image for Desktop */}
          <div className="hidden lg:flex relative justify-center items-center lg:w-1/2 xl:w-[45%]">

            <img
              src={circle}
              alt="circle"
              className="absolute top-4 right-4"
            />

            <img
              src={pic}
              alt="Global Reach"
              className="relative z-10 w-full max-w-lg animate-float drop-shadow-2xl"
            />

          </div>

        </div>

      </section>

      <TestimonialSection />
    </div>

  )
}
export default AboutUs
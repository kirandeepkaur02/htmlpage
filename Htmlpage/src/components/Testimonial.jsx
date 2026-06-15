import React, { useState, useEffect } from "react";

const Testimonial = () => {

  // Testimonial Data
  const testimonials = [
    {
      id: 1,
      name: "Angela White",
      role: "CEO - Market Movers",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin."
    },
    {
      id: 2,
      name: "Angela White Sec",
      role: "CEO - Market Movers",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin."
    },
    {
      id: 3,
      name: "Angela White Third",
      role: "CEO - Market Movers",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin."
    },
    {
      id: 4,
      name: "Angela White Fourth",
      role: "CEO - Market Movers",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin."
    }
  ];


  // Current active slide
  const [current, setCurrent] = useState(0);


  // Auto play every 9 seconds
  useEffect(() => {

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 2000);

    return () => clearInterval(timer);

  }, []);


  // Desktop visible cards
  const desktopCards = [
    testimonials[
      (current - 1 + testimonials.length) %
      testimonials.length
    ],

    testimonials[current],

    testimonials[
      (current + 1) %
      testimonials.length
    ]
  ];


  // Card Component
  const Card = ({ data, active, mobile }) => {

    return (
      <div
        className={`
          border-2 border-amber-600
          rounded-3xl
          flex items-center justify-center
          h-300px
          transition-all duration-500
        py-3
          ${
            mobile
              ? "w-full sm:w-300px"
              : "w-[32%]"
          }

          ${
            active
              ? "opacity-100 scale-100"
              : "opacity-40 scale-90"
          }
        `}
      >

        <div className="text-center ">

          <div className="text-amber-600 text-6xl leading-none">
            &ldquo;
          </div>

          <p className="text-sm leading-relaxed text-gray-900 mt-2">
            {data.text}
          </p>

          <h3 className="mt-6 text-2xl text-amber-600 font-medium">
            {data.name}
          </h3>

          <p className="mt-1 text-xs text-amber-900">
            {data.role}
          </p>

        </div>

      </div>
    );
  };


  return (

    <section className="py-12 sm:py-16 lg:py-24 overflow-hidden">

      <div className="px-4 sm:px-6 lg:px-10">


        {/* Heading */}
        <div className="text-center">

          <div className="
            inline-block
            bg-amber-100
            px-4 sm:px-6
            py-2 sm:py-3
            rounded-xl">

            <span className="
              text-amber-600
              text-xl sm:text-2xl lg:text-4xl
              font-semibold">

              Testimonial

            </span>

          </div>


          <h2 className="
            mt-6 sm:mt-8 lg:mt-10
            text-3xl sm:text-4xl lg:text-6xl
            font-semibold">

            What 
            <span className="text-amber-600 font-normal">
              {" "}People
            </span>
            {" "}say about us!

          </h2>


          <p className="
            mt-4 sm:mt-6 lg:mt-8
            text-base sm:text-xl lg:text-2xl
            text-gray-900
            max-w-xl mx-auto">

            Lorem Ipsum is simply dummy text of the printing
            and typesetting industry.

          </p>

        </div>



        {/* Desktop Carousel */}
        <div className="
          hidden lg:block
          mt-16 relative">

          {/* Left Fade */}
          <div className="
            absolute left-0 top-0
            h-full w-28 z-10
            pointer-events-none
            bg-linear-to-r from-white to-transparent">
          </div>


          {/* Right Fade */}
          <div className="
            absolute right-0 top-0
            h-full w-28 z-10
            pointer-events-none
            bg-linear-to-l from-white to-transparent">
          </div>


          <div className="
            flex justify-center
            gap-6">

            {desktopCards.map((item, index) => (

              <Card
                key={item.id}
                data={item}
                active={index === 1}
              />

            ))}

          </div>

        </div>



        {/* Mobile / Tablet Carousel */}
        <div className="
          lg:hidden
          mt-10 sm:mt-14
          flex justify-center">

          <Card
            data={testimonials[current]}
            active={true}
            mobile={true}
          />

        </div>



        {/* Dots */}
        <div className="
          flex justify-center
          items-center
          gap-2
          mt-8 sm:mt-10 lg:mt-14">

          {
            testimonials.map((item, index) => (

              <button
                key={item.id}

                onClick={() => setCurrent(index)}

                className={`
                  w-3 h-3
                  rounded-full
                  transition-all duration-300

                  ${
                    current === index
                      ? "bg-amber-600"
                      : "bg-amber-300"
                  }
                `}
              >

              </button>

            ))
          }

        </div>


      </div>

    </section>

  );
};


export default Testimonial;
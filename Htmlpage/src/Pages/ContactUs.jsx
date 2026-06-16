import React from 'react'
import AstrContact from '../assets/AstrContact.png'
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
const ContactUs = () => {
  return (
    <div className="overflow-x-hidden">
      {/* hero  section */}
      <section className="relative py-10  bg-linear-to-br from-[#fffbeb] to-[#fef3c7]  overflow-hidden">
        {/* Background Blur Circles */}
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-amber-700/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-amber-700/5 rounded-full blur-3xl"></div>

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
            <span className="mb-5 inline-block bg-amber-100 text-amber-600 px-3 py-2 rounded-xl text-sm font-semibold uppercase tracking-widest">
              Contact us
            </span>
            <h1 className="text-[32px] md:text-[60px] leading-tight font-bold md:font-extrabold mb-6">
              Let's Scale Your Brand
            </h1>
            <p className="text-stone-700 text-lg leading-relaxed mb-8">
              Ready to illuminate your digital presence? Our experts are here to
              transform your vision into measurable growth with data-backed
              strategies.
            </p>

          </div>
        </div>
      </section>
      {/*  Form    */}
      <section className="bg-gray-100 py-12 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-24">
          {/* Left Column: Get in Touch */}
          <div className="flex  flex-col justify-center text-center sm:text-left order-2 md:order-1">
            <h2 className="text-[30px] leading-[1.3] font-semibold text-black mb-6">
              Get in Touch
            </h2>


            <p className="text-[16px] leading-normal font-normal text-stone-600 mb-10">
              Whether you're a startup or a global enterprise, we have the tools
              to help you succeed. Reach out via any of these channels.
            </p>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-amber-100 text-amber-600 rounded-xl shadow-sm">
                 <EmailIcon className="text-amber-600" />
                </div>
                <div>
                  <h4 className="text-sm leading-none tracking-wider font-semibold text-slate-900 mb-1">
                    Email Us
                  </h4>
                  <p className="text-base leading-6 font-semibold text-amber-800">
                   AeroSphere@gmail.com
                  </p>
                </div>
              </div>
              {/* Call */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 text-amber-600 rounded-xl shadow-sm">
                < CallIcon className="text-amber-600" />
              </div>

              <div>
                <h4 className="text-sm leading-none tracking-wider font-semibold text-slate-900 mb-1">
                  Call Us
                </h4>
                <p className="text-base leading-6 font-semibold text-amber-800">
                  463758439534
                </p>
              </div>
            </div>
              {/* Address */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 text-amber-600 rounded-xl shadow-sm">
                <FmdGoodIcon className="text-amber-600"/>
              </div>

              <div>
                <h4 className="text-sm leading-none tracking-wider font-semibold text-slate-900 mb-1">
                  Visit Us
                </h4>
                <p className="text-base leading-6 font-semibold text-amber-800">
                  450 Innovation Way, Suite 300 <br />
                  San Francisco, CA 94103
                </p>
              </div>
            </div>


            </div>
          </div>

           {/* Right Column: Message Form */}
            <div className="order-1 md:order-2">
              <div className="bg-white p-8 md:p-10 rounded-lg shadow-[0_4px_6px_-1px_rgba(55,65,81,0.05)] border border-[#DBC2B0]/10">
                <h3 className="text-3xl leading-tight font-semibold text-slate-900 mb-8">
              Message Us
            </h3>
               <form id="contact-form" className="space-y-4">
                {/* Name */}
              <div className="space-y-2">
                <label className="text-sm leading-none tracking-wider font-semibold text-amber-800">
                  FULL NAME
                </label>

                <input
                  type="text"
                  className="w-full px-4 py-3 rounded border border-stone-300 bg-slate-50 focus:outline-none focus:border-amber-800 focus:ring-2 focus:ring-amber-800/20 transition-all"
                />
              </div>
               {/* Email */}
              <div className="space-y-2">
                <label className="text-sm leading-none tracking-wider font-semibold text-amber-800">
                  EMAIL ADDRESS
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded border border-stone-300 bg-slate-50 focus:outline-none focus:border-amber-800 focus:ring-2 focus:ring-amber-800/20 transition-all"
                />
              </div>

               {/* Message */}
              <div className="space-y-2">
                <label className="text-sm leading-none tracking-wider font-semibold text-amber-800">
                  YOUR MESSAGE
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  placeholder="Tell us about your project goals..."
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 bg-slate-50 focus:outline-none focus:border-amber-800 focus:ring-2 focus:ring-amber-800/20 transition-all"
                />
              </div>
             {/* Button */}
              <button
                className="w-full bg-amber-100 px-3 py-2 mt-3 text-amber-800 font-bold rounded-full hover:bg-amber-300"
              >
                SEND MESSAGE
              </button>

               </form>
              </div> 
            </div>
        </div>
      </section>
    </div>
  )
}
export default ContactUs
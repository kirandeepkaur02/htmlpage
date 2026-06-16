import React from 'react'
import Futuristic from '../assets/futuristic.png'
import SearchIcon from '@mui/icons-material/Search';
import ShareIcon from '@mui/icons-material/Share';
import CampaignIcon from '@mui/icons-material/Campaign';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LanguageIcon from '@mui/icons-material/Language';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import ArchitectureIcon from '@mui/icons-material/Architecture';



const Service = () => {
  return (
    <div classNameName=' text-slate-900 pt-10 pb-40 overflow-hidden relative'>
      <div className="mx-auto max-w-7xl px-10">
        {/* <!-- Header Group --> */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          {/* <!--left side--> */}
          <div className="flex-1 text-center md:text-left">
            <span
              className="inline-block bg-amber-600/10 px-3 py-2  rounded-full border border-amber-600/20 text-amber-600 uppercase mb-6 text-xs font-semibold tracking-widest">Our
              Services</span>
            <h1 className="text-4xl sm:text-5xl  max-w-2xl lg:text-6xl font-extrabold leading-[1.1] mb-8 text-slate-900">
              Digital Solutions That Launch Your Business <span className="text-amber-600">Beyond Limits</span> </h1>
            <p className="text-lg max-w-2xl  mx-auto text-slate-600 font-normal md:mx-0"> AeroSphere navigates the vast
              complexities of the digital frontier. We engineer growth through
              cosmic-grade strategies in online presence and high-velocity customer acquisition.</p>
          </div>
                {/* <!-- Floating Rocket Visual --> */}
                <div className="flex-1 flex justify-center items-center relative py-12">
               <div className="absolute w-100 h-100 bg-amber-600/10 rounded-full blur-[120px] -z-10"></div>
               <img src={Futuristic}
                  className="w-full max-w-md animate-float drop-shadow-[0_20px_50px_rgba(217,119,7,0.2)]" />
            </div>
         </div> 

          {/* <!-- Services Grid --> */}
         <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-8">
           {/* Card 1: SEO */}
  <div className="p-10 glass-card rounded-3xl hover:-translate-y-3">
    <div className="w-14 h-14 rounded-full bg-amber-600 flex items-center justify-center mb-6 shadow-lg shadow-amber-600/30">
     <SearchIcon className="text-white" />
    </div>
    <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-slate-900">
      SEO
    </h3>
    <p className="text-xs mb-8 font-semibold">
      Optimizing your digital orbit to ensure your brand remains at the center
      of the search galaxy.
    </p>
  </div>

  {/* Card 2: Social Media */}
  <div className="p-10 glass-card rounded-3xl hover:-translate-y-3">
    <div className="w-14 h-14 rounded-full bg-amber-600 flex items-center justify-center mb-6 shadow-lg shadow-amber-600/30">
      <ShareIcon className="text-white" />
    </div>
    <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-slate-900">
      Social Media
    </h3>
    <p className="text-xs mb-8 font-semibold">
      Broadcasting your brand's frequency across every social constellation for
      maximum impact.
    </p>
  </div>

  {/* Card 3: PPC */}
  <div className="p-10 glass-card rounded-3xl hover:-translate-y-3">
    <div className="w-14 h-14 rounded-full bg-amber-600 flex items-center justify-center mb-6 shadow-lg shadow-amber-600/30">
      <CampaignIcon className="text-white" />
    </div>
    <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-slate-900">
      PPC
    </h3>
    <p className="text-xs mb-8 font-semibold">
      Precision-targeted ad campaigns designed for hyper-speed ROI and business
      scaling.
    </p>
  </div>

  {/* Card 4: Content */}
  <div className="p-10 glass-card rounded-3xl hover:-translate-y-3">
    <div className="w-14 h-14 rounded-full bg-amber-600 flex items-center justify-center mb-6 shadow-lg shadow-amber-600/30">
      <ContentPasteIcon className="text-white" />
    </div>
    <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-slate-900">
      Content
    </h3>
    <p className="text-xs mb-8 font-semibold">
      Crafting compelling narratives that capture attention across the digital
      vacuum.
    </p>
  </div>

  {/* Card 5: Email */}
  <div className="p-10 glass-card rounded-3xl hover:-translate-y-3">
    <div className="w-14 h-14 rounded-full bg-amber-600 flex items-center justify-center mb-6 shadow-lg shadow-amber-600/30">
      <AlternateEmailIcon className="text-white" />
    </div>
    <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-slate-900">
      Email
    </h3>
    <p className="text-xs mb-8 font-semibold">
      Direct transmission channels to your audience, building loyalty at the
      speed of light.
    </p>
  </div>

  {/* Card 6: Web Dev */}
  <div className="p-10 glass-card rounded-3xl hover:-translate-y-3">
    <div className="w-14 h-14 rounded-full bg-amber-600 flex items-center justify-center mb-6 shadow-lg shadow-amber-600/30">
      <LanguageIcon className="text-white" />
    </div>
    <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-slate-900">
      Web Dev
    </h3>
    <p className="text-xs mb-8 font-semibold">
      Engineering high-performance digital stations that serve as your brand's
      flagship.
    </p>
  </div>

  {/* Card 7: Strategy */}
  <div className="p-10 glass-card rounded-3xl hover:-translate-y-3">
    <div className="w-14 h-14 rounded-full bg-amber-600 flex items-center justify-center mb-6 shadow-lg shadow-amber-600/30">
      <ArchitectureIcon className="text-white" />
    </div>
    <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-slate-900">
      Strategy
    </h3>
    <p className="text-xs mb-8 font-semibold">
      The blueprints for cosmic dominance, aligning your identity with your
      mission goals.
    </p>
  </div>

  {/* Card 8: Analytics */}
  <div className="p-10 glass-card rounded-3xl hover:-translate-y-3">
    <div className="w-14 h-14 rounded-full bg-amber-600 flex items-center justify-center mb-6 shadow-lg shadow-amber-600/30">
      <QueryStatsIcon className="text-white" />
    </div>
    <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-slate-900">
      Analytics
    </h3>
    <p className="text-xs mb-8 font-semibold">
      Deep-space data monitoring to optimize trajectories and ensure mission
      success.
    </p>
  </div>

          </div>  
        </div>
      </div>
   
  )
}
export default Service
import React from 'react'
import social_comunacation from "../assets/social-communication.png";

const Header = () => {
  return (
<div className="flex flex-wrap items-center justify-between gap-6 md:gap-10 mt-12">
    <div className="max-w-[550px] text-center md:text-left">
      <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[72px] font-semibold leading-tight">
        Smart Web <br /> Design Agency
      </h1>
      <p className="text-gray-600 mt-4 text-lg leading-relaxed">
        We will provide the best web design and business development
        services with client expectations and satisfaction guaranteed.
      </p>
      <button className="w-[219px] bg-[#F35F2F] text-white py-3 rounded-md hover:bg-[#d94d24] transition mt-6">
        Free Consultation
      </button>
    </div>
    <div className="flex-1 flex justify-center">
      <img
        src={social_comunacation}
        alt="Social Communication"
        className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-[600px] lg:h-[418px] object-contain lg:scale-90 lg:ml-10 mx-auto"
      />
    </div>
</div>
  )
}

export default Header
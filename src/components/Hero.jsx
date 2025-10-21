import React from 'react';

const Hero = () => {
  return (
    <section className="bg-[#F5F7FA]">
      <div className="mx-4 md:mx-8 lg:mx-28">
        <div className="w-full flex flex-col lg:flex-row">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
            <h1 className="font-inter font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-tight sm:leading-15 lg:leading-19 text-[#4D4D4D] mt-8 lg:mt-0">
              Lessons and insights
              <span className="block text-[#4CAF4F]">from 8 years</span>
            </h1>
            <p className="text-[#717171] font-inter font-normal text-base leading-6 mt-4 mb-8 max-w-2xl mx-auto lg:mx-0">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="px-6 sm:px-8 py-3 sm:py-3.5 bg-[#4CAF4F] text-white font-inter font-medium text-sm sm:text-base leading-6 rounded-lg hover:bg-[#45a049] transition-colors">
                Register
              </button>
            </div>
          </div>
          
          {/* Image */}
          <div className="w-full lg:w-1/2 flex items-center justify-center py-8 lg:py-24 order-1 lg:order-2">
            <div className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[391px] h-full max-h-[300px] sm:max-h-[350px] md:max-h-[407px]">
              <img
                src="/images/hero.png"
                alt="img"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

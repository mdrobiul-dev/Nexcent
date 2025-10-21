import React from 'react';

const Hero = () => {
  return (
    <section className="bg-[#F5F7FA]">
      <div className="mx-28">
        <div className="w-full flex">
          <div className="w-1/2 flex flex-col justify-center">
            <h1 className="font-inter font-semibold text-[64px] leading-19 text-[#4D4D4D]">
              Lessons and insights
              <span className="block text-[#4CAF4F]">from 8 years</span>
            </h1>
            <p className="text-[#717171] font-inter font-normal text-base leading-6 mt-4 mb-8">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <div>
                <button className="px-8 py-3.5 bg-[#4CAF4F] text-white font-inter font-medium text-base leading-6">
              Register
            </button>
            </div>
          </div>
          <div className="w-1/2 flex items-center justify-center py-24">
            <div className="w-full max-w-[391px] h-full max-h-[407px]">
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

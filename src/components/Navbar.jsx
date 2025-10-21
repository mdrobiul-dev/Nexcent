import React from 'react';

const Navbar = () => {
  return (
    <section className="bg-[#F5F7FA]">
      <nav>
        <div className="mx-28 py-7.5 flex justify-between">
          <div className="w-fit h-fit">
            <img
              src="/images/Logo.png"
              alt="logo"
              className="w-full h-full object-cover"
            />
          </div>
          <ul className="flex gap-12">
            <li>
              <a
                href="#"
                className="font-inter font-normal text-base leading-6 text-[#18191F]"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-inter font-normal text-base leading-6 text-[#18191F]"
              >
                Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-inter font-normal text-base leading-6 text-[#18191F]"
              >
                Feature
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-inter font-normal text-base leading-6 text-[#18191F]"
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-inter font-normal text-base leading-6 text-[#18191F]"
              >
                Testimonial
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-inter font-normal text-base leading-6 text-[#18191F]"
              >
                FAQ
              </a>
            </li>
          </ul>

          <div>
            <button className="px-5 py-2.5 text-[#4CAF4F] font-inter font-medium text-sm leading-5">
              Login
            </button>
            <button className="px-5 py-2.5 bg-[#4CAF4F] text-white rounded-lg font-inter font-medium text-sm leading-5">
              Sign up
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;

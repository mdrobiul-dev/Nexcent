import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="bg-[#F5F7FA]">
      <nav>
        <div className="mx-4 md:mx-28 py-7.5 flex justify-between items-center">
          {/* Logo */}
          <div className="w-fit h-fit">
            <img
              src="/images/Logo.png"
              alt="logo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex gap-12">
            <li>
              <a
                href="#"
                className="font-inter font-normal text-base leading-6 text-[#18191F] hover:text-[#4CAF4F] transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-inter font-normal text-base leading-6 text-[#18191F] hover:text-[#4CAF4F] transition-colors"
              >
                Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-inter font-normal text-base leading-6 text-[#18191F] hover:text-[#4CAF4F] transition-colors"
              >
                Feature
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-inter font-normal text-base leading-6 text-[#18191F] hover:text-[#4CAF4F] transition-colors"
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-inter font-normal text-base leading-6 text-[#18191F] hover:text-[#4CAF4F] transition-colors"
              >
                Testimonial
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-inter font-normal text-base leading-6 text-[#18191F] hover:text-[#4CAF4F] transition-colors"
              >
                FAQ
              </a>
            </li>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex">
            <button className="px-5 py-2.5 text-[#4CAF4F] font-inter font-medium text-sm leading-5 hover:text-[#45a049] transition-colors">
              Login
            </button>
            <button className="px-5 py-2.5 bg-[#4CAF4F] text-white rounded-lg font-inter font-medium text-sm leading-5 hover:bg-[#45a049] transition-colors">
              Sign up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-6 h-6 relative"
            onClick={toggleMenu}
          >
            <span
              className={`bg-[#18191F] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
              }`}
            ></span>
            <span
              className={`bg-[#18191F] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`bg-[#18191F] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-[#F5F7FA] transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="px-4 pb-6">
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="#"
                  className="font-inter font-normal text-base leading-6 text-[#18191F] hover:text-[#4CAF4F] transition-colors block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-inter font-normal text-base leading-6 text-[#18191F] hover:text-[#4CAF4F] transition-colors block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-inter font-normal text-base leading-6 text-[#18191F] hover:text-[#4CAF4F] transition-colors block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Feature
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-inter font-normal text-base leading-6 text-[#18191F] hover:text-[#4CAF4F] transition-colors block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-inter font-normal text-base leading-6 text-[#18191F] hover:text-[#4CAF4F] transition-colors block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Testimonial
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-inter font-normal text-base leading-6 text-[#18191F] hover:text-[#4CAF4F] transition-colors block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </a>
              </li>
            </ul>
            <div className="flex flex-col gap-3 mt-4">
              <button className="px-5 py-2.5 text-[#4CAF4F] font-inter font-medium text-sm leading-5 hover:text-[#45a049] transition-colors text-center border border-[#4CAF4F] rounded-lg">
                Login
              </button>
              <button className="px-5 py-2.5 bg-[#4CAF4F] text-white rounded-lg font-inter font-medium text-sm leading-5 hover:bg-[#45a049] transition-colors text-center">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
